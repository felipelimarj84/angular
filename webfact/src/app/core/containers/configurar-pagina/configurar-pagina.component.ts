import { Component, OnInit, ɵConsole } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { actionSettingsChangeTheme } from 'src/app/store/actions/settings.actions';
import { AppState } from 'src/app/store/reducers/index.reducers';
import { selectTheme } from 'src/app/store/selectors/settings.selectors';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';


import { tap } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';


import Configuracoes from '../../../../assets/Js/Config.js';
import { ServiceCoreService } from '../../services/service-core.service';
import { ConfigModel } from 'src/app/shared/models/config-model.js';


@Component({
	selector: 'app-configurar-pagina',
	templateUrl: './configurar-pagina.component.html',
	styleUrls: ['./configurar-pagina.component.scss']
})
export class ConfigurarPaginaComponent implements OnInit {

	public logoPersonalizado: string; // = '../../../../assets/img/logo-personalizado.png';
	public subscription: Subscription[] = [];
	public temaAtual: string;
	
	files: Set<File>;
	imageURL: string;
	listaErros: string[];
	modelo: ConfigModel;

	private subscriptions$: Subscription[] = [];
	public dadosUsuario$: Observable<any>;
	public dadosImagem$: Observable<string>;


	config: MatSnackBarConfig = {
		duration: 3000,
		horizontalPosition: "right",
		verticalPosition: 'top'
	}

	sucesso(msg: string) {
		this.config['panelClass'] = ['notification', 'success'];
		this.notificacoes.open(":) " + msg, "", this.config);
	}

	erro(msg: string) {
		this.config['panelClass'] = ['notification', 'error'];
		this.notificacoes.open(":( " + msg, "", this.config);
	}


	constructor(
		private store: Store<AppState>,
		private servicoCore: ServiceCoreService,
		private notificacoes: MatSnackBar

	) {

		 this.subscription.push(
		 	 this.store
		 	 	.pipe(
		 	 		select(selectTheme),
		 	 		tap((tema: string) => {
		 	 			this.temaAtual = tema;
		 	 		})
		 	 	)
		 	 	.subscribe()
		 )

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

	gravar(){
		this.servicoCore.incluirConfiguracao(this.temaAtual, this.files)
		.pipe(tap())
		.subscribe(data => {
			this.preencheDados(data);
			this.listaErros = this.servicoCore.listaErros;
			if (this.listaErros && this.listaErros.length > 0) {
				 this.erro("Não foi possível incluir a configuração, verifique os erros!");
			}
			else {
				 this.sucesso("Configurado com sucesso!");
			}
		});
	}

	preencheDados(dados) {
		this.servicoCore.incluirImagem("data:image/jpeg;base64," + dados.logo);
		this.temaAtual = dados.tema;
		this.store.dispatch(actionSettingsChangeTheme({ theme: dados.tema }));
	};

	onChange(event) {
		if (event.target.files && event.target.files.length) {
			const selectedFiles = <FileList>event.srcElement.files;
			const fileNames = [];
			this.files = new Set();
			if (selectedFiles.length > 0) {
				const file = (event.target as HTMLInputElement).files[0];
				fileNames.push(selectedFiles[0].name);
				this.files.add(selectedFiles[0]);
				const reader = new FileReader();
				reader.readAsDataURL(file);
				reader.onload = () => {
					this.imageURL = reader.result as string;
					this.servicoCore.incluirImagem(this.imageURL);
					this.gravar();
				}
			}
		}
	}

	onThemeSelect(tema: string) {
		this.store.dispatch(actionSettingsChangeTheme({ theme: tema }));
		this.temaAtual = tema;
		this.gravar();
	}

	ngOnDestroy() {
		this.subscriptions$.forEach(sub => sub.unsubscribe());
	}

}
