import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CardLimiteCreditoComponent } from './components/card-limite-credito/card-limite-credito.component';
import { CardRiscoTotalComponent } from './components/card-risco-total/card-risco-total.component';
import { CardSaldoOperarComponent } from './components/card-saldo-operar/card-saldo-operar.component';
import { DashBoardService } from './Services/Service-DashBoard';

@NgModule({
	declarations: [DashboardComponent, CardLimiteCreditoComponent, CardRiscoTotalComponent, CardSaldoOperarComponent],
	imports: [SharedModule, DashboardRoutingModule],
	providers: [DashBoardService]

})
export class DashboardModule {}
