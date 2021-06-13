import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { ChartsModule } from 'ng2-charts';
import { IncluirDocComponent } from '../borderos/components/borderos-propostos/itens-menu/liberacoes/incluir-doc/incluir-doc.component';
import { IncluirEspecieComponent } from '../borderos/components/borderos-propostos/itens-menu/liberacoes/incluir-especie/incluir-especie.component';
import { IncluirTedComponent } from '../borderos/components/borderos-propostos/itens-menu/liberacoes/incluir-ted/incluir-ted.component';
import { IncluirCcComponent } from '../borderos/components/borderos-propostos/itens-menu/liberacoes/incluir-cc/incluir-cc.component';
import { IncluirChequeLibComponent } from '../borderos/components/borderos-propostos/itens-menu/liberacoes/incluir-cheque-lib/incluir-cheque-lib.component';

@NgModule({
	declarations: [
		IncluirDocComponent,
		IncluirEspecieComponent,
		IncluirTedComponent,
		IncluirCcComponent,
		IncluirChequeLibComponent
	],
	imports: [CommonModule, FlexLayoutModule, MaterialModule, ReactiveFormsModule, ChartsModule],
	exports: [CommonModule, FlexLayoutModule, MaterialModule, ReactiveFormsModule, ChartsModule]
})
export class SharedModule {}
