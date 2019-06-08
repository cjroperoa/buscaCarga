import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from "@ionic/angular";


@Component({
  selector: 'app-offer',
  templateUrl: './offer.page.html',
  styleUrls: ['./offer.page.scss'],
  
})
export class OfferPage implements OnInit {
  
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }


  cerrarModal() {
    this.modalController.dismiss()
 
   }
}
