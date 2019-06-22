import { Component, OnInit } from '@angular/core';
import { text } from '@angular/core/src/render3';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { IonicSelectableComponent } from 'ionic-selectable';
import {  CiudadService } from '../../services';
import { Usuario } from 'src/app/models/usuario.model';
import { Ciudad } from 'src/app/models/ciudad.model';


@Component({
  selector: 'app-new-shipment-form',
  templateUrl: './new-shipment-form.page.html',
  styleUrls: ['./new-shipment-form.page.scss'],
})

export class NewShipmentFormPage implements OnInit {
  ciudadO: Ciudad;
  ciudadD: Ciudad;
  icon = true;

  ciudades: Ciudad[] = [];
  textoBuscar = '';
  constructor(private ciudadesService: CiudadService
   ) {
     this.ciudadesService.getCiuadades()
     .subscribe( resp => this.ciudades = resp);
   }

  ngOnInit() {}


  buscarCiudad(event) {
    const texto = event.target.value;
    this.textoBuscar = texto;
    console.log(texto);
  }
}
