import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-shipment-category',
  templateUrl: './new-shipment-category.page.html',
  styleUrls: ['./new-shipment-category.page.scss'],
})
export class NewShipmentCategoryPage  {

  public categoryShipments = [
    {
      name: 'mudanza',
      image: 'assets/img/mudanza.jpg'
    },
    {
      name: 'animals',
      image: 'assets/img/animal2.jpg'
    },
    {
      name: 'vehicles',
      image: 'assets/img/automotor.jpg'
    },
    {
      name: 'containers',
      image: 'assets/img/contenedor.jpg'
    },
    {
      name: 'pallets',
      image: 'assets/img/Palletizada.jpg'
    },
    {
      name: 'bulk',
      image: 'assets/img/granel.jpg'
    }
  ];

  constructor() { 
  }
 
}
