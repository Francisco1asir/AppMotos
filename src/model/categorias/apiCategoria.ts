import { ICategoria } from "@/interfaces/ICategorias";



const apiBD = 'http://213.136.94.185:3001/api';
const apiCategorias = {

    listar: async (): Promise<ICategoria[]> => {
        const ruta = `${apiBD}/categorias/listar`;
        const categorias = await fetch(`${ruta}`, { cache: 'no-store'})
        //este res.json transforma el string en formato json que llega desde internet a un array javascript en formato json
            .then((res) => res.json())
        return categorias
    },

    detalle: async (id: ICategoria["catid"]): Promise<ICategoria> => {
        const ruta = `${apiBD}/categorias/${id}`;
        const categoria = await fetch(`${ruta}`, { cache: 'no-store'})
            .then((res) => res.json())
        return categoria
    }
}

export default apiCategorias