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
app.use(bodyParser.json());//for parsing json apllication

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

