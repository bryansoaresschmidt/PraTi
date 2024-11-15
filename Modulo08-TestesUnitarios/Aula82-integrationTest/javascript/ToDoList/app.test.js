const request = require('supertest')
const app = require('./app')

describe('API de Tarefas', () => {
    it('Deve retornar todas as tarefas com status 200', async () => {
        const response = await request(app).get('/api/tarefas')
        
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('tarefas')
    })

    it('Deve adicionar uma tarefa e retornar status 201', async () => {
        const novaTarefa = { id: 3, titulo: 'Nova Tarefa', isConcluido: false }
        const response = await request(app).post('/api/tarefas').send(novaTarefa)
        
        expect(response.status).toBe(201)
        expect(response.body).toEqual(novaTarefa)

        const getResponse = await request(app).get('/api/tarefas')
        expect(getResponse.body.tarefas).toContainEqual(novaTarefa)
    })

    it('Deve atualizar uma tarefa e retornar status 200', async () => {
        const att = { titulo: 'Tarefa Atualizada', isConcluido: true }
        const response = await request(app).put('/api/tarefas/1').send(att)

        expect(response.status).toBe(200)
        expect(response.body).toMatchObject(att)

        const getResponse = await request(app).get('/api/tarefas')
        expect(getResponse.body.tarefas[0]).toMatchObject(att)
    })

    it('Deve retornar erro 404 ao tentar atualizar uma tarefa inexistente', async () => {
        const att = { titulo: 'Inexistente', isConcluido: true }
        const response = await request(app).put('/api/tarefas/999').send(att)
        
        expect(response.status).toBe(404)
        expect(response.body).toHaveProperty('message', 'Tarefa não encontrada')
    })

    it('Deve deletar uma tarefa existente e retornar o status 200', async () => {
        const response = await request(app).delete('/api/tarefas/1')
        
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('id', 1)

        const getResponse = await request(app).get('/api/tarefas')
        expect(getResponse.body.tarefas.find((t) => t.id === 1)).toBeUndefined()
    })

    it('Deve retornar erro 404 ao tentar deletar uma tarefa inexistente', async () => {
        const response = await request(app).delete('/api/tarefas/999')

        expect(response.status).toBe(404)
        expect(response.body).toHaveProperty('message', 'Tarefa não encontrada')
    })
})
