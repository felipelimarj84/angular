import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
	selector: 'app-liberacoes',
	templateUrl: './liberacoes.component.html',
	styleUrls: ['./liberacoes.component.scss']
})
export class LiberacoesComponent implements OnInit {
	public ELEMENT_DATA: any[] = [
		{
			tipo: 'D',
			correntista: 'Ricardo Almeida',
			valor: '-705,00',
			status: 'recusado',
			motivo: 'INCLUÍDA AUTOMATICAMENTE'
		},
		{
			tipo: 'D',
			correntista: 'Ricardo Almeida',
			valor: '-705,00',
			status: 'recusado',
			motivo: 'INCLUÍDA AUTOMATICAMENTE'
		}
	];

	public displayedColumns: string[] = ['tipo', 'correntista', 'valor', 'status', 'motivo', 'options'];
	public dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

	constructor() {}

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
	}
}
