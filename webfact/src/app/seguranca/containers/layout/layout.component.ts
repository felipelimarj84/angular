import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers/index.reducers';
import { selectEffectiveTheme } from 'src/app/store/selectors/settings.selectors';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
	theme$: Observable<string>;

	constructor(private store: Store<AppState>) {}

	ngOnInit() {
		this.theme$ = this.store.pipe(select(selectEffectiveTheme));
	}
}
