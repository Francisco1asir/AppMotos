import apiProductos from '@/model/productos/apiProductos'
import React from 'react'
import { ProductoDetail } from '../detail';


const ProductoPage = async ({ params: { id } }: { params: { id: string } }) => {

  const producto = await apiProductos.detalle(id);

  return (
    <section className="container mx-auto px-4 mt-6 border min-h-screen">
        <ProductoDetail producto={producto} />
        <h1>Detalle de la moto ${id}</h1>
    </section>
  )
}

export default ProductoPage