const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Gestão de Tarefas API',
      version: '1.0.0',
      description: 'Documentação da API de Gestão de Tarefas.'
    },
    servers: [
      { url: 'http://localhost:3000/api', description: 'Local server' }
    ],
    components: {
      schemas: {//esquemas ja montados...
        UserRegister: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            email: { type: 'string' },
            password: { type: 'string' }
          },
        },
        UserLogin: {
          type: 'object',
          properties: {
            email: { type: 'string' },
            password: { type: 'string' }
          },
        },
        Task: {
          type: 'object',
          properties: {
            title: { type: 'string' },
            description: { type: 'string' },
            done: { type: 'boolean' }
          }
        }
      }
    }
  },
  apis: ['./src/routes/*.js']
};

module.exports = swaggerJsdoc(options);