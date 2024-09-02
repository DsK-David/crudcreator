import fs from "fs"

export default function createKnexConfig(host, user, password, database){
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
  if (!fs.existsSync("crud/knexfile.js")) {
    fs.writeFileSync("crud/knexfile.js", knexConfig);
  }
}


