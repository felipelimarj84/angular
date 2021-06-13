import { AppState } from 'src/app/store/reducers/index.reducers';

export const NIGHT_MODE_THEME = 'BLACK-THEME';

export interface SettingsState {
	theme: string;
	subMenu: boolean;
}

export interface State extends AppState {
	settings: SettingsState;
}
