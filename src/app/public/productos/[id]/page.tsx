import apiProductos from '@/model/productos/apiProductos'
import React from 'react'


const ProductoPage = async ({params: {id}}: {params: {id:string}}) => {
    const producto = await apiProductos.detalle(id);

    console.log("-----------")
    console.log(producto)
  return (
    <section className="container mx-auto px-4 mt-6 border min-h-screen">
        <h2>Detalle de un producto ${id}</h2>
    </section>
  )
}

export default ProductoPage
