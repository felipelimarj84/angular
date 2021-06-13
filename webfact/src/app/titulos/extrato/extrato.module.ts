import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { LayoutExtratoComponent } from './containers/layout/layout-extrato.component';
import { ExtratoRoutingModule } from './extrato-routing.module';
import { HomeExtratoComponent } from './components/home-extrato/home-extrato.component';

@NgModule({
	declarations: [LayoutExtratoComponent, HomeExtratoComponent],
	imports: [SharedModule, ExtratoRoutingModule]
})
export class ExtratoModule {}
