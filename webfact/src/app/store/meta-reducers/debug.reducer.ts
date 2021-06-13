import { ActionReducer } from '@ngrx/store';
import { AppState } from '../reducers/index.reducers';

export function debug(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
	return (state, action) => {
		const newState = reducer(state, action);
		// console.log(`[DEBUG] action: ${action.type}`, {
		// 	payload: (action as any).payload,
		// 	oldState: state,
		// 	newState
		// });
		return newState;
	};
}
