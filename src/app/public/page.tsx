import { ProductosCardList } from "@/components/public/productos/ProductosCardList";
import { IProducto } from "@/interfaces/IProductos";
import { getProductos } from "@/model/productos/dataproductos";
import { Button } from "@nextui-org/button";


const PublicPage = async () => {

  const productos: IProducto[] = await getProductos()
  return (
    <>
      <section className='flex flex-col items-center'>
        {/* <h2 className='text-4xl m-8'>Sección de Productos</h2> */}
        <img src="https://kawa-go.kawasaki.es/storage/images/options/1-Cabecera_1920x810px.jpg" alt="" />
        <ProductosCardList productos={productos}/>
      </section>
        
    </>
  )
}



export default PublicPage;