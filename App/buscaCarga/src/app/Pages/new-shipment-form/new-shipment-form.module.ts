import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewShipmentFormPage } from './new-shipment-form.page';

const routes: Routes = [
  {
    path: '',
    component: NewShipmentFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewShipmentFormPage]
})
export class NewShipmentFormPageModule {}
