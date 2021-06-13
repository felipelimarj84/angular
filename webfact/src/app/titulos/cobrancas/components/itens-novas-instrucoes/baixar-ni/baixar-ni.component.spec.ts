import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaixarNiComponent } from './baixar-ni.component';

describe('BaixarNiComponent', () => {
  let component: BaixarNiComponent;
  let fixture: ComponentFixture<BaixarNiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaixarNiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaixarNiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
