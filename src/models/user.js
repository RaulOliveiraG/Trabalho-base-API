const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');// Biblioteca que criptografa 

const userSchema = new mongoose.Schema({//molde que define a estrutura de um "documento"
  name:    { type: String, required: true },
  email:   { type: String, unique: true, required: true },//string obrigatoria e unicac
  password:{ type: String, required: true }
});

userSchema.pre('save', async function(next) {//antes de salvar no banco...
  if (!this.isModified('password')) return next();//verifica se a senha foi mudada
  this.password = await bcrypt.hash(this.password, 10);//Faz o hash da senha com bcrypt(10 == nivel de complexidade)
  next();
});

userSchema.methods.comparePassword = function(candidatePassword) {//compara senha digitada com a senha do banco...
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);//exporta para a coleção "users