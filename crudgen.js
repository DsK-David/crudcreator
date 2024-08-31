#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
if (args.length < 6) {
  console.error(
    "Uso: crudgen <host> <user> <password> <database> <modelName> <tableName>"
  );
  process.exit(1);
}

const [host, user, password, database, modelName, tableName] = args;

const knexConfig = `
module.exports = {
    client: 'mysql2',
    connection: {
        host: '${host}',
        user: '${user}',
        password: '${password}',
        database: '${database}'
    },
    migrations: {
        directory: './migrations'
    },
    seeds: {
        directory: './seeds'
    }
};
`;

const createFolders = () => {
  const dirs = ["crud", "crud/routes", "crud/controllers", "crud/models"];
  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
};

const createKnexConfig = () => {
  if (!fs.existsSync("crud/knexfile.js")) {
    fs.writeFileSync("crud/knexfile.js", knexConfig);
  }
};

const createModel = () => {
  const modelTemplate = `
const knex = require('../knexfile');
const db = require('knex')(knex);

class ${modelName} {
    static getAll() {
        return db('${tableName}');
    }

    static getById(id) {
        return db('${tableName}').where({ id }).first();
    }

    static create(data) {
        return db('${tableName}').insert(data);
    }

    static update(id, data) {
        return db('${tableName}').where({ id }).update(data);
    }

    static delete(id) {
        return db('${tableName}').where({ id }).del();
    }
}

module.exports = ${modelName};
`;

  fs.writeFileSync(`crud/models/${modelName}.js`, modelTemplate);
};

const createController = () => {
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

const createRoutes = () => {
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

const updateIndexFile = () => {
  const indexPath = `crud/index.js`;

  let indexContent = "";
  if (fs.existsSync(indexPath)) {
    indexContent = fs.readFileSync(indexPath, "utf-8");
  } else {
    indexContent = `
const express = require('express');
const app = express();

app.use(express.json());
`;
  }

  const routeImport = `const ${modelName}Routes = require('./routes/${modelName}Routes.js');\n`;
  const routeUse = `app.use('/api/', ${modelName}Routes);\n`;

  if (!indexContent.includes(routeImport)) {
    indexContent = routeImport + indexContent;
  }

  if (!indexContent.includes(routeUse)) {
    indexContent = indexContent.replace(
      "app.use(express.json());\n",
      `app.use(express.json());\n${routeUse}`
    );
  }

  if (!indexContent.includes("app.listen(3000")) {
    indexContent += `
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
`;
  }

  fs.writeFileSync(indexPath, indexContent);
};

const showLoadingAnimation = (duration) => {
  const spinner = ["|", "/", "-", "\\"];
  let index = 0;

  const intervalId = setInterval(() => {
    process.stdout.write(`\r${spinner[index]}  Gerando CRUD...`);
    index = (index + 1) % spinner.length;
  }, 100);

  setTimeout(() => {
    clearInterval(intervalId);
    process.stdout.write("\rDone! CRUD gerado com sucesso!\n");
  }, duration);
};

const main = () => {
  showLoadingAnimation(3000);
  createFolders();
  createKnexConfig();
  createModel();
  createController();
  createRoutes();
  updateIndexFile();

  console.log(`Rotas criadas: 
    GET /api/${tableName} 
    GET /api/${tableName}/:id 
    POST /api/${tableName} 
    PUT /api/${tableName}/:id 
    DELETE /api/${tableName}/:id`);
    
};

main();
