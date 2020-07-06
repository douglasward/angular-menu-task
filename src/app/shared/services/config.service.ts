import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AppConfig, MenuItem} from '../model/config';
import {catchError, map, shareReplay} from 'rxjs/operators';
import {LoadConfigError} from '../model/errors';

const CONFIG_SERVICE_ENDPOINT = '/assets/config.json';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private appConfig$: Observable<AppConfig>;

  constructor(httpClient: HttpClient) {
    this.appConfig$ = httpClient.get<AppConfig>(CONFIG_SERVICE_ENDPOINT).pipe(
      catchError((response: HttpErrorResponse) => {
        return throwError(new LoadConfigError(response.message));
      }),
      shareReplay(1)
    );
  }

  get menuItems$(): Observable<MenuItem[]> {
    return this.appConfig$.pipe(
      map(appConfig => appConfig.menuItems ?? [])
    );
  }
}
