import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosProtestarNiComponent } from './filtros-protestar-ni.component';

describe('FiltrosProtestarNiComponent', () => {
  let component: FiltrosProtestarNiComponent;
  let fixture: ComponentFixture<FiltrosProtestarNiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrosProtestarNiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrosProtestarNiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
