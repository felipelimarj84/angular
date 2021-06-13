import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subscription, Observable } from 'rxjs';
import { ServiceBorderosService } from 'src/app/borderos/services/service-borderos.service';
import Configuracoes from '../../../../../assets/Js/Config.js';


@Component({
	selector: 'app-layout-doc-pendentes',
	templateUrl: './layout-doc-pendentes.component.html',
	styleUrls: ['./layout-doc-pendentes.component.scss'],
	animations: [
		trigger('detailExpand', [
			state('collapsed', style({ height: '0px', minHeight: '0' })),
			state('expanded', style({ height: '*' })),
			transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
		])
	]
})
export class LayoutDocPendentesComponent implements OnInit, OnDestroy {

	public displayedColumns: string[] = ['tipO_PENDENCIA', 'pendencia', 'empresa', 'complemento', 'options'];

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, {static: true} ) sort: MatSort;

	isLoading = true;

	private subscriptions$: Subscription[] = [];
	public dadosListaPendencia$: Observable<any[]>;

	public dataSource = new MatTableDataSource<any[]>();

	constructor(private servico: ServiceBorderosService) {}

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
		this.servico.Cedente = Configuracoes.ApelidoAutoProd;
		this.servico.UrlBase = Configuracoes.UrlBase;
		this.obterPendencias();
	}

	obterPendencias(){
		this.dataSource.paginator = this.paginator;
		this.dadosListaPendencia$ = this.servico.dadosListaPendencia$;
		this.subscriptions$.push(this.servico.ObterPendencias().subscribe(
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
