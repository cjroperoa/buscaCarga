import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './Pages/login/login.module#LoginPageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './Pages/login/login.module#LoginPageModule' },
  { path: 'registry', loadChildren: './Pages/registry/registry.module#RegistryPageModule' },
  { path: 'new-shipment-form', loadChildren: './Pages/new-shipment-form/new-shipment-form.module#NewShipmentFormPageModule' },
  { path: 'shipment-details', loadChildren: './Pages/shipment-details/shipment-details.module#ShipmentDetailsPageModule' },
  { path: 'new-shipment-category', loadChildren: './Pages/new-shipment-category/new-shipment-category.module#NewShipmentCategoryPageModule' },  { path: 'search', loadChildren: './Pages/search/search.module#SearchPageModule' },
  { path: 'shipment-details-transporter', loadChildren: './Pages/shipment-details-transporter/shipment-details-transporter.module#ShipmentDetailsTransporterPageModule' },
  { path: 'offer', loadChildren: './Pages/offer/offer.module#OfferPageModule' },
  { path: 'my-offers', loadChildren: './Pages/my-offers/my-offers.module#MyOffersPageModule' },
  { path: 'see-offer', loadChildren: './Pages/see-offer/see-offer.module#SeeOfferPageModule' },
  { path: 'add-car-transporter', loadChildren: './Pages/add-car-transporter/add-car-transporter.module#AddCarTransporterPageModule' },
  { path: 'membership-photo', loadChildren: './Pages/membership-photo/membership-photo.module#MembershipPhotoPageModule' },
  { path: 'offer-approval-conveyor', loadChildren: './Pages/offer-approval-conveyor/offer-approval-conveyor.module#OfferApprovalConveyorPageModule' },
  { path: 'offer-approval-sender', loadChildren: './Pages/offer-approval-sender/offer-approval-sender.module#OfferApprovalSenderPageModule' },
  { path: 'my-publishings', loadChildren: './Pages/my-publishings/my-publishings.module#MyPublishingsPageModule' }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
