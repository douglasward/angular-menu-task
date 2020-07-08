import {MobileMenuTriggerDirective} from './mobile-menu-trigger.directive';
import {ApplicationStateService} from '../../shared/services/application-state.service';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

@Component({
  template: '<span appMobileMenuTrigger></span>'
})
class DummySpanComponent {
}

describe('MenuTriggerDirective', () => {
  let spanComponentFixture: ComponentFixture<DummySpanComponent>;
  let spanElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileMenuTriggerDirective, DummySpanComponent]
    });

    spanComponentFixture = TestBed.createComponent(DummySpanComponent);
    spanElement = spanComponentFixture.debugElement.query(By.css('span'));
  });

  it('should create an instance', () => {
    const directive = new MobileMenuTriggerDirective(new ApplicationStateService());
    expect(directive).toBeTruthy();
  });

  it('should change mobile menu open state in app state after click', () => {
    const appState = TestBed.inject(ApplicationStateService);

    expect(appState.mobileMenuOpen$.getValue()).toBe(false);

    spanElement.triggerEventHandler('click', null);
    spanComponentFixture.detectChanges();

    expect(appState.mobileMenuOpen$.getValue()).toBe(true);
  });
});
