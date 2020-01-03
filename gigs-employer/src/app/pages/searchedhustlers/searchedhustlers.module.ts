import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchedhustlersPageRoutingModule } from './searchedhustlers-routing.module';

import { SearchedhustlersPage } from './searchedhustlers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchedhustlersPageRoutingModule
  ],
  declarations: [SearchedhustlersPage]
})
export class SearchedhustlersPageModule {}
