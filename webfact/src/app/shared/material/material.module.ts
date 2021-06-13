import { NgModule } from '@angular/core';
import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { getPtBrPaginatorIntl } from '../utils/ptBr-paginator-intl';

@NgModule({
	exports: [
		A11yModule,
		CdkStepperModule,
		CdkTableModule,
		CdkTreeModule,
		DragDropModule,
		MatAutocompleteModule,
		MatBadgeModule,
		MatBottomSheetModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatCardModule,
		MatCheckboxModule,
		MatChipsModule,
		MatStepperModule,
		MatDatepickerModule,
		MatDialogModule,
		MatDividerModule,
		MatExpansionModule,
		MatFormFieldModule,
		MatGridListModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatMenuModule,
		MatNativeDateModule,
		MatPaginatorModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatRadioModule,
		MatRippleModule,
		MatSelectModule,
		MatSidenavModule,
		MatSliderModule,
		MatSlideToggleModule,
		MatSnackBarModule,
		MatSortModule,
		MatTableModule,
		MatTabsModule,
		MatToolbarModule,
		MatTooltipModule,
		MatTreeModule,
		PortalModule,
		ScrollingModule
	],
	providers: [{ provide: MatPaginatorIntl, useValue: getPtBrPaginatorIntl() }]
})
export class MaterialModule {
	constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
		this.registerWfIcons();
	}

	registerWfIcons() {
		this.iconRegistry.addSvgIcon(
			'dashboard',
			this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/dashboard.svg')
		);
		this.iconRegistry.addSvgIcon(
			'operacoes',
			this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/operations.svg')
		);
		this.iconRegistry.addSvgIcon(
			'titulos',
			this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/titulos.svg')
		);
		this.iconRegistry.addSvgIcon(
			'cadastro',
			this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/cadastro.svg')
		);
		this.iconRegistry.addSvgIcon(
			'logomarca',
			this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/gallery.svg')
		);
		this.iconRegistry.addSvgIcon(
			'editar',
			this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/editar.svg')
		);
		this.iconRegistry.addSvgIcon(
			'excluir',
			this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/lixeira.svg')
		);
		this.iconRegistry.addSvgIcon(
			'camera',
			this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/camera.svg')
		);
		this.iconRegistry.addSvgIcon(
			'fechar',
			this.sanitizer.bypassSecurityTrustResourceUrl('assets/svg/fechar.svg')
		);
		this.iconRegistry.addSvgIcon(
			'filtros',
			this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg/filtros.svg')
		);
		this.iconRegistry.addSvgIcon(
			'success',
			this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg/success.svg')
		);
		this.iconRegistry.addSvgIcon(
			'success-cinza',
			this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg/success_cinza.svg')
		);
		this.iconRegistry.addSvgIcon(
			'printer',
			this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg/printer.svg')
		);
		this.iconRegistry.addSvgIcon(
			'doc-pendente',
			this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg/doc-pendente.svg')
		);
		this.iconRegistry.addSvgIcon(
			'calendar',
			this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg/calendar.svg')
		);
		this.iconRegistry.addSvgIcon(
			'download',
			this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg/download.svg')
		);
	}
}
