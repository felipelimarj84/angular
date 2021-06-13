import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosAntecipacaoNiComponent } from './filtros-antecipacao-ni.component';

describe('FiltrosAntecipacaoNiComponent', () => {
  let component: FiltrosAntecipacaoNiComponent;
  let fixture: ComponentFixture<FiltrosAntecipacaoNiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrosAntecipacaoNiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrosAntecipacaoNiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
