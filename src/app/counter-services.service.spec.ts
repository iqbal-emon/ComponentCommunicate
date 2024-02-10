import { TestBed } from '@angular/core/testing';

import { CounterServicesService } from './counter-services.service';

describe('CounterServicesService', () => {
  let service: CounterServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
