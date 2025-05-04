const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const taskRoutes = require('./taskRoutes');

router.use('/users', userRoutes);//rotas dos usuarios
router.use('/tasks', taskRoutes);//rotas das tarefas

module.exports = router;