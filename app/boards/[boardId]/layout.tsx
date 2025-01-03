import { notFound } from 'next/navigation';
import React, { Children, PropsWithChildren } from 'react';
import { prisma } from '~/src/db/prisma';

export default async function LayoutBoard({
    params,
    children,
  }: PropsWithChildren<{
    params: { boardId: string };
  }>) {
    //si on veu créer un erreur:
   // throw new Error('invalid board params')
   const boardId = Number(params.boardId);

   if (isNaN(boardId)) {
     return notFound();
   }

   const board = await prisma.board.findUniqueOrThrow({ //findUniqueOrThrow: va permettre de catcher si un id n'existe pas
     where: {
       id: boardId,
     },
   });

  return (
    <div className='flex flex-col gap-6'>
       <h2 className='text-4xl font-bold'>{board.title}</h2>
       {children}
    </div>
  )
}
