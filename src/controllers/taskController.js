const taskModel = require('../models/task');
const { tasks } = taskModel;

exports.tasks = tasks; // compat para possíveis usos externos

exports.createTask = (req, res) => {
  const { title, description } = req.body;
  if (!title) return res.status(400).json({ error: 'Título é obrigatório.' });
  const task = {
    id: taskModel.taskIdSeq++,
    title,
    description: description || '',
    done: false,
    createdAt: new Date().toISOString(),
    owner: req.user.id
  };
  tasks.push(task);
  res.status(201).json(task);
};

exports.getTasks = (req, res) => {
  const userTasks = tasks.filter(t => t.owner === req.user.id);
  res.json(userTasks);
};

exports.getTask = (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id) && t.owner === req.user.id);
  if (!task) return res.status(404).json({ error: 'Tarefa não encontrada.' });
  res.json(task);
};

exports.updateTask = (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id) && t.owner === req.user.id);
  if (!task) return res.status(404).json({ error: 'Tarefa não encontrada.' });
  const { title, description, done } = req.body;
  if (typeof title !== 'undefined') task.title = title;
  if (typeof description !== 'undefined') task.description = description;
  if (typeof done !== 'undefined') task.done = !!done;
  res.json(task);
};

exports.deleteTask = (req, res) => {
  const idx = tasks.findIndex(t => t.id === parseInt(req.params.id) && t.owner === req.user.id);
  if (idx === -1) return res.status(404).json({ error: 'Tarefa não encontrada.' });
  tasks.splice(idx, 1);
  res.json({ message: 'Tarefa excluída.' });
};