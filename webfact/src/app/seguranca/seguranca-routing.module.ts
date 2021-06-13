import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { LayoutComponent } from './containers/layout/layout.component';

const routes: Routes = [
	{
		path: 'autenticacao',
		component: LayoutComponent,
		children: [
			{ path: '', pathMatch: 'full', redirectTo: 'login' },
			{
				path: 'login',
				component: LoginComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SegurancaRoutingModule {}
