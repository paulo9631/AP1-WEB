
import React from 'react';
import Questao01B from './Questao01B'; // Importa o componente Questao01B para ser utilizado dentro de Questao01A

const Questao01A = () => {
    // Define uma lista de objetos JSON que será passada como props para Questao01B
    const lista = [
        {a: 10, b: 3, c: 7},
        {a: 5, b: -3, c: 9},
        {a: 1, b: 9, c: 40},
    ];

    // Renderiza o componente Questao01B, passando a lista de objetos JSON via props
    return (
        <div>
            <Questao01B lista={lista} /> {/* Passa a lista para Questao01B */}
        </div>
    );
};

export default Questao01A;