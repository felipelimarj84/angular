import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaPropostaComponent } from './nova-proposta.component';

describe('NovaPropostaComponent', () => {
  let component: NovaPropostaComponent;
  let fixture: ComponentFixture<NovaPropostaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaPropostaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaPropostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
