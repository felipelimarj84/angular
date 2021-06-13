import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirEspecieComponent } from './incluir-especie.component';

describe('IncluirEspecieComponent', () => {
  let component: IncluirEspecieComponent;
  let fixture: ComponentFixture<IncluirEspecieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncluirEspecieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirEspecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
