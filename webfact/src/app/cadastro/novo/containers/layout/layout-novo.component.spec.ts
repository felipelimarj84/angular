import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutNovoCadastroComponent } from './layout-novo.component';

describe('LayoutNovoCadastroComponent', () => {
	let component: LayoutNovoCadastroComponent;
	let fixture: ComponentFixture<LayoutNovoCadastroComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LayoutNovoCadastroComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LayoutNovoCadastroComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
