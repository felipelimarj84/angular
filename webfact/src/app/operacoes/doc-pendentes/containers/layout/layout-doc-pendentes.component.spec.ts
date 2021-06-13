import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutDocPendentesComponent } from './layout-doc-pendentes.component';

describe('LayoutDocPendentesComponent', () => {
	let component: LayoutDocPendentesComponent;
	let fixture: ComponentFixture<LayoutDocPendentesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LayoutDocPendentesComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LayoutDocPendentesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
