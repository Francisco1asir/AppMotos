'use client'
import Tabla from '@/components/commons/tabla/tabla'
import Tabla1 from '@/components/commons/tabla/tabla1'
import DataGrid from '@/components/public/proveedores/datagrid/DataGrid'
import ColumProveedor, { IProveedor } from '@/interfaces/iProveedores'
import { getProveedores } from '@/model/proveedores/dataproveedor'
import React from 'react'


const ProveedoresPage = async () => {

  const proveedores: IProveedor[] = await getProveedores()
  return (
    <>
      <h1>Proveedores</h1>
      {/* <Tabla 
        rows={proveedores} 
        columns={ColumProveedor}
        key='cif'/> */}
        
    </>
  )
}



export default ProveedoresPage;

