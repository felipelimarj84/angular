import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosSustarNiComponent } from './filtros-sustar-ni.component';

describe('FiltrosSustarNiComponent', () => {
  let component: FiltrosSustarNiComponent;
  let fixture: ComponentFixture<FiltrosSustarNiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrosSustarNiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrosSustarNiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
