import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutDocumentacaoComponent } from './layout-documentacao.component';

describe('LayoutDocumentacaoComponent', () => {
	let component: LayoutDocumentacaoComponent;
	let fixture: ComponentFixture<LayoutDocumentacaoComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LayoutDocumentacaoComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LayoutDocumentacaoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
