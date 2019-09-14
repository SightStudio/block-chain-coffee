require('dotenv').config();

module.exports = {
  development: {
    dialect : 'mysql',
    host    : process.env.DEV_DB_HOST,
    database: process.env.DEV_DB_NAME,
    username: process.env.DEV_DB_USERNAME,
    password: process.env.DEV_DB_PASSWORD,

    pool: {
      max: 100,
      min: 10,
      acquire: 30000,
      idle: 10000
    }
  },
  test: {
    dialect : 'mysql',
    host    : process.env.DEV_DB_HOST,
    database: process.env.DEV_DB_NAME,
    username: process.env.DEV_DB_USERNAME,
    password: process.env.DEV_DB_PASSWORD,

    pool: {
      max: 100,
      min: 10,
      acquire: 30000,
      idle: 10000
    }
  },
  production: {
    dialect : 'mysql',
    host    : process.env.PROD_DB_HOST,
    database: process.env.PROD_DB_NAME,
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,

    pool: {
      max: 100,
      min: 10,
      acquire: 30000,
      idle: 10000
    }
  }
};