import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'borderos' },
	{
		path: 'borderos',
		loadChildren: () => import('../borderos/borderos.module').then(m => m.BorderosModule)
	},
	{
		path: 'liberacoes',
		loadChildren: () => import('../operacoes/liberacoes/liberacoes.module').then(m => m.LiberacoesModule)
	},
	{
		path: 'doc-pendentes',
		loadChildren: () =>
			import('../operacoes/doc-pendentes/doc-pendentes.module').then(m => m.DocPendentesModule)
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class OperacoesRoutingModule {}
