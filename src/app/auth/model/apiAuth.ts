

import { ILogin, IRespLogin } from '@/interfaces/Ilogin';
import axios from 'axios';

//USAMOS AXIOS PARA REALIZAR PETICIONES DESDE COMPONENTES QUE SE RENDERIZAN EN EL CLIENTE
//EN ESTE CASO EL COMPONENTE QUE EJECUTA EL LOGIN. Despues de logearse debe de redireccionar
//a otra ruta del path y esto solo lo conoce los navegadores de cada cliente donde se ejecuta
//el servidor no tiene acceso
const apiBD = 'http://213.136.94.185:3001/api';

const apiAuth = {

    login: async (login:ILogin): Promise<IRespLogin> => {
        const ruta = `${apiBD}/auth/login`;
        const {data} = await axios.post(`${ruta}`, login) 
        return data
    }
}

export default apiAuth;