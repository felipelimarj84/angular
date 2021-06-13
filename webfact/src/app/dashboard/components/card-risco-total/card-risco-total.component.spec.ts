import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRiscoTotalComponent } from './card-risco-total.component';

describe('CardRiscoTotalComponent', () => {
  let component: CardRiscoTotalComponent;
  let fixture: ComponentFixture<CardRiscoTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardRiscoTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRiscoTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
