console.log('Including KNEX connect to database.');
var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'your_database_user',
      password : 'your_database_password',
      database : 'myapp_test',
      debug:true
    }
  });
console.log('KNEX connect to database included.');
  