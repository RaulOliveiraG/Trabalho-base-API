const express = require('express');
const taskController = require('../controllers/taskController');
const auth = require('../middlewares/auth');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Gerenciamento de tarefas
 */
router.post('/', auth, taskController.createTask);//cria
router.get('/', auth, taskController.getTasks);//lista
router.get('/:id', auth, taskController.getTask);//coleta
router.put('/:id', auth, taskController.updateTask);//atualiza
router.delete('/:id', auth, taskController.deleteTask);//exclui

module.exports = router;//exporta o objeto