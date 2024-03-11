import { Menu } from '@/components/commons/Menu';
import { IChildren } from '@/interfaces/IChildren';
import { ILink } from '../../interfaces/ILinks';


export default function AuthLayout({children}: IChildren){
   
    return (
        <>
            <header className='bg-orange-300'>
               <h2>Zona de Autencticacion</h2>
            </header>
            <main className='container mx-auto'>
                { children }
            </main>
        </>
        
    )
  }