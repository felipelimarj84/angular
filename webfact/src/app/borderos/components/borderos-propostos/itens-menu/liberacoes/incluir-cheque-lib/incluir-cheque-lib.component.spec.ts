import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IncluirChequeLibComponent } from './incluir-cheque-lib.component';

describe('IncluirChequeLibComponent', () => {
	let component: IncluirChequeLibComponent;
	let fixture: ComponentFixture<IncluirChequeLibComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [IncluirChequeLibComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(IncluirChequeLibComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
