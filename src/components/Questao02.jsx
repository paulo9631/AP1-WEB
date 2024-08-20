// src/components/Questao02.jsx

import { useState } from "react";

const Questao02 = () => {
    const [isFront, setIsFront] = useState(true); // useState gerencia se a imagem atual é a frontal ou a traseira

    // Função que alterna entre a imagem frontal e traseira
    const toggleImage = () => setIsFront(!isFront);

    // Definindo a URL da imagem com base no estado atual
    const imageUrl = isFront
        ? "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png";

    return (
        <div className="pokemon-container">
            <img src={imageUrl} alt="Pikachu" /> {/* Renderiza a imagem correspondente */}
            <button onClick={toggleImage}>Virar Pokemon</button> {/* Botão para alternar a imagem */}
        </div>
    );
};

export default Questao02;
