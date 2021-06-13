import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { CardLimiteCreditoModel } from 'src/app/shared/models/card-limite-cerdito.model';
import { DashBoardService } from '../../Services/Service-DashBoard';
import Configuracoes from '../../../../assets/Js/Config.js';


@Component({
	selector: 'app-card-limite-credito',
	templateUrl: './card-limite-credito.component.html',
	styleUrls: ['./card-limite-credito.component.scss']
})
export class CardLimiteCreditoComponent implements OnInit {
	valor: number;
	fixado: Date;
	vencimento: Date;

	@Input() dados: CardLimiteCreditoModel[];

	barChartOptions: ChartOptions = {
		responsive: true,
		legend: { display: false },
		title: { display: false },
		scales: {
			display: false,
			gridLines: { display: false },
			yAxes: [
				{
					stacked: true,
					display: false
				}
			],
			xAxes: [
				{
					stacked: true,
					display: true,
					gridLines: { display: false }
				}
			]
		},
		showLines: false
	};
	barChartLabels: Label[] = [];
	barChartType: ChartType = 'bar';
	barChartLegend = true;
	barChartPlugins = [];

	barChartData: ChartDataSets[] = [
		{
			data: [],
			backgroundColor: ['#FFEEA5', '#F4AFC1', '#A4DFDF'],
			hoverBackgroundColor: ['#FFEEA5', '#F4AFC1', '#A4DFDF'],
			barThickness: 32
		}
	];

	constructor(private servico: DashBoardService) {}

	ngOnInit() {
		if (this.dados) {
			this.dados.forEach(item => {
					this.barChartLabels.push(item.tipo);
					this.barChartData[0].data.push(item.valor);
					this.valor = item.valor;
					this.fixado = item.fixado;
					this.vencimento = item.vencimento;
			});
			const item = this.dados.find(i => i.tipo === "Geral");
			this.valor = item.valor;
			this.fixado = item.fixado;
			this.vencimento = item.vencimento;
		}
	}

	public chartClicked({ event, active }: { event: MouseEvent; active: any[] }): void {
		if (active.length > 0) {
			const item = this.dados.find(i => i.tipo === active[0]._view.label);
			this.valor = item.valor;
			this.fixado = item.fixado;
			this.vencimento = item.vencimento;
		}
	}
}