import { NgModule } from '@angular/core';

import { SegurancaRoutingModule } from './seguranca-routing.module';
import { LoginComponent } from './containers/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './containers/layout/layout.component';

@NgModule({
	declarations: [LoginComponent, LayoutComponent],
	imports: [SharedModule, SegurancaRoutingModule],
	providers: []
})
export class SegurancaModule {}
