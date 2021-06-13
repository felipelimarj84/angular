import { ActionReducerMap, MetaReducer, createFeatureSelector } from '@ngrx/store';
// import { environment } from 'src/environments/environment';
import { authReducer } from './auth.reducer';
import { AuthState } from 'src/app/shared/models/auth.models';
import { initStateFromLocalStorage } from '../meta-reducers/init-state-from-local-storage.reducer';
import { SettingsState } from 'src/app/shared/models/settings.model';
import { settingsReducer } from './settings.reducer';
import { environment } from 'src/environments/environment';
import { debug } from '../meta-reducers/debug.reducer';
import { RouterStateUrl } from '../../router/router.state';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';

export interface AppState {
	auth: AuthState;
	settings: SettingsState;
	router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<AppState> = {
	auth: authReducer,
	settings: settingsReducer,
	router: routerReducer
};

export const metaReducers: MetaReducer<AppState>[] = [initStateFromLocalStorage]; // !environment.production ? [] : [];

if (!environment.production) {
	metaReducers.unshift(debug);
}

export const getAppState = (state: AppState) => state;

export const selectAuthState = createFeatureSelector<AppState, AuthState>('auth');

export const selectSettingsState = createFeatureSelector<AppState, SettingsState>('settings');

export const selectRouterState = createFeatureSelector<AppState, RouterReducerState<RouterStateUrl>>(
	'router'
);
