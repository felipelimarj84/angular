import { createSelector } from '@ngrx/store';
import { SettingsState } from 'src/app/shared/models/settings.model';
import { selectSettingsState } from '../reducers/index.reducers';

export const selectSettings = createSelector(selectSettingsState, (state: SettingsState) => state);

export const selectTheme = createSelector(selectSettings, settings => settings.theme);

export const selectSubMenu = createSelector(selectSettings, settings => settings.subMenu);

export const selectEffectiveTheme = createSelector(selectTheme, theme => theme.toLowerCase());
