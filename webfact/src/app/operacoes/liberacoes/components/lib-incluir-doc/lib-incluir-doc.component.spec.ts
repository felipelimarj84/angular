import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibIncluirDocComponent } from './lib-incluir-doc.component';

describe('LibIncluirDocComponent', () => {
  let component: LibIncluirDocComponent;
  let fixture: ComponentFixture<LibIncluirDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibIncluirDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibIncluirDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
