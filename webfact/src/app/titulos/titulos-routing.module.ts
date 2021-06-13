import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'consultas' },
	{
		path: 'consultas',
		loadChildren: () => import('../titulos/consultas/consultas.module').then(m => m.ConsultasModule)
	},
	{
		path: 'cobrancas',
		loadChildren: () => import('../titulos/cobrancas/cobrancas.module').then(m => m.CobrancasModule)
	},
	{
		path: 'boletos',
		loadChildren: () => import('../titulos/boletos/boletos.module').then(m => m.BoletosModule)
	},
	{
		path: 'pagamentos',
		loadChildren: () => import('../titulos/pagamentos/pagamentos.module').then(m => m.PagamentosModule)
	},
	{
		path: 'extrato',
		loadChildren: () => import('../titulos/extrato/extrato.module').then(m => m.ExtratoModule)
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TitulosRoutingModule {}
