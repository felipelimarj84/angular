import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LibIncluirCcComponent } from './components/lib-incluir-cc/lib-incluir-cc.component';
import { LibIncluirChequeComponent } from './components/lib-incluir-cheque/lib-incluir-cheque.component';
import { LibIncluirDocComponent } from './components/lib-incluir-doc/lib-incluir-doc.component';
import { LibIncluirEspecieComponent } from './components/lib-incluir-especie/lib-incluir-especie.component';
import { LibIncluirTedComponent } from './components/lib-incluir-ted/lib-incluir-ted.component';
import { LayoutLiberacoesComponent } from './containers/layout/layout-liberacoes.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'layout' },
	{
		path: 'layout',
		component: LayoutLiberacoesComponent,
		children: [
			{ path: 'lib-incluir-cheque', component: LibIncluirChequeComponent },
			{ path: 'lib-incluir-doc', component: LibIncluirDocComponent },
			{ path: 'lib-incluir-especie', component: LibIncluirEspecieComponent },
			{ path: 'lib-incluir-ted', component: LibIncluirTedComponent },
			{ path: 'lib-incluir-cc', component: LibIncluirCcComponent }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class LiberacoesRoutingModule {}
