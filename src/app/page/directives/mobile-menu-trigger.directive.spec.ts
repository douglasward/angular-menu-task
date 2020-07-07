import { MobileMenuTriggerDirective } from './mobile-menu-trigger.directive';
import {ApplicationStateService} from '../../shared/services/application-state.service';

describe('MenuTriggerDirective', () => {
  it('should create an instance', () => {
    const directive = new MobileMenuTriggerDirective(new ApplicationStateService());
    expect(directive).toBeTruthy();
  });
});
