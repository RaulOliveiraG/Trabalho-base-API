<<<<<<< HEAD
require('dotenv').config();//carrega as variaveis do arquivo .env

//importação dos modulos necessários:
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');//permite requisições de outras origens (se o mesmo projeto tem diferentes localhost por exemplo)
const path = require('path');//lida com caminhos de arquivos

const app = express();//cria a aplicação que será o servidor 
const routes = require('./routes');//carrega o arquivo das rotas

//permissão do uso de modulos ja instalados 
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));//serve Arquivos que não mudam com css html...
app.use('/api', routes);

mongoose.connect(process.env.MONGO_URI) //tenta se consectar com a url disponivel do mongo
  .then(() => {
    app.listen(process.env.PORT || 3000, () => console.log("Servidor rodando!"));//tenta acessar na PORT se nao der vai pra 3000
  })
  .catch(err => console.error("Erro de conexão MongoDB", err));
=======
const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes');
const swaggerConfig = require('./docs/swagger');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rotas
app.use('/api', routes);

// Swagger
swaggerConfig(app);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
>>>>>>> 16e1f70db9e58cd09251ad67d4eb9d28df66bf04
