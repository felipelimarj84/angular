import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirDocComponent } from './incluir-doc.component';

describe('IncluirDocComponent', () => {
  let component: IncluirDocComponent;
  let fixture: ComponentFixture<IncluirDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncluirDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
