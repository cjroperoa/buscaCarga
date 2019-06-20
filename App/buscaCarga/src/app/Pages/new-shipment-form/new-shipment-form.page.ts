import { Component, OnInit } from '@angular/core';
import { text } from '@angular/core/src/render3';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { IonicSelectableComponent } from 'ionic-selectable';
import {  CiudadService } from '../../services';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-new-shipment-form',
  templateUrl: './new-shipment-form.page.html',
  styleUrls: ['./new-shipment-form.page.scss'],
})

export class NewShipmentFormPage implements OnInit {
  ciudadO : Usuario;
  ciudadD : Usuario;
  icon = true;

  usuarios: Usuario[] = [];
  textoBuscar = '';
  constructor(  
    private usuariosService: CiudadService
   )
   {
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
