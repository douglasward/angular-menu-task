import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'app-hamburger-icon',
  templateUrl: './hamburger-icon.component.html',
  styleUrls: ['./hamburger-icon.component.scss']
})
export class HamburgerIconComponent {
  @HostBinding('style.--layer-width')
  @Input()
  layerWidth = '30px';

  @HostBinding('style.--layer-height')
  @Input()
  layerHeight = '4px';

  @HostBinding('style.--layer-spacing')
  @Input()
  layerSpacing = '6px';

  @HostBinding('style.--layer-border-radius')
  @Input()
  layerBorderRadius = '4px';

  @HostBinding('class.active')
  @Input()
  active = false;
}
