import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { tap, catchError, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ServiceBorderosService {
  Cedente: string;
	UrlBase: string;
	ControleBordero: string;
	ControleProposta: String;

  listaErros: string[];

  dadosListaBorderos: any[];
  dadosListaPropostas: any[];
  dadosListaLiberacao: any[];
  dadosListaPendencia: any[];

	
  public dadosListaBordero$: BehaviorSubject<any[]>;
  public dadosListaProposta$: BehaviorSubject<any[]>;
  public dadosListaLiberacao$: BehaviorSubject<any[]>;
  public dadosListaPendencia$: BehaviorSubject<any[]>;

  get DadosListaBordero$(): Observable<any[]> {
		return this.dadosListaBordero$.asObservable();
	}

  get DadosListaProposta$(): Observable<any[]> {
		return this.dadosListaProposta$.asObservable();
	}

	get DadosListaLiberacao$(): Observable<any[]> {
		return this.dadosListaLiberacao$.asObservable();
	}

	get DadosListaPendencia$(): Observable<any[]> {
		return this.dadosListaPendencia$.asObservable();
	}



  constructor(private http: HttpClient) { 
		this.ControleBordero = 	"/Bordero";
		this.ControleProposta = "/Propostas";
		if (!this.dadosListaBordero$) {
			this.dadosListaBordero$ = new BehaviorSubject<any[]>(null);
		}

		if (!this.dadosListaProposta$) {
			this.dadosListaProposta$ = new BehaviorSubject<any[]>(null);
		}

		if (!this.dadosListaLiberacao$) {
			this.dadosListaLiberacao$ = new BehaviorSubject<any[]>(null);
		}

		if (!this.dadosListaPendencia$) {
			this.dadosListaPendencia$ = new BehaviorSubject<any[]>(null);
		}

  }

  ObterBorderos(bordero: string) {
		const parametro = new HttpParams().set("cedente", this.Cedente).set("bordero", bordero);
		return this.http.get<any[]>(this.UrlBase + this.ControleBordero + "/Obter-Borderos", { params: parametro })
			.pipe(
				tap((itens: any[]) => this.dadosListaBordero$.next(itens)),
				catchError(error => {
					this.dadosListaBordero$.next(null);
					return throwError(error);
				})
			);
	}

	ObterPropostas() {
		const parametro = new HttpParams().set("cedente", this.Cedente);
		return this.http.get<any[]>(this.UrlBase + this.ControleProposta + "/Obter-Propostas", { params: parametro })
			.pipe(
				tap((itens: any[]) => this.dadosListaProposta$.next(itens)),
				catchError(error => {
					this.dadosListaProposta$.next(null);
					return throwError(error);
				})
			);
	}

	ObterLiberacoes() {
		const parametro = new HttpParams().set("cedente", this.Cedente);
		return this.http.get<any[]>(this.UrlBase + this.ControleProposta + "/Obter-Liberacoes", { params: parametro })
			.pipe(
				tap((itens: any[]) => this.dadosListaLiberacao$.next(itens)),
				catchError(error => {
					this.dadosListaLiberacao$.next(null);
					return throwError(error);
				})
			);
	}

	ObterPendencias() {
		const parametro = new HttpParams().set("cedente", this.Cedente);
		return this.http.get<any[]>(this.UrlBase + this.ControleProposta + "/Obter-Pendencias", { params: parametro })
			.pipe(
				tap((itens: any[]) => this.dadosListaPendencia$.next(itens)),
				catchError(error => {
					this.dadosListaPendencia$.next(null);
					return throwError(error);
				})
			);
	}

}
