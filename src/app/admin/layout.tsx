
import { Menu } from "@/components/commons/Menu";
import { IChildren } from "@/interfaces/iChildren";
import { ILink } from "@/interfaces/iLinks";


export default function AdminLayout({children}: IChildren){

    const links:ILink[] = [
        {name: 'Tabla', href: '/admin'},
        {name: 'Insertar', href: '/admin/insertar'},
        {name: 'Borrar', href: '/admin/borrar'},
        {name: 'Actualizar', href: '/admin/actualizar'},
        {name: 'Listar', href: '/admin/listar'}
      ];


    return (
        <>
            <header>
                <Menu links= {links} />
            </header>
            <main>
                { children }
            </main>
        </>
    )
}