import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibIncluirChequeComponent } from './lib-incluir-cheque.component';

describe('LibIncluirChequeComponent', () => {
  let component: LibIncluirChequeComponent;
  let fixture: ComponentFixture<LibIncluirChequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibIncluirChequeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibIncluirChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
