import React, { useEffect, useState } from 'react';

const Questao03 = () => {
    const [capitais, setCapitais] = useState([]); // Estado para armazenar as capitais e suas populações

    // Função assíncrona que busca os dados da API e atualiza o estado
    const fetchCapitais = async () => {
        try {
            const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population");
            const data = await response.json();
            setCapitais(data);
        } catch (error) {
            console.error("Erro ao buscar dados:", error); // Captura e exibe erros na busca dos dados
        }
    };

    // useEffect para chamar fetchCapitais apenas uma vez quando o componente é montado
    useEffect(() => {
        fetchCapitais();
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

export default Questao03;
