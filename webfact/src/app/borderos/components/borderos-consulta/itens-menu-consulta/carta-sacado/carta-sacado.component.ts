import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
	selector: 'app-carta-sacado',
	templateUrl: './carta-sacado.component.html',
	styleUrls: ['./carta-sacado.component.scss']
})
export class CartaSacadoComponent implements OnInit {
	public ELEMENT_DATA: any[] = [
		{
			nome: 'AFONSO FILHO ITAJOBI',
			total: 'R$ 5.543,66'
		},
		{
			nome: 'COMERCIAL ALVES NETO TINTAS LTDA',
			total: 'R$ 4.444,91'
		},
		{
			nome: 'DISPLAY RIO MOVEIS INDUSTRIA E COMERCIO',
			total: 'R$ 1.676,14'
		}
	];

	public displayedColumns: string[] = ['nome', 'total', 'options'];
	public dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

	constructor() {}

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
	}
}
