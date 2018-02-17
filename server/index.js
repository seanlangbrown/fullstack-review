const express = require('express');
const github = require('../helpers/github.js');
const db = require('../database/index.js');


let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  github.getReposByUsername(req.body);
  res.end();
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.getTopRepos()
  .then(res.json);
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

