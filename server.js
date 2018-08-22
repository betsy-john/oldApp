const express = require('express')
const app = express()
var bodyParser = require('body-parser');
const path = require('path')
const knex = require(path.resolve('./db_connection'));

app.use(express.static('public'))

const port = 8080;

app.get('/', (request, response) => {
  response.send('Hello from Express!')
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
app.use(bodyParser.json());//for parsing json application

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.get('/user/:id', function (req, res) {
  res.send("id is set to " + req.params.id);
  var id = req.params.id;
  knex.UserId(id);
});

//this post put the new registration into the database.
app.post('/user/v1', function (req, res, next) {
  var userinfo = req.body
  res.send('POST request to the homepage');
  console.log("userinfo is fr", userinfo)
  knex.UserInfo(userinfo);
});
app.post('/user/v1/docs', function (req, res, next) {
  var DocInfo = req.body
  res.send('POST request to the homepage');
  console.log("DocInfo is fr", DocInfo)
  knex.DocInfo(DocInfo);
});

//this will post administration details.
app.post('/user/v1/administration', function (req, res, next) {
  var HospInfo = req.body
  res.send('POST request to the homepage');
  console.log("HospInfo is fr", HospInfo)
  knex.HospInfo(HospInfo);
});
//this function take the registered user from  the database donates.user.
app.get('/users/v1', function (req, res) {

  knex.userDetails().then(function (data) {
    console.log('data==', data)
    res.send(data);
  })
    .catch((err) => {
      console.log('err==', err)

    });;
});

app.get('users/v1/docs', function (req, res) {

  knex.docDetails().then(function (data) {
    console.log('data==', data)
    res.send(data);
  })
    .catch((err) => {
      console.log('err==', err)

    });;
});

app.get('/userinfo/v1/:name', function (req, res) {
  var name = req.params.name;
  knex.checkUser(name).then(function (data) {
    console.log('data==', data)
    res.send(data);
  })
    .catch((err) => {
      console.log('err==', err)

    });
});
app.get('/user/v1/get/:id', function (req, res) {
  var id = req.params.id;
  knex.getUser(id).then(function (data) {
    console.log('dleted user dta from the server', data)
    res.send(data)
  })
})
app.delete('/users/v1/delete/:id/:name', function (req, res) {
  var id = req.params.id;
  var name = req.params.name;
  console.log('id', id)
  console.log('name', name)
  knex.deleteUser(id).then(function (data) {
    if (data === 1) {
      console.log('data=====', data)
      res.send({ 'status code': 200, 'Name': name });
    }
  })
    .catch((err) => {
      console.log('err==', err)

    });
});

app.post('/users/v1/deletedusers', function (req, res, next) {
  var deletedUserinfo = req.body
  res.send('POST request to the homepage');
  console.log("deleted userinfo is fr", deletedUserinfo)
  knex.deletedUser(deletedUserinfo);
})

app.get('/deletedusers/v1/get', function (req, res) {

  knex.getDeletedUserDetails().then(function (data) {
    console.log('data==', data)
    res.send(data);
  })
    .catch((err) => {
      console.log('err==', err)

    });;
});
//get restore user
app.get('/restore/user/get/:id', function (req, res) {
  var id = req.params.id
  knex.getRestoreuserDetail(id).then(function (data) {
    console.log('restored', data)
    res.send(data);
  })
    .catch((err) => {
      console.log('err==', err)

    });;
});
//restoring users to main table
app.post('/users/v1/restoreusers', function (req, res, next) {
  var restoreUserinfo = req.body
  res.send('POST request to the homepage');
  console.log("deleted userinfo is fr", restoreUserinfo)
  knex.restoreUser(restoreUserinfo);
})

app.delete('/user/v1/restoreuser/:id/:name', function (req, res) {
  var id = req.params.id;
  var name = req.params.name;
  console.log('id', id)
  console.log('name', name)
  knex.deleteUserDel(id).then(function (data) {
    if (data === 1) {
      console.log('data=====', data)
      res.send({ 'status code': 200, 'Name': name, 'status message': 'sucessfully restored' });
    }
  })
    .catch((err) => {
      console.log('err==', err)

    });
});

app.get('/admin/notifications', function (req, res, next) {
  knex.getMeNotify().then(function (data) {
    res.send(data);
  })
    .catch((err) => {
      console.log('err==', err)

    });

})
app.post('/user/v1/notification/:id', function (req, res, next) {
  var id = req.params.id;
  var info = req.body;
  console.log('iddd', id);
  console.log('info', info);
   knex.postActive(info)
    res.send({'status code': 200,'status message': 'active  is sucessfully updated' });

  // .then(function () {
  //   res.send({'status code': 200, 'Name': name, 'status message': 'active  is sucessfully updated' });
  // })
  // .catch((err) => {
  //   console.log('err==',err)
  // })

})



