import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosRetiradaNiComponent } from './filtros-retirada-ni.component';

describe('FiltrosRetiradaNiComponent', () => {
  let component: FiltrosRetiradaNiComponent;
  let fixture: ComponentFixture<FiltrosRetiradaNiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrosRetiradaNiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrosRetiradaNiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
