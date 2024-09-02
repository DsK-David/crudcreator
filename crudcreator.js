#!/usr/bin/env node

// const fs = require("fs");
// const path = require("path");
import createFolders  from "./utils/createFolders.js";
import  createKnexConfig  from "./utils/createKnexConfig.js";
import  createModel  from "./utils/createModel.js";
import createController from "./utils/createController.js";
import createRoutes from "./utils/createRoutes.js";
import updateIndexFile from "./utils/updateIndexFile.js";
import showLoadingAnimation from "./utils/showLoadingAnimation.js";
const args = process.argv.slice(2);
if (args.length < 6) {
  console.error(
    "Uso: crudcreator <host> <user> <password> <database> <modelName> <tableName>"
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

const main = () => {
  showLoadingAnimation(3000);
  createFolders();
  createKnexConfig(host,user,password,database);
  createModel(modelName,tableName);
  createController(modelName);
  createRoutes(modelName,tableName);
  updateIndexFile(modelName);

  console.log(`Rotas criadas: 
    GET /api/${tableName} 
    GET /api/${tableName}/:id 
    POST /api/${tableName} 
    PUT /api/${tableName}/:id 
    DELETE /api/${tableName}/:id`);
    
};

main();
