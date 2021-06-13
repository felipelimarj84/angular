import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
	selector: 'app-titulos',
	templateUrl: './titulos.component.html',
	styleUrls: ['./titulos.component.scss']
})
export class TitulosComponent implements OnInit {
	public ELEMENT_DATA: any[] = [
		{
			tipo: 'D',
			titulo: '1001/01',
			cnpj: '111111111111111',
			apelido: 'SACADO GERAL',
			vencimento: '31/03/2020',
			desconto: '',
			valor: '1.200,00',
			sequencial: '1115384',
			fatura: 'fatura'
		},
		{
			tipo: 'D',
			titulo: '1001/01',
			cnpj: '111111111111111',
			apelido: 'SACADO GERAL',
			vencimento: '31/03/2020',
			desconto: '',
			valor: '1.200,00',
			sequencial: '1115384',
			fatura: 'fatura'
		}
	];

	public displayedColumns: string[] = [
		'check',
		'tipo',
		'titulo',
		'cnpj',
		'apelido',
		'vencimento',
		'desconto',
		'valor',
		'sequencial',
		'fatura',
		'options'
	];
	public dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

	constructor() {}

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
	}
}
