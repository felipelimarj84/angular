import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FiltrarConsultasComponent } from './components/filtrar-consultas/filtrar-consultas.component';
import { LayoutConsultasComponent } from './containers/layout/layout-consultas.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'layout' },
	{
		path: 'layout',
		component: LayoutConsultasComponent,
		children: [
			{ path: 'filtrar-consultas', component: FiltrarConsultasComponent },
			// { path: 'filtrar-consultas/:tipoConsulta', component: FiltrarConsultasComponent }
		    { path: 'filtrar-consultas/:tipoConsulta/:periodoInicial/:periodoFinal/:cadastroInicial/:cadastroFinal/:tipoOperacao/:tipoTitulo/:valor/:cnpj/:titulo', component: FiltrarConsultasComponent }
	    ]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ConsultasRoutingModule {}
