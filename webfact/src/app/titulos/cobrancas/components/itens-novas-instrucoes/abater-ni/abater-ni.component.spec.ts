import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaterNiComponent } from './abater-ni.component';

describe('AbaterNiComponent', () => {
  let component: AbaterNiComponent;
  let fixture: ComponentFixture<AbaterNiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbaterNiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbaterNiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
