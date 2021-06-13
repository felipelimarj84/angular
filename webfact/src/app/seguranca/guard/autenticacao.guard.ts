import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers/index.reducers';
import { selectIsAuthenticated } from 'src/app/store/selectors/auth.selectors';

@Injectable({
	providedIn: 'root'
})
export class AutenticacaoGuard implements CanActivate {
	constructor(private router: Router, private store: Store<AppState>) {}

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
		// return of(false);

		return this.store.pipe(
			select(selectIsAuthenticated),
			tap(isLogin => {
				if (!isLogin) {
					this.router.navigate(['/autenticacao/login']);
				}
			})
		);

		// return this.afAuth.authState.pipe(
		// 	map(user => !!user),
		// 	tap(loggedIn => {
		// 		if (!loggedIn) {
		// 			this.storage.get('tutorialVisualizado').then(tutorialVisualizado => {
		// 				if (tutorialVisualizado) {
		// 					this.router.navigate(['/autenticacao/login']);
		// 				} else {
		// 					this.router.navigate(['tutorial']);
		// 					this.storage.set('tutorialVisualizado', true);
		// 				}
		// 			});
		// 		}
		// 	})
		// );
	}
}
