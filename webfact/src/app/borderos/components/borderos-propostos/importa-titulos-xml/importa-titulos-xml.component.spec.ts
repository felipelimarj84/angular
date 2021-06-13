import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportaTitulosXmlComponent } from './importa-titulos-xml.component';

describe('ImportaTitulosXmlComponent', () => {
  let component: ImportaTitulosXmlComponent;
  let fixture: ComponentFixture<ImportaTitulosXmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportaTitulosXmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportaTitulosXmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
