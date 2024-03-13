import { IProducto } from '@/interfaces/IProductos';
import { Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react';
import { FC } from 'react';


interface Props {
  producto: IProducto;
}

export const ProductoDetail:FC<Props> = ({ producto }) => {

    
    return(
        <Card className="py-4 flex flex-row flex-wrap flex justify-center">
            <CardHeader className="pb-0 pt-2 px-4 basis-3/3 flex justify-center">
                <h1>{ producto.marca }</h1>
            </CardHeader>
            <CardBody className="overflow-visible py-2 basis-1/3">
                <h2>{ producto.modelo }</h2>
                <Image 
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={producto.foto}
                    width={370} 
                    />
            </CardBody>
            <CardFooter>
                <h3>{producto.precio}</h3>
            </CardFooter>
        </Card>
    )
}