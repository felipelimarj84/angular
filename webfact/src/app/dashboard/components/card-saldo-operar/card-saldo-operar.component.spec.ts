import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSaldoOperarComponent } from './card-saldo-operar.component';

describe('CardSaldoOperarComponent', () => {
	let component: CardSaldoOperarComponent;
	let fixture: ComponentFixture<CardSaldoOperarComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CardSaldoOperarComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CardSaldoOperarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
