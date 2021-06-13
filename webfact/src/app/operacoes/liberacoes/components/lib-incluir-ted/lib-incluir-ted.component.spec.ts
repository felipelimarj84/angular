import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibIncluirTedComponent } from './lib-incluir-ted.component';

describe('LibIncluirTedComponent', () => {
  let component: LibIncluirTedComponent;
  let fixture: ComponentFixture<LibIncluirTedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibIncluirTedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibIncluirTedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
