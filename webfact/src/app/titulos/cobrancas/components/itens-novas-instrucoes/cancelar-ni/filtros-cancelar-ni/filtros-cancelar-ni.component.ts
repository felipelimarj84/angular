import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
	selector: 'app-filtros-cancelar-ni',
	templateUrl: './filtros-cancelar-ni.component.html',
	styleUrls: ['./filtros-cancelar-ni.component.scss']
})
export class FiltrosCancelarNiComponent implements OnInit {
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
		this.router.navigate(['core', 'layout', 'titulos', 'cobrancas', 'layout', 'novas-instrucoes', '2']);
	}
}
