import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatFactsComponent } from './cat-facts/cat-facts.component';

const routes: Routes = [
  {
    path: 'cat-facts',
    component: CatFactsComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cat-facts',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
