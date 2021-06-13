import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntecipacaoNiComponent } from './antecipacao-ni.component';

describe('AntecipacaoNiComponent', () => {
  let component: AntecipacaoNiComponent;
  let fixture: ComponentFixture<AntecipacaoNiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntecipacaoNiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntecipacaoNiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
