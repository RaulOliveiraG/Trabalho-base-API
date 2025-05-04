// Verifica se tem userId no header
module.exports = (req, res, next) => {
  const userId = req.headers['x-user-id'];
  if (!userId) return res.status(401).json({ error: 'Acesso negado. Faça login.' });
  req.user = { id: userId };
  next();
};