// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      filename: './dev.mysql',
      database: 'donates',
      user: 'root',
      password: 'mail_123'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'donates',
      user:     'root',
      password: 'mail_123'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'donates_staging_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'donates',
      user:     'root',
      password: 'mail_123'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'donates_production_migrations'
    }
  }

};
