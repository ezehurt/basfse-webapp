import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentWindowComponent } from './document-window/document-window.component';

@NgModule({
  declarations: [
    DocumentWindowComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DocumentWindowComponent
  ]
})
export class DocumentModule { }
