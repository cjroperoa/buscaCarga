import { Component, OnInit } from '@angular/core';
import { text } from '@angular/core/src/render3';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { IonicSelectableComponent } from 'ionic-selectable';
import { PortService, CiudadService } from '../../services';

import { Port } from '../../types';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-new-shipment-form',
  templateUrl: './new-shipment-form.page.html',
  styleUrls: ['./new-shipment-form.page.scss'],
})

export class NewShipmentFormPage implements OnInit {
 
  icon = true;

  public inputs = [
    {
      label: "Titulo de envío",
      icon:"",
      state : false
    },
    {
      label: "Tipo de carga",
      icon:"",
      state: false
    },
    {
      label: "Origen",
      icon: "search",
      state: true
    },
    {
      label: "Destino",
      icon: "search",
      state: true
    },
    {
      label: "Fecha Recogida",
      icon: "calendar",
      state: true
    },
    {
      label: "Fecha Entrega",
      icon: "calendar",
      state: true
    }
  ];

  public shipValues = [
    {
      label: "Largo",
      placeholder: "cm"
    },
    {
      label: "Ancho",
      placeholder: "cm"
    },
    {
      label: "Alto",
      placeholder: "cm"
    },
    {
      label: "Peso",
      placeholder: "Kg"
    }
  ]
  


  usuarios: any[] = [];
  textoBuscar = '';
  constructor( 
 
    private usuariosService: CiudadService
   ) {
     this.usuariosService.getUsuarios()
     .subscribe( resp => this.usuarios= resp)
   }

  ngOnInit() {}


  buscarUsuario(event){
    const texto = event.target.value;
  this.textoBuscar= texto;
  console.log(texto);
   
  }
  
}
