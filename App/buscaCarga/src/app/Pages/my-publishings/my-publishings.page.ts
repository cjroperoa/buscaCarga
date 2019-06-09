import { Component, OnInit } from '@angular/core';
import {  NavController} from "@ionic/angular";
@Component({
  selector: 'app-my-publishings',
  templateUrl: './my-publishings.page.html',
  styleUrls: ['./my-publishings.page.scss'],
})
export class MyPublishingsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  async VerPublicacion(){
    this.navCtrl.navigateForward('shipment-details-transporter');
  }
}
