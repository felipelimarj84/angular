import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtestarNiComponent } from './protestar-ni.component';

describe('ProtestarNiComponent', () => {
  let component: ProtestarNiComponent;
  let fixture: ComponentFixture<ProtestarNiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtestarNiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtestarNiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
