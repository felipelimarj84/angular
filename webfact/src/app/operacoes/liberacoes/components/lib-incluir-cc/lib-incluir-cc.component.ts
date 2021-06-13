import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-lib-incluir-cc',
	templateUrl: './lib-incluir-cc.component.html',
	styleUrls: ['./lib-incluir-cc.component.scss']
})
export class LibIncluirCcComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit() {}

	close() {
		this.router.navigate(['core', 'layout', 'operacoes', 'liberacoes', 'layout']);
	}
}
