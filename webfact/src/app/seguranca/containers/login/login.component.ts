import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers/index.reducers';
import { authLogin } from 'src/app/store/actions/auth.actions';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	public logo: string = 'assets/img/logo.png';
	public logoPersonalizado: string = 'assets/img/logo-personalizado.png';
	classImagem: string;
	arrayFundos: string[] = ['imagem-1', 'imagem-2', 'imagem-3', 'imagem-4', 'imagem-5'];

	constructor(private store: Store<AppState>) {}

	ngOnInit() {
		this.classImagem = this.arrayFundos[Math.floor(Math.random() * this.arrayFundos.length)];
	}

	onLoginClick() {
		this.store.dispatch(authLogin({ usuario: '', senha: '' }));
	}
}
