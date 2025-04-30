const jwt = require('jsonwebtoken');
const { users } = require('../models/user');

module.exports = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) return res.status(401).json({ error: 'Acesso negado.' });
  try {
    const [, token] = auth.split(' ');
    const payload = jwt.verify(token, process.env.JWT_SECRET || 'secreto');
    const user = users.find(u => u.id === payload.id);
    if (!user) return res.status(401).json({ error: 'Usuário não encontrado.' });
    req.user = user;
    next();
  } catch (e) {
    res.status(403).json({ error: 'Token inválido.' });
  }
};