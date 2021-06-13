import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimeDuplicatasConsultaComponent } from './imprime-duplicatas-consulta.component';

describe('ImprimeDuplicatasConsultaComponent', () => {
	let component: ImprimeDuplicatasConsultaComponent;
	let fixture: ComponentFixture<ImprimeDuplicatasConsultaComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ImprimeDuplicatasConsultaComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ImprimeDuplicatasConsultaComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
