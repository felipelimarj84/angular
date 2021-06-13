import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServiceCoreService } from '../../services/service-core.service';
import { Subscription, Observable } from 'rxjs';

import Configuracoes from '../../../../assets/Js/Config.js';

@Component({
	selector: 'app-wf-header',
	templateUrl: './wf-header.component.html',
	styleUrls: ['./wf-header.component.scss']
})
export class WfHeaderComponent implements OnInit {
	public logo: string = 'assets/img/logo.png';
	public logoPersonalizado: string = '../../../../assets/img/logo-personalizado.png';

	private subscriptions$: Subscription[] = [];
	public dadosUsuario$: Observable<any>;
	public dadosImagem$: Observable<string>;


	@Input() isAuthenticated: boolean = false;
	
	@Output() onLoginClickEvent: EventEmitter<any> = new EventEmitter();


	constructor(private servicoCore: ServiceCoreService) {
	}

	ngOnInit() {
		this.dadosImagem$ = this.servicoCore.imagemDado$;
		this.servicoCore.Cedente = Configuracoes.ApelidoAutoProd;
		this.servicoCore.UrlBase = Configuracoes.UrlBase;
		this.dadosUsuario$ = this.servicoCore.dadosUsuario$;
		this.subscriptions$.push(this.servicoCore.obterLogoTema().subscribe((data) => {
		   this.preencheDados(data);
		}));
	}

	preencheDados(dados) {
		this.servicoCore.incluirImagem("data:image/jpeg;base64," + dados.logo);
	};

	onLoginClick() {
		this.onLoginClickEvent.emit();
	}

	ngOnDestroy() {
		this.subscriptions$.forEach(sub => sub.unsubscribe());
	}

}
