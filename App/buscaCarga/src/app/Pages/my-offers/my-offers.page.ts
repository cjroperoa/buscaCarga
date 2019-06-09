import { Component, OnInit } from '@angular/core';
import {  NavController} from "@ionic/angular";

@Component({
  selector: 'app-my-offers',
  templateUrl: './my-offers.page.html',
  styleUrls: ['./my-offers.page.scss'],
})
export class MyOffersPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  async VerPublicacion(){
    this.navCtrl.navigateForward('shipment-details-transporter');
  }
}
