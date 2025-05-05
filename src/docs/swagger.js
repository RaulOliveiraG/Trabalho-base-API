<<<<<<< HEAD
const swaggerJsdoc = require('swagger-jsdoc');
=======
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
>>>>>>> 16e1f70db9e58cd09251ad67d4eb9d28df66bf04

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
<<<<<<< HEAD
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
=======
      title: 'API candido',
      version: '1.0.0',
      description: 'Documentação da API candido',
    },
    servers: [
      {
        url: '<http://localhost:3000>',
        description: 'Servidor local',
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Caminho para os arquivos de rotas
};

const specs = swaggerJsDoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
>>>>>>> 16e1f70db9e58cd09251ad67d4eb9d28df66bf04
