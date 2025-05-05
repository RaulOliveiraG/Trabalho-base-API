const Task = require('../models/task');

// Criar
exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body; // Pega o título e descrição do frontend
    const owner = req.user.id; // Pega o ID do usuário logado
    const task = await Task.create({ title, description, owner }); // Cria a tarefa no banco
    res.status(201).json(task); // Retorna a tarefa criada (status 201)
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar tarefa.' });
  }
};


// Listar
exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ owner: req.user.id }); // Busca tarefas do usuário
  res.json(tasks); // Retorna as tarefas
};

// Detalhes
exports.getTask = async (req, res) => { 
  const task = await Task.findOne({ _id: req.params.id, owner: req.user.id }); // Busca a tarefa por dono
  if (!task) return res.status(404).json({ error: 'Tarefa não encontrada.' }); // erro se nao encontrar
  res.json(task); // Retorna a tarefa que encontrou
};


// Atualizar
exports.updateTask = async (req, res) => {
  const task = await Task.findOneAndUpdate( // Busca e atualiza tarefa por id e dono
    { _id: req.params.id, owner: req.user.id },
    req.body, //pega os novos dados
    { new: true } // Retorna a nova versão
  );
  if (!task) return res.status(404).json({ error: 'Tarefa não encontrada.' }); // Se não encontrar...
  res.json(task); // Retorna tarefa atualizada
};


// Apagar
exports.deleteTask = async (req, res) => {
  const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user.id }); // Busca e deleta por dono e id
  if (!task) return res.status(404).json({ error: 'Tarefa não encontrada.' }); // Se não encontrar...
  res.json({ message: 'Tarefa deletada.' }); // Retorna mensagem que deu certo
};
