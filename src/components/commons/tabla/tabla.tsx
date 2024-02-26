import React, { FC } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import { IColumn, IProveedor } from "@/interfaces/iProveedores";
//Componente tabla que es común a todas las entidades al tener propiedades dinámicas

interface Props {
    rows    :IProveedor[],
    columns :IColumn[],
    key     :string;
}
//Tabla generada con material ui
export const Tabla:FC<Props> = ({rows, columns, key}) => {
  const renderCell = React.useCallback (( proveedor: IProveedor,  columnKey: React.Key) => {
  },[]);
  
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={`item.${key}`}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
export default Tabla