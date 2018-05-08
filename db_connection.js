console.log('Including KNEX connect to database.');
var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'mail_123',
      database : 'donates'
    }
  });
  knex.debug(true);
console.log('KNEX connect to database included.');
function dataUser(name){
  console.log("name===", name)
  var some=knex('user').where({
    firstName: name
  })
  .then(function(data){
    console.log('data==',data)
    return data;
  })
  .catch((err)=>{
    console.log('err==',err)
    
  })
}
exports.dataUser = dataUser;
