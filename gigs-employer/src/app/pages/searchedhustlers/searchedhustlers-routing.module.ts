import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchedhustlersPage } from './searchedhustlers.page';

const routes: Routes = [
  {
    path: '',
    component: SearchedhustlersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchedhustlersPageRoutingModule {}
