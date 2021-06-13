import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutPagamentosComponent } from './layout-pagamentos.component';

describe('LayoutPagamentosComponent', () => {
	let component: LayoutPagamentosComponent;
	let fixture: ComponentFixture<LayoutPagamentosComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LayoutPagamentosComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LayoutPagamentosComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
