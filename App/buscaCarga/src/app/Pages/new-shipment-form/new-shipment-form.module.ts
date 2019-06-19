import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewShipmentFormPage } from './new-shipment-form.page';

import { IonicSelectableModule } from 'ionic-selectable';
import { PipesModule } from 'src/app/pipes/pipes.module';
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
    RouterModule.forChild(routes),
    IonicSelectableModule,
    PipesModule
  ],
  declarations: [NewShipmentFormPage],
  exports: [NewShipmentFormPage],
  bootstrap: [NewShipmentFormPage]
})
export class NewShipmentFormPageModule {}
