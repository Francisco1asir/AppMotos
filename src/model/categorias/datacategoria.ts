
export async function getCategorias() {

    try{
        const res = await fetch('http://213.136.94.185:3001/api/categorias/listar', {cache: 'no-store'})
        return res.json()
    }catch(error){
            throw new Error('Failed to fetch data')
    }
}