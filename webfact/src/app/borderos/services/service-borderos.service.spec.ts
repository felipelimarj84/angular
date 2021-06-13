import { TestBed } from '@angular/core/testing';

import { ServiceBorderosService } from './service-borderos.service';

describe('ServiceBorderosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceBorderosService = TestBed.get(ServiceBorderosService);
    expect(service).toBeTruthy();
  });
});
