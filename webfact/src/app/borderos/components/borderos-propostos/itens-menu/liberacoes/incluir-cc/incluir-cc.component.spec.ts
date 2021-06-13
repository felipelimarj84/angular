import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirCcComponent } from './incluir-cc.component';

describe('IncluirCcComponent', () => {
  let component: IncluirCcComponent;
  let fixture: ComponentFixture<IncluirCcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncluirCcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirCcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
