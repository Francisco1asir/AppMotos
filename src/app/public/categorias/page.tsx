import { ICategoria } from "@/interfaces/ICategorias";
import { getCategorias } from "@/model/categorias/datacategoria";

const CategoriasPage = async () => {

  const categorias: ICategoria[] = await getCategorias()
  return (
    <>
      <h1>Proveedores</h1>
      {/* <Tabla 
        rows={proveedores} 
        columns={ColumProveedor}
        key='cif'/> */}
        
    </>
  )
}



export default CategoriasPage;