import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChemicalWindowComponent } from './chemical-window/chemical-window.component';
import { ChemicalSearchBoxComponent } from './chemical-search-box/chemical-search-box.component';
import { AngularMaterialModule } from '../angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ChemicalWindowComponent,
    ChemicalSearchBoxComponent
  ],
  exports: [
    ChemicalWindowComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class ChemicalModule { }
