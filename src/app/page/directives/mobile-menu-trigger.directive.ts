import {Directive, HostListener} from '@angular/core';
import {ApplicationStateService} from '../../shared/services/application-state.service';

@Directive({
  selector: '[appMobileMenuTrigger]'
})
export class MobileMenuTriggerDirective {
  constructor(private applicationState: ApplicationStateService) {
  }

  @HostListener('click')
  handleClick(): void {
    // just toggle the open state
    const newMobileMenuIsOpenState = !this.applicationState.mobileMenuOpen$.getValue();

    // and update application state
    this.applicationState.mobileMenuOpen$.next(newMobileMenuIsOpenState);
  }
}
