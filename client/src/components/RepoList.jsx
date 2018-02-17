import React from 'react';
import _ from 'lodash';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <ol>
    {_.map(props.repos, (repo) => (<li key={repo.id}><a href={repo.url}>{repo.name}</a></li>))}
    </ol>
  </div>
)

export default RepoList;