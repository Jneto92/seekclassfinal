// Update with your config settings.
module.exports = {
    client: 'mysql2',//pluing do sgbd
    connection: {//conexão
      database: 'seekclass',//base de dados
      user:     'root',//usuário
      password: '123456'//senha
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
      //directory: '${__dirname}/src/database/migrations'
    }


};
