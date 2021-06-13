import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { tap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ServiceCoreService {


  Cedente: string;
  UrlBase: string;
  Controle: string;

  listaErros: string[];
  dadosUsuario: any;

  constructor(private http: HttpClient) {
    this.Controle = "/Usuario";

    if (!this.imagem$) {
      this.imagem$ = new BehaviorSubject<string>('');
    }

    if (!this.dadosUsuario$) {
      this.dadosUsuario$ = new BehaviorSubject<any>(null);
    }
  }

  public imagem$: BehaviorSubject<string>;
  public dadosUsuario$: BehaviorSubject<any>;

  get imagemDado$(): Observable<string> {
    return this.imagem$.asObservable();
  }

  get DadosUsuario$(): Observable<any> {
    return this.dadosUsuario$.asObservable();
  }

  incluirImagem(dado: string) {
    this.imagem$.next(dado);
  }


	 incluirConfiguracao(tema: string, files: Set<File>) {
	 	const formData = this.retornaParametrosRequest(tema, files);
	 	return this.http.post<any>(this.UrlBase + this.Controle + "/Configurar-Logo-Tema", formData).pipe(
	 		tap((item) => {
         this.listaErros = item.listaErros;
         this.dadosUsuario$.next(item);
	 		}),
     switchMap(() => this.obterLogoTema())
     );
   }


      
   obterLogoTema() {
    return this.http.get<any>(this.UrlBase + this.Controle + "/Obter-Logo-Tema")
    .pipe(
      tap((item) => {
        this.dadosUsuario$.next(item)
      })
    );
  }

  retornaParametrosRequest(tema: string, files: Set<File>) {
		const formData = new FormData();
		if (files && files.size > 0) {
			files.forEach(file => formData.append('file', file, file.name));
		}
		formData.append('TEMA', tema);
		return formData;
	}
}



