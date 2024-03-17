import { IProducto } from '@/interfaces/IProductos';
import { Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react';
import { FC } from 'react';


interface Props {
    producto: IProducto;
}

export const ProductoDetail: FC<Props> = ({ producto }) => {

// console.log(producto.catid.nombre)
    return (
        <>
            <section className="product-section">
                <div className="product-details">
                    <h1 className="product-title">{producto.marca}</h1>
                    <h2 className="product-model">{producto.modelo}</h2>

                    {/* <h2 className="product-model">{producto.catid.nombre}</h2> */}

                    <h3 className="product-price">{producto.precio}</h3>
                    <button className="buy-now-btn">Comprar ahora</button>
                </div>
                <div className="product-image">
                    <Image
                        alt="Card background"
                        className=" tarjetilla "
                        src={producto.foto}
                    />
                </div>
            </section>

        </>

    )
}