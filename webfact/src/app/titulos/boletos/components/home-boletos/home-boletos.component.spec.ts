import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBoletosComponent } from './home-boletos.component';

describe('HomeBoletosComponent', () => {
  let component: HomeBoletosComponent;
  let fixture: ComponentFixture<HomeBoletosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBoletosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBoletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
