import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLimiteCreditoComponent } from './card-limite-credito.component';

describe('CardLimiteCreditoComponent', () => {
  let component: CardLimiteCreditoComponent;
  let fixture: ComponentFixture<CardLimiteCreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardLimiteCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLimiteCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
