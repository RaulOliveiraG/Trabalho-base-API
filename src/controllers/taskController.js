const Task = require('../models/task');

// Criar
exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const owner = req.user.id;
    const task = await Task.create({ title, description, owner });
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar tarefa.' });
  }
};

// Listar
exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ owner: req.user.id });
  res.json(tasks);
};

// Detalhes
exports.getTask = async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id, owner: req.user.id });
  if (!task) return res.status(404).json({ error: 'Tarefa não encontrada.' });
  res.json(task);
};

// Atualizar
exports.updateTask = async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, owner: req.user.id },
    req.body,
    { new: true }
  );
  if (!task) return res.status(404).json({ error: 'Tarefa não encontrada.' });
  res.json(task);
};

// Apagar
exports.deleteTask = async (req, res) => {
  const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user.id });
  if (!task) return res.status(404).json({ error: 'Tarefa não encontrada.' });
  res.json({ message: 'Tarefa deletada.' });
};