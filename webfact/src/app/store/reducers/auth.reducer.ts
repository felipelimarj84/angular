import { createReducer, on, Action } from '@ngrx/store';
import { AuthState } from 'src/app/shared/models/auth.models';
import { authLogin, authLogout } from '../actions/auth.actions';

export const initialState: AuthState = {
	isAuthenticated: false
};

const reducer = createReducer(
	initialState,
	on(authLogin, state => ({ ...state, isAuthenticated: true })),
	on(authLogout, state => ({ ...state, isAuthenticated: false }))
);

export function authReducer(state: AuthState | undefined, action: Action): AuthState {
	return reducer(state, action);
}
