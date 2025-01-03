import { BoardCard } from "~/src/components/board/BoardCard";
import { Button } from "~/src/components/form/Bouton";
import { prisma } from "~/src/db/prisma";
import { BoadForm } from "./boards/new/BoardForm";

export default async function Home() {
  //throw new Error("Something went wrong!!");

  const boards = await prisma.board.findMany();
  
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-5xl font-bold">Board list</h1>

      <BoadForm />
      
      <ul className="flex flex-col gap-2">
        {boards.map( (board) =>(
          <BoardCard key={board.id} board={board} />
        ))}
      </ul>
    </div>
  );
}
