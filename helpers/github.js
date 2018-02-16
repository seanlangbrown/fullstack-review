const request = require('request');
const config = require('../config.js');
const db = require('./database/index.js');

let getReposByUsername = (username) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: 'https://api.github.com/users/' + username + '/repos',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request.get(options, (err, repos) {
    if (err) {
      console.log(err);
    } else {
      console.log('repos received', repos);
      db.save(repos.owner.name, repos.name, repos.url, repos.forks_count, repos.watchers_count,)
    }
  });
  //.on('error', (err) => (console.log(err)))
  //extract url, name, forks_count, watchers_count, size?, owner.login
}

module.exports.getReposByUsername = getReposByUsername;