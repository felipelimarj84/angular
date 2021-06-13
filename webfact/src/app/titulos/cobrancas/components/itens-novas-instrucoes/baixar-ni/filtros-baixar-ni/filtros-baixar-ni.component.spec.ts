import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosBaixarNiComponent } from './filtros-baixar-ni.component';

describe('FiltrosBaixarNiComponent', () => {
  let component: FiltrosBaixarNiComponent;
  let fixture: ComponentFixture<FiltrosBaixarNiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrosBaixarNiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrosBaixarNiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
