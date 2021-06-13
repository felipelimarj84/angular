import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'novo' },
	{
		path: 'novo',
		loadChildren: () => import('../cadastro/novo/novo.module').then(m => m.NovoCadastroModule)
	},
	{
		path: 'renovacao',
		loadChildren: () => import('../cadastro/renovacao/renovacao.module').then(m => m.RenovacaoModule)
	},
	{
		path: 'documentacao',
		loadChildren: () =>
			import('../cadastro/documentacao/documentacao.module').then(m => m.DocumentacaoModule)
	},
	{
		path: 'contratos',
		loadChildren: () => import('../cadastro/contratos/contratos.module').then(m => m.ContratosModule)
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CadastroRoutingModule {}
