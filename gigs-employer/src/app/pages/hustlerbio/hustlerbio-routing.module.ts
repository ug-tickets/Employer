import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HustlerbioPage } from './hustlerbio.page';

const routes: Routes = [
  {
    path: '',
    component: HustlerbioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HustlerbioPageRoutingModule {}
