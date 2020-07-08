import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApplicationStateService} from './shared/services/application-state.service';
import {fromEvent, Observable, Subscription} from 'rxjs';
import {filter, tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private escKeySubscription: Subscription | undefined;

  constructor(private applicationStateService: ApplicationStateService) {
    this.mobileMenuOpenState$ = applicationStateService.mobileMenuOpen$.asObservable();
  }

  mobileMenuOpenState$: Observable<boolean>;

  ngOnInit(): void {
    // close mobile menu when ESC is pressed and mobile menu is open
    this.escKeySubscription = fromEvent<KeyboardEvent>(window, 'keydown').pipe(
      filter(evt => evt.key === 'Escape' && this.applicationStateService.mobileMenuOpen$.getValue() === true),
    ).subscribe(() => this.applicationStateService.mobileMenuOpen$.next(false));
  }

  ngOnDestroy(): void {
    this.escKeySubscription?.unsubscribe();
  }
}
