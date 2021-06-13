import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { LayoutRenovacaoComponent } from './containers/layout/layout-renovacao.component';
import { RenovacaoRoutingModule } from './renovacao-routing.module';

@NgModule({
	declarations: [LayoutRenovacaoComponent],
	imports: [SharedModule, RenovacaoRoutingModule]
})
export class RenovacaoModule {}
