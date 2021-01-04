import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BASE, CHEMICAL, DOCUMENT } from './consts/route.const';
import { ChemicalWindowComponent } from './chemical/chemical-window/chemical-window.component';
import { DocumentWindowComponent } from './document/document-window/document-window.component';

const routes: Routes = [
  {
    path: BASE,
    component: ChemicalWindowComponent
  },
  { path: `${DOCUMENT}/:id`, component: DocumentWindowComponent},
  { path: '**', redirectTo: BASE }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
