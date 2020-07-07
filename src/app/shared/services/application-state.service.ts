import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

/**
 * This service is used as a super simple state container to hold some application state. NgRx Store or NGXS would
 * be more suiteable if the app has a bigger state to hold.
 */
@Injectable({
  providedIn: 'root'
})
export class ApplicationStateService {
  readonly mobileMenuOpen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}
