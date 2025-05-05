const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const userRoutes = require('./userRoutes');
const taskRoutes = require('./taskRoutes');

router.use('/users', userRoutes);//rotas dos usuarios
router.use('/tasks', taskRoutes);//rotas das tarefas

module.exports = router;
=======

/**
 * @swagger
 * /:
 *   get:
 *     summary: Retorna uma mensagem de boas-vindas
 *     responses:
 *       200:
 *         description: Mensagem de boas-vindas
 */
router.get('/', (req, res) => {
  res.json({ mensagem: 'API candido' });
});

module.exports = router;
>>>>>>> 16e1f70db9e58cd09251ad67d4eb9d28df66bf04
