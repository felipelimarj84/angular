import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
	selector: 'app-home-cobrancas',
	templateUrl: './home-cobrancas.component.html',
	styleUrls: ['./home-cobrancas.component.scss']
})
export class HomeCobrancasComponent implements OnInit {
	public ELEMENT_DATA: any[] = [
		{
			solicitacao: 'Prorrogar',
			titulo: 'DP.100289-2',
			sacadoEmitente: 'COMBRAS 2000',
			valor: 'R$705,00',
			novovencimento: '18/03/2020',
			abatimento: '',
			situacao: 'Cancelada'
		},
		{
			solicitacao: 'Prorrogar',
			titulo: 'DP.100289-2',
			sacadoEmitente: 'COMBRAS 2000',
			valor: 'R$705,00',
			novovencimento: '18/03/2020',
			abatimento: '',
			situacao: 'Cancelada'
		}
	];

	public displayedColumns: string[] = [
		'solicitacao',
		'titulo',
		'sacadoEmitente',
		'valor',
		'novovencimento',
		'abatimento',
		'situacao',
		'options'
	];
	public dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

	constructor() {}

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
	}
}
