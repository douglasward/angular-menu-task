import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {SharedModule} from '../shared/shared.module';
import {MobileMenuTriggerDirective} from './directives/mobile-menu-trigger.directive';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MobileMenuTriggerDirective],
  exports: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PageModule {
}
