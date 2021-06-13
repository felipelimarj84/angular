import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensMenuComponent } from './itens-menu.component';

describe('ItensMenuComponent', () => {
	let component: ItensMenuComponent;
	let fixture: ComponentFixture<ItensMenuComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ItensMenuComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ItensMenuComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
