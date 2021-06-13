import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutContratosComponent } from './layout-contratos.component';

describe('LayoutContratosComponent', () => {
	let component: LayoutContratosComponent;
	let fixture: ComponentFixture<LayoutContratosComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LayoutContratosComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LayoutContratosComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
