const express = require('express');
const knex = require('knex')(require('./knexfile.js')['development'])

const app = express();
var PORT = 8080;


app.listen(PORT, function(err){
  if (err) console.log("Error in server setup")
  console.log("Server listening on Port", PORT);
})


// Return all entries
app.get('/', function (req, res) {
  knex
    .select('*')
    .from('mood')
    .then(data => res.status(200).json(data))
    .catch(err => 
      res.status(404).json({
        message:
          'Your princess is in another castle'
    }))
})

// Post a new entry
app.post('/', function (req, res) {
})