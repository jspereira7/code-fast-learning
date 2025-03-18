import connectMongo from "@/libs/mongoose";
import Board from "@/models/Board";
import { redirect } from "next/navigation";

const getBoard = async ({ boardId }) => {
    await connectMongo();
    const board = await Board.findById(boardId);

    if (!board) {
        redirect("/");
        return null;  // Evita erro ao tentar acessar propriedades de 'board'
    }

    return board;
};

export default async function PublicFeedbackBoard({ params }) {
    const board = await getBoard(params); // Agora passa 'params' inteiro

    if (!board) return null; // Evita erro de renderização caso board seja null

    return <main>
        {board.name} (public)
    </main>;
}
