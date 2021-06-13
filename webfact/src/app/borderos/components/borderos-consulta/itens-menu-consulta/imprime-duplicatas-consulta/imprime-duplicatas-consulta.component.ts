import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
	selector: 'app-imprime-duplicatas-consulta',
	templateUrl: './imprime-duplicatas-consulta.component.html',
	styleUrls: ['./imprime-duplicatas-consulta.component.scss']
})
export class ImprimeDuplicatasConsultaComponent implements OnInit {
	public ELEMENT_DATA: any[] = [
		{
			marca: 'D',
			sequencial: '1116449',
			duplicata: '1058/01',
			cnpj: '0000000000/1000',
			vencimento: '31/03/2020',
			sacado: 'Sacado Geral',
			desconto: '',
			valor: 'R$ 1.200,00'
		},
		{
			marca: 'D',
			sequencial: '1116449',
			duplicata: '1058/01',
			cnpj: '0000000000/1000',
			vencimento: '31/03/2020',
			sacado: 'Campo Informativo',
			desconto: '',
			valor: 'R$ 1.200,00'
		}
	];

	public displayedColumns: string[] = [
		'check',
		'marca',
		'sequencial',
		'duplicata',
		'cnpj',
		'vencimento',
		'sacado',
		'desconto',
		'valor',
		'options'
	];

	public dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

	constructor() {}

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
	}
}
