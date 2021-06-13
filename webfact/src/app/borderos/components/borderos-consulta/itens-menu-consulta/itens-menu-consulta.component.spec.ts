import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensMenuConsultaComponent } from './itens-menu-consulta.component';

describe('ItensMenuConsultaComponent', () => {
  let component: ItensMenuConsultaComponent;
  let fixture: ComponentFixture<ItensMenuConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItensMenuConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItensMenuConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
