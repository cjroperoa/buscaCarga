import { Component, OnInit } from '@angular/core';
import { text } from '@angular/core/src/render3';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { IonicSelectableComponent } from 'ionic-selectable';
import { PortService } from '../../services';

import { Port } from '../../types';
@Component({
  selector: 'app-new-shipment-form',
  templateUrl: './new-shipment-form.page.html',
  styleUrls: ['./new-shipment-form.page.scss'],
})

export class NewShipmentFormPage implements OnInit {
  ports: Port[];
  port: Port;
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
  
  inputNoneIcon(i) {
    console.log(i);
    if (this.inputs[this.inputs.length].icon === '') {
      return false;
    } else {
      return true;
    }
  }


  constructor( private portService: PortService) {}
  ngOnInit() {
    this.ports = this.portService.getPorts();
  }

  // portChange(event: {
  //   component: IonicSelectableComponent,
  //   value: any
  // }) {
  //   console.log('port:', event.value);
  // }
  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('port:', event.value);
  }


}
