import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers/index.reducers';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { selectIsRouter } from 'src/app/store/selectors/router.selectors';

@Component({
	selector: 'app-itens-novas-instrucoes',
	templateUrl: './itens-novas-instrucoes.component.html',
	styleUrls: ['./itens-novas-instrucoes.component.scss']
})
export class ItensNovasInstrucoesComponent implements OnInit, OnDestroy, AfterViewInit {
	@ViewChild('drawer', { static: false }) drawer: MatSidenav;
	drawerFull: boolean = false;
	id$: Observable<string>;
	selectIsRouter$: Observable<any>;
	private subscriptions$: Subscription[] = [];

	novasInst = [
		{
			routerLink: 'filtrar-prorrogar-ni',
			full: false,
			open: true
		},
		{
			routerLink: 'filtrar-abater-ni',
			full: false,
			open: true
		},
		{
			routerLink: 'filtrar-cancelar-ni',
			full: false,
			open: true
		},
		{
			routerLink: 'filtrar-protestar-ni',
			full: false,
			open: true
		},
		{
			routerLink: 'filtrar-sustar-ni',
			full: false,
			open: true
		},
		{
			routerLink: 'filtrar-antecipacao-ni',
			full: false,
			open: true
		},
		{
			routerLink: 'filtrar-baixar-ni',
			full: false,
			open: true
		},
		{
			routerLink: 'filtrar-retirada-ni',
			full: false,
			open: true
		}
	];

	routerReduce: any = this.novasInst.reduce((entities, item) => {
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
		this.router.navigate(['core', 'layout', 'titulos', 'cobrancas', 'layout']);
	}
}
