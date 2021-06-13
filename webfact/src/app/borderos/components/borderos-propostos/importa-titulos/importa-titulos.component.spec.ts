import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportaTitulosComponent } from './importa-titulos.component';

describe('ImportaTitulosComponent', () => {
  let component: ImportaTitulosComponent;
  let fixture: ComponentFixture<ImportaTitulosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportaTitulosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportaTitulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
