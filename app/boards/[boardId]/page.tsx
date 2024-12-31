import React from 'react'

export default function BoardPage({
    params,
    searchParams,
  }: {
    params: { boardId: string };
    searchParams?: { [key: string]: string | string[] | undefined };
  }) {
    //const { boardId } = params;
    //throw new Error('invalid board params')
    return (
      <div>
        <h1>Board Page</h1>
        <p>Slug: {params.boardId}</p>
        {JSON.stringify(searchParams)}
      </div>
    );
  }
  