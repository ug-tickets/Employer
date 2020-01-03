import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobprogressPage } from './jobprogress.page';

const routes: Routes = [
  {
    path: '',
    component: JobprogressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobprogressPageRoutingModule {}
