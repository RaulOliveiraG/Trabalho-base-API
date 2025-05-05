const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({//molde que define a estrutura de um "documento"
  title:       { type: String, required: true },
  description: { type: String },
  done:        { type: Boolean, default: false },//padrão = false (toda nova tarefa começa como "não feita")
  owner:       { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }//cada tarefa pertence a um usuario especifico...
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);//exporta para a coleção "task"