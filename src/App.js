
import React from 'react';
import Questao01A from './components/Questao01A';
import Questao02 from './components/Questao02';
import Questao03 from './components/Questao03';
import Questao04 from './components/Questao04';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Questão 01</h1>
            <Questao01A />
            <h1>Questão 02</h1>
            <Questao02 />
            <h1>Questão 03</h1>
            <Questao03 />
            <h1>Questão 04</h1>
            <Questao04 />
        </div>
    );
}

export default App;
