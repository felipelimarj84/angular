import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeConsultasComponent } from './home-consultas.component';

describe('HomeConsultasComponent', () => {
  let component: HomeConsultasComponent;
  let fixture: ComponentFixture<HomeConsultasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeConsultasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
