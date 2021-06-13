import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutenticacaoGuard } from './seguranca/guard/autenticacao.guard';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'core' },
	{
		path: 'core',
		loadChildren: () => import('./core/core.module').then(core => core.CoreModule),
		canActivate: [AutenticacaoGuard]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
