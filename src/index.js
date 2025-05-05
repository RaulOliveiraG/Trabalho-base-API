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