import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

import { CiudadService } from '../../services';
import { Usuario } from 'src/app/models/usuario.model';
import { Ciudad } from 'src/app/models/ciudad.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit  {
  ciudadO: Ciudad;
  ciudadD: Ciudad;

  ciudades: Ciudad[] = [];
  textoBuscar = '';
  public estate;

  constructor(
      private navCtrl: NavController, private ciudadesService: CiudadService
    ) { this.ciudadesService.getCiuadades()
      .subscribe( resp => this.ciudades = resp);
    }

  pageDetailstransporter() {
    this.navCtrl.navigateForward('pages/shipment-details-transporter');
  }
  ngOnInit() {}


  buscarCiudad(event) {
    const texto = event.target.value;
    this.textoBuscar = texto;
    console.log(texto);
  }


async stateValidate(esta: boolean) {
  if (esta === false) {
    return this.estate = false;
  }  else {
    return this.estate = true;
  }
  }
}
