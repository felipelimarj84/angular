import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimeCartaSacadoComponent } from './imprime-carta-sacado.component';

describe('ImprimeCartaSacadoComponent', () => {
  let component: ImprimeCartaSacadoComponent;
  let fixture: ComponentFixture<ImprimeCartaSacadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimeCartaSacadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimeCartaSacadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
