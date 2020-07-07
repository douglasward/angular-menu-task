import {Component} from '@angular/core';
import {ApplicationStateService} from '../../../shared/services/application-state.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private applicationStateService: ApplicationStateService) {
    this.mobileMenuOpenState$ = applicationStateService.mobileMenuOpen$.asObservable();
  }

  mobileMenuOpenState$: Observable<boolean>;
}
