import { ActionReducer, INIT, UPDATE } from '@ngrx/store';
import { AppState } from '../reducers/index.reducers';
import { LocalStorageService } from 'src/app/shared/local-storage/local-storage.service';

export function initStateFromLocalStorage(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
	return (state, action) => {
		const newState = reducer(state, action);
		if ([INIT.toString(), UPDATE.toString()].includes(action.type)) {
			return { ...newState, ...LocalStorageService.loadInitialState() };
		}
		return newState;
	};
}
