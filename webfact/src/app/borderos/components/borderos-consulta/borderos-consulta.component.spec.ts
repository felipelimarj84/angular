import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderosConsultaComponent } from './borderos-consulta.component';

describe('BorderosConsultaComponent', () => {
  let component: BorderosConsultaComponent;
  let fixture: ComponentFixture<BorderosConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorderosConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderosConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
