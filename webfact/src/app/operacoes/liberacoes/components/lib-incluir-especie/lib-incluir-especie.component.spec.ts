import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibIncluirEspecieComponent } from './lib-incluir-especie.component';

describe('LibIncluirEspecieComponent', () => {
  let component: LibIncluirEspecieComponent;
  let fixture: ComponentFixture<LibIncluirEspecieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibIncluirEspecieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibIncluirEspecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
