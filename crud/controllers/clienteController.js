
const cliente = require('../models/cliente');

exports.getAll = async (req, res) => {
    const result = await cliente.getAll();
    res.json(result);
};

exports.getById = async (req, res) => {
    const result = await cliente.getById(req.params.id);
    res.json(result);
};

exports.create = async (req, res) => {
    const result = await cliente.create(req.body);
    res.json(result);
};

exports.update = async (req, res) => {
    const result = await cliente.update(req.params.id, req.body);
    res.json(result);
};

exports.delete = async (req, res) => {
    const result = await cliente.delete(req.params.id);
    res.json(result);
};
