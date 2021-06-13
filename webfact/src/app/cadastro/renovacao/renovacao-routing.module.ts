import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutRenovacaoComponent } from './containers/layout/layout-renovacao.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'layout' },
	{
		path: 'layout',
		component: LayoutRenovacaoComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RenovacaoRoutingModule {}
