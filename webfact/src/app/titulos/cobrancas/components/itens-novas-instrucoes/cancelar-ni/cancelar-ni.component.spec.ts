import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelarNiComponent } from './cancelar-ni.component';

describe('CancelarNiComponent', () => {
  let component: CancelarNiComponent;
  let fixture: ComponentFixture<CancelarNiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelarNiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelarNiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
