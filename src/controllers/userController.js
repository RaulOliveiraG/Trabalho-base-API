const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userModel = require('../models/user');
const { users } = userModel;

exports.users = users; // para compatibilidade com o middleware

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ error: 'Preencha todos os campos.' });
  if (users.find(u => u.email === email)) return res.status(400).json({ error: 'Email já existe.' });

  const hash = await bcrypt.hash(password, 10);
  const user = { id: userModel.userIdSeq++, name, email, password: hash };
  users.push(user);
  res.status(201).json({ message: 'Usuário registrado.' });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Credenciais inválidas.' });
  }
  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || 'secreto', { expiresIn: '1d' });
  res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
};