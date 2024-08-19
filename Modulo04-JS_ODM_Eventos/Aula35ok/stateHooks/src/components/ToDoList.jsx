import { useState } from "react";

function ToDoList() {
    const [ toDos, setToDos] = useState([])
    // criamos um array para armazenar os valores da lista
    const [ inputValue, setInputValue] = useState('')
    // criamos os valores da lista

    const addToDo = () => {
        setToDos([...toDos, inputValue])
        setInputValue('')
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={addToDo}>Função que Adiciona Tarefa</button>

            <ul>
                {toDos.map((toDo, index) => (
                    <li key={index}>{toDo}</li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList