import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BASE, CHEMICAL } from './consts/route.const';
import { ChemicalWindowComponent } from './chemical/chemical-window/chemical-window.component';

const routes: Routes = [
  {
    path: BASE,
    component: ChemicalWindowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
