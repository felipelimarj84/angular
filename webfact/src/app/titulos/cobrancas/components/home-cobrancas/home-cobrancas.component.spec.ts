import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCobrancasComponent } from './home-cobrancas.component';

describe('HomeCobrancasComponent', () => {
  let component: HomeCobrancasComponent;
  let fixture: ComponentFixture<HomeCobrancasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCobrancasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCobrancasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
