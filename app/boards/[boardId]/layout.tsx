import React, { Children, PropsWithChildren } from 'react'

export default function LayoutBoard({
    params,
    children,
  }: PropsWithChildren<{
    params: { boardId: string };
  }>) {

   // throw new Error('invalid board params')

  return (
    <div>
       <h2>Boards ({params.boardId})</h2>
       {children}
    </div>
  )
}
