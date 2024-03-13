
import { AdminTable } from "@/components/commons/tabla/tabla";
import apiProductos from "@/model/productos/apiProductos";

const BackendPage = async () => { 
  const productos = await apiProductos.listar();
    return (
      <>
        <AdminTable productos={productos}/>
      </>
    )
  }

export default BackendPage;