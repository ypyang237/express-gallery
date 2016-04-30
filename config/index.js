var config = require('./config') || {
  development : {},
  test : {},
  production : {}
};

module.exports = function() {

return {
  "development": {
   "username": process.env.USERNAME || config.development.username,
   "database": process.env.DATABASE || config.development.database,
   "password": process.env.PASSWORD || config.development.password,
   "host": process.env.HOST || config.development.host,
   "dialect": process.env.DIALECT || config.development.dialect
 },
 "test": {
   "username": process.env.USERNAME || config.test.username,
   "database": process.env.DATABASE || config.test.database,
   "host": process.env.HOST || config.test.host,
   "dialect": process.env.DIALECT || config.test.dialect
 },
 "production": {
   "username": process.env.USERNAME || config.production.username,
   "database": process.env.DATABASE || config.production.database,
   "host": process.env.HOST || config.production.host,
   "dialect": process.env.DIALECT || config.production.dialect
 }
};

}();