import { useState } from "react";
// useState() retorna um estado atual e uma função pra modificar ele

function Counter() {
    const [count, setCount] = useState(0) 
    // useState retorn um array com dois valores, declaro que 'count' = 0 e 'setCount' = f

    return (
        <div>
            <p>Você clicou {count} vezes</p>
            <button onClick={() => setCount(count + 1)}>Clique aqui</button>
            {/* Se você tivesse escrito onClick={setCount(count + 1)}, a função setCount seria executada imediatamente 
            ao renderizar o componente, colocar setCount(count + 1) dentro de uma função anônima () => {} faz com que 
            ela seja executada somente quando o evento de clique ocorrer. */}
        </div>
    )
}

export default Counter