import { createAction, props } from '@ngrx/store';

export const actionSettingsChangeTheme = createAction('[Settings] Change Theme', props<{ theme: string }>());
export const actionSettingsChangeSubMenu = createAction(
	'[Settings] Change SubMenu',
	props<{ subMenu: boolean }>()
);
