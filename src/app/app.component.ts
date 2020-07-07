import {Component} from '@angular/core';
import {ApplicationStateService} from './shared/services/application-state.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  constructor(applicationStateService: ApplicationStateService) {
    this.mobileMenuOpenState$ = applicationStateService.mobileMenuOpen$.asObservable();
  }

  mobileMenuOpenState$: Observable<boolean>;
}
