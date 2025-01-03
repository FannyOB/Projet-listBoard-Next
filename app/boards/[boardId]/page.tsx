import { notFound } from "next/navigation";
import { Proposition } from "~/src/components/proposition/PropositionLine";
import { prisma } from "~/src/db/prisma";

export default async function BoardPage({
    params,
  }: {
    params: { boardId: string };
  }) {
    const boardId = Number(params.boardId);

    const propositions = await prisma.proposition.findMany({
      where: {
        id: boardId,
      },
      select: {
        title: true,
        id: true,
        _count: {
          select: {
            vote: true,
          },
        },
      },
    });

    //throw new Error('invalid board params')
    return (
      <ul>
        {propositions.map((proposition) =>(
          <Proposition 
            key={proposition.id}
            voteCount={proposition._count.vote}
            {...proposition} 
          />
        ))}
      </ul>
    );
  }
  