import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaPromissoriaComponent } from './nota-promissoria.component';

describe('NotaPromissoriaComponent', () => {
  let component: NotaPromissoriaComponent;
  let fixture: ComponentFixture<NotaPromissoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotaPromissoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaPromissoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
