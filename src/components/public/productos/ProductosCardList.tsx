"use client"

import React, { FC, useState } from 'react';
import { IProducto } from '@/interfaces/IProductos';
import { ProductosCard } from './ProductosCard';
import Link from 'next/link';

interface Props {
  productos: IProducto[];
}

export const ProductosCardList: FC<Props> = ({ productos }) => {
  const [mostrarSoloKawasaki, setMostrarSoloKawasaki] = useState(false);
  const [mostrarSoloYamaha, setMostrarSoloYamaha] = useState(false);
  const [mostrarSoloDucati, setMostrarSoloDucati] = useState(false);
  const [mostrarSoloBMW, setMostrarSoloBMW] = useState(false);
  const [mostrarSoloHonda, setMostrarSoloHonda] = useState(false);
  const [mostrarSoloSuzuki, setMostrarSoloSuzuki] = useState(false);

  const handleCheckboxChange = (marca: string, setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setter((prevState) => !prevState);
  };

  const productosFiltrados = productos.filter((producto) => {
    if (
      (mostrarSoloKawasaki && producto.marca === 'Kawasaki') ||
      (mostrarSoloYamaha && producto.marca === 'Yamaha') ||
      (mostrarSoloDucati && producto.marca === 'Ducati') ||
      (mostrarSoloBMW && producto.marca === 'BMW') ||
      (mostrarSoloHonda && producto.marca === 'Honda') ||
      (mostrarSoloSuzuki && producto.marca === 'Suzuki')
    ) {
      return true;
    }

    // Mostrar todos si no hay ninguna marca seleccionada
    return (
      !mostrarSoloKawasaki &&
      !mostrarSoloYamaha &&
      !mostrarSoloDucati &&
      !mostrarSoloBMW &&
      !mostrarSoloHonda &&
      !mostrarSoloSuzuki
    );
  }) || [];

  return (
    <section className="flex flex-row flex-wrap sct">
      <div className="checkboxs">
      <label>
        <input
          type="checkbox"
          checked={mostrarSoloKawasaki}
          onChange={() => handleCheckboxChange('Kawasaki', setMostrarSoloKawasaki)}
        />
       Kawasaki
      </label>

      <label>
        <input
          type="checkbox"
          checked={mostrarSoloYamaha}
          onChange={() => handleCheckboxChange('Yamaha', setMostrarSoloYamaha)}
        />
        Yamaha
      </label>

      <label>
        <input
          type="checkbox"
          checked={mostrarSoloDucati}
          onChange={() => handleCheckboxChange('Ducati', setMostrarSoloDucati)}
        />
       Ducati
      </label>

      <label>
        <input
          type="checkbox"
          checked={mostrarSoloBMW}
          onChange={() => handleCheckboxChange('BMW', setMostrarSoloBMW)}
        />
       BMW
      </label>

      <label>
        <input
          type="checkbox"
          checked={mostrarSoloHonda}
          onChange={() => handleCheckboxChange('Honda', setMostrarSoloHonda)}
        />
       Honda
      </label>

      <label>
        <input
          type="checkbox"
          checked={mostrarSoloSuzuki}
          onChange={() => handleCheckboxChange('Suzuki', setMostrarSoloSuzuki)}
        />
       Suzuki
      </label>
      </div>


      {productosFiltrados.map((producto) => (
        <article key={producto.matricula} className="basis-1/4 p-2">
          <Link href={`/public/productos/${producto.matricula}`}>
            <ProductosCard productos={producto} />
          </Link>
        </article>
      ))}
    </section>
  );
};
