import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentWindowComponent } from './document-window/document-window.component';
import { DocumentsTableComponent } from './documents-table/documents-table.component';
import { AngularMaterialModule } from '../angular-material.module';

@NgModule({
  declarations: [
    DocumentWindowComponent,
    DocumentsTableComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports:[
    DocumentWindowComponent
  ]
})
export class DocumentModule { }
