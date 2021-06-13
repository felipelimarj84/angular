import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers/index.reducers';
import { actionSettingsChangeSubMenu } from 'src/app/store/actions/settings.actions';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { selectIsRouter } from 'src/app/store/selectors/router.selectors';

@Component({
	selector: 'app-layout-borderos',
	templateUrl: './layout-borderos.component.html',
	styleUrls: ['./layout-borderos.component.scss']
})
export class LayoutBorderosComponent implements OnInit, AfterViewInit, OnDestroy {
	@ViewChild('drawer', { static: false }) drawer: MatSidenav;
	drawerFull: boolean = false;

	selectIsRouter$: Observable<any>;
	private subscriptions$: Subscription[] = [];

	acoes = [
		{
			routerLink: 'nova-proposta',
			full: false,
			open: true
		},
		{
			routerLink: 'importa-titulos',
			full: false,
			open: true
		},
		{
			routerLink: 'importa-titulos-xml',
			full: false,
			open: true
		},
		{
			routerLink: 'itens-menu',
			full: true,
			open: true
		},
		{
			routerLink: 'itens-menu-consulta',
			full: true,
			open: true
		}
	];

	routerReduce: any = this.acoes.reduce((entities, item) => {
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

	close() {
		this.router.navigate(['core', 'layout', 'operacoes', 'borderos', 'layout']);
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
