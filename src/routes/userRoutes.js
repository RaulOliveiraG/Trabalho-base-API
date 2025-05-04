const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Registro de novo usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserRegister'
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso
 *       400:
 *         description: Email já cadastrado
 */
router.post('/register', userController.register);//puxa o controller register, nessa rota

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Login de usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserLogin'
 *     responses:
 *       200:
 *         description: Login efetuado com sucesso
 *       401:
 *         description: Credenciais inválidas
 */
router.post('/login', userController.login);//puxa o controller login, nessa rota

module.exports = router;