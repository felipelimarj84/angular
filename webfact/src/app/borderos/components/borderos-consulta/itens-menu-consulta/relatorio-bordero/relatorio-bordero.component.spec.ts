import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioBorderoComponent } from './relatorio-bordero.component';

describe('RelatorioBorderoComponent', () => {
  let component: RelatorioBorderoComponent;
  let fixture: ComponentFixture<RelatorioBorderoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatorioBorderoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioBorderoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
