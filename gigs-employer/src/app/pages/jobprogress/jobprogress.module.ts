import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobprogressPageRoutingModule } from './jobprogress-routing.module';

import { JobprogressPage } from './jobprogress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobprogressPageRoutingModule
  ],
  declarations: [JobprogressPage]
})
export class JobprogressPageModule {}
