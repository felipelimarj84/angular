import { createSelector } from '@ngrx/store';
import { AuthState } from 'src/app/shared/models/auth.models';
import { selectAuthState } from '../reducers/index.reducers';

export const selectAuth = createSelector(selectAuthState, (state: AuthState) => state);

export const selectIsAuthenticated = createSelector(
	selectAuthState,
	(state: AuthState) => state.isAuthenticated
);
