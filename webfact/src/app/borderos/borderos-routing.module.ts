import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImportaTitulosXmlComponent } from './components/borderos-propostos/importa-titulos-xml/importa-titulos-xml.component';
import { ImportaTitulosComponent } from './components/borderos-propostos/importa-titulos/importa-titulos.component';
import { ItensMenuComponent } from './components/borderos-propostos/itens-menu/itens-menu.component';
import { IncluirCcComponent } from './components/borderos-propostos/itens-menu/liberacoes/incluir-cc/incluir-cc.component';
import { IncluirChequeLibComponent } from './components/borderos-propostos/itens-menu/liberacoes/incluir-cheque-lib/incluir-cheque-lib.component';
import { IncluirDocComponent } from './components/borderos-propostos/itens-menu/liberacoes/incluir-doc/incluir-doc.component';
import { IncluirEspecieComponent } from './components/borderos-propostos/itens-menu/liberacoes/incluir-especie/incluir-especie.component';
import { IncluirTedComponent } from './components/borderos-propostos/itens-menu/liberacoes/incluir-ted/incluir-ted.component';
import { IncluirChequeComponent } from './components/borderos-propostos/itens-menu/titulos/incluir-cheque/incluir-cheque.component';
import { IncluirDuplicataComponent } from './components/borderos-propostos/itens-menu/titulos/incluir-duplicata/incluir-duplicata.component';
import { NovaPropostaComponent } from './components/borderos-propostos/nova-proposta/nova-proposta.component';
import { LayoutBorderosComponent } from './containers/layout/layout-borderos.component';
import { EnviarNfeComponent } from './components/borderos-propostos/itens-menu/enviar-nfe/enviar-nfe.component';
import { ImprimeDuplicatasComponent } from './components/borderos-propostos/itens-menu/imprime-duplicatas/imprime-duplicatas.component';
import { ItensMenuConsultaComponent } from './components/borderos-consulta/itens-menu-consulta/itens-menu-consulta.component';
import { ImprimeCartaSacadoComponent } from './components/borderos-consulta/itens-menu-consulta/carta-sacado/imprime-carta-sacado/imprime-carta-sacado.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'layout' },
	{
		path: 'layout',
		component: LayoutBorderosComponent,
		children: [
			{ path: 'nova-proposta', component: NovaPropostaComponent },
			{ path: 'importa-titulos', component: ImportaTitulosComponent },
			{ path: 'importa-titulos-xml', component: ImportaTitulosXmlComponent },
			{
				path: 'itens-menu/:id',
				component: ItensMenuComponent,
				children: [
					{ path: 'titulo-incluir-duplicata', component: IncluirDuplicataComponent },
					{ path: 'titulo-incluir-cheque', component: IncluirChequeComponent },
					{ path: 'liberacoes-incluir-cheque', component: IncluirChequeLibComponent },
					{ path: 'liberacoes-incluir-doc', component: IncluirDocComponent },
					{ path: 'liberacoes-incluir-especie', component: IncluirEspecieComponent },
					{ path: 'liberacoes-incluir-ted', component: IncluirTedComponent },
					{ path: 'liberacoes-incluir-cc', component: IncluirCcComponent },
					{ path: 'imprime-duplicatas', component: ImprimeDuplicatasComponent },
					{ path: 'enviar-nfe', component: EnviarNfeComponent }
				]
			},
			{
				path: 'itens-menu-consulta/:id',
				component: ItensMenuConsultaComponent,
				children: [{ path: 'imprime-carta-sacado', component: ImprimeCartaSacadoComponent }]
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class BoderosRoutingModule {}
