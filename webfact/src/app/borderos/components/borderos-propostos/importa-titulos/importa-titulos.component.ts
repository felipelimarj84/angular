import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-importa-titulos',
	templateUrl: './importa-titulos.component.html',
	styleUrls: ['./importa-titulos.component.scss']
})
export class ImportaTitulosComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit() {}

	close() {
		this.router.navigate(['core', 'layout', 'operacoes', 'borderos', 'layout']);
	}
}
