import { ICategoria } from "./ICategorias";
import { IProveedor } from "./iProveedores";

export interface IProducto {
    isbn:             string;
    autor:            string;
    title:            string;
    pageCount:        number;
    publishedDate:    string;
    thumbnailUrl:     string;
    shortDescription: string;
    longDescription:  string;
    status:           string;
    precio:           number;
}