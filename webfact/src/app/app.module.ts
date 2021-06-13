import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from './store/reducers/index.reducers';
import { globalEffects } from './store/effects/index.effects';
import { metaReducers } from './store/reducers/index.reducers';

import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './router/custom-serializer';
import { SegurancaModule } from './seguranca/seguranca.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SegurancaModule,
		BrowserAnimationsModule,
		HttpClientModule,
		// Configurações do NGRX
		StoreModule.forRoot(reducers, { metaReducers }),
		StoreRouterConnectingModule.forRoot(),
		EffectsModule.forRoot(globalEffects),
		!environment.production ? StoreDevtoolsModule.instrument() : []
	],

	providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],

	bootstrap: [AppComponent]
})
export class AppModule {}
