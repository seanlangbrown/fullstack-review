const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: Number,
  username: String,
  name: {
    type: Number, 
    index: true,
    unique: true
  },
  rank: Number;
  rankScore: Number;
  forks: Number;
  watchers: Number;
  url: String;
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (username, name, forks, watchers, url, rankScore) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  let repo = new Repo({name: name, username: username, url: url, forks: forks, watchers: watchers, rankscore: rankScore});
  repo.save((err) => {
    if (err) return console.error(err);
  });
}

module.exports.save = save;