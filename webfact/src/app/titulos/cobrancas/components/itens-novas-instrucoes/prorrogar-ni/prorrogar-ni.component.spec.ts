import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProrrogarNiComponent } from './prorrogar-ni.component';

describe('ProrrogarNiComponent', () => {
  let component: ProrrogarNiComponent;
  let fixture: ComponentFixture<ProrrogarNiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProrrogarNiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProrrogarNiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
