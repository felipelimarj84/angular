import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimeDuplicatasComponent } from './imprime-duplicatas.component';

describe('ImprimeDuplicatasComponent', () => {
  let component: ImprimeDuplicatasComponent;
  let fixture: ComponentFixture<ImprimeDuplicatasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimeDuplicatasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimeDuplicatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
