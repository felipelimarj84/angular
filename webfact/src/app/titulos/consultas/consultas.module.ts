import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ConsultasRoutingModule } from './consultas-routing.module';
import { LayoutConsultasComponent } from './containers/layout/layout-consultas.component';
import { HomeConsultasComponent } from './components/home-consultas/home-consultas.component';
import { FiltrarConsultasComponent } from './components/filtrar-consultas/filtrar-consultas.component';

@NgModule({
	declarations: [LayoutConsultasComponent, HomeConsultasComponent, FiltrarConsultasComponent],
	imports: [SharedModule, ConsultasRoutingModule]
})
export class ConsultasModule {}
