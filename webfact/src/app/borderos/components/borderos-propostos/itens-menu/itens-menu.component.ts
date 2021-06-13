import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers/index.reducers';
import { actionSettingsChangeSubMenu } from 'src/app/store/actions/settings.actions';
import { Observable, Subscription } from 'rxjs';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { selectIsRouter } from 'src/app/store/selectors/router.selectors';
import { switchMap } from 'rxjs/operators';

@Component({
	selector: 'app-itens-menu',
	templateUrl: './itens-menu.component.html',
	styleUrls: ['./itens-menu.component.scss']
})
export class ItensMenuComponent implements OnInit, AfterViewInit, OnDestroy {
	@ViewChild('drawer', { static: false }) drawer: MatSidenav;
	drawerFull: boolean = false;
	id$: Observable<string>;
	selectIsRouter$: Observable<any>;
	private subscriptions$: Subscription[] = [];

	titulos = [
		{
			routerLink: 'titulo-incluir-duplicata',
			full: false,
			open: true
		},
		{
			routerLink: 'titulo-incluir-cheque',
			full: false,
			open: true
		},
		{
			routerLink: 'liberacoes-incluir-cheque',
			full: false,
			open: true
		},
		{
			routerLink: 'liberacoes-incluir-doc',
			full: false,
			open: true
		},
		{
			routerLink: 'liberacoes-incluir-especie',
			full: false,
			open: true
		},
		{
			routerLink: 'liberacoes-incluir-ted',
			full: false,
			open: true
		},
		{
			routerLink: 'liberacoes-incluir-cc',
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

	constructor(private store: Store<AppState>, private router: Router, private route: ActivatedRoute) {}

	ngOnInit() {
		this.id$ = this.route.paramMap.pipe(switchMap((params: ParamMap) => params.get('id')));
		this.selectIsRouter$ = this.store.pipe(select(selectIsRouter));
	}

	ngAfterViewInit(): void {
		this.subscriptions$.push(
			this.selectIsRouter$.subscribe((item: string) => {
				const rotaLayout = item.split('/').length > 8 ? this.routerReduce[item.split('/')[8]] : null;
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

		if (open) {
			this.drawer.open();
		} else {
			this.drawer.close();
		}
	}

	close() {
		this.router.navigate(['core', 'layout', 'operacoes', 'borderos', 'layout']);
	}
}
