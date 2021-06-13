import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarProrrogarNiComponent } from './filtrar-prorrogar-ni.component';

describe('FiltrarProrrogarNiComponent', () => {
  let component: FiltrarProrrogarNiComponent;
  let fixture: ComponentFixture<FiltrarProrrogarNiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrarProrrogarNiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrarProrrogarNiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
