import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-incluir-especie',
	templateUrl: './incluir-especie.component.html',
	styleUrls: ['./incluir-especie.component.scss']
})
export class IncluirEspecieComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit() {}

	close() {
		this.router.navigate(['core', 'layout', 'operacoes', 'borderos', 'layout', 'itens-menu', '1']);
	}
}
