import { Component, OnInit, Input } from '@angular/core';
import { CardSaldoOperarModel } from 'src/app/shared/models/card-saldo-operar.model';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
	selector: 'app-card-saldo-operar',
	templateUrl: './card-saldo-operar.component.html',
	styleUrls: ['./card-saldo-operar.component.scss']
})

export class CardSaldoOperarComponent implements OnInit {
	valor: number;
	avencer: number;
	vencido: number;
	cccliente: number;

	@Input() dados: CardSaldoOperarModel[];

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

	constructor() {}

	ngOnInit() {
		if (this.dados) {
			this.dados.forEach(item => {
				this.barChartLabels.push(item.tipo);
				this.barChartData[0].data.push(item.valor);
				this.valor = item.valor;
			});
			const item = this.dados.find(i => i.tipo === "Geral");
			this.valor = item.valor;
		}
	}

	public chartClicked({ event, active }: { event: MouseEvent; active: any[] }): void {
		if (active.length > 0) {
			const item = this.dados.find(i => i.tipo === active[0]._view.label);
			this.valor = item.valor;
		}
	}

}
