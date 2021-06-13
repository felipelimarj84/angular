import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-incluir-cheque',
	templateUrl: './incluir-cheque.component.html',
	styleUrls: ['./incluir-cheque.component.scss']
})
export class IncluirChequeComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit() {}

	close() {
		this.router.navigate(['core', 'layout', 'operacoes', 'borderos', 'layout', 'itens-menu', '0']);
	}
}
