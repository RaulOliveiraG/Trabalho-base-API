const User = require('../models/user');

exports.register = async (req, res) => {//função registrar
  try {
    const { name, email, password } = req.body;//extrai"{ name, email, password }"
    const exist = await User.findOne({ email });//verifica no banco se esse email ja foi cadastrado
    if (exist) return res.status(400).json({ error: 'Email já cadastrado.' });//se existir...
    await User.create({ name, email, password });//se nao existir cria um novo usuario com { name, email, password }
    res.status(201).json({ message: 'Usuário registrado.' });
  } catch(e) {
    res.status(500).json({ error: 'Erro ao registrar usuário.' });
  }
};

exports.login = async (req, res) => {//função login
  try {
    const { email, password } = req.body;//extrai"{email, password }"
    const user = await User.findOne({ email });//verifica no banco se esse email ja foi cadastrado
    if (!user || !(await user.comparePassword(password))) {//se nao encontrar esse email em um usuario ou senha invalida
      return res.status(401).json({ error: 'Credenciais inválidas.' });//retorna erro
    }
    res.json({ //se o login funcionar retorna as informações do usuario
      user: { id: user._id, email: user.email, name: user.name }
    });
  } catch(e) {//ou se nao da erro...
    res.status(500).json({ error: 'Erro ao fazer login.' });
  }
};