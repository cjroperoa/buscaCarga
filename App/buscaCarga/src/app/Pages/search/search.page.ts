import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular'

import { CiudadService } from '../../services';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit  {
  ciudadO : Usuario;
  ciudadD : Usuario;

  usuarios: Usuario[] = [];
  textoBuscar = '';
  public estate;
  
  constructor(
      private navCtrl: NavController
      ,private usuariosService: CiudadService
    ) { this.usuariosService.getUsuarios()
      .subscribe( resp => this.usuarios= resp)
    }

  pageDetailstransporter() {
    this.navCtrl.navigateForward('shipment-details-transporter');
  }
  ngOnInit() {}


  buscarUsuario(event){
    const texto = event.target.value;
  this.textoBuscar= texto;
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
