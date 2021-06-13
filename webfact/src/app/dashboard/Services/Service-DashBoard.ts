import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient,  HttpParams } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { DashBoardModel } from 'src/app/shared/models/DashBoardModel';

@Injectable()
export class DashBoardService {
	Cedente: string;
	UrlBase: string;
	Controle: string;

	dadosDashBoard: DashBoardModel;
	public dadosDashBoard$: BehaviorSubject<DashBoardModel>;
	

	constructor(private http: HttpClient) {
		this.Controle = "/DashBoard";
		if(!this.dadosDashBoard$)
 		 {
		 	 this.dadosDashBoard$ = new BehaviorSubject<DashBoardModel>(null);
		 }
	}

	 get dadosDashboard$(): Observable<DashBoardModel> {
	  	return this.dadosDashBoard$.asObservable();
	 }

     ObterDashBoard() {
	 	const parametro = new HttpParams().set("cedente",this.Cedente);		
	 	return this.http.get<DashBoardModel>(this.UrlBase + this.Controle + "/Obter-DashBoards" , { params:parametro})
	 		 .pipe(
	 		 	tap((itens: DashBoardModel) => this.dadosDashBoard$.next(itens)),
	 		 	catchError(error => {
	 		 		this.dadosDashBoard$.next(null);
	 		 		return throwError(error);
	 		 	})
	 		 );
	 }

}
