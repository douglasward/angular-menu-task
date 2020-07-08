import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MenuComponent} from './menu.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {ConfigService} from '../../../shared/services/config.service';
import {Observable, of} from 'rxjs';
import {MenuItem} from '../../../shared/model/config';

const DUMMY_MENU_ITEMS = [
  {
    name: 'Services',
    children: [
      {
        name: 'Events',
        path: '#events'
      },
      {
        name: 'Event templates',
        path: '#event-temlates'
      }
    ]
  },
  {
    name: 'Settings',
    children: [
      {
        name: 'Prices',
        path: '#prices'
      },
      {
        name: 'Tags',
        path: '#tags'
      },
      {
        name: 'Resources',
        children: [
          {
            name: 'Agents',
            path: '#agents'
          },
          {
            name: 'Materials',
            path: '#materials'
          }
        ]
      }
    ]
  }
];

const configServiceStub = {
  get menuItems$(): Observable<MenuItem[]> {
    return of(DUMMY_MENU_ITEMS);
  }
};

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let menuElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: ConfigService, useValue: configServiceStub
      }],
      imports: [HttpClientTestingModule],
      declarations: [MenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    menuElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display all menu entries from the config file', () => {
    expect(menuElement.queryAll(By.css('.menu-item')).length).toBe(9);
  });

  it('should display all menu items with have a `path` property', () => {
    expect(menuElement.queryAll(By.css('.menu-item__link')).length).toBe(6);
  });
});
