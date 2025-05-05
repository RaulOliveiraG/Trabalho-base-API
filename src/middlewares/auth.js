// Verifica se tem userId no header(conjunto de informações que (req,res) carrega)
module.exports = (req, res, next) => {
  const userId = req.headers['x-user-id'];
  if (!userId) return res.status(401).json({ error: 'Acesso negado. Faça login.' });//Se não tiver userId no header retorna erro (401)
  //se tiver, adiciona o id do usuario na req
  req.user = { id: userId };
  next();
};