import { IProducto } from '@/interfaces/IProductos';
import { Button, Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react';
import React, { FC } from 'react'

interface Props {
    productos: IProducto;
}

export const ProductosCard: FC<Props> = ({ productos }) => {
    return (
        <section className='sct'>
            <Card className="py-4 min-h-72 max-h-80 bg-[url(https://www.publicdomainpictures.net/pictures/40000/nahled/abstract-green-background-1361187771Euk.jpg)]">
                <CardHeader className="pb-0 pt-2 px-4 h-10 flex-col items-start">
                    <h2 className="font-bold text-xl text-white">{productos.marca}</h2>
                    <h6 className="font-bold text-sm text-white">{productos.modelo}</h6>
                </CardHeader>
                <CardBody className="overflow-visible h-48 py-2 flex flex-wrap justify-center items-center">
                    <Image
                        alt="Card background"
                        className=" tarjetilla "
                        src={productos.foto}
                    />
                </CardBody>
                <CardFooter className="pb-0 pt-2 px-4 h-10 flex-col items-center">
                    <Button className="boton">
                        Ver Detalle
                    </Button>

                </CardFooter>
            </Card>
        </section>
    )
}