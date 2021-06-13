import { TestBed } from '@angular/core/testing';

import { ServiceNotificacoesService } from './service-notificacoes.service';

describe('ServiceNotificacoesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceNotificacoesService = TestBed.get(ServiceNotificacoesService);
    expect(service).toBeTruthy();
  });
});
