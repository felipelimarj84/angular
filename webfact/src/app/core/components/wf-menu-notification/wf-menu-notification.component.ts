import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers/index.reducers';
import { selectEffectiveTheme } from 'src/app/store/selectors/settings.selectors';

@Component({
	selector: 'app-wf-menu-notification',
	templateUrl: './wf-menu-notification.component.html',
	styleUrls: ['./wf-menu-notification.component.scss']
})
export class WfMenuNotificationComponent implements OnInit {
	theme$: Observable<string>;

	constructor(private store: Store<AppState>) {}

	ngOnInit() {
		this.theme$ = this.store.pipe(select(selectEffectiveTheme));
	}
}
