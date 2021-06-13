import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { tap, catchError, switchMap } from 'rxjs/operators';
import { TitulosConsultaModel } from '../consultas/models/titulos-consulta';

@Injectable({
	providedIn: 'root'
})
export class TitulosServiceService {
	Cedente: string;
	UrlBase: string;
	Controle: string;

	listaErros: string[];
	dadosConsultas: any[];
	dadosFiltro: any;

	public dadosConsultas$: BehaviorSubject<any>;
	public dadosFiltro$: BehaviorSubject<any>;

	constructor(private http: HttpClient) {
		this.Controle = '/Titulos';
		if (!this.dadosConsultas$) {
			this.dadosConsultas$ = new BehaviorSubject<any[]>(null);
		}
		if (!this.dadosFiltro$) {
			this.dadosFiltro$ = new BehaviorSubject<any>(null);
		}
	}

	get DadosConsultas$(): Observable<any[]> {
		return this.dadosConsultas$.asObservable();
	}

	get DadosFiltros$(): Observable<any> {
		return this.dadosFiltro$.asObservable();
	}

	ObterTitulosPagos(filtros: TitulosConsultaModel) {
		filtros.cedente = this.Cedente;
		return this.http.post<any[]>(this.UrlBase + this.Controle + '/Pagos-Analitico', filtros).pipe(
			tap((itens: any[]) => {
				this.dadosConsultas$.next(itens);
				this.dadosFiltro = filtros;
			}),

			catchError(error => {
				this.dadosConsultas$.next(null);
				return throwError(error);
			})
		);
	}



	ObterConsultaPagos(filtros: TitulosConsultaModel) {
		console.log(filtros);
 	    filtros.cedente = this.Cedente;
		return this.http.post<any>(this.UrlBase + this.Controle + '/Consistencia-Filtragem', filtros).pipe(
			tap(item => {
				this.listaErros = item.listaErros;
			}),
			switchMap(() => this.ObterTitulosPagos(filtros))
		);
	}


	
}
