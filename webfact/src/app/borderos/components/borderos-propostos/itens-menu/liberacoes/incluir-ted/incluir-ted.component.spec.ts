import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirTedComponent } from './incluir-ted.component';

describe('IncluirTedComponent', () => {
  let component: IncluirTedComponent;
  let fixture: ComponentFixture<IncluirTedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncluirTedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirTedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
