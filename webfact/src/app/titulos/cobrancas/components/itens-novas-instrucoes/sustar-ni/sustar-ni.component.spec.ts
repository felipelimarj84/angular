import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SustarNiComponent } from './sustar-ni.component';

describe('SustarNiComponent', () => {
  let component: SustarNiComponent;
  let fixture: ComponentFixture<SustarNiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SustarNiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SustarNiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
