import React from 'react';

function Questao01B(props) {
    // Desestrutura o objeto props para acessar diretamente a lista passada por Questao01A
    const { lista } = props;

    return (
        <div>
            <ul>
                {lista.map((item, index) => {
                    // Extrai os valores de cada objeto para identificar o maior número
                    const valores = Object.values(item);
                    const maior = Math.max(...valores); // Encontra o maior valor no array de valores
                    
                    // Renderiza um item de lista para cada maior valor encontrado
                    return <li key={index}>Maior valor do objeto {index + 1}: {maior}</li>;
                })}
            </ul>
        </div>
    );
}

export default Questao01B;