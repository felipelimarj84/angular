import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutNovoCadastroComponent } from './containers/layout/layout-novo.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'layout' },
	{
		path: 'layout',
		component: LayoutNovoCadastroComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class NovoCadastroRoutingModule {}
