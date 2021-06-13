import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiberacoesComponent } from './liberacoes.component';

describe('LiberacoesComponent', () => {
  let component: LiberacoesComponent;
  let fixture: ComponentFixture<LiberacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiberacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiberacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
