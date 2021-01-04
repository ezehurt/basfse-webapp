import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './angular-material.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../root.reducer';
import { ChemicalModule } from './chemical/chemical.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DocumentModule } from './document/document.module';
import { EffectsModule } from '@ngrx/effects';
import { RootEffects } from '../root.effects';
import { UIEffects } from '../store/ui/ui.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment.prod';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { TokenInterceptor } from './auth/token.interceptor';
import { AuthEffects } from '../store/auth/auth.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    ChemicalModule,
    HttpClientModule,
    DocumentModule,
    SharedModule,
    AuthModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([RootEffects]),
    EffectsModule.forFeature([
      UIEffects,
      AuthEffects,
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
