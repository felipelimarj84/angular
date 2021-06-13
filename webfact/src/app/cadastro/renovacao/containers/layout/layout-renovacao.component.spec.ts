import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutRenovacaoComponent } from './layout-renovacao.component';

describe('LayoutRenovacaoComponent', () => {
	let component: LayoutRenovacaoComponent;
	let fixture: ComponentFixture<LayoutRenovacaoComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LayoutRenovacaoComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LayoutRenovacaoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
