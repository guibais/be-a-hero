// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "drona.db.elephantsql.com",

      user: "qsmnixok",
      password: "5MieuZEA3iF9ziaWAia7mPUofYnkMurp",
      database: "qsmnixok"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./src/db/migrations"
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
