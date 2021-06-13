import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratosPadraoComponent } from './contratos-padrao.component';

describe('ContratosPadraoComponent', () => {
  let component: ContratosPadraoComponent;
  let fixture: ComponentFixture<ContratosPadraoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratosPadraoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratosPadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
