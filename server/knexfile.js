// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://postgres:docker@postgres/cruddy'
  },

  // development: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'cruddy',
  //     user:     'postgres',
  //     password: 'docker'
  //   }
  // },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
