import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { Ciudad } from '../models/ciudad.model';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  // transform(usuarios: Usuario[], texto: string): Usuario[] {
  //   if (texto.length ===0 ){
  //     return usuarios;
  //   }
  //   texto = texto.toLocaleLowerCase();
  //   return usuarios.filter( usuario =>{
  //     return usuario.name.toLocaleLowerCase().includes(texto);
  //   });
  // }

  transform(ciudades: Ciudad[], texto: string): Ciudad[] {
    if (texto.length === 0 ){
      return ciudades;
    }
    texto = texto.toLocaleLowerCase();
    return ciudades.filter( usuario =>{
      return usuario.municipio.toLocaleLowerCase().includes(texto);
    });
  }

}
