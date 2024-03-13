import { Menu } from '@/components/commons/Menu';
import { IChildren } from '@/interfaces/iChildren';
import { ILink } from '@/interfaces/iLinks';



export default function AuthLayout({children}: IChildren){
    const links:ILink[] = [
        {name: 'Productos', href: '/public/productos'},
        {name: 'Categorias', href: '/public/categorias'},
        {name: 'Proveedores', href: '/public/proveedores'},
        {name: 'Quienes somos', href: '/public/about'}
      ];
    return (
        <>
            <header>
                <Menu links= {links} />
            </header>
            <main className='bg-black container mx-auto '>
                { children }
            </main>
        </>
        
    )
  }