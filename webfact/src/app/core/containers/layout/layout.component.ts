import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	ViewChild,
	AfterViewInit,
	OnDestroy,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers/index.reducers';
import { selectIsAuthenticated } from 'src/app/store/selectors/auth.selectors';
import { selectEffectiveTheme, selectSubMenu } from 'src/app/store/selectors/settings.selectors';
import { authLogin, authLogout } from 'src/app/store/actions/auth.actions';
import { FormControl } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { selectIsRouter } from 'src/app/store/selectors/router.selectors';
import { RouterStateUrl } from 'src/app/router/router.state';
import { tap } from 'rxjs/operators';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit, AfterViewInit, OnDestroy {
	@ViewChild('sidenav', { static: false }) sidenav: MatSidenav;
	isAuthenticated$: Observable<boolean>;
	selectIsRouter$: Observable<any>;
	private subscriptions$: Subscription[] = [];

	rotas: any[];

	itensMenu = [
		{
			routerLink: 'dashboard',
			svgIcon: 'dashboard',
			title: 'Dashboard',
		},
		{
			routerLink: 'operacoes',
			svgIcon: 'operacoes',
			title: 'Operações',
			childs: [
				{ routerLink: 'operacoes/borderos', title: 'Borderôs' },
				{ routerLink: 'operacoes/liberacoes', title: 'Liberações' },
				{ routerLink: 'operacoes/doc-pendentes', title: 'Documentos Pendentes' },
			],
		},
		{
			routerLink: 'titulos',
			svgIcon: 'titulos',
			title: 'Títulos',
			childs: [
				{ routerLink: 'titulos/consultas', title: 'Consultas' },
				{ routerLink: 'titulos/cobrancas', title: 'Instruções de Cobranças' },
				{ routerLink: 'titulos/boletos', title: 'Boletos' },
				{ routerLink: 'titulos/pagamentos', title: 'Arquivo de Pagamentos' },
				{ routerLink: 'titulos/extrato', title: 'Extrato de C/C' },
			],
		},
		{
			routerLink: 'cadastro',
			svgIcon: 'cadastro',
			title: 'Cadastro',
			childs: [
				{ routerLink: 'cadastro/novo', title: 'Novo' },
				{ routerLink: 'cadastro/renovacao', title: 'Renovação' },
				{ routerLink: 'cadastro/documentacao', title: 'Documentação' },
				{ routerLink: 'cadastro/contratos', title: 'Contratos' },
			],
		},
	];

	routerReduce: any = this.itensMenu.reduce((entities, item) => {
		return {
			...entities,
			[item.routerLink]: item,
		};
	}, {});

	theme$: Observable<string>;
	subMenu$: Observable<boolean>;

	constructor(private store: Store<AppState>) {}

	ngOnInit() {
		this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
		this.theme$ = this.store.pipe(select(selectEffectiveTheme));
		this.subMenu$ = this.store.pipe(select(selectSubMenu));
		this.selectIsRouter$ = this.store.pipe(select(selectIsRouter));
	}

	ngAfterViewInit(): void {
		this.subscriptions$.push(
			this.selectIsRouter$.subscribe((item: string) => {
				const rotaLayout = item.split('/').length > 3 ? this.routerReduce[item.split('/')[3]] : null;
				if (rotaLayout) {
					if (rotaLayout.routerLink) {
						this.addChilds(rotaLayout.childs);
					}
				} else {
					this.addChilds(null);
				}
			})
		);
	}

	ngOnDestroy() {
		this.subscriptions$.forEach((s) => s.unsubscribe());
	}

	onLoginClick() {
		// this.store.dispatch(authLogin());
	}

	onLogoutClick() {
		this.store.dispatch(authLogout());
	}

	addChilds(childs) {
		this.rotas = childs ? childs : [];
		if (childs) {
			this.sidenav.open();
		} else {
			this.sidenav.close();
		}
	}
}
