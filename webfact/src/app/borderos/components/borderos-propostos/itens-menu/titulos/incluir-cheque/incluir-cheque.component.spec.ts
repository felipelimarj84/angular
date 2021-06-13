import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirChequeComponent } from './incluir-cheque.component';

describe('IncluirChequeComponent', () => {
  let component: IncluirChequeComponent;
  let fixture: ComponentFixture<IncluirChequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncluirChequeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirChequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
