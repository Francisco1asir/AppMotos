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
    catid:          ICategoria;
}

export interface IColumn {
    key: string;
    label: string;
}

const ColumProducto:IColumn[] = [
    {
        key: "matricula",
        label: "MATRICULA",
    },
    {
        key: "marc",
        label: "MARCA",
    },{
        key: "modelo",
        label: "MODELO",
    }
]

export default ColumProducto