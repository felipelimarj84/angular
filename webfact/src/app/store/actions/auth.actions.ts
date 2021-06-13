import { createAction, props } from '@ngrx/store';
export const authLogin = createAction('[Auth] Login', props<{ usuario: string; senha: string }>());
export const authLogout = createAction('[Auth] Logout');
