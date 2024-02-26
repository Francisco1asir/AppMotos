//Fichero para exportar la función que solicita y trae la lista de proveedores
export async function getProveedores() {

    try{
        const res = await fetch('http://192.168.1.224:3001/tienda/proveedor', {cache: 'no-store'})
        return res.json()
    }catch(error){
            throw new Error('Failed to fetch data')
    }
}