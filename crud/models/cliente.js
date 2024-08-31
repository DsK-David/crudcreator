
const knex = require('../knexfile');
const db = require('knex')(knex);

class cliente {
    static getAll() {
        return db('clientes');
    }

    static getById(id) {
        return db('clientes').where({ id }).first();
    }

    static create(data) {
        return db('clientes').insert(data);
    }

    static update(id, data) {
        return db('clientes').where({ id }).update(data);
    }

    static delete(id) {
        return db('clientes').where({ id }).del();
    }
}

module.exports = cliente;
