import React, { useEffect, useState } from 'react';

const Questao04 = () => {
    const [capitais, setCapitais] = useState([]); // Estado para armazenar as capitais e suas populações

    // Criação da Promise que resolve o array de capitais e populações
    const fetchCapitais = () => {
        return new Promise((resolve, reject) => {
            const data = [
                {"capital":["Dublin"],"population":4994724},
                {"capital":["Nicosia"],"population":1207361},
                {"capital":["Madrid"],"population":47351567}
            ];
            resolve(data);
        });
    };

    // useEffect para chamar fetchCapitais e atualizar o estado com o resultado da Promise
    useEffect(() => {
        const obterDados = async () => {
            try {
                const data = await fetchCapitais(); // Usa async-await para resolver a Promise
                setCapitais(data);
            } catch (error) {
                console.error("Erro ao buscar dados:", error); // Captura e exibe erros na busca dos dados
            }
        };
        obterDados();
    }, []);

    // Se o estado ainda não tiver dados, retorna "Carregando..."
    if (capitais.length === 0) {
        return <div>Carregando...</div>;
    }

    // Ordena as capitais por população
    const sortedCapitais = [...capitais].sort((a, b) => a.population - b.population);
    const menorPopulacao = sortedCapitais[0]; // Menor população
    const maiorPopulacao = sortedCapitais[sortedCapitais.length - 1]; // Maior população

    return (
        <div>
            <p>Capital com menor população: {menorPopulacao.capital[0]} ({menorPopulacao.population} habitantes)</p>
            <p>Capital com maior população: {maiorPopulacao.capital[0]} ({maiorPopulacao.population} habitantes)</p>
        </div>
    );
};

export default Questao04;
