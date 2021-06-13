import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutBoletosComponent } from './layout-boletos.component';

describe('LayoutBoletosComponent', () => {
	let component: LayoutBoletosComponent;
	let fixture: ComponentFixture<LayoutBoletosComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LayoutBoletosComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LayoutBoletosComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
