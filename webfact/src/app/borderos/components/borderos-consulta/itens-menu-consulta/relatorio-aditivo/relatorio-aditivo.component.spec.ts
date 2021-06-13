import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioAditivoComponent } from './relatorio-aditivo.component';

describe('RelatorioAditivoComponent', () => {
  let component: RelatorioAditivoComponent;
  let fixture: ComponentFixture<RelatorioAditivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatorioAditivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioAditivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
