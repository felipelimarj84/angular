import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratosFidcComponent } from './contratos-fidc.component';

describe('ContratosFidcComponent', () => {
  let component: ContratosFidcComponent;
  let fixture: ComponentFixture<ContratosFidcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratosFidcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratosFidcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
