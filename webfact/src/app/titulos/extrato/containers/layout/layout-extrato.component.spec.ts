import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutExtratoComponent } from './layout-extrato.component';

describe('LayoutExtratoComponent', () => {
	let component: LayoutExtratoComponent;
	let fixture: ComponentFixture<LayoutExtratoComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LayoutExtratoComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LayoutExtratoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
