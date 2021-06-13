import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-imprime-carta-sacado',
	templateUrl: './imprime-carta-sacado.component.html',
	styleUrls: ['./imprime-carta-sacado.component.scss']
})
export class ImprimeCartaSacadoComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit() {}

	close() {
		this.router.navigate([
			'core',
			'layout',
			'operacoes',
			'borderos',
			'layout',
			'itens-menu-consulta',
			'2'
		]);
	}
}
