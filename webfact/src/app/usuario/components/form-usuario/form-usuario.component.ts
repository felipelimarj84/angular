
import {
	Component,
	OnInit,
	Output,
	EventEmitter,
	Input,
	ViewChild,
	ElementRef,
	ɵConsole
} from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';

import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

import Configuracoes from '../../../../assets/Js/Config.js';
import { UsuarioService } from '../../services/service-usuario';

// import { ServiceNotificacoesService } from 'src/app/shared/services/service-notificacoes.service.js';

@Component({
	selector: 'app-form-usuario',
	templateUrl: './form-usuario.component.html',
	styleUrls: ['./form-usuario.component.scss']
})
export class FormUsuarioComponent implements OnInit {

	
	@Output() onClickFechar: EventEmitter<any> = new EventEmitter();

	formulario: FormGroup;
	files: Set<File>;
	imageURL: string;
	listaErros: string[];
	foto: string;

	paramlogin: string;

	private subscriptions$: Subscription[] = [];
	public dadosUsuario$: Observable<any>;
	public dadosUsuario: any;
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
		private formBuilder: FormBuilder,
		private serviceUsuario: UsuarioService,
		private router: ActivatedRoute,

		private notificacoes: MatSnackBar,
	) {


	}

	ngOnInit() {


		this.router.queryParams.subscribe(queryParams => {
			this.paramlogin = this.router.snapshot.params["login"];
		})
		
		this.dadosImagem$ = this.serviceUsuario.imagemDado$;
		this.serviceUsuario.Cedente = Configuracoes.ApelidoAutoProd;
		this.serviceUsuario.UrlBase = Configuracoes.UrlBase;
		this.dadosUsuario$ = this.serviceUsuario.DadosUsuario$;
		this.subscriptions$.push(this.router.data.subscribe(
			(info) => {
				this.dadosUsuario = info.usuario;
				this.preencheDados();
			}
		));
	}


	preencheDados() {
		this.foto = this.dadosUsuario.dadosComplementares.foto;
		if (this.foto && this.foto != "") {
			this.serviceUsuario.incluirImagem("data:image/jpeg;base64," + this.foto);
		}
		else {
			this.serviceUsuario.incluirImagem("");

		}

		this.formulario = this.formBuilder.group({
			apelido: [this.serviceUsuario.Cedente],


			login: [this.dadosUsuario.dadosComplementares.login],
			web1: [this.dadosUsuario.web1],
			web2: [this.dadosUsuario.web2],
			web3: [this.dadosUsuario.web3],
			web4: [this.dadosUsuario.web4],
			web5: [this.dadosUsuario.web5],
			web6: [this.dadosUsuario.web6],
			web7: [this.dadosUsuario.web7],
			web8: [this.dadosUsuario.web8],
			web9: [this.dadosUsuario.web9],
			web10: [this.dadosUsuario.web10],
			web11: [this.dadosUsuario.web11],
			web12: [this.dadosUsuario.web12],
			web13: [this.dadosUsuario.web13],
			web14: [this.dadosUsuario.web14],
			web15: [this.dadosUsuario.web15],
			web16: [this.dadosUsuario.web16],
			web17: [this.dadosUsuario.web17],
			web18: [this.dadosUsuario.web18],
			web19: [this.dadosUsuario.web19],
			web20: [this.dadosUsuario.web20],
			web21: [this.dadosUsuario.web21],
			web22: [this.dadosUsuario.web22],
			web23: [this.dadosUsuario.web23],
			web24: [this.dadosUsuario.web24],
			web25: [this.dadosUsuario.web25],
			web26: [this.dadosUsuario.web26],
			web27: [this.dadosUsuario.web27],
			web28: [this.dadosUsuario.web28],
			web29: [this.dadosUsuario.web29],
			web30: [this.dadosUsuario.web30],
			web31: [this.dadosUsuario.web31],
			web32: [this.dadosUsuario.web32],
			web15b: [this.dadosUsuario.web15b],
			web33: [this.dadosUsuario.web33],
			web34: [this.dadosUsuario.web34],
			web35: [this.dadosUsuario.web35],
			web36: [this.dadosUsuario.web36],
			digitaDanfeTitulo: [this.dadosUsuario.digitaDanfeTitulo],
			grandesoperacoes: [this.dadosUsuario.grandesoperacoes],
			weB37: [this.dadosUsuario.weB37],
			weB38: [this.dadosUsuario.weB38],
			web22b: [this.dadosUsuario.web22b],
			DadosComplementares: this.formBuilder.group({
				apelido: [this.serviceUsuario.Cedente],
				login: [this.dadosUsuario.dadosComplementares.login],
				email: [this.dadosUsuario.dadosComplementares.email],
				nome: [this.dadosUsuario.dadosComplementares.nome],
				foto: [this.dadosUsuario.dadosComplementares.foto]

			})
		});
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
					this.serviceUsuario.incluirImagem(this.imageURL);
				}
			}

		}
	}

	fecharErros() {
		this.listaErros = null;
	}

	ngOnDestroy() {
		this.subscriptions$.forEach(sub => sub.unsubscribe());
	}

	onSubmit() {

		if (this.paramlogin != undefined && this.paramlogin != "") {
			this.serviceUsuario.alterarUsuario(this.formulario.value, this.files)

				.pipe(tap())
				.subscribe(data => {
					this.listaErros = this.serviceUsuario.listaErros;
					if (this.listaErros && this.listaErros.length > 0) {

						this.erro("Não foi possível alterar o usuário, verifique os erros!");
					}
					else {
						if (this.imageURL) {
							this.serviceUsuario.incluirImagem(this.imageURL);
						}
						this.sucesso("Usuário alterado com sucesso!");
					}
				});
		}
		else {
			this.serviceUsuario.incluirUsuario(this.formulario.value, this.files)
				.pipe(tap())
				.subscribe(data => {
					this.listaErros = this.serviceUsuario.listaErros;
					if (this.listaErros && this.listaErros.length > 0) {
						 this.erro("Não foi possível incluir o usuário, verifique os erros!");
					}
					else {
						 this.sucesso("Usuário incluído com sucesso!");

					}
				});
		}
	}
}
