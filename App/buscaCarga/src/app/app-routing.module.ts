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
  { path: 'new-shipment-category', loadChildren: './Pages/new-shipment-category/new-shipment-category.module#NewShipmentCategoryPageModule' },  { path: 'search', loadChildren: './Pages/search/search.module#SearchPageModule' }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
