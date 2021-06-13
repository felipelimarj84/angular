
import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { CardLimiteCreditoModel } from 'src/app/shared/models/card-limite-cerdito.model';
import { CardRiscoTotalModel } from 'src/app/shared/models/card-risco-total.model';
import { CardSaldoOperarModel } from 'src/app/shared/models/card-saldo-operar.model';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { DashBoardService } from '../../Services/Service-DashBoard';
import { Subscription, Observable } from 'rxjs';
import Configuracoes from '../../../../assets/Js/Config.js';
import { CardMaioresRiscosModel } from 'src/app/shared/models/card-maiores-riscos';
import { DashBoardModel } from 'src/app/shared/models/DashBoardModel';
import { tap } from 'rxjs/operators';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, OnDestroy {

	dashBoards: DashBoardModel;

	dadosLimiteCredito: CardLimiteCreditoModel[];

	dadosRiscoTotal: CardRiscoTotalModel[];
	
	dadosSaldoOperar: CardSaldoOperarModel[];
	
	dadosMaioresRiscos: CardMaioresRiscosModel[];

	dadosMaioresRiscosSacado: CardMaioresRiscosModel[];

	dadosAVencerFaixasDescricao: string[];

	dadosAVencerFaixasValor: number[];

	dadosVencidoFaixasDescricao: string[];

	dadosVencidoFaixasValor: number[];

	cores01 = ['#FFEBEE','#FCE4EC', '#F3E5F5', '#EDE7F6', '#E8EAF6', '#E3F2FD', '#E1F5FE', '#E0F7FA', '#E0F2F1', '#E8F5E9'];
	
	isLoading = true;

	// Bar
	public barChartOptions: ChartOptions = {
		responsive: true,
		scales: { xAxes: [{}], yAxes: [{}] },
		plugins: {
			datalabels: {
				anchor: 'end',
				align: 'end'
			}
		}
	};


	public barChartLabels: Label[] = [];
	public barChartData: ChartDataSets[] = [
		{
			data: [],
			backgroundColor: ['#FFEBEE','#FCE4EC', '#F3E5F5', '#EDE7F6', '#E8EAF6', '#E3F2FD', '#E1F5FE', '#E0F7FA', '#E0F2F1', '#E8F5E9'],
			label: ""
		}
	];

	public barChartLabelsSacado: Label[] = [];
	public barChartDataSacado: ChartDataSets[] = [
		{
			data: [],
			backgroundColor: ['#FFEBEE','#FCE4EC', '#F3E5F5', '#EDE7F6', '#E8EAF6', '#E3F2FD', '#E1F5FE', '#E0F7FA', '#E0F2F1', '#E8F5E9'],
			label: "SACADOS"
		}
	];


	public barChartType: ChartType = 'bar';
	public barChartLegend = true;
	public barChartPlugins = [];



	public pieChartColors: Array <any> = [{
		backgroundColor: ['#BC8F8F', '#483D8B', '#4682B4', '#20B2AA', '#F08080' ],
		borderColor: ['white', 'white', 'white', 'white', 'white']
	 }];

	public pieChartLabelsVencido: Label[] = [];
	public pieChartDataVencido: number[] = [];
	public pieChartLabelsAVencer: Label[] = [];
	public pieChartDataAVencer: number[] = [];


	public pieChartType: ChartType = 'pie';
	

	private subscriptions$: Subscription[] = [];

	public dadosDashBoards$: Observable<any>;


	constructor(private servico: DashBoardService) {}

	ngOnInit(
	) {	

		this.servico.Cedente = Configuracoes.ApelidoAutoProd;
		this.servico.UrlBase = Configuracoes.UrlBase;
		this.dadosDashBoards$ = this.servico.dadosDashBoard$;

		this.subscriptions$.push(this.servico.ObterDashBoard()
		.pipe(tap())
		.subscribe(data => { 
			this.dashBoards = data;
			this.dadosLimiteCredito = data.cardLimiteCredito;
			this.dadosRiscoTotal = data.cardRisco;
			this.dadosSaldoOperar = data.cardSaldoOperar;
			this.dadosMaioresRiscos = data.cardMaioresRiscosGrupo;
			this.dadosMaioresRiscosSacado = data.cardMaioresRiscosSacado;


			this.dadosAVencerFaixasDescricao = data.faixasAVencerDescricao;
			this.dadosAVencerFaixasValor = data.faixasAVencerValor;
			this.dadosVencidoFaixasDescricao = data.faixasVencidoDescricao;
			this.dadosVencidoFaixasValor = data.faixasVencidoValor;

			this.pieChartLabelsAVencer = this.dadosAVencerFaixasDescricao;
			this.pieChartDataAVencer = this.dadosAVencerFaixasValor;
			this.pieChartLabelsVencido = this.dadosVencidoFaixasDescricao;
			this.pieChartDataVencido = this.dadosVencidoFaixasValor;

		 	this.barChartLabels = this.dadosMaioresRiscos[0].labels;
		 	this.barChartData = [
		 		{
		 			data: this.dadosMaioresRiscos[0].data,
		 			backgroundColor: ['#4169E1', '#5F9EA0', '#3CB371', '#32CD32','#9ACD32', '#7B68EE', '#D2691E', '#8B4513', '#F08080', '#F08080'],
		 			label: "GRUPO - RAIZ - SACADO"
		 		}
		 	] ;

		 	this.barChartLabelsSacado = this.dadosMaioresRiscosSacado[0].labels;
		 	this.barChartDataSacado = [
		 		{
		 			data: this.dadosMaioresRiscosSacado[0].data,
		 			backgroundColor: ['#4169E1', '#5F9EA0', '#3CB371', '#32CD32','#9ACD32', '#7B68EE', '#D2691E', '#8B4513', '#F08080', '#F08080'],
		 			label: "SACADOS"
		 		}
			 ] ;

			 this.isLoading = false;

			 
		 } ) ) ;

		

	}

	 ngOnDestroy() {
		this.subscriptions$.forEach(sub => sub.unsubscribe());
	}
}