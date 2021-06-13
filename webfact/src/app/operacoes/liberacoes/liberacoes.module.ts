import { NgModule } from '@angular/core';

import { LayoutLiberacoesComponent } from './containers/layout/layout-liberacoes.component';
import { LiberacoesRoutingModule } from './liberacoes-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { LibIncluirChequeComponent } from './components/lib-incluir-cheque/lib-incluir-cheque.component';
import { LibIncluirDocComponent } from './components/lib-incluir-doc/lib-incluir-doc.component';
import { LibIncluirEspecieComponent } from './components/lib-incluir-especie/lib-incluir-especie.component';
import { LibIncluirTedComponent } from './components/lib-incluir-ted/lib-incluir-ted.component';
import { LibIncluirCcComponent } from './components/lib-incluir-cc/lib-incluir-cc.component';

@NgModule({
	declarations: [LayoutLiberacoesComponent, HomeComponent, LibIncluirChequeComponent, LibIncluirDocComponent, LibIncluirEspecieComponent, LibIncluirTedComponent, LibIncluirCcComponent],
	imports: [SharedModule, LiberacoesRoutingModule]
})
export class LiberacoesModule {}
