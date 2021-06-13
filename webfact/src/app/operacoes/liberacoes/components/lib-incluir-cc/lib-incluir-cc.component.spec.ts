import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibIncluirCcComponent } from './lib-incluir-cc.component';

describe('LibIncluirCcComponent', () => {
  let component: LibIncluirCcComponent;
  let fixture: ComponentFixture<LibIncluirCcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibIncluirCcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibIncluirCcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
