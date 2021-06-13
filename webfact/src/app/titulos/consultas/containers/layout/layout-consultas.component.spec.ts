import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutConsultasComponent } from './layout-consultas.component';

describe('LayoutConsultasComponent', () => {
	let component: LayoutConsultasComponent;
	let fixture: ComponentFixture<LayoutConsultasComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LayoutConsultasComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LayoutConsultasComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
