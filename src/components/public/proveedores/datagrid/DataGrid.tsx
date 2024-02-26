import { IColumn, IProveedor } from '@/interfaces/iProveedores'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import React, { FC } from 'react'

interface Props {
    proveedores: IProveedor[],
    columns: IColumn[]
}

const DataGrid:FC<Props> = ({ proveedores, columns}) => {
  return (
    <table border={1}>
            <thead>
                {
                    columns.map( (col) => (
                        <th>{ col.label }</th>
                    ))
                }
            </thead>
            <tbody>
                {
                    proveedores.map( (proveedores) => (
                        <tr>
                            <th>{ proveedores.nombre}</th>
                            <th>{ proveedores.cif }</th>
                            <th>{ proveedores.pais }</th>
                        </tr>
                    ))
                }
            </tbody>
    </table>
  )
}

export default DataGrid