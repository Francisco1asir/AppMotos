import { ICategoria } from "@/interfaces/ICategorias";
import { getCategorias } from "@/model/categorias/datacategoria";

const CategoriasPage = async () => {

  const categorias: ICategoria[] = await getCategorias()
  return (
    <>
      <h1>Categorías</h1> 
    </>
  )
}



export default CategoriasPage;