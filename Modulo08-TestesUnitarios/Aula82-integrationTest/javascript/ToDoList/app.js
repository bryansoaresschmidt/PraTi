const express = require('express')
const app = express();
app.use(express.json());

// express().use(require('express').json())

let tarefas = [
    { id: 1, titulo: 'Estudar Node.js', isConcluido: false },
    { id: 2, titulo: 'Desenvolver API', isConcluido: false },
  ];

app.get('/api/tarefas', (req, res) => {
    res.status(200).json({ tarefas })
})

app.post('/api/tarefas', (req, res) => {
    const { id, titulo, isConcluido } = req.body
    const novaTarefa = { id, titulo, isConcluido: isConcluido || false }
    tarefas.push(novaTarefa)
    res.status(201).json(novaTarefa)
})

app.put('/api/tarefa/:id', (req, res) => {
    const { id } = req.params
    const { titulo, isConcluido } = req.body
    const tarefa = tarefas.find((t) => t.id === parseInt(id))

    if (tarefa) {
        tarefa.titulo = titulo !== undefined ? titulo : tarefa.titulo
        tarefa.isConcluido = isConcluido !== undefined ? isConcluido : tarefa.isConcluido
        res.status(200).json(tarefa)
    } else {
        res.status(404).json({ message: 'Tarefa não encontrada' })
    }
})

app.delete('/api/tarefas/:id', (req, res) => {
    const { id } = req.params
    const tarefaIndex = tarefas.findIndex((t) => t.id === parseInt(id))

    if (taredaIndex > -1) {
        const tarefaRemovida = tarefas.splice(tarefaIndex, 1)
        res.status(200).json(tarefaRemovida[0])
    } else {
        res.status(404).json({ message: 'Tarefa não encontrada '})
    }
})

module.exports = app