import ButtonLogout from "@/components /ButtonLogout";
import FormNewBoard from "@/components /FormNewBoard";
import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import Board from "@/models/Board";


async function getUser() {
    const session = await auth();

    await connectMongo();

    return await User.findById(session.user.id).populate("boards");
}


export default async function dashboard() {

    const user = await getUser();

    return(
        <main className="bg-base-200 min-h-scren">
            {/* HEADER */}
            <section className="bg-base-100">
                <div className="max-w-5xl mx-auto px-5 py-3 flex justify-end">
                <ButtonLogout />
                </div>
            </section>

            <section className="max-w-5xl mx-auto px-5 py-12">
                <FormNewBoard />

                <div>
                    <h1 className="font-extrabold text-xl mb-4">
                        {user.boards.length} Quadros Criados
                    </h1>

                    <ul className="space-y-4">
                        {user.boards.map((board) => {
                            return <div 
                                    key={board._id}
                                    className="bg-base-100 p-6 rounded-3xl"
                                    >
                                        {board.name}
                                    </div>
                        })}
                    </ul>
                </div>

            </section>

        </main>
    );
}
