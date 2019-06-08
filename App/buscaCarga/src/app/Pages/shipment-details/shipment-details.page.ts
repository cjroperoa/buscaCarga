import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SeeOfferPage } from '../see-offer/see-offer.page';

@Component({
  selector: 'app-shipment-details',
  templateUrl: './shipment-details.page.html',
  styleUrls: ['./shipment-details.page.scss'],
})
export class ShipmentDetailsPage {

  public inputs = [
    {
      label: 'Titulo de envío',
      icon: '',
      state : false,
      value: 'loremp ipsum dolor sit amet. conseteur sadipscing'
    },
    {
      label: 'Tipo de carga',
      icon: '',
      state: false,
      value: 'loremp ipsum dolor sit amet. conseteur sadipscing'
    },
    {
      label: 'Origen',
      icon: 'search',
      state: true,
      value: 'loremp ipsum dolor'
    },
    {
      label: 'Destino',
      icon: 'search',
      state: true,
      value: 'loremp ipsum dolor'
    },
    {
      label: 'Fecha Recogida',
      icon: 'calendar',
      state: true,
      value: '01/01/2019'
    },
    {
      label: 'Fecha Entrega',
      icon: 'calendar',
      state: true,
      value: '11/02/2019'
    }
  ];

  public shipValues = [
    {
      label: 'Largo',
      placeholder: 'cm',
      value: '00'
    },
    {
      label: 'Ancho',
      placeholder: 'cm',
      value: '00'
    },
    {
      label: 'Alto',
      placeholder: 'cm',
      value: '00'
    },
    {
      label: 'Peso',
      placeholder: 'Kg',
      value: '00'
    }
  ];

  constructor(public modalController: ModalController) {
  }
  async VerOferta(){
    const modal1 =await this.modalController.create({
  component: SeeOfferPage,
  componentProps: { value: 123 },
  cssClass: 'modalOferta'
    });
    return await modal1.present();
  }
}
