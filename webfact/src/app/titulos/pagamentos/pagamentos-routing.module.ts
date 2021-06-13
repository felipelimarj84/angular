import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutPagamentosComponent } from './containers/layout/layout-pagamentos.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'layout' },
	{
		path: 'layout',
		component: LayoutPagamentosComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PagamentosRoutingModule {}
