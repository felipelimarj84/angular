import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

@Component({
	selector: 'app-filtrar-consultas',
	templateUrl: './filtrar-consultas.component.html',
	styleUrls: ['./filtrar-consultas.component.scss']
})
export class FiltrarConsultasComponent implements OnInit {

	tipoConsulta: string;
	periodoInicial: Date;
	periodoFinal: Date;


	// private subscriptions$: Subscription[] = [];
	// public dadosConsulta$: Observable<any[]>;
	// public dadosFiltro$: Observable<any>;

	// public dadosConsulta: any[];
	// public dadosFiltro: any;


	ngOnInit() {
		this.route.queryParams.subscribe(
			(queryParams: any) => {
			

				this.tipoConsulta = queryParams['tipoConsulta'];
				this.periodoInicial = queryParams['periodoInicial'];
				this.periodoFinal = queryParams['periodoFinal'];

               
			}
		);
	}


	public ELEMENT_DATA: any[] = [
		{
			operacao: 'Cobrança Simples',
			tipo: 'Duplicata',
			valorFace: 'R$ 705,00',
			descAbat: '',
			mora: '',
			valorPago: 'R$ 705,00'
		},
		{
			operacao: 'Cobrança Simples',
			tipo: 'Duplicata',
			valorFace: 'R$ 705,00',
			descAbat: '',
			mora: '',
			valorPago: 'R$ 705,00'
		}
	];

	public displayedColumns: string[] = ['operacao', 'tipo', 'valorFace', 'descAbat', 'mora', 'valorPago'];
	public dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

	public ELEMENT_DATA1: any[] = [
		{
			descricao: 'Duplicata',
			valorFace: 'R$ 705,00',
			descAbat: '',
			mora: '',
			valorPago: 'R$ 705,00'
		},
		{
			descricao: 'Duplicata',
			valorFace: 'R$ 705,00',
			descAbat: '',
			mora: '',
			valorPago: 'R$ 705,00'
		},
		{
			descricao: 'Total',
			valorFace: 'R$ 705,00',
			descAbat: '',
			mora: '',
			valorPago: 'R$ 705,00'
		}
	];

	public displayedColumns1: string[] = ['descricao', 'valorFace', 'descAbat', 'mora', 'valorPago'];
	public dataSource1 = new MatTableDataSource<any>(this.ELEMENT_DATA1);

	public ELEMENT_DATA2: any[] = [
		{
			tipoLiquidacao: 'Baixa',
			valorFace: 'R$ 705,00',
			descAbat: '',
			mora: '',
			valorPago: 'R$ 705,00'
		}
	];

	public displayedColumns2: string[] = ['tipoLiquidacao', 'valorFace', 'descAbat', 'mora', 'valorPago'];
	public dataSource2 = new MatTableDataSource<any>(this.ELEMENT_DATA2);

	public ELEMENT_DATA3: any[] = [
		{
			duplicata: '101854 - 3',
			cheque: '',
			vencimento: '23/09/2019',
			quitacao: '29/10/2019',
			sacado: 'Paulo Jose Pint',
			vlrFace: 'R$ 705,00',
			descAbat: 'R$ 705,00',
			mora: '',
			valorPago: 'R$ 705,00',
			tipoLiquidacao: 'Baixa',
			situacao: 'Baixa-29/10',
			bordero: '27',
			empresa: 'Crescer'
		}
	];




	public displayedColumns3: string[] = ['duplicata', 'cheque', 'vencimento', 'quitacao', 'sacado', 'vlrFace', 'vlrDescAbatMora', 'vlrPago', 'tipoLiquidacao', 'situacao', 'bordero', 'empresa'];

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;
	isLoading = false;

	public dataSource3 = new MatTableDataSource<any>(this.ELEMENT_DATA3);

	constructor(private router: Router, private route: ActivatedRoute) 
	{
		
	}

	

	close() {
		this.router.navigate(['core', 'layout', 'titulos', 'consultas', 'layout']);
	}
}
