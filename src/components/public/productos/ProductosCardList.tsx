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
          <div className="form-group">
            <input type="checkbox" id="html" checked={mostrarSoloKawasaki}
              onChange={() => handleCheckboxChange('Kawasaki', setMostrarSoloKawasaki)}
            ></input>
            <label htmlFor="html">Kawasaki</label>
          </div>  
        </label>

        <label>
          <div className="form-group">
            <input type="checkbox" id="html2" checked={mostrarSoloYamaha}
              onChange={() => handleCheckboxChange('Yamaha', setMostrarSoloYamaha)}
            ></input>
            <label htmlFor="html2">Yamaha</label>
          </div>  
        </label>

        <label>
          <div className="form-group">
            <input type="checkbox" id="html3" checked={mostrarSoloDucati}
              onChange={() => handleCheckboxChange('Ducati', setMostrarSoloDucati)}
            ></input>
            <label htmlFor="html3">Ducati</label>
          </div>  
        </label>

        <label>
          <div className="form-group">
            <input type="checkbox" id="html4" checked={mostrarSoloBMW}
              onChange={() => handleCheckboxChange('BMW', setMostrarSoloBMW)}
            ></input>
            <label htmlFor="html4">BMW</label>
          </div>  
        </label>

        <label>
          <div className="form-group">
            <input type="checkbox" id="html5" checked={mostrarSoloHonda}
              onChange={() => handleCheckboxChange('Honda', setMostrarSoloHonda)}
            ></input>
            <label htmlFor="html5">Honda</label>
          </div>  
        </label>

        <label>
          <div className="form-group">
            <input type="checkbox" id="html6" checked={mostrarSoloSuzuki}
              onChange={() => handleCheckboxChange('BMW', setMostrarSoloSuzuki)}
            ></input>
            <label htmlFor="html6">Suzuki</label>
          </div>  
        </label>
      </div>

      {/* <div className="listado"> */}
      {productosFiltrados.map((producto) => (
        <article key={producto.matricula} className="basis-1/4 p-2">
          <Link href={`/public/productos/${producto.matricula}`}>
            <ProductosCard productos={producto} />
          </Link>
        </article>
      ))}
      {/* </div> */}
    </section>
  );
};
