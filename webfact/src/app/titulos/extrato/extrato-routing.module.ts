import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutExtratoComponent } from './containers/layout/layout-extrato.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'layout' },
	{
		path: 'layout',
		component: LayoutExtratoComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ExtratoRoutingModule {}
