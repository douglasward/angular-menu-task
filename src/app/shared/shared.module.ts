import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { HamburgerIconComponent } from './components/hamburger-icon/hamburger-icon.component';

@NgModule({
    declarations: [HamburgerIconComponent],
    exports: [
        HamburgerIconComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
    ]
})
export class SharedModule {
}
