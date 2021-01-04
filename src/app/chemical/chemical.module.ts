import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChemicalWindowComponent } from './chemical-window/chemical-window.component';
import { ChemicalSearchBoxComponent } from './chemical-search-box/chemical-search-box.component';
import { AngularMaterialModule } from '../angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ChemicalSummayCardComponent } from './chemical-summay-card/chemical-summay-card.component';
import { ChemicalSummaryTableComponent } from './chemical-summary-table/chemical-summary-table.component';
import { ErrorPageComponent } from '../shared/error-page/error-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ChemicalWindowComponent,
    ChemicalSearchBoxComponent,
    ChemicalSummayCardComponent,
    ChemicalSummaryTableComponent
  ],
  exports: [
    ChemicalWindowComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ChemicalModule { }
