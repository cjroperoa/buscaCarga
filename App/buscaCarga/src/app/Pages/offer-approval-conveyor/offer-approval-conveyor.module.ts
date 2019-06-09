import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OfferApprovalConveyorPage } from './offer-approval-conveyor.page';

import {NgbModule  } from "@ng-bootstrap/ng-bootstrap";
const routes: Routes = [
  {
    path: '',
    component: OfferApprovalConveyorPage
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
  declarations: [OfferApprovalConveyorPage],
  exports: [OfferApprovalConveyorPage],
  bootstrap: [OfferApprovalConveyorPage]

})
export class OfferApprovalConveyorPageModule {
  
}
