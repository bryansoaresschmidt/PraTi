import { useState } from "react";

function Navegacao() {
    const array = [
        ['React é extremamente popular', 'Faz construir complexas, interativas UIs ser muito mais fácil', 'É poderoso e flexível', 'Tem um ecosistema muito ativo e versátil'],
        ['Components JSX e Props', 'State', 'Hooks (ex.: useEffect())', 'Dynamic Rendering'],
        ['Página da Web Oficial', 'Next.js (Fullstack framework)', 'React Nativo (construa apps mobiles nativos com React)'],
        ['JavaScript vanila necessita programação imperativa', 'Programação Imperativa: Você define todos os passos necessários para chegar em um resultado', 'React por outro lado adota linguagem declarativa', 'Com React, você define o objetivo e o React descobre como chegar lá']
    ]

    const [ content, setContent] = useState(array[0])
    
    function change(index) {
        setContent(array[index])
    }

    return (
        <div>
            <menu className="show">
                <button onClick={() => change(0)}>Por que o React?</button>
                <button onClick={() => change(1)}>Característias Principais</button>
                <button onClick={() => change(2)}>Recursos Relacionados</button>
                <button onClick={() => change(3)}>React vs JS</button>
            </menu>

            <div>
                <ul>
                    {content.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navegacao