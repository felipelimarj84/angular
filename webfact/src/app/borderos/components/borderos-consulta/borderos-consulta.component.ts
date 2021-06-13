import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { MatTableDataSource, MatPaginator,  MatSortModule, MatSort } from '@angular/material';

import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers/index.reducers';
import { selectEffectiveTheme } from 'src/app/store/selectors/settings.selectors';

import { Subscription } from 'rxjs';
import Configuracoes from '../../../../assets/Js/Config.js';
import { ServiceBorderosService } from '../../services/service-borderos.service.js';


export interface BorderoConsulta {
  data_cadastro: Date;
  bordero: number;
  vtt: number;
  tipoextenso: string;
}

@Component({
	selector: 'app-borderos-consulta',
	templateUrl: './borderos-consulta.component.html',
	styleUrls: ['./borderos-consulta.component.scss']
})

export class BorderosConsultaComponent implements OnInit {

	theme$: Observable<string>;

	isLoading = true;

	private subscriptions$: Subscription[] = [];
	public dadosListaBordero$: Observable<any[]>;
	public dadosListaProposta$: Observable<any[]>;

	public displayedColumns: string[] = ['data_cadastro', 'bordero', 'vtt', 'tipoextenso', 'options'];
	public dataSource = new MatTableDataSource<BorderoConsulta[]>();

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;   

	constructor(private servico: ServiceBorderosService, private store: Store<AppState>) {}

	ngOnInit() {
		this.servico.Cedente = Configuracoes.ApelidoAutoProd;
		this.servico.UrlBase = Configuracoes.UrlBase;
		this.theme$ = this.store.pipe(select(selectEffectiveTheme));
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
		this.obterBorderos("0");
   } 
	 
	obterBorderos(bordero: string){
		if(!bordero) bordero="0";
		this.dataSource.paginator = this.paginator;
		this.dadosListaBordero$ = this.servico.dadosListaBordero$;
		this.subscriptions$.push(this.servico.ObterBorderos(bordero).subscribe(
			data => {
    			this.dataSource = new MatTableDataSource(data);
				this.dataSource.data = data;
				this.dataSource.paginator = this.paginator;
				this.dataSource.sort = this.sort;
				this.isLoading = false;
			}
		));
	 }

	ngOnDestroy(): void {
		this.subscriptions$.forEach(sub => sub.unsubscribe());
	}

}
