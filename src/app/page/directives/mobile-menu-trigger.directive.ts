import {Directive, HostBinding, HostListener} from '@angular/core';
import {ApplicationStateService} from '../../shared/services/application-state.service';

@Directive({
  selector: '[appMobileMenuTrigger]'
})
export class MobileMenuTriggerDirective {
  constructor(private applicationState: ApplicationStateService) {
  }

  @HostBinding('attr.aria-expanded')
  get ariaExpanded(): string {
    return String(this.applicationState.mobileMenuOpen$.getValue());
  }

  @HostBinding('attr.aria-label')
  get ariaLabel(): string {
    return 'Mobile Menu';
  }

  @HostListener('click')
  handleClick(): void {
    // just toggle the open state
    const newMobileMenuIsOpenState = !this.applicationState.mobileMenuOpen$.getValue();

    // and update application state
    this.applicationState.mobileMenuOpen$.next(newMobileMenuIsOpenState);
  }
}
