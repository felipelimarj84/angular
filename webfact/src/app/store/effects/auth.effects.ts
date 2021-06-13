import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { authLogin, authLogout } from '../actions/auth.actions';
import { LocalStorageService } from 'src/app/shared/local-storage/local-storage.service';

export const AUTH_KEY = 'AUTH';

@Injectable()
export class AuthEffects {
	constructor(
		private actions$: Actions,
		private localStorageService: LocalStorageService,
		private router: Router
	) {}

	login = createEffect(
		() =>
			this.actions$.pipe(
				ofType(authLogin),
				tap((user: { usuario: string; senha: string }) => {
					this.localStorageService.setItem(AUTH_KEY, { isAuthenticated: true });
					this.router.navigate(['']);
				})
			),
		{ dispatch: false }
	);

	logout = createEffect(
		() =>
			this.actions$.pipe(
				ofType(authLogout),
				tap(() => {
					this.localStorageService.setItem(AUTH_KEY, {
						isAuthenticated: false
					});
					this.router.navigate(['autenticacao', 'login']);
				})
			),
		{ dispatch: false }
	);
}
