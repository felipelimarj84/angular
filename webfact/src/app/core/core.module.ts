import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CoreRoutingModule } from './core-routing.module';
import { LayoutComponent } from './containers/layout/layout.component';
import { HomeComponent } from './containers/home/home.component';
import { LoginComponent } from './containers/login/login.component';
import { SignupComponent } from './containers/signup/signup.component';
import { WfHeaderComponent } from './components/wf-header/wf-header.component';
import { WfMenuLateralComponent } from './components/wf-menu-lateral/wf-menu-lateral.component';
import { WfMenuConfiguracaoComponent } from './components/wf-menu-configuracao/wf-menu-configuracao.component';
import { WfMenuNotificationComponent } from './components/wf-menu-notification/wf-menu-notification.component';
import { ConfigurarPaginaComponent } from './containers/configurar-pagina/configurar-pagina.component';
import { NotificacoesComponent } from './containers/notificacoes/notificacoes.component';

@NgModule({
	declarations: [
		LayoutComponent,
		HomeComponent,
		LoginComponent,
		SignupComponent,
		WfHeaderComponent,
		WfMenuLateralComponent,
		WfMenuConfiguracaoComponent,
		WfMenuNotificationComponent,
		ConfigurarPaginaComponent,
		NotificacoesComponent
	],
	imports: [SharedModule, CoreRoutingModule],
})
export class CoreModule {}
