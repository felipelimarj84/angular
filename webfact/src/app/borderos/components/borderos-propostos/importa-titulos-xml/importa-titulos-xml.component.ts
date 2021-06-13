import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-importa-titulos-xml',
	templateUrl: './importa-titulos-xml.component.html',
	styleUrls: ['./importa-titulos-xml.component.scss']
})
export class ImportaTitulosXmlComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit() {}

	close() {
		this.router.navigate(['core', 'layout', 'operacoes', 'borderos', 'layout']);
	}
}
