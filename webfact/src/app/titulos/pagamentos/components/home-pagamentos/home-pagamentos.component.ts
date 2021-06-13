import { Component, OnInit } from '@angular/core';
import { MatRadioChange, MatRadioButton } from '@angular/material';

@Component({
	selector: 'app-home-pagamentos',
	templateUrl: './home-pagamentos.component.html',
	styleUrls: ['./home-pagamentos.component.scss']
})
export class HomePagamentosComponent implements OnInit {
	public opcao: string = '';

	constructor() {}

	ngOnInit() {}

	opcaoSelecionada(event: MatRadioButton) {
		this.opcao = event.value;
	}
}
