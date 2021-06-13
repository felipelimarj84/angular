import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-nova-proposta',
	templateUrl: './nova-proposta.component.html',
	styleUrls: ['./nova-proposta.component.scss']
})
export class NovaPropostaComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit() {}

	close() {
		this.router.navigate(['core', 'layout', 'operacoes', 'borderos', 'layout']);
	}
}
