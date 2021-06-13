import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutBorderosComponent } from './layout-borderos.component';

describe('LayoutBorderosComponent', () => {
	let component: LayoutBorderosComponent;
	let fixture: ComponentFixture<LayoutBorderosComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LayoutBorderosComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LayoutBorderosComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
