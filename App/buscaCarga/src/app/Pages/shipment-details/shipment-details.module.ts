import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShipmentDetailsPage } from './shipment-details.page';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

const routes: Routes = [
  {
    path: '',
    component: ShipmentDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgbModule.forRoot()
  ],
  declarations: [
    ShipmentDetailsPage
  ],
  exports : [
    ShipmentDetailsPage
  ],
  bootstrap: [
    ShipmentDetailsPage
  ]
})
export class ShipmentDetailsPageModule {}
