import { TestBed } from '@angular/core/testing';

import { ConnectingserviceService } from './connectingservice.service';

describe('ConnectingserviceService', () => {
  let service: ConnectingserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectingserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
