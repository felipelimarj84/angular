import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Subscription, Observable } from 'rxjs';
import { ServiceBorderosService } from 'src/app/borderos/services/service-borderos.service';
import Configuracoes from '../../../../../assets/Js/Config.js';

@Component({
	selector: 'app-home-liberacoes',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
	public displayedColumns: string[] = ['fp', 'correntista', 'valor', 'fstatus', 'motivo'];

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;

	isLoading = true;

	private subscriptions$: Subscription[] = [];
	public dadosListaLiberacao$: Observable<any[]>;

	public dataSource = new MatTableDataSource<any[]>();

	constructor(private servico: ServiceBorderosService) {}

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
		this.servico.Cedente = Configuracoes.ApelidoAutoProd;
		this.servico.UrlBase = Configuracoes.UrlBase;
		this.obterLiberacoes();
	}

	obterLiberacoes() {
		this.dataSource.paginator = this.paginator;
		this.dadosListaLiberacao$ = this.servico.dadosListaLiberacao$;
		this.subscriptions$.push(
			this.servico.ObterLiberacoes().subscribe(data => {
				this.dataSource = new MatTableDataSource(data);
				this.dataSource.data = data;
				this.dataSource.paginator = this.paginator;
				this.dataSource.sort = this.sort;
				this.isLoading = false;
			})
		);
	}

	ngOnDestroy(): void {
		this.subscriptions$.forEach(sub => sub.unsubscribe());
	}
}
