import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WfMenuNotificationComponent } from './wf-menu-notification.component';

describe('WfMenuNotificationComponent', () => {
	let component: WfMenuNotificationComponent;
	let fixture: ComponentFixture<WfMenuNotificationComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [WfMenuNotificationComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WfMenuNotificationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
