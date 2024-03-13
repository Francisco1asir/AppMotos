import { Menu } from '@/components/commons/Menu';
import { IChildren } from '@/interfaces/iChildren';



export default function AuthLayout({children}: IChildren){
   
    return (
        <>
            <header className='bg-black text-white'>
               <h2>Zona de Autencticacion</h2>
            </header>
            <main className='bg-black container mx-auto '>
                { children }
            </main>
        </>
        
    )
  }