import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { Ciudad } from '../models/ciudad.model';

@Injectable()
export class CiudadService {
    
    constructor(private http: HttpClient){}
    
    // getUsuarios(){
    //     return this.http.get<Usuario[]>('https://jsonplaceholder.typicode.com/users');
    //       }

    getCiuadades(){
            return this.http.get<Ciudad[]>('https://www.datos.gov.co/resource/xdk5-pm3f.json')
          }
}