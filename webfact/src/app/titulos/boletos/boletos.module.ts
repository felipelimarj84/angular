import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { BoletosRoutingModule } from './boletos-routing.module';
import { LayoutBoletosComponent } from './containers/layout/layout-boletos.component';
import { HomeBoletosComponent } from './components/home-boletos/home-boletos.component';
import { FiltrarBoletosComponent } from './components/filtrar-boletos/filtrar-boletos.component';

@NgModule({
	declarations: [LayoutBoletosComponent, HomeBoletosComponent, FiltrarBoletosComponent],
	imports: [SharedModule, BoletosRoutingModule]
})
export class BoletosModule {}
