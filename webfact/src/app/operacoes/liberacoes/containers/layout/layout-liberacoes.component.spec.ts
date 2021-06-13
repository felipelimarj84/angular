import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutLiberacoesComponent } from './layout-liberacoes.component';

describe('LayoutLiberacoesComponent', () => {
	let component: LayoutLiberacoesComponent;
	let fixture: ComponentFixture<LayoutLiberacoesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LayoutLiberacoesComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LayoutLiberacoesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
