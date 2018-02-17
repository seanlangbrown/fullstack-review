const express = require('express');
const github = require('../helpers/github.js');
const db = require('../database/index.js');
const bodyParser = require('body-parser');


let app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log('fetching from github', req.body.username);
  github.getReposByUsername(req.body.username);
  res.json('POST Response Success');
});

app.get('/repos', function (req, res) {
  console.log('GET request to /repos');
  // TODO - your code here!
  // This route should send back the top 25 repos
  let cb = (repos) => {
    console.log('data retrieved:', repos);
    res.json(repos)
  };
  db.getTopRepos(cb);
  //res.json([]);
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

