const express = require('express')
const app = express()

const users = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'João'}
]

app.get('/api/users', (req, resp) => {
    resp.status(200).json({users})
})

app.post('/api/users', (req, resp) => {
    const { id, name } = req.body
    const newUser = { id, name }

    users.push(newUser)
    resp.status(201).json(newUser) // Status 201: Criado
})

module.exports = app