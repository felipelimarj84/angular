import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosCancelarNiComponent } from './filtros-cancelar-ni.component';

describe('FiltrosCancelarNiComponent', () => {
  let component: FiltrosCancelarNiComponent;
  let fixture: ComponentFixture<FiltrosCancelarNiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrosCancelarNiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrosCancelarNiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
