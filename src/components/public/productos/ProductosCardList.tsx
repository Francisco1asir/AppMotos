import { IProducto } from '@/interfaces/IProductos';
import React, { FC } from 'react'
import { ProductosCard } from './ProductosCard';
import Link from 'next/link';

interface Props {
  productos: IProducto[];
}

export const ProductosCardList: FC<Props> = ({ productos }) => {
  return (
    <section className="flex flex-row flex-wrap">
      {
        productos.map((producto) => (
          <article key={producto.isbn} className="basis-1/4 p-2">
            <Link href={`/public/productos/${producto.isbn}`}>
              <ProductosCard productos={producto} />
            </Link>
          </article>
        ))
      }

    </section>
  )
}