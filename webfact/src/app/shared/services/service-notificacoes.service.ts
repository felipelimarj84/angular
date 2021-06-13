import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({
	providedIn: 'root',
})
export class ServiceNotificacoesService {
	config: MatSnackBarConfig = {
		duration: 3000,
		horizontalPosition: 'right',
		verticalPosition: 'top',
	};

	constructor(public snackbar: MatSnackBar) {}

	public sucesso(msg: string) {
		this.config['panelClass'] = ['notification', 'success'];
		this.snackbar.open(':) ' + msg, '', this.config);
	}

	public erro(msg: string) {
		this.config['panelClass'] = ['notification', 'error'];
		this.snackbar.open(':( ' + msg, '', this.config);
	}
}
