import { useState } from "react";

export default function LimitedCounter() {
    const [counter, setCounter] = useState(0);

    // Função para decrementar o contador
    const handleDecrement = () => {
        setCounter(prevCounter => Math.max(prevCounter - 1, 0));
    };

    // Função para incrementar o contador
    const handleIncrement = () => {
        setCounter(prevCounter => Math.min(prevCounter + 1, 10));
    };

    return (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h2>6: LimitedCounter</h2>
            <div>
                <p style={{ display: "inline", marginRight: '10px'}}>Adicione ao carrinho</p>
                <button onClick={handleDecrement}>-1</button>
                <button onClick={handleIncrement}>+1</button>
            </div>
            {counter < 10 ? (
                <p>{counter} unidades</p>
            ) : (
                <p>Estoque insuficiente, por favor <strong>remova um</strong>, só temos {counter -1} disponíveis</p>
            )}
        </div>
    );
}