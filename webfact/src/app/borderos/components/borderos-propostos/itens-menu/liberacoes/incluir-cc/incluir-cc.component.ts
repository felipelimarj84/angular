import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-incluir-cc',
	templateUrl: './incluir-cc.component.html',
	styleUrls: ['./incluir-cc.component.scss']
})
export class IncluirCcComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit() {}

	close() {
		this.router.navigate(['core', 'layout', 'operacoes', 'borderos', 'layout', 'itens-menu', '1']);
	}
}
