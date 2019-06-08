import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShipmentDetailsTransporterPage } from './shipment-details-transporter.page';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
const routes: Routes = [
  {
    path: '',
    component: ShipmentDetailsTransporterPage
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
  declarations: [ShipmentDetailsTransporterPage],
  exports:[ShipmentDetailsTransporterPage],
  bootstrap:[ShipmentDetailsTransporterPage]
})
export class ShipmentDetailsTransporterPageModule {

}
