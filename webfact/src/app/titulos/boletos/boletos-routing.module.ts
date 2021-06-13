import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutBoletosComponent } from './containers/layout/layout-boletos.component';
import { FiltrarBoletosComponent } from './components/filtrar-boletos/filtrar-boletos.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'layout' },
	{
		path: 'layout',
		component: LayoutBoletosComponent,
		children: [{ path: 'filtrar-boletos', component: FiltrarBoletosComponent }]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class BoletosRoutingModule {}
