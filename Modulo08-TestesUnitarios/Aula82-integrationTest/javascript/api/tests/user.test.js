const request = require('supertest')
const app = require('../app')

describe('Testando API', () => {  // Define um grupo de testes, chamado de Testando API título
    it('Deve retornar todos os usuários com status 200', async () => { // IT define um teste específico pra rota GET
        const response = await request(app).get('/api/users') // Aguarda uma resposta da api users

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('users')
        expect(response.body.users).toHaveLength(2)
        expect(response.body.users[0]).toEqual({id: 1, name: 'Alice'})
    });

    it('Deve adicionar um novo usuário e retornar status 201', async () => {
        const newUser = { id: 3, name: 'Carlos'}
        const response = await request(app)
        .post('/api/users')
        .send(newUser)

        expect(response.status).toBe(201)
        expect(response.body).toEqual(newUser)

        const getUsersResponse = await request(app).get('/api/users')
        expect(getUsersResponse.body.users).toContainEqual(newUser)
    })
})

