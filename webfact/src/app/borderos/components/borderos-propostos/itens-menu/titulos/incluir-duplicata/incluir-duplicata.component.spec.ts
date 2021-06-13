import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirDuplicataComponent } from './incluir-duplicata.component';

describe('IncluirDuplicataComponent', () => {
  let component: IncluirDuplicataComponent;
  let fixture: ComponentFixture<IncluirDuplicataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncluirDuplicataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirDuplicataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
