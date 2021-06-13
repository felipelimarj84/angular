import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AppState } from 'src/app/store/reducers/index.reducers';
import { Store, select } from '@ngrx/store';
import { actionSettingsChangeTheme } from 'src/app/store/actions/settings.actions';
import { Observable } from 'rxjs';
import { SettingsState } from 'src/app/shared/models/settings.model';
import { selectSettings } from 'src/app/store/selectors/settings.selectors';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
	themes = [
		{ value: 'DEFAULT-THEME', label: 'blue' },
		{ value: 'WF-AZUL-THEME', label: 'light' },
		{ value: 'NATURE-THEME', label: 'nature' },
		{ value: 'BLACK-THEME', label: 'dark' }
	];
	settings$: Observable<SettingsState>;
	constructor(private store: Store<AppState>) {
		this.settings$ = this.store.pipe(select(selectSettings));
	}

	ngOnInit() {}

	onThemeSelect({ value: theme }) {
		this.store.dispatch(actionSettingsChangeTheme({ theme }));
	}
}
