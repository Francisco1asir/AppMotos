import { ICategoria } from "./ICategorias";
import { IProveedor } from "./iProveedores";

export interface IProducto {
    matricula:       string;
    marca:           string;
    modelo:          string;
    foto:            string;
    cilindrada:      number;
    peso:            number;
    precio:          number;
    dni_propietario: string;
    catid:           string;
}