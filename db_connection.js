console.log('Including KNEX connect to database.');
var knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: 'postgres',
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
  knex('users')
    .insert(userinfo)
    .then(function (data) {
      console.log('data==', data)
      return data;
    })
    .catch((err) => {
      console.log('err==', err)

    })
}

function DocInfo(DocInfo) {
  console.log("DocInfo===", DocInfo)
  knex('doctors')
    .insert(DocInfo)
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
  return knex('users').then(function (data) {
    console.log("dattata", data)
    return data;
  })
}
function docDetails() {
  return knex('doctors').then(function (data) {
    console.log("dattata", data)
    return data;
  })
}

function checkUser(name) {
  console.log("name===", name)
  return knex('users').where({
    userName: name
  })
}
//gets user from users table
function getUser(id) {
  return knex('users').where({
    id: id
  })
}
function deleteUser(id) {
  return knex('users').where({
    id: id
  }).del()
}

function deletedUser(deletedUserinfo) {
  console.log("deletedUserinfo===", deletedUserinfo)
  knex('deleted_users')
    .insert(deletedUserinfo)
    .then(function (data) {
      console.log('data==', data)
      return data;
    })
    .catch((err) => {
      console.log('err==', err)

    })
}

//gets deleted user from deleted user table
function getDeletedUserDetails() {
  return knex('deleted_users').then(function (data) {
    console.log("dattata dleted user details ", data)
    return data;
  })
}
//gets data from the restore table
function getRestoreuserDetail(id) {
  return knex('deleted_users').where({
    id: id
  })
}
//restoring data to main users table
function restoreUser(restoreUserinfo) {
  console.log("restoreUserinfo===", restoreUserinfo)
  knex('users')
    .insert(restoreUserinfo)
    .then(function (data) {
      console.log('data==', data)
      return data;
    })
    .catch((err) => {
      console.log('err==', err)

    });
    console.log("restoreUserinfo22222===", restoreUserinfo[0].id)
}

//deleting from restore table
function deleteUserDel(id) {
  return knex('deleted_users').where({
    id: id
  }).del()
}

function HospInfo(HospInfo) {
  console.log("HospInfo===", HospInfo)
  knex('hospitals')
    .insert(HospInfo)
    .then(function (data) {
      console.log('data==', data)
      return data;
    })
    .catch((err) => {
      console.log('err==', err)

    })
}

function getMeNotify() {
return knex('notifications')
.then(function(data) {
  return data;
})
.catch((err)=> {
  console.log('err==>',err)
})
}

function postActive(info) {
  console.log('iddd', info.id)
  console.log('activeVal', info.active)
knex('notifications')
.where({id:info.id})
.update({
  active:info.active

}).then(function(data){
console.log('the okop',data)
return data;
})
.catch((err) => {
  console.log('err==', err)

});
}

exports.userDetails = userDetails;
exports.UserId = UserId;
exports.UserInfo = UserInfo;
exports.checkUser = checkUser;
exports.deleteUser = deleteUser;
exports.deletedUser = deletedUser;
exports.getUser = getUser;
exports.getDeletedUserDetails = getDeletedUserDetails;
exports.restoreUser=restoreUser;
exports.getRestoreuserDetail=getRestoreuserDetail;
exports.deleteUserDel=deleteUserDel;
exports.DocInfo=DocInfo;
exports.docDetails=docDetails;
exports.HospInfo=HospInfo;
exports.getMeNotify=getMeNotify;
exports.postActive=postActive;