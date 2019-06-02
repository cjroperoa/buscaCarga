import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewShipmentCategoryPage } from './new-shipment-category.page';

const routes: Routes = [
  {
    path: '',
    component: NewShipmentCategoryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewShipmentCategoryPage]
})
export class NewShipmentCategoryPageModule {}
