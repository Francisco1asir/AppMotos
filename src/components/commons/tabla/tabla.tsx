import { IProducto } from "@/interfaces/IProductos";
import { FC } from "react";
// import { Modal } from "./Modal";

interface Props {
  productos: IProducto[];
}

export const AdminTable: FC<Props> = ({ productos }) => {

  console.log(productos)
  return (
    <>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-16 py-3">
                {/* <span className="sr-only">Image</span> */}
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
                <button type="button" className="button-circle">
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                  </svg>
                </button>

              </th>

            </tr>
          </thead>
          {
            productos.map((producto) => (
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4">
                    <img src={producto.foto} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
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
                  <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Borrar</button>
                  </td>
                </tr>
              </tbody>

            ))
          }
        </table>
      </div>

    </>

  )
}