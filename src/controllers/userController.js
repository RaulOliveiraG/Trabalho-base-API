const User = require('../models/user');

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const exist = await User.findOne({ email });
    if (exist) return res.status(400).json({ error: 'Email já cadastrado.' });
    await User.create({ name, email, password });
    res.status(201).json({ message: 'Usuário registrado.' });
  } catch(e) {
    res.status(500).json({ error: 'Erro ao registrar usuário.' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Credenciais inválidas.' });
    }
    // Em vez de token, retorna dados do usuário
    res.json({ 
      user: { id: user._id, email: user.email, name: user.name }
    });
  } catch(e) {
    res.status(500).json({ error: 'Erro ao fazer login.' });
  }
};