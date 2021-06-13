import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BoderosRoutingModule } from './borderos-routing.module';
import { BorderosConsultaComponent } from './components/borderos-consulta/borderos-consulta.component';
import { BorderosPropostosComponent } from './components/borderos-propostos/borderos-propostos.component';
import { ImportaTitulosXmlComponent } from './components/borderos-propostos/importa-titulos-xml/importa-titulos-xml.component';
import { ImportaTitulosComponent } from './components/borderos-propostos/importa-titulos/importa-titulos.component';
import { EnviarNfeComponent } from './components/borderos-propostos/itens-menu/enviar-nfe/enviar-nfe.component';
import { ImprimeDuplicatasComponent } from './components/borderos-propostos/itens-menu/imprime-duplicatas/imprime-duplicatas.component';
import { ItensMenuComponent } from './components/borderos-propostos/itens-menu/itens-menu.component';
import { LiberacoesComponent } from './components/borderos-propostos/itens-menu/liberacoes/liberacoes.component';
import { IncluirChequeComponent } from './components/borderos-propostos/itens-menu/titulos/incluir-cheque/incluir-cheque.component';
import { IncluirDuplicataComponent } from './components/borderos-propostos/itens-menu/titulos/incluir-duplicata/incluir-duplicata.component';
import { TitulosComponent } from './components/borderos-propostos/itens-menu/titulos/titulos.component';
import { NovaPropostaComponent } from './components/borderos-propostos/nova-proposta/nova-proposta.component';
import { LayoutBorderosComponent } from './containers/layout/layout-borderos.component';
import { ItensMenuConsultaComponent } from './components/borderos-consulta/itens-menu-consulta/itens-menu-consulta.component';
import { RelatorioAditivoComponent } from './components/borderos-consulta/itens-menu-consulta/relatorio-aditivo/relatorio-aditivo.component';
import { RelatorioBorderoComponent } from './components/borderos-consulta/itens-menu-consulta/relatorio-bordero/relatorio-bordero.component';
import { NotaPromissoriaComponent } from './components/borderos-consulta/itens-menu-consulta/nota-promissoria/nota-promissoria.component';
import { ReciboRegressoComponent } from './components/borderos-consulta/itens-menu-consulta/recibo-regresso/recibo-regresso.component';
import { ImprimeDuplicatasConsultaComponent } from './components/borderos-consulta/itens-menu-consulta/imprime-duplicatas-consulta/imprime-duplicatas-consulta.component';
import { CartaSacadoComponent } from './components/borderos-consulta/itens-menu-consulta/carta-sacado/carta-sacado.component';
import { ImprimeCartaSacadoComponent } from './components/borderos-consulta/itens-menu-consulta/carta-sacado/imprime-carta-sacado/imprime-carta-sacado.component';

@NgModule({
	declarations: [
		LayoutBorderosComponent,
		BorderosPropostosComponent,
		BorderosConsultaComponent,
		NovaPropostaComponent,
		ImportaTitulosComponent,
		ImportaTitulosXmlComponent,
		ItensMenuComponent,
		TitulosComponent,
		IncluirChequeComponent,
		IncluirDuplicataComponent,
		LiberacoesComponent,
		EnviarNfeComponent,
		ImprimeDuplicatasComponent,
		ItensMenuConsultaComponent,
		RelatorioAditivoComponent,
		RelatorioBorderoComponent,
		NotaPromissoriaComponent,
		ReciboRegressoComponent,
		ImprimeDuplicatasConsultaComponent,
		CartaSacadoComponent,
		ImprimeCartaSacadoComponent
	],
	imports: [SharedModule, BoderosRoutingModule]
})
export class BorderosModule {}
