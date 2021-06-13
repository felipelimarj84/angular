import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WfMenuConfiguracaoComponent } from './wf-menu-configuracao.component';

describe('WfMenuConfiguracaoComponent', () => {
	let component: WfMenuConfiguracaoComponent;
	let fixture: ComponentFixture<WfMenuConfiguracaoComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [WfMenuConfiguracaoComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WfMenuConfiguracaoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
