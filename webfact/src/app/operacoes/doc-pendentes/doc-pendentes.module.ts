import { NgModule } from '@angular/core';

import { LayoutDocPendentesComponent } from './containers/layout/layout-doc-pendentes.component';
import { DocPendentesRoutingModule } from './doc-pendentes-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
	declarations: [LayoutDocPendentesComponent],
	imports: [SharedModule, DocPendentesRoutingModule]
})
export class DocPendentesModule {}
