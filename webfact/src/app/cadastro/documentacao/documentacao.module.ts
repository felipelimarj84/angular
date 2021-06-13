import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { LayoutDocumentacaoComponent } from './containers/layout/layout-documentacao.component';
import { DocumentacaoRoutingModule } from './documentacao-routing.module';

@NgModule({
	declarations: [LayoutDocumentacaoComponent],
	imports: [SharedModule, DocumentacaoRoutingModule]
})
export class DocumentacaoModule {}
