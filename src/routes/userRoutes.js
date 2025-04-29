const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

/**
 * @route POST /usuarios/registro
 * @desc Cria um novo usuário
 */
router.post('/register', userController.register);//registra usuario

/**
 * @route POST /usuarios/login
 * @desc Realiza login e retorna JWT
 */
router.post('/login', userController.login);//loga em um usuario

module.exports = router;//exporta o objeto router