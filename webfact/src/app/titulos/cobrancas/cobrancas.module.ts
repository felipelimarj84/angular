import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { CobrancasRoutingModule } from './cobrancas-routing.module';
import { LayoutCobrancasComponent } from './containers/layout/layout-cobrancas.component';
import { HomeCobrancasComponent } from './components/home-cobrancas/home-cobrancas.component';
import { ItensNovasInstrucoesComponent } from './components/itens-novas-instrucoes/itens-novas-instrucoes.component';
import { ProrrogarNiComponent } from './components/itens-novas-instrucoes/prorrogar-ni/prorrogar-ni.component';
import { AbaterNiComponent } from './components/itens-novas-instrucoes/abater-ni/abater-ni.component';
import { CancelarNiComponent } from './components/itens-novas-instrucoes/cancelar-ni/cancelar-ni.component';
import { ProtestarNiComponent } from './components/itens-novas-instrucoes/protestar-ni/protestar-ni.component';
import { SustarNiComponent } from './components/itens-novas-instrucoes/sustar-ni/sustar-ni.component';
import { AntecipacaoNiComponent } from './components/itens-novas-instrucoes/antecipacao-ni/antecipacao-ni.component';
import { BaixarNiComponent } from './components/itens-novas-instrucoes/baixar-ni/baixar-ni.component';
import { RetiradaNiComponent } from './components/itens-novas-instrucoes/retirada-ni/retirada-ni.component';
import { FiltrarProrrogarNiComponent } from './components/itens-novas-instrucoes/prorrogar-ni/filtrar-prorrogar-ni/filtrar-prorrogar-ni.component';
import { FiltrosAbaterNiComponent } from './components/itens-novas-instrucoes/abater-ni/filtros-abater-ni/filtros-abater-ni.component';
import { FiltrosAntecipacaoNiComponent } from './components/itens-novas-instrucoes/antecipacao-ni/filtros-antecipacao-ni/filtros-antecipacao-ni.component';
import { FiltrosBaixarNiComponent } from './components/itens-novas-instrucoes/baixar-ni/filtros-baixar-ni/filtros-baixar-ni.component';
import { FiltrosCancelarNiComponent } from './components/itens-novas-instrucoes/cancelar-ni/filtros-cancelar-ni/filtros-cancelar-ni.component';
import { FiltrosProtestarNiComponent } from './components/itens-novas-instrucoes/protestar-ni/filtros-protestar-ni/filtros-protestar-ni.component';
import { FiltrosRetiradaNiComponent } from './components/itens-novas-instrucoes/retirada-ni/filtros-retirada-ni/filtros-retirada-ni.component';
import { FiltrosSustarNiComponent } from './components/itens-novas-instrucoes/sustar-ni/filtros-sustar-ni/filtros-sustar-ni.component';

@NgModule({
	declarations: [LayoutCobrancasComponent, HomeCobrancasComponent, ItensNovasInstrucoesComponent, ProrrogarNiComponent, AbaterNiComponent, CancelarNiComponent, ProtestarNiComponent, SustarNiComponent, AntecipacaoNiComponent, BaixarNiComponent, RetiradaNiComponent, FiltrarProrrogarNiComponent, FiltrosAbaterNiComponent, FiltrosAntecipacaoNiComponent, FiltrosBaixarNiComponent, FiltrosCancelarNiComponent, FiltrosProtestarNiComponent, FiltrosRetiradaNiComponent, FiltrosSustarNiComponent],
	imports: [SharedModule, CobrancasRoutingModule]
})
export class CobrancasModule {}
