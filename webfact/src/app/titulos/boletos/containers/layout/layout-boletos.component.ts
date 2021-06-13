import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers/index.reducers';
import { Router } from '@angular/router';
import { selectIsRouter } from 'src/app/store/selectors/router.selectors';
import { actionSettingsChangeSubMenu } from 'src/app/store/actions/settings.actions';

@Component({
	selector: 'app-layout-boletos',
	templateUrl: './layout-boletos.component.html',
	styleUrls: ['./layout-boletos.component.scss']
})
export class LayoutBoletosComponent implements OnInit, OnDestroy, AfterViewInit {
	@ViewChild('drawer', { static: false }) drawer: MatSidenav;
	drawerFull: boolean = false;

	selectIsRouter$: Observable<any>;
	private subscriptions$: Subscription[] = [];

	titulos = [
		{
			routerLink: 'filtrar-boletos',
			full: false,
			open: true
		}
	];

	routerReduce: any = this.titulos.reduce((entities, item) => {
		return {
			...entities,
			[item.routerLink]: item
		};
	}, {});

	constructor(private store: Store<AppState>, private router: Router) {}

	ngOnInit() {
		this.selectIsRouter$ = this.store.pipe(select(selectIsRouter));
	}

	ngAfterViewInit(): void {
		this.subscriptions$.push(
			this.selectIsRouter$.subscribe((item: string) => {
				const rotaLayout = item.split('/').length > 6 ? this.routerReduce[item.split('/')[6]] : null;
				if (rotaLayout) {
					if (rotaLayout.routerLink) {
						this.clickOpenDrawer(rotaLayout.full, rotaLayout.open);
					}
				} else {
					this.clickOpenDrawer(false, false);
				}
			})
		);
	}

	ngOnDestroy() {
		this.subscriptions$.forEach(s => s.unsubscribe());
	}

	clickOpenDrawer(full: boolean, open: boolean) {
		this.drawerFull = full;
		this.store.dispatch(actionSettingsChangeSubMenu({ subMenu: open && full }));

		if (open) {
			this.drawer.open();
		} else {
			this.drawer.close();
		}
	}
}
