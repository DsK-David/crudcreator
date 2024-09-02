import * as fs from "fs";

export default function createModel(modelName, tableName){
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
