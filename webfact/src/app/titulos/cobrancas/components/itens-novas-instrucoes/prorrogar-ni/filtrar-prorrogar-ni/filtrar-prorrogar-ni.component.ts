import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

@Component({
	selector: 'app-filtrar-prorrogar-ni',
	templateUrl: './filtrar-prorrogar-ni.component.html',
	styleUrls: ['./filtrar-prorrogar-ni.component.scss']
})
export class FiltrarProrrogarNiComponent implements OnInit {
	public ELEMENT_DATA: any[] = [
		{
			titulo: 'DP 103289 - 2',
			valor: 'R$ 705,00',
			sacadoEmitente: 'COMBRAS 2000',
			vencOriginal: '12/12/2019',
			vencAtual: '12/12/2019',
			sequencial: '1374959',
			tipoOperacao: 'AQUISIÇÃO',
			situacaoBoleto: 'Em Cobrança',
			situacao: 'Em Cobrança'
		},
		{
			titulo: 'DP 103289 - 2',
			valor: 'R$ 705,00',
			sacadoEmitente: 'COMBRAS 2000',
			vencOriginal: '12/12/2019',
			vencAtual: '12/12/2019',
			sequencial: '1374959',
			tipoOperacao: 'AQUISIÇÃO',
			situacaoBoleto: 'Em Cobrança',
			situacao: 'Em Cobrança'
		}
	];

	public displayedColumns: string[] = [
		'titulo',
		'valor',
		'sacadoEmitente',
		'vencOriginal',
		'vencAtual',
		'sequencial',
		'tipoOperacao',
		'situacaoBoleto',
		'situacao',
		'options'
	];
	public dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

	constructor(private router: Router) {}

	ngOnInit() {}

	close() {
		this.router.navigate(['core', 'layout', 'titulos', 'cobrancas', 'layout', 'novas-instrucoes', '0']);
	}
}
