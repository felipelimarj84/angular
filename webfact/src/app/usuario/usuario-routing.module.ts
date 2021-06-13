import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormUsuarioComponent } from './components/form-usuario/form-usuario.component';
import { LayoutUsuarioComponent } from './containers/layout/layout-usuario.component';
import { UsuarioEditar } from './guards/usuario-editar-resolve';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'layout' },
	{
		path: 'layout',
		component: LayoutUsuarioComponent,
		children: [
			{ path: 'form-usuario', component: FormUsuarioComponent  ,
			    resolve: {usuario : UsuarioEditar }
		    },
			{ path: 'form-usuario/:login', component: FormUsuarioComponent ,
			   resolve: {usuario : UsuarioEditar }
		    }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class UsuarioRoutingModule {}
