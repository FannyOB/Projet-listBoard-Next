import { Board } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod';
import { prisma } from '~/src/db/prisma';

//permet de préciser le type de retour
type Data = {
board: Board;
};

//"schema zod" permet de vérifier que l'on a les bonnes données de notre request, que l'on vient de recevoir
const BodyScheme = z.object({
    title: z.string().min(1).max(225),
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
  if (req.method !== "POST"){
    res.status(405).end();
    return;
  }

  //recupération du body
  const body = BodyScheme.parse(JSON.parse(req.body));

  const board = await prisma.board.create({
    data: {
        title: body.title,
    },
  });

  //status 201 signifie que l'api a créé notre objet
  res.status(201).json({board})
}
