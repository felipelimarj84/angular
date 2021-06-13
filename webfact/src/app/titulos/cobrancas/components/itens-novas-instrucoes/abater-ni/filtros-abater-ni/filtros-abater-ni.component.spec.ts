import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosAbaterNiComponent } from './filtros-abater-ni.component';

describe('FiltrosAbaterNiComponent', () => {
  let component: FiltrosAbaterNiComponent;
  let fixture: ComponentFixture<FiltrosAbaterNiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrosAbaterNiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrosAbaterNiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
