import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContratosComponent } from './containers/layout/layout-contratos.component';
import { ContratosRoutingModule } from './contratos-routing.module';
import { HomeContratosComponent } from './components/home-contratos/home-contratos.component';
import { ContratosPadraoComponent } from './components/contratos-padrao/contratos-padrao.component';
import { ContratosFidcComponent } from './components/contratos-fidc/contratos-fidc.component';

@NgModule({
	declarations: [LayoutContratosComponent, HomeContratosComponent, ContratosPadraoComponent, ContratosFidcComponent],
	imports: [SharedModule, ContratosRoutingModule]
})
export class ContratosModule {}
