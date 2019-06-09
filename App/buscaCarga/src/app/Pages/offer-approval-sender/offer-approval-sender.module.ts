import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OfferApprovalSenderPage } from './offer-approval-sender.page';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
const routes: Routes = [
  {
    path: '',
    component: OfferApprovalSenderPage
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
  declarations: [OfferApprovalSenderPage],
  exports: [OfferApprovalSenderPage],
  bootstrap: [OfferApprovalSenderPage]

})
export class OfferApprovalSenderPageModule {}
