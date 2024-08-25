/*
Exercício 1: Atualização de Título com useEffect

Objetivo: Atualizar o título da aba do navegador conforme o usuário interage com o componente.

Instruções:

    Crie um componente chamado TitleUpdater.
    Use useState para criar uma variável de estado number.
    Use useEffect para atualizar o título da aba do navegador toda vez que number mudar.
    Adicione botões para incrementar e decrementar number.
*/

import { useState, useEffect } from "react";

export default function Title() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${number}`
  }, [number]);

  return (
    <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <h2>1: Some ou subtraia do título da página</h2>
      <div>
        <button onClick={() => setNumber(number - 1)}>Remove -1</button>
        <button onClick={() => setNumber(number + 1)}>Add +1</button>
      </div>
    </div>
  );
}
