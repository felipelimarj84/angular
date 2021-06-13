import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { tap, catchError, map, switchMap } from 'rxjs/operators';
import { ListaUsuariosModel } from '../models/lista-usuario-model';

@Injectable()
export class UsuarioService {
	Cedente: string;
	UrlBase: string;
	Controle: string;

	dadosListaUsuarios: ListaUsuariosModel[];
	listaErros: string[];
	dadosUsuario: any;

	constructor(private http: HttpClient) {
		this.Controle = "/Usuario";
		if (!this.dadosListaUsuarios$) {
			this.dadosListaUsuarios$ = new BehaviorSubject<ListaUsuariosModel[]>(null);
		}

		if (!this.imagem$) {
			this.imagem$ = new BehaviorSubject<string>('');
		}

		if (!this.dadosUsuario$) {
			this.dadosUsuario$ = new BehaviorSubject<any>(null);
		}
	}


	public dadosListaUsuarios$: BehaviorSubject<ListaUsuariosModel[]>;
	public imagem$: BehaviorSubject<string>;
	public dadosUsuario$: BehaviorSubject<any>;

	get DadosListaUsuarios$(): Observable<ListaUsuariosModel[]> {
		return this.dadosListaUsuarios$.asObservable();
	}

	get imagemDado$(): Observable<string> {
		return this.imagem$.asObservable();
	}

	get DadosUsuario$(): Observable<any> {
		return this.dadosUsuario$.asObservable();
	}

	alterarUsuario(usuario: any, files: Set<File>) {
		const formData = this.retornaParametrosRequest(usuario, files);
		return this.http.post<any>(this.UrlBase + this.Controle + "/Alterar-Usuario", formData).pipe(
			tap((item) => {
				this.listaErros = item.listaErros;
			}),
			switchMap(() => this.ObterUsuariosDoSistema() )
		);
	}

	incluirUsuario(usuario: any, files: Set<File>) {
		const formData = this.retornaParametrosRequest(usuario, files);
		return this.http.post<any>(this.UrlBase + this.Controle + "/Incluir-Usuarios", formData).pipe(
			tap((item) => {
				this.listaErros = item.listaErros;
			}),
			switchMap(() => this.ObterUsuariosDoSistema())
		);
	}

	excluirUsuario(login: string) {
		let usuario = {
			apelido: this.Cedente,
			login: login
		};
		return this.http.post<any>(this.UrlBase + this.Controle +  "/Excluir-Usuario", usuario).pipe(
			tap((item) => {
				this.listaErros = item.listaErros;
			}),
			switchMap(() => this.ObterUsuariosDoSistema())
		);
	}


	dadosDefaultUsuario(login: string) {
		const parametro = new HttpParams().set("cedente", this.Cedente).set("login", login);
		return this.http.get<any>(this.UrlBase + this.Controle + "/Obter-Dados-Usuario-Default", { params: parametro })
		.pipe(
			tap( (itens: any) => { 
				 this.dadosUsuario$.next(itens);
				 this.dadosUsuario = itens;
			} ),
			catchError(error => {
				this.dadosUsuario$.next(null);
				return throwError(error);
			})
		);
	}

	dadosDefaultCedente() {
		const parametro = new HttpParams().set("cedente", this.Cedente);
		return this.http.get<any>(this.UrlBase + this.Controle + "/Obter-Dados-Cedente-Default", { params: parametro })
 		.pipe(
			tap( (itens: any) => { 
				 this.dadosUsuario$.next(itens);
				 this.dadosUsuario = itens;

			} ),
			catchError(error => {
				this.dadosUsuario$.next(null);
				return throwError(error);
			})
		);
	}

	ObterUsuariosDoSistema() {
		const parametro = new HttpParams().set("cedente", this.Cedente);
		return this.http.get<ListaUsuariosModel[]>(this.UrlBase + this.Controle + "/Obter-Usuarios-Sistema", { params: parametro })
			.pipe(
				tap((itens: ListaUsuariosModel[]) => this.dadosListaUsuarios$.next(itens)),
				catchError(error => {
					this.dadosListaUsuarios$.next(null);
					return throwError(error);
				})
			);
	}


	incluirImagem(dado: string) {
		this.imagem$.next(dado)
	}

	retornaParametrosRequest(usuario: any, files: Set<File>) {
		const formData = new FormData();
		if (files && files.size > 0) {
			files.forEach(file => formData.append('file', file, file.name));
		}
		formData.append('apelido', this.Cedente);
		formData.append('login', usuario.DadosComplementares.login);
		formData.append('email', usuario.DadosComplementares.email);
		formData.append('nome', usuario.DadosComplementares.nome);
		formData.append('web1', usuario.web1);
		formData.append('web2', usuario.web2);
		formData.append('web3', usuario.web3);
		formData.append('web4', usuario.web4);
		formData.append('web5', usuario.web5);
		formData.append('web6', usuario.web6);
		formData.append('web7', usuario.web7);
		formData.append('web8', usuario.web8);
		formData.append('web9', usuario.web9);
		formData.append('web10', usuario.web10);
		formData.append('web11', usuario.web11);
		formData.append('web12', usuario.web12);
		formData.append('web13', usuario.web13);
		formData.append('web14', usuario.web14);
		formData.append('web15', usuario.web15);
		formData.append('web16', usuario.web16);
		formData.append('web17', usuario.web17);
		formData.append('web18', usuario.web18);
		formData.append('web19', usuario.web19);
		formData.append('web20', usuario.web20);
		formData.append('web21', usuario.web21);
		formData.append('web22', usuario.web22);
		formData.append('web23', usuario.web23);
		formData.append('web24', usuario.web24);
		formData.append('web25', usuario.web25);
		formData.append('web26', usuario.web26);
		formData.append('web27', usuario.web27);
		formData.append('web28', usuario.web28);
		formData.append('web29', usuario.web29);
		formData.append('web30', usuario.web30);
		formData.append('web31', usuario.web31);
		formData.append('web32', usuario.web32);
		formData.append('web15b', usuario.web15b);
		formData.append('web33', usuario.web33);
		formData.append('web34', usuario.web34);
		formData.append('web35', usuario.web35);
		formData.append('web36', usuario.web36);
		formData.append('digitaDanfeTitulo', usuario.digitaDanfeTitulo);
		formData.append('grandesoperacoes', usuario.grandesoperacoes);
		formData.append('weB37', usuario.weB37);
		formData.append('weB38', usuario.weB38);
		formData.append('web22b', usuario.web22b);
		return formData;
	}


}
