import fs from "fs"

export default function createController(modelName){
  const controllerTemplate = `
const ${modelName} = require('../models/${modelName}');

exports.getAll = async (req, res) => {
    const result = await ${modelName}.getAll();
    res.json(result);
};

exports.getById = async (req, res) => {
    const result = await ${modelName}.getById(req.params.id);
    res.json(result);
};

exports.create = async (req, res) => {
    const result = await ${modelName}.create(req.body);
    res.json(result);
};

exports.update = async (req, res) => {
    const result = await ${modelName}.update(req.params.id, req.body);
    res.json(result);
};

exports.delete = async (req, res) => {
    const result = await ${modelName}.delete(req.params.id);
    res.json(result);
};
`;

  fs.writeFileSync(
    `crud/controllers/${modelName}Controller.js`,
    controllerTemplate
  );
};

