import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-lib-incluir-especie',
	templateUrl: './lib-incluir-especie.component.html',
	styleUrls: ['./lib-incluir-especie.component.scss']
})
export class LibIncluirEspecieComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit() {}

	close() {
		this.router.navigate(['core', 'layout', 'operacoes', 'liberacoes', 'layout']);
	}
}
