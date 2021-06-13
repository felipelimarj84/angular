import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutContratosComponent } from './containers/layout/layout-contratos.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'layout' },
	{
		path: 'layout',
		component: LayoutContratosComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ContratosRoutingModule {}
