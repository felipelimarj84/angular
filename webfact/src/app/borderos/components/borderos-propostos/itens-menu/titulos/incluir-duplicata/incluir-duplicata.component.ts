import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-incluir-duplicata',
	templateUrl: './incluir-duplicata.component.html',
	styleUrls: ['./incluir-duplicata.component.scss']
})
export class IncluirDuplicataComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit() {}

	close() {
		this.router.navigate(['core', 'layout', 'operacoes', 'borderos', 'layout', 'itens-menu', '0']);
	}
}
