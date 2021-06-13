import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FiltrosAbaterNiComponent } from './components/itens-novas-instrucoes/abater-ni/filtros-abater-ni/filtros-abater-ni.component';
import { FiltrosAntecipacaoNiComponent } from './components/itens-novas-instrucoes/antecipacao-ni/filtros-antecipacao-ni/filtros-antecipacao-ni.component';
import { FiltrosBaixarNiComponent } from './components/itens-novas-instrucoes/baixar-ni/filtros-baixar-ni/filtros-baixar-ni.component';
import { FiltrosCancelarNiComponent } from './components/itens-novas-instrucoes/cancelar-ni/filtros-cancelar-ni/filtros-cancelar-ni.component';
import { ItensNovasInstrucoesComponent } from './components/itens-novas-instrucoes/itens-novas-instrucoes.component';
import { FiltrarProrrogarNiComponent } from './components/itens-novas-instrucoes/prorrogar-ni/filtrar-prorrogar-ni/filtrar-prorrogar-ni.component';
import { FiltrosProtestarNiComponent } from './components/itens-novas-instrucoes/protestar-ni/filtros-protestar-ni/filtros-protestar-ni.component';
import { FiltrosRetiradaNiComponent } from './components/itens-novas-instrucoes/retirada-ni/filtros-retirada-ni/filtros-retirada-ni.component';
import { FiltrosSustarNiComponent } from './components/itens-novas-instrucoes/sustar-ni/filtros-sustar-ni/filtros-sustar-ni.component';
import { LayoutCobrancasComponent } from './containers/layout/layout-cobrancas.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'layout' },
	{
		path: 'layout',
		component: LayoutCobrancasComponent,
		children: [
			{
				path: 'novas-instrucoes/:id',
				component: ItensNovasInstrucoesComponent,
				children: [
					{ path: 'filtrar-prorrogar-ni', component: FiltrarProrrogarNiComponent },
					{ path: 'filtrar-abater-ni', component: FiltrosAbaterNiComponent },
					{ path: 'filtrar-cancelar-ni', component: FiltrosCancelarNiComponent },
					{ path: 'filtrar-protestar-ni', component: FiltrosProtestarNiComponent },
					{ path: 'filtrar-sustar-ni', component: FiltrosSustarNiComponent },
					{ path: 'filtrar-antecipacao-ni', component: FiltrosAntecipacaoNiComponent },
					{ path: 'filtrar-baixar-ni', component: FiltrosBaixarNiComponent },
					{ path: 'filtrar-retirada-ni', component: FiltrosRetiradaNiComponent }
				]
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CobrancasRoutingModule {}
