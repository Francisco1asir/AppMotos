

import { IProveedor } from '@/interfaces/iProveedores'
import React, { FC } from 'react'

interface Props {
    proveedores: IProveedor[];
}

export const ProveedoresCardList:FC<Props> = ({proveedores}) => {
  return (
    <section className="flex flex-row flex-wrap">
        {
            proveedores.map( (proveedor) => (
                <article key={proveedor.cif} className="basis-1/4 p-2">
                     
                </article>
            ))
        }
    </section>
  )
}
