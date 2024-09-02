import fs from "fs";

export default function createRoutes(modelName, tableName){
  const routesTemplate = `
const express = require('express');
const router = express.Router();
const ${modelName}Controller = require('../controllers/${modelName}Controller');

router.get('/${tableName}', ${modelName}Controller.getAll);
router.get('/${tableName}/:id', ${modelName}Controller.getById);
router.post('/${tableName}', ${modelName}Controller.create);
router.put('/${tableName}/:id', ${modelName}Controller.update);
router.delete('/${tableName}/:id', ${modelName}Controller.delete);

module.exports = router;
`;

  fs.writeFileSync(`crud/routes/${modelName}Routes.js`, routesTemplate);
};

