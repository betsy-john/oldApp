const express = require('express')
const app = express()
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


app.get('/user/:name', function(req, res) {
  res.send("name is set to " + req.params.name);
 var name=req.params.name;
 knex.dataUser(name);
});
