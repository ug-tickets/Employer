import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HustlerbioPageRoutingModule } from './hustlerbio-routing.module';

import { HustlerbioPage } from './hustlerbio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HustlerbioPageRoutingModule
  ],
  declarations: [HustlerbioPage]
})
export class HustlerbioPageModule {}
