
import { ICiudad } from './ciudad.interface';

export class Ciudad implements ICiudad {
    id: number;
    codigo: string;
    nombre: string;
    departamento: number;

    constructor(ciudad: ICiudad) {
        this.id = ciudad.id;
        this.codigo = ciudad.codigo;
        this.nombre = ciudad.nombre;
        this.departamento = ciudad.departamento;
    }
}