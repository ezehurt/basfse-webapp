import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChemicalWindowComponent } from './chemical-window/chemical-window.component';

@NgModule({
  declarations: [
    ChemicalWindowComponent
  ],
  exports: [
    ChemicalWindowComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChemicalModule { }
