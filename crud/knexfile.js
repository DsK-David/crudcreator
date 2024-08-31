
module.exports = {
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'DsK-David',
        password: '2513',
        database: 'TesteCrudGem'
    },
    migrations: {
        directory: './migrations'
    },
    seeds: {
        directory: './seeds'
    }
};
