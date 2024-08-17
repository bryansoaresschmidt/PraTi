import { useState } from "react";
// useState() retorna um estado atual e uma função pra modificar ele

function Counter() {
    const [count, setCount] = useState(0) 
    // useState retorn um array com dois valores, declaro que 'count' = 0 e 'setCount' = f

    return (
        <div>
            <p>Você clicou {count} vezes</p>
            <button onClick={() => setCount(count + 1)}>Clique aqui</button>
        </div>
    )
}

export default Counter