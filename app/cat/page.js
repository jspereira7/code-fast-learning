"use client";
import { useState } from "react";

const ImagemAleatoriaGato = () => {
    const [status, setStatus] = useState("idle");
    const [imageUrl, setImageUrl] = useState(
        "https://api.thecatapi.com/v1/images/search");

    
    const getNewImage = async () => {
        setStatus("Loading...");

        try{
        const response = await fetch ("https://api.thecatapi.com/v1/images/search")
        const data = await response.json();
        setImageUrl(data[0].url);
        setStatus("Pronto!")}

        catch (error) {
            setStatus("Oops Erro")
        }
    };

    return (
        <main>
            <div>
                <h1>Async/Demo</h1>

                <div>Status {status}</div>

                <button onClick={getNewImage} className="btn btn-primary">
                    Gerar nova imagem Gato
                </button>

                {imageUrl && (
                    <img src={imageUrl} alt="imagemGato" className="max-w-80"/>
                )}
            </div>
        </main>

    )
};

export default ImagemAleatoriaGato;
