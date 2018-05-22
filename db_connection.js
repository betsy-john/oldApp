console.log('Including KNEX connect to database.');
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'mail_123',
    database: 'donates'
  }
});
knex.debug(true);
console.log('KNEX connect to database included.');

function UserId(id) {
  console.log("id===", id)
  var some = knex('users').where({
    id: id
  })
    .then(function (data) {
      console.log('data==', data)
      return data;
    })
    .catch((err) => {
      console.log('err==', err)

    })
}
//this function put the new registration into the database donates.user.
function UserInfo(userinfo) {
  console.log("userinfo===", userinfo)
  knex('donates.users')
    .insert(userinfo)
    .then(function (data) {
      console.log('data==', data)
      return data;
    })
    .catch((err) => {
      console.log('err==', err)

    })
}

//this function take the registered user from  the database donates.user.
function userDetails() {  
return knex('users').then(function (data){
  console.log("dattata",data)
  return data;
})
}

function checkUser(name) {
  console.log("name===", name)
return knex('users').where({
    userName: name
  })   
}

function deleteUser(id) {
return knex('users').where({
   id: id
  }).del()   
}

exports.userDetails = userDetails;
exports.UserId = UserId;
exports.UserInfo = UserInfo;
exports.checkUser = checkUser;
exports.deleteUser = deleteUser;
