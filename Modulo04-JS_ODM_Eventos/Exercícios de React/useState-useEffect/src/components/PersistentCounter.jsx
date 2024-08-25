import { useEffect, useState } from "react";

export default function PersistentCounter() {
  const [number, setNumber] = useState(() => { // assegura que o estado seja inicializado somente uma vez, quando o componente é montado.
    return localStorage.getItem('number') === null ? 0 : parseInt(localStorage.getItem('number'), 10)
  }); 

  useEffect(() => {
    localStorage.setItem("number", number);
  }, [number]);

  return (
    <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <h2>3: Some ou subtraia do LocalStorage</h2>
        <div>
            <button onClick={() => setNumber(number - 1)}>-1 localStorage</button>
            <button onClick={() => setNumber(number + 1)}>+1 localStorage</button>
        </div>
    </div>
  );
}

// Exercício 3: Sincronização de Estado com Local Storage

// Objetivo: Sincronizar o estado de um componente com o Local Storage para manter dados entre as sessões do navegador.

// Instruções:

//     Crie um componente chamado PersistentCounter.
//     Use useState para gerenciar o contador, inicializando-o com o valor do Local Storage, se disponível.
//     Use useEffect para atualizar o Local Storage sempre que o contador mudar.
//     Exiba o valor do contador e adicione botões para incrementar e decrementar.
