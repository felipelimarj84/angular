import { Component, OnInit, Output, EventEmitter, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers/index.reducers';
import { selectEffectiveTheme } from 'src/app/store/selectors/settings.selectors';
import { MatSort } from '@angular/material';
import { ServiceBorderosService } from '../../services/service-borderos.service';
import Configuracoes from '../../../../assets/Js/Config.js';

@Component({
	selector: 'app-borderos-propostos',
	templateUrl: './borderos-propostos.component.html',
	styleUrls: ['./borderos-propostos.component.scss']
})
export class BorderosPropostosComponent implements OnInit, OnDestroy {
	theme$: Observable<string>;

	public displayedColumns: string[] = [
		'data',
		'numero',
		'status',
		'bordero',
		'qtD_APROVADOS',
		'vlR_APROVADOS',
		'qtD_REP_TOT',
		'vlR_REP_TOT',
		'qtD_PROPOSTOS',
		'vlR_PROPOSTOS',
		'p_PAGO',
		'options'
	];
	
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, {static: true} ) sort: MatSort;

	isLoading = true;

	private subscriptions$: Subscription[] = [];
	public dadosListaProposta$: Observable<any[]>;

	public dataSource = new MatTableDataSource<any[]>();

	constructor(private servico: ServiceBorderosService, private store: Store<AppState>) {}

	ngOnInit() {
		this.theme$ = this.store.pipe(select(selectEffectiveTheme));
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
		this.servico.Cedente = Configuracoes.ApelidoAutoProd;
		this.servico.UrlBase = Configuracoes.UrlBase;
		this.obterPropostas("0");
	}


	obterPropostas(bordero: string){
		this.dataSource.paginator = this.paginator;
		this.dadosListaProposta$ = this.servico.dadosListaProposta$;
		this.subscriptions$.push(this.servico.ObterPropostas().subscribe(
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


	// novaProposta() {
	// 	this.onClickNovaProposta.emit();
	// }

	// importaTitulos() {
	// 	this.onClickImportaTitulos.emit();
	// }

	// importaTitulosXml() {
	// 	this.onClickImportaTitulosXml.emit();
	// }

	// borderoPropostosItens() {
	// 	this.onClickBorderoPropostosItens.emit();
	// }
}
