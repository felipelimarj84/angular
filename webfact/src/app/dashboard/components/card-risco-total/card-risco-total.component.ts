import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { CardRiscoTotalModel } from 'src/app/shared/models/card-risco-total.model';

@Component({
	selector: 'app-card-risco-total',
	templateUrl: './card-risco-total.component.html',
	styleUrls: ['./card-risco-total.component.scss']
})
export class CardRiscoTotalComponent implements OnInit {
	valor: number;

	@Input() dados: CardRiscoTotalModel[];

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
		}
	}

	public chartClicked({ event, active }: { event: MouseEvent; active: any[] }): void {
		if (active.length > 0) {
			const item = this.dados.find(i => i.tipo === active[0]._view.label);
			this.valor = item.valor;
		}
	}
}
