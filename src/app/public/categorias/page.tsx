import { CatTable } from "@/components/public/categorias/catTable";
import { ICategoria } from "@/interfaces/ICategorias";
import { getCategorias } from "@/model/categorias/datacategoria";

const CategoriasPage = async () => {

  const categorias: ICategoria[] = await getCategorias()
  return (
    <>
      <CatTable categorias={categorias}/>
    </>
  )
}



export default CategoriasPage;