"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast }  from "react-hot-toast"

const FormNewBoard = () => {

    const [name, setName] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();

         if (isLoading) return;
        

        setIsLoading(true);

        try {
            
            const data = await axios.post("/api/board", { name });

            setName("");

            toast.success("Quadro Criado!")

            router.refresh();
        }
        catch (e) {
            const errorMessage = e.response?.data?.error || e.message || "Ops, algo deu errado..";
            toast.error(errorMessage);
        } finally {
            setIsLoading(false)
        }
    };

        

    return <form 
                className="bg-base-100 p-8 rounded-3xl space-y-6"
                onSubmit={handleSubmit}
            
            >
                <p className="font-bold text-lg">Crie um novo Quadro de feedback</p>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Nome do Quadro</legend>
                    <input 
                    type="text" 
                    className="input w-full" 
                    placeholder="Digite aqui" 
                    value={name}
                    onChange={(event) => setName(event.target.value)}                    
                    />
                </fieldset>


                <button className="btn btn-primary btn-block" type="submit">
                    {isLoading && <span className="loading loading-spinner loading-xs"></span>}
                    Criar Quadro
                </button>
            </form>
};

export default FormNewBoard;
