
const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.get('/clientes', clienteController.getAll);
router.get('/clientes/:id', clienteController.getById);
router.post('/clientes', clienteController.create);
router.put('/clientes/:id', clienteController.update);
router.delete('/clientes/:id', clienteController.delete);

module.exports = router;
