import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './angular-material.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../root.reducer';
import { ChemicalModule } from './chemical/chemical.module';
import { HttpClientModule } from '@angular/common/http';
import { DocumentModule } from './document/document.module';
import { EffectsModule } from '@ngrx/effects';
import { RootEffects } from '../root.effects';
import { UIEffects } from '../store/ui/ui.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment.prod';
import { SpinnerDialogComponent } from './shared/spinner-dialog/spinner-dialog.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SpinnerDialogComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    ChemicalModule,
    HttpClientModule,
    DocumentModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([RootEffects]),
    EffectsModule.forFeature([
      UIEffects,
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
