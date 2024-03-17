'use client'
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";


export default function ProductModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Nueva Moto</Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className=" formumoto2 flex flex-col gap-1"></ModalHeader>
              <ModalBody className=" formumoto grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                //   autoFocus
                  className="inputmoto"
                  label="Matrícula"
                  placeholder="Ingresa Matricula"
                  variant="bordered"
                />
                <Input
                  className="inputmoto"
                  label="Nombre"
                  placeholder="Nombre Moto"
                  variant="bordered"
                />
                <Input
                  className="inputmoto"
                  label="Marca"
                  placeholder="Yamaha, kawasaki..."
                  variant="bordered"
                />
                <Input
                  className="inputmoto"
                  label="Modelo"
                  placeholder="Modelo de la moto"
                  variant="bordered"
                />
                <Input
                  className="inputmoto"
                  label="Descripción"
                  placeholder="Descripción de la moto"
                  variant="bordered"
                />
                <Input
                  className="inputmoto"
                  label="Precio"
                  placeholder="Precio de la moto"
                  variant="bordered"
                />
                <Input
                  className="inputmoto"
                  label="Peso_kg"
                  placeholder="Peso de la moto"
                  variant="bordered"
                />
                <Input
                  className="inputmoto"
                  label="Img"
                  placeholder="Imagen del producto"
                  variant="bordered"
                />
                <Input
                  className="inputmoto"
                  label="Categoria"
                  placeholder="Categoría del producto"
                  variant="bordered"
                />
                <Input
                  className="inputmoto"
                  label="Proveedor"
                  placeholder="Proveedor del producto"
                  variant="bordered"
                />
              </ModalBody>
              <ModalFooter className="formumoto2">
                <Button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onPress={onClose}>
                  Crear
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

    </>
  );
}