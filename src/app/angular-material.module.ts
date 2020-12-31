import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatButtonModule, MatChipsModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatSnackBarModule, MatToolbarModule, MatTooltipModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatAutocompleteModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatAutocompleteModule
  ]
})
export class AngularMaterialModule { }
