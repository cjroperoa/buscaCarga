import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular'

import {OfferPage} from '../offer/offer.page'
import { Profile } from 'selenium-webdriver/firefox';
@Component({
  selector: 'app-shipment-details-transporter',
  templateUrl: './shipment-details-transporter.page.html',
  styleUrls: ['./shipment-details-transporter.page.scss'],
})
export class ShipmentDetailsTransporterPage implements OnInit {
  public inputs = [
    {
      label: 'Titulo de envío',
      icon: '',
      state : false,
      value: 'loremp ipsum dolor sit amet. conseteur sadipscing'
    },
    {
      label: "Tipo de carga",
      icon:"",
      state: false,
      value: "loremp ipsum dolor sit amet. conseteur sadipscing"
    },
    {
      label: "Origen",
      icon: "search",
      state: true,
      value: "loremp ipsum dolor"
    },
    {
      label: "Destino",
      icon: "search",
      state: true,
      value: "loremp ipsum dolor"
    },
    {
      label: "Fecha Recogida",
      icon: "calendar",
      state: true,
      value: "01/01/2019"
    },
    {
      label: "Fecha Entrega",
      icon: "calendar",
      state: true,
      value: "11/02/2019"
    }
  ];
  
  public shipValues = [
    {
      label: "Largo",
      placeholder: "cm",
      value: "00"
    },
    {
      label: "Ancho",
      placeholder: "cm",
      value: "00"
    },
    {
      label: "Alto",
      placeholder: "cm",
      value: "00"
    },
    {
      label: "Peso",
      placeholder: "Kg",
      value: "00"
    }
  ];
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async ofertar(){
    let modal1 =await this.modalController.create({
  component:OfferPage,
  componentProps: { value: 123 },
  cssClass: 'modalOferta'
    });
    return await modal1.present();
  }
}
