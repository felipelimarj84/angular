import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { LayoutPagamentosComponent } from './containers/layout/layout-pagamentos.component';
import { PagamentosRoutingModule } from './pagamentos-routing.module';
import { HomePagamentosComponent } from './components/home-pagamentos/home-pagamentos.component';

@NgModule({
	declarations: [LayoutPagamentosComponent, HomePagamentosComponent],
	imports: [SharedModule, PagamentosRoutingModule]
})
export class PagamentosModule {}
