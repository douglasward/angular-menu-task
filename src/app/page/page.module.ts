import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {SharedModule} from '../shared/shared.module';
import {MobileMenuTriggerDirective} from './directives/mobile-menu-trigger.directive';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MobileMenuTriggerDirective, MenuComponent],
  exports: [
    FooterComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PageModule {
}
