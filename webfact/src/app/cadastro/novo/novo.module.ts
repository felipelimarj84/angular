import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { LayoutNovoCadastroComponent } from './containers/layout/layout-novo.component';
import { NovoCadastroRoutingModule } from './novo-routing.module';

@NgModule({
	declarations: [LayoutNovoCadastroComponent],
	imports: [SharedModule, NovoCadastroRoutingModule]
})
export class NovoCadastroModule {}
