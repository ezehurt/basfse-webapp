import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerDialogComponent } from './spinner-dialog/spinner-dialog.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AngularMaterialModule } from '../angular-material.module';
import { AuthModule } from '../auth/auth.module';



@NgModule({
  declarations: [
    SpinnerDialogComponent,
    NavbarComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    AuthModule
  ],
  exports: [
    SpinnerDialogComponent,
    NavbarComponent,
    ErrorPageComponent
  ]
})
export class SharedModule { }
