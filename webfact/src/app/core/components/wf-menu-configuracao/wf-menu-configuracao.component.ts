import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers/index.reducers';
import { selectEffectiveTheme } from 'src/app/store/selectors/settings.selectors';
import { authLogout } from 'src/app/store/actions/auth.actions';

@Component({
	selector: 'app-wf-menu-configuracao',
	templateUrl: './wf-menu-configuracao.component.html',
	styleUrls: ['./wf-menu-configuracao.component.scss']
})
export class WfMenuConfiguracaoComponent implements OnInit {
	theme$: Observable<string>;

	constructor(private store: Store<AppState>) {}

	ngOnInit() {
		this.theme$ = this.store.pipe(select(selectEffectiveTheme));
	}
	onLogoutClick() {
		this.store.dispatch(authLogout());
	}
}
