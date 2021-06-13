import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers/index.reducers';
import { actionSettingsChangeSubMenu } from 'src/app/store/actions/settings.actions';
import { Observable, Subscription } from 'rxjs';
import { selectIsRouter } from 'src/app/store/selectors/router.selectors';
import { Router } from '@angular/router';

@Component({
	selector: 'app-layout-usuario',
	templateUrl: './layout-usuario.component.html',
	styleUrls: ['./layout-usuario.component.scss']
})
export class LayoutUsuarioComponent implements OnInit, AfterViewInit, OnDestroy {
	@ViewChild('drawer', { static: false }) drawer: MatSidenav;
	drawerFull: boolean = false;
	selectIsRouter$: Observable<any>;
	private subscriptions$: Subscription[] = [];

	itensMenu = [
		{
			routerLink: 'form-usuario',
			title: 'Formulario de Usuário',
			full: false,
			open: true
		}
	];

	routerReduce: any = this.itensMenu.reduce((entities, item) => {
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
				const rotaLayout = item.split('/').length > 5 ? this.routerReduce[item.split('/')[5]] : null;
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
		this.router.navigate(['core', 'layout', 'usuarios']);
	}

	clickOpenDrawer(full: boolean, open: boolean) {
		this.drawerFull = full;
		this.store.dispatch(actionSettingsChangeSubMenu({ subMenu: !this.drawer.opened && full }));
		if (open) {
			this.drawer.open();
		} else {
			this.drawer.close();
		}
	}
}
