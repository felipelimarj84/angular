import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { TitulosServiceService } from '../../../services/titulos-service.service';
import Configuracoes from '../../../../../assets/Js/Config.js';
import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { TitulosConsultaModel } from '../../models/titulos-consulta';

@Component({
	selector: 'app-home-consultas',
	templateUrl: './home-consultas.component.html',
	styleUrls: ['./home-consultas.component.scss']
})

export class HomeConsultasComponent implements OnInit {
	public aVencer: boolean = false;
	public vencidos: boolean = false;
	public pagos: boolean = false;
	public renegociados: boolean = false;
	public tipoRel = "";
	public tipoConsulta;
	public titulos: any;

	listaErros: string[];
	formFiltros: FormGroup;

	public displayedColumns3: string[] = ['duplicata', 'cheque', 'vencimento', 'quitacao', 'sacado', 'vlrFace', 'vlrDescAbat',  'vlrPago', 'mora', 'tipoLiquidacao', 'situacao', 'bordero', 'empresa'];

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;
	isLoading = false;


	private subscriptions$: Subscription[] = [];
	public dadosConsulta$: Observable<any[]>;
	public dadosFiltro$: Observable<any>;

	filtros: TitulosConsultaModel;

	public dadosConsulta: any[];
	public dadosFiltro: any;

	public dataSource3 = new MatTableDataSource<any[]>();


	constructor(
		private formBuilder: FormBuilder,
		private servico: TitulosServiceService,
		private router: Router
	) { }

	ngOnInit() {
		this.dataSource3.paginator = this.paginator;
		this.dataSource3.sort = this.sort;
		this.servico.Cedente = Configuracoes.ApelidoAutoProd;
		this.servico.UrlBase = Configuracoes.UrlBase;

		this.formFiltros = this.formBuilder.group({
			tipoConsulta: ["0"],
			periodoInicial: ["01/01/1900"],
			periodoFinal: ["31/12/2999"],
			cadastroInicial: ["01/01/1900"],
			cadastroFinal: ["31/12/2999"],
			tipoOperacao: ["0"],
			tipoTitulo: ["T"],
			valor: [0.00],
			cnpj: [""],
			titulo: [""]
		});
		this.marcarBtn('pagos');
	}


	onSubmit() {
		this.servico.Cedente = Configuracoes.ApelidoAutoProd;
		this.servico.UrlBase = Configuracoes.UrlBase;

		if (this.tipoRel == 'pagos') {
			this.obterPagos();
		}

 	    // this.router.navigate(['core', 'layout', 'titulos', 'consultas', 'layout', 'filtrar-consultas']);

		//this.router.navigate(['core', 'layout', 'titulos', 'consultas', 'layout', 'filtrar-consultas'],
		//  	{
		//		queryParams: this.formFiltros.value
		//	}
		//);


	}

	obterPagos(){
		this.isLoading = true;
		this.dadosConsulta$ = this.servico.dadosConsultas$;
		this.dataSource3.paginator = this.paginator;
		this.dataSource3.sort = this.sort;
		this.filtros = this.formFiltros.value;
     	this.subscriptions$.push(this.servico.ObterConsultaPagos(this.formFiltros.value).subscribe(
			data => {
				console.log(data)
				this.dataSource3 = new MatTableDataSource(data);
				this.dataSource3.data = data;
				this.dataSource3.paginator = this.paginator;
				this.dataSource3.sort = this.sort;
				this.isLoading = false;
			}
		));
	 }


	ngOnDestroy() {
		this.subscriptions$.forEach(sub => sub.unsubscribe());
	}


	marcarBtn(btn: string) {
		this.tipoRel = btn;
		switch (btn) {
			case 'aVencer': {
				this.aVencer ? (this.aVencer = false) : (this.aVencer = true);
				this.vencidos = false;
				this.pagos = false;
				this.renegociados = false;
				break;
			}
			case 'vencidos': {
				this.vencidos ? (this.vencidos = false) : (this.vencidos = true);
				this.aVencer = false;
				this.pagos = false;
				this.renegociados = false;
				break;
			}
			case 'pagos': {
				this.pagos ? (this.pagos = false) : (this.pagos = true);
				this.aVencer = false;
				this.vencidos = false;
				this.renegociados = false;
				break;
			}
			case 'renegociados': {
				this.renegociados ? (this.renegociados = false) : (this.renegociados = true);
				this.aVencer = false;
				this.vencidos = false;
				this.pagos = false;
				break;
			}
		}
	}
}
