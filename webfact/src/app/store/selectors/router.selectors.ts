import { createSelector } from '@ngrx/store';

import { selectRouterState } from '../reducers/index.reducers';

export const selectRouter = createSelector(selectRouterState, (state: any) => state);

export const selectIsRouter = createSelector(selectRouter, (state: any) => state.state.url);
