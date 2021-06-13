import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciboRegressoComponent } from './recibo-regresso.component';

describe('ReciboRegressoComponent', () => {
  let component: ReciboRegressoComponent;
  let fixture: ComponentFixture<ReciboRegressoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReciboRegressoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciboRegressoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
