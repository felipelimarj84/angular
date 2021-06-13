import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCobrancasComponent } from './layout-cobrancas.component';

describe('LayoutCobrancasComponent', () => {
	let component: LayoutCobrancasComponent;
	let fixture: ComponentFixture<LayoutCobrancasComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LayoutCobrancasComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LayoutCobrancasComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
