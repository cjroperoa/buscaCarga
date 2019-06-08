import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-see-offer',
  templateUrl: './see-offer.page.html',
  styleUrls: ['./see-offer.page.scss'],
})
export class SeeOfferPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  cerrarModal() {
    this.modalController.dismiss();
   }
}
