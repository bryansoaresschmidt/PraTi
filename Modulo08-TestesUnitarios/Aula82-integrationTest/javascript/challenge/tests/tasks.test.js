const request = require('supertest');
const app = require('../app');
const taskData = require('../taskData');

jest.mock('../taskData');

beforeEach(() => {
    jest.clearAllMocks();
});

describe('Testando To-Do-App', () => {
    it('Deve retornar as tarefas!', async () => {
        taskData.getTasks.mockReturnValue([{ id: 1, title: 'Mocked Task', completed: false }]);

        const response = await request(app).get('/api/tasks');

        expect(response.status).toBe(200);
        expect(response.body).toEqual([{ id: 1, title: 'Mocked Task', completed: false }]);
        expect(taskData.getTasks).toHaveBeenCalledTimes(1);
    });

    it('Deve criar uma nova tarefa!', async () => {
        const newTask = { id: 1, title: 'Nova Tarefa', completed: false };

        taskData.addTask.mockReturnValue(newTask);
        
        const response = await request(app).post('/api/tasks').send({ title: 'Nova Tarefa' });

        expect(response.status).toBe(201);
        expect(response.body).toEqual(newTask);
        expect(taskData.addTask).toHaveBeenCalledTimes(1);
    });

    it('Deve retornar um erro 400 se não houver título!', async () => {
        const response = await request(app).post('/api/tasks').send({});

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error', 'Título é obrigatório');
    });

    it('Deve atualizar a tarefa existente', async () => {
        const updatedTask = { id: 1, title: 'Task Atualizada', completed: true };
        taskData.updateTask.mockReturnValue(updatedTask);

        const response = await request(app).put('/api/tasks/1').send({ title: 'Task Atualizada', completed: true });

        expect(response.status).toBe(200);
        expect(response.body).toEqual(updatedTask);
        expect(taskData.updateTask).toHaveBeenCalledWith(1, { title: 'Task Atualizada', completed: true });
    });

    it('Deve deletar uma tarefa existente', async () => {
        const deletedTask = { id: 1, title: 'Task Deletada', completed: false };
        taskData.deleteTask.mockReturnValue(deletedTask);

        const response = await request(app).delete('/api/tasks/1');

        expect(response.status).toBe(200);
        expect(response.body).toEqual(deletedTask);
        expect(taskData.deleteTask).toHaveBeenCalledWith(1);
    });
});