import { Component } from '@angular/core';
import {NavController} from '@ionic/angular'

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage   {

  constructor(private navCtrl: NavController) {}
  pageDetailstransporter() {
    this.navCtrl.navigateForward('shipment-details-transporter');
  }
 
public estate;

async stateValidate(esta: boolean) {
  if (esta === false) {
    return this.estate = false;
  }  else {
    return this.estate = true;
  }
  }
}
