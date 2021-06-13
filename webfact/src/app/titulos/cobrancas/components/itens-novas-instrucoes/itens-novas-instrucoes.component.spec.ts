import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensNovasInstrucoesComponent } from './itens-novas-instrucoes.component';

describe('ItensNovasInstrucoesComponent', () => {
  let component: ItensNovasInstrucoesComponent;
  let fixture: ComponentFixture<ItensNovasInstrucoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItensNovasInstrucoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItensNovasInstrucoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
