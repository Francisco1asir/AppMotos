'use client'

import { useState } from 'react';
import axios from 'axios'; // Importa axios para realizar solicitudes HTTP
import { IProducto } from '@/interfaces/IProductos';
import ProductModal from './modalproducto';

interface Props {
  productos: IProducto[];
}


export const AdminTable = ({ productos }: Props) => {
  const [deletedProduct, setDeletedProduct] = useState<string | null>(null);

  // Función para manejar el evento de clic en el botón "Borrar"
  const handleDelete = async (matricula: string) => {
    try {
      // Realiza una solicitud DELETE a tu API Nest para eliminar la moto
      await axios.delete(`http://213.136.94.185:3001/api/motos/${matricula}`);
      // Actualiza el estado si la solicitud es exitosa
      setDeletedProduct(matricula);
      // Recarga la página automáticamente después de eliminar
      window.location.reload();
    } catch (error) {
      console.error('Error al borrar la moto:', error);
    }
  };

  // Función para mostrar una confirmación antes de borrar
  const confirmDelete = (matricula: string) => {
    if (window.confirm('¿Estás seguro de que quieres borrar este producto?')) {
      handleDelete(matricula);
    }
  };

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-16 py-3">
                Imagen
              </th>
              <th scope="col" className="px-6 py-3">
                Producto
              </th>
              <th scope="col" className="px-6 py-3">
                Marca
              </th>
              <th scope="col" className="px-6 py-3">
                Precio
              </th>
              <th scope="col" className="px-6 py-3">
              <ProductModal/>

              </th>

            </tr>
          </thead>
          {productos.map((producto) => (
            <tbody key={producto.matricula}>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4">
                  <img src={producto.foto} className="w-16 md:w-32 max-w-full max-h-full" alt="Producto" />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {producto.marca}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {producto.modelo}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {producto.precio}€
                </td>
                <td className="px-6 py-4">
                  {/* Botón "Borrar" que llama a la función confirmDelete */}
                  <button type="button" onClick={() => confirmDelete(producto.matricula)} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Borrar
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};