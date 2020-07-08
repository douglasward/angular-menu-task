import {TestBed} from '@angular/core/testing';

import {ConfigService} from './config.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

const EMPTY_CONFIG = {};
const DUMMY_CONFIG = {
  menuItems: [
    {
      name: 'Services',
      children: [
        {
          name: 'Events',
          path: '#events'
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
        }
      ]
    }
  ]
};

describe('ConfigService', () => {
  let service: ConfigService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ConfigService);
  });

  afterEach(() => httpTestingController.verify);

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#menuItems$ should return empty array if there are no menuItems in config.json', () => {
    service.menuItems$.subscribe(menuItems => expect(menuItems.length).toBe(0));

    const req = httpTestingController.expectOne('/assets/config.json');

    req.flush(EMPTY_CONFIG);
  });

  it('#menuItems$ should return all menuItems from config.json', () => {
    service.menuItems$.subscribe(menuItems => expect(menuItems.length).toBe(2));

    const req = httpTestingController.expectOne('/assets/config.json');

    req.flush(DUMMY_CONFIG);
  });

  it('multiple subscriptions to #menuItems$ should only create one single http request (rest is cached)', () => {
    service.menuItems$.subscribe();
    service.menuItems$.subscribe();
    service.menuItems$.subscribe();

    const req = httpTestingController.expectOne('/assets/config.json');

    req.flush(DUMMY_CONFIG);
  });
});
