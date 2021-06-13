import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContratosComponent } from './home-contratos.component';

describe('HomeContratosComponent', () => {
  let component: HomeContratosComponent;
  let fixture: ComponentFixture<HomeContratosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeContratosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeContratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
