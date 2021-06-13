import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePagamentosComponent } from './home-pagamentos.component';

describe('HomePagamentosComponent', () => {
  let component: HomePagamentosComponent;
  let fixture: ComponentFixture<HomePagamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePagamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePagamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
