import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaSacadoComponent } from './carta-sacado.component';

describe('CartaSacadoComponent', () => {
  let component: CartaSacadoComponent;
  let fixture: ComponentFixture<CartaSacadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaSacadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaSacadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
