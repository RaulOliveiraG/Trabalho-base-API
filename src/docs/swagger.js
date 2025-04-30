const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Gestão de Tarefas API',
      version: '1.0.0',
      description: 'Documentação da API de Gestão de Tarefas (array em memória)'
    },
    servers: [
      { url: 'http://localhost:3000', description: 'Local' }
    ],
    components: {
      schemas: {
        UserRegister: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            email: { type: 'string' },
            password: { type: 'string' }
          }
        },
        UserLogin: {
          type: 'object',
          properties: {
            email: { type: 'string' },
            password: { type: 'string' }
          }
        },
        Task: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            title: { type: 'string' },
            description: { type: 'string' },
            done: { type: 'boolean' },
            createdAt: { type: 'string' }
          }
        }
      }
    }
  },
  apis: ['./src/routes/*.js']
};

module.exports = swaggerJsdoc(options);