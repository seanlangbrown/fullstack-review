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
    if (err) console.error(err);
  });
}

let getTopRepos = (cb) => {
  console.log('Retrieving top repos')
  //Repo.find({}).exec(cb);//.limit(25).sort({ rankScore: -1 }).select({})
  var query = Repo.find({});

  // selecting the `name` and `occupation` fields
  query.select('username name url forks watchers rankScore');

  // execute the query at a later time
  query.exec(function (err, repos) {
    if (err) return handleError(err);
    // Prints "Space Ghost is a talk show host."
    console.log('repos: ', repos);
    cb(repos);
  });
}


module.exports.save = save;
module.exports.getTopRepos = getTopRepos;