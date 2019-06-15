import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'new-shipment-form', 
    loadChildren: './new-shipment-form/new-shipment-form.module#NewShipmentFormPageModule' 
  },
  { path: 'shipment-details', 
    loadChildren: './shipment-details/shipment-details.module#ShipmentDetailsPageModule' 
  },
  { path: 'new-shipment-category', 
    loadChildren: './new-shipment-category/new-shipment-category.module#NewShipmentCategoryPageModule' 
  },
  { path: 'search', 
    loadChildren: './search/search.module#SearchPageModule' 
  },
  { 
    path: 'shipment-details-transporter', 
    loadChildren: './shipment-details-transporter/shipment-details-transporter.module#ShipmentDetailsTransporterPageModule' },
  { 
    path: 'offer', 
    loadChildren: './offer/offer.module#OfferPageModule'
  },
  { 
    path: 'my-offers', 
    loadChildren: './my-offers/my-offers.module#MyOffersPageModule' 
  },
  { 
    path: 'see-offer', 
    loadChildren: './see-offer/see-offer.module#SeeOfferPageModule'
  },
  { 
    path: 'add-car-transporter', 
    loadChildren: './add-car-transporter/add-car-transporter.module#AddCarTransporterPageModule' 
  },
  { path: 'membership-photo', 
    loadChildren: './membership-photo/membership-photo.module#MembershipPhotoPageModule' 
  },
  { 
    path: 'offer-approval-conveyor', 
    loadChildren: './offer-approval-conveyor/offer-approval-conveyor.module#OfferApprovalConveyorPageModule' 
  },
  { 
    path: 'offer-approval-sender', 
    loadChildren: './offer-approval-sender/offer-approval-sender.module#OfferApprovalSenderPageModule' 
  },
  { 
    path: 'my-publishings', 
    loadChildren: './my-publishings/my-publishings.module#MyPublishingsPageModule' 
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class PagesRoutingModule { }
