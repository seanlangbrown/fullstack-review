const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: Number,
  username: String,
  name: String,
  rank: Number;
  rankScore: Number;
  commits: Number;
  pullrequests: Number;
  files; files;
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (username, name, commits, pullrequests, files, rankScore) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  let repo = new Repo({name: name, username: username, commits: commits, pullrequests: pullrequests, files: files, rankscore: rankScore});
  repo.save((err) => {
    if (err) return console.error(err);
  });
}

module.exports.save = save;