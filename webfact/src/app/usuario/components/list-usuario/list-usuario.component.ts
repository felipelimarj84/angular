import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ListaUsuariosModel } from '../../models/lista-usuario-model';
import { Subscription, Observable } from 'rxjs';
import { UsuarioService } from '../../services/service-usuario';
import Configuracoes from '../../../../assets/Js/Config.js';
import { tap } from 'rxjs/operators';

import Swal from 'sweetalert2';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
	selector: 'app-list-usuario',
	templateUrl: './list-usuario.component.html',
	styleUrls: ['./list-usuario.component.scss']
})
export class ListUsuarioComponent implements OnInit, OnDestroy {
	@Output() onClickNovoUsuario: EventEmitter<any> = new EventEmitter();

	private subscriptions$: Subscription[] = [];
	
	public dadosListaUsuarios$: Observable<ListaUsuariosModel[]>;
	listaErros: string[];


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

	constructor( private servico: UsuarioService , 
				  private notificacoes: MatSnackBar 
				 ) { }



	ExcluirUsuario(usuario) {
		Swal.fire({
			title: 'Você tem certeza?',
			text: 'O login ' + usuario + ' será excluído do sistema!',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Sim, Exclua!',
			cancelButtonText: 'Não, Cancele!'
		}).then(result => {
			if (result.value) {
				this.servico
					.excluirUsuario(usuario)
					.pipe(tap())
					.subscribe(data => {
						this.listaErros = this.servico.listaErros;
						if (this.listaErros) {
							if (this.listaErros && this.listaErros.length > 0) {

								 this.erro("Não foi possível excluir o usuário, verifique os erros!");
							}
							else
							{
								 this.sucesso("Usuário excluído com sucesso!");

							}
						}
					});
			}
		});
	}

	ngOnInit() {
		this.servico.Cedente = Configuracoes.ApelidoAutoProd;
		this.servico.UrlBase = Configuracoes.UrlBase;
		this.dadosListaUsuarios$ = this.servico.dadosListaUsuarios$;
		this.subscriptions$.push(this.servico.ObterUsuariosDoSistema().subscribe());
	}

	novoUsuario() {
		this.onClickNovoUsuario.emit();
	}

	ngOnDestroy(): void {
		this.subscriptions$.forEach(sub => sub.unsubscribe());
	}
}
