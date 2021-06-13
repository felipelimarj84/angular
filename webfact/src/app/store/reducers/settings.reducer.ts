import { Action, createReducer, on } from '@ngrx/store';
import { SettingsState } from 'src/app/shared/models/settings.model';

import { actionSettingsChangeTheme, actionSettingsChangeSubMenu } from '../actions/settings.actions';

export const initialState: SettingsState = {
	theme: 'WF-ROXO-THEME',
	subMenu: false
};

const reducer = createReducer(
	initialState,
	on(actionSettingsChangeTheme, (state, action) => ({ ...state, ...action })),
	on(actionSettingsChangeSubMenu, (state, action) => ({ ...state, ...action }))
);

export function settingsReducer(state: SettingsState | undefined, action: Action) {
	return reducer(state, action);
}
