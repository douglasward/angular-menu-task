import {Component} from '@angular/core';
import {ConfigService} from '../../../shared/services/config.service';
import {Observable} from 'rxjs';
import {MenuItem} from '../../../shared/model/config';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menuItems$: Observable<MenuItem[]>;

  constructor(configService: ConfigService) {
    this.menuItems$ = configService.menuItems$;
  }
}
