import { TestBed } from '@angular/core/testing';

import { TitulosServiceService } from './titulos-service.service';

describe('TitulosServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TitulosServiceService = TestBed.get(TitulosServiceService);
    expect(service).toBeTruthy();
  });
});
