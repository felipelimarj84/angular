import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetiradaNiComponent } from './retirada-ni.component';

describe('RetiradaNiComponent', () => {
  let component: RetiradaNiComponent;
  let fixture: ComponentFixture<RetiradaNiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetiradaNiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetiradaNiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
