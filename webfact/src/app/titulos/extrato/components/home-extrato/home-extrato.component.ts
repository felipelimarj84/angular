import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
	selector: 'app-home-extrato',
	templateUrl: './home-extrato.component.html',
	styleUrls: ['./home-extrato.component.scss']
})
export class HomeExtratoComponent implements OnInit {
	public ELEMENT_DATA: any[] = [
		{
			data: '27/02/2020',
			descricao: 'COR CC',
			complemento: 'CORREÇÃO SALDO DEVEDOR',
			debito: 'R$-1,295.84',
			credito: '',
			saldo: '-1,298.95',
			empresa: 'CRESCER'
		},
		{
			data: '27/02/2020',
			descricao: 'COR CC',
			complemento: 'CORREÇÃO SALDO DEVEDOR',
			debito: 'R$-1,295.84',
			credito: '',
			saldo: '-1,298.95',
			empresa: 'CRESCER'
		}
	];

	public displayedColumns: string[] = [
		'data',
		'descricao',
		'complemento',
		'debito',
		'credito',
		'saldo',
		'empresa'
	];
	public dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

	constructor() {}

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
	}
}
