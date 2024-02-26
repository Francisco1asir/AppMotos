export interface IProveedor {
    nombre:        string;
    cif:           string;
    telefono:      string;
    mail:          string;
    pais:          string;
    codigo_postal: string;
    direccion:     string;
    key?:          string;
}

export interface IColumn {
    key: string;
    label: string;
}

const ColumProveedor:IColumn[] = [
    {
        key: "cif",
        label: "CIF",
    },
    {
        key: "nombre",
        label: "NOMBRE",
    },{
        key: "pais",
        label: "PAIS",
    }
]

export default ColumProveedor