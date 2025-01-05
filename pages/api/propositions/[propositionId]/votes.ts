import { Board, Proposition, Vote } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod';
import { prisma } from '~/src/db/prisma';

//permet de préciser le type de retour
type Data = {
    vote: Vote;
};

const QueryScheme = z.object({
    propositionId: z.string().transform((id) => Number(id)),
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
  if (req.method !== 'POST'){
    res.status(405).end();
    return;
  }

  //recupération du body
  const query = QueryScheme.parse(req.query);

  const vote = await prisma.vote.create({
    data: {
        ip: String(Math.random()),
        propositionId: query.propositionId,
    },
  });

  //status 201 signifie que l'api a créé notre objet
  res.status(201).json({vote});
}
