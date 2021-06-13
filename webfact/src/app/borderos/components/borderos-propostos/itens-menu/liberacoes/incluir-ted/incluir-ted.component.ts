import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';

@Component({
	selector: 'app-incluir-ted',
	templateUrl: './incluir-ted.component.html',
	styleUrls: ['./incluir-ted.component.scss']
})
export class IncluirTedComponent implements OnInit {
	public filtrar: boolean;
	public ELEMENT_DATA: any[] = [
		{
			correntista: 'Ricardo Almeida',
			banco: '341',
			agencia: '5555',
			conta: '123456',
			cnpj: '10.111.111/00001-22',
			options: false
		},
		{
			correntista: 'Ricardo Almeida',
			banco: '341',
			agencia: '5555',
			conta: '123456',
			cnpj: '10.111.111/00001-22',
			options: true
		}
	];

	public displayedColumns: string[] = ['correntista', 'banco', 'agencia', 'conta', 'cnpj', 'options'];
	public dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

	constructor(private router: Router) {}

	ngOnInit() {
		this.filtrar = false;
		this.dataSource.paginator = this.paginator;
	}

	aplicarFiltro(f) {
		f ? (this.filtrar = false) : (this.filtrar = true);
	}

	close() {
		this.router.navigate(['core', 'layout', 'operacoes', 'borderos', 'layout', 'itens-menu', '1']);
	}
}
