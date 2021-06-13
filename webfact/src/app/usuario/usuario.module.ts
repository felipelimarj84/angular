import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListUsuarioComponent } from './components/list-usuario/list-usuario.component';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormUsuarioComponent } from './components/form-usuario/form-usuario.component';

import { UsuarioService } from './services/service-usuario';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutUsuarioComponent } from './containers/layout/layout-usuario.component';
import { UsuarioEditar } from './guards/usuario-editar-resolve';

@NgModule({
	declarations: [LayoutUsuarioComponent, ListUsuarioComponent, FormUsuarioComponent],
	imports: [CommonModule, UsuarioRoutingModule, SharedModule, FormsModule, ReactiveFormsModule],
	providers: [UsuarioService,UsuarioEditar]
})
export class UsuarioModule {}
