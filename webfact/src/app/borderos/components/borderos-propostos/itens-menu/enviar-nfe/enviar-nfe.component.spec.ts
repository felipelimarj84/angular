import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarNfeComponent } from './enviar-nfe.component';

describe('EnviarNfeComponent', () => {
  let component: EnviarNfeComponent;
  let fixture: ComponentFixture<EnviarNfeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviarNfeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarNfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
