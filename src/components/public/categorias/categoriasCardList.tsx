// "use client"

// import React, { FC, useState } from 'react';
// import Link from 'next/link';
// import { CategoriasDrop } from './categoriasDrop';
// import { ICategoria } from '@/interfaces/ICategorias';

// interface Props {
//   ctegorias: ICategoria[];
// }

// export const CategoriasCardList: FC<Props> = ({ categoria}) => {

//   return (
//     <section className="flex flex-row flex-wrap sct">
//       {/* <div className="listado"> */}
//       {CategoriasCardList.map((categorias) => (
//         <article key={categorias.catid} className="basis-1/4 p-2">
//           <Link href={`/public/categorias/${categorias.catid}`}>
//             <CategoriasDrop categorias={categorias} />
//           </Link>
//         </article>
//       ))}
//       {/* </div> */}
//     </section>
//   );
// };
