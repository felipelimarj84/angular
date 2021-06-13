import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarConsultasComponent } from './filtrar-consultas.component';

describe('FiltrarConsultasComponent', () => {
  let component: FiltrarConsultasComponent;
  let fixture: ComponentFixture<FiltrarConsultasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrarConsultasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrarConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
