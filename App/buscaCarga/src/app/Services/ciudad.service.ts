import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';

@Injectable()
export class CiudadService {
    
    constructor(private http: HttpClient){}
    
    getUsuarios(){
        return this.http.get<Usuario[]>('https://jsonplaceholder.typicode.com/users');
          }
}