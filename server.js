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
app.get('/user/:id', function(req, res) {
  res.send("id is set to " + req.params.id);
 var id=req.params.id;
 knex.UserId(id);
});

//this post put the new registration into the database.
app.post('/user/v1', function(req, res, next) {
var userinfo= req.body
    res.send('POST request to the homepage');
    console.log("userinfo is fr",userinfo)
knex.UserInfo(userinfo);
});

//this function take the registered user from  the database donates.user.
app.get('/users/v1/:name', function(req, res) {
  res.send("name is set to " + req.params.name);
 var name=req.params.name;
 knex.userDetails(name);
});

app.get('/userinfo/v1/:name', function(req, res) {
  res.send("name is set to " + req.params.name);
 var name=req.params.name;
 knex.checkUser(name);
});
