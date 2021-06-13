import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WfMenuLateralComponent } from './wf-menu-lateral.component';

describe('WfMenuLateralComponent', () => {
	let component: WfMenuLateralComponent;
	let fixture: ComponentFixture<WfMenuLateralComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [WfMenuLateralComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WfMenuLateralComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
