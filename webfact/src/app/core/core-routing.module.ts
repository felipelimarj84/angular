import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { LayoutComponent } from './containers/layout/layout.component';
import { LoginComponent } from './containers/login/login.component';
import { SignupComponent } from './containers/signup/signup.component';
import { ConfigurarPaginaComponent } from './containers/configurar-pagina/configurar-pagina.component';
import { NotificacoesComponent } from './containers/notificacoes/notificacoes.component';


const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'layout' },
	{
		path: 'layout',
		component: LayoutComponent,
		children: [
			{ path: '', pathMatch: 'full', redirectTo: 'dashboard' },
			{ path: 'home', component: HomeComponent },
			{ path: 'configurar-pagina', component: ConfigurarPaginaComponent },
			{ path: 'listar-notificacoes', component: NotificacoesComponent },
			{ path: 'login', component: LoginComponent },
			{ path: 'signup', component: SignupComponent },
			{
				path: 'dashboard',
				loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
			},
			{
				path: 'operacoes',
				loadChildren: () => import('../operacoes/operacoes.module').then(m => m.OperacoesModule)
			},
			{
				path: 'titulos',
				loadChildren: () => import('../titulos/titulos.module').then(m => m.TitulosModule)
			},
			{
				path: 'cadastro',
				loadChildren: () => import('../cadastro/cadastro.module').then(m => m.CadastroModule)
			},
			{
				path: 'usuarios',
				loadChildren: () => import('../usuario/usuario.module').then(m => m.UsuarioModule)
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],

})
export class CoreRoutingModule {}
