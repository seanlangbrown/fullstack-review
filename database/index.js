const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/fetcher');

let repoSchema = mongoose.Schema({
  id: {
    type: Number, 
    index: true,
    unique: true
  },
  username: String,
  name: String,
  rankScore: Number,
  forks: Number,
  watchers: Number,
  url: String,
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (id, username, name, forks, watchers, url, rankScore) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  console.log('saving repo in mongoDB');
  let repo = new Repo({id: id, name: name, username: username, url: url, forks: forks, watchers: watchers, rankscore: rankScore});
  repo.save((err) => {
    if (err) return console.error(err);
  });
}

let getTopRepos = () => {
  return;//Repo.find({});
}

module.exports.save = save;
module.exports.getTopRepos = getTopRepos;