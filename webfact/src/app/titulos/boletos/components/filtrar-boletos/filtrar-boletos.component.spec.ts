import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarBoletosComponent } from './filtrar-boletos.component';

describe('FiltrarBoletosComponent', () => {
  let component: FiltrarBoletosComponent;
  let fixture: ComponentFixture<FiltrarBoletosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrarBoletosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrarBoletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
