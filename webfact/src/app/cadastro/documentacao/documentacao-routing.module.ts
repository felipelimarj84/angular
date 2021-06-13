import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutDocumentacaoComponent } from './containers/layout/layout-documentacao.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'layout' },
	{
		path: 'layout',
		component: LayoutDocumentacaoComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DocumentacaoRoutingModule {}
