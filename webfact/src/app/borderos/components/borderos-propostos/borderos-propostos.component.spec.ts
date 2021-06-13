import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderosPropostosComponent } from './borderos-propostos.component';

describe('BorderosPropostosComponent', () => {
  let component: BorderosPropostosComponent;
  let fixture: ComponentFixture<BorderosPropostosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorderosPropostosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderosPropostosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
