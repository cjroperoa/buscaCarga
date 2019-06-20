import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

 import { OfferPageModule} from './Pages/offer/offer.module';
 import { SeeOfferPageModule } from './Pages/see-offer/see-offer.module';
 import { OfferApprovalConveyorPageModule  } from "./Pages/offer-approval-conveyor/offer-approval-conveyor.module";

import { IonicStorageModule } from '@ionic/storage';

import { IonicSelectableModule } from 'ionic-selectable';

import { NewShipmentFormPageModule } from './Pages/new-shipment-form/new-shipment-form.module';

import {  CiudadService } from './services';

import { HttpClientModule } from '@angular/common/http';
import { SearchPageModule } from './Pages/search/search.module';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    NgbModule.forRoot(),
     OfferPageModule,
     SeeOfferPageModule,
     OfferApprovalConveyorPageModule,
     IonicSelectableModule,
    IonicStorageModule.forRoot(),
    NewShipmentFormPageModule,
    HttpClientModule,
    SearchPageModule
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CiudadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
