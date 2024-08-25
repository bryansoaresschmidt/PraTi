import { useState } from "react";

export default function ToggleText() {
    const [ toggle, setToggle ] = useState(false)

    return (
        <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <h2>5: Mostrar Texto</h2>
            <div>
                <button onClick={() => setToggle(!toggle)}>Show/Hide</button>
            </div>
            {toggle ? (
                <p>Eu estava escondido ahah, você me achou!</p>
            ) : (
                <p></p>
            )
            }
        </div>
      );

}

// Exercício 5: Exibir/Mostrar Texto

// Objetivo: Criar um componente que alterna entre exibir e esconder um texto com o clique de um botão.

// Instruções:

//     Crie um componente chamado ToggleText.
//     Use useState para gerenciar se o texto está visível ou não.
//     Adicione um botão que alterne o estado de visibilidade do texto.
//     Exiba o texto somente quando estiver visível.
