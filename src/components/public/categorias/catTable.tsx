import { ICategoria } from "@/interfaces/ICategorias";
import { FC } from "react";


interface Props {
    categorias: ICategoria[];

}

export const CatTable: FC<Props> = ({ categorias }) => {

    console.log(categorias)
    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-16 py-3">
                                <span className="sr-only">Image</span>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Producto
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Marca
                            </th>
                        </tr>
                    </thead>
                    {
                        categorias.map((categoria) => (
                            <tbody key={categoria.catid}>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    {/* <td className="p-4">
                                        <img src={categoria.nombre} className="w-16 md:w-32 max-w-full max-h-full" alt={categoria.nombre} />
                                    </td> */}
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        {categoria.desc}
                                    </td>
                                    {/* <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                                {categoria.descripcion}
                                            </td> */}
                                </tr>
                            </tbody>

                        ))
                    }
                </table>
            </div>

        </>

    )
}