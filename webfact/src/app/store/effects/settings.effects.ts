import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { select, Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { combineLatest, interval, merge, of } from 'rxjs';
import { tap, withLatestFrom, map, distinctUntilChanged, mapTo, filter } from 'rxjs/operators';
import { LocalStorageService } from 'src/app/shared/local-storage/local-storage.service';

import { selectSettingsState, AppState } from '../reducers/index.reducers';
import { selectEffectiveTheme } from '../selectors/settings.selectors';
import { actionSettingsChangeTheme } from '../actions/settings.actions';

export const SETTINGS_KEY = 'SETTINGS';

const INIT = of('anms-init-effect-trigger');

@Injectable()
export class SettingsEffects {
	constructor(
		private actions$: Actions,
		private store: Store<AppState>,

		private overlayContainer: OverlayContainer,
		private localStorageService: LocalStorageService
	) {}

	persistSettings = createEffect(
		() =>
			this.actions$.pipe(
				ofType(actionSettingsChangeTheme),
				withLatestFrom(this.store.pipe(select(selectSettingsState))),
				tap(([action, settings]) => this.localStorageService.setItem(SETTINGS_KEY, settings))
			),
		{ dispatch: false }
	);

	// updateTheme = createEffect(
	// 	() =>
	// 		merge(INIT, this.actions$.pipe(ofType(actionSettingsChangeTheme))).pipe(
	// 			withLatestFrom(this.store.pipe(select(selectEffectiveTheme))),
	// 			tap(([action, effectiveTheme]) => {
	// 				const classList = this.overlayContainer.getContainerElement().classList;
	// 				const toRemove = Array.from(classList).filter((item: string) => item.includes('-theme'));
	// 				console.log(classList);
	// 				if (toRemove.length) {
	// 					classList.remove(...toRemove);
	// 				}
	// 				classList.add(effectiveTheme);
	// 			})
	// 		),
	// 	{ dispatch: false }
	// );
}
