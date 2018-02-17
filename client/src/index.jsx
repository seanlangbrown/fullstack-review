import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  populate () {
    console.log('getting top 25 repos');
    $.ajax({
      type: 'GET',
      url: '/repos',
      contentType: 'application/json',
      success: (data) => {
        console.log('repos received', data);
        this.setState({
          repos: data
        })
      }
    });
  }

  search (term) {
    console.log('querying', term);
    console.log(`${term} was searched`);
    $.ajax({
      type: 'POST',
      url: '/repos',
      dataType: 'json',
      data: {username: term},
      success: (data) => {
        console.log('POST success');
      },
      error: (jqxhr, errorString, errorThrown) => {
        console.log('POST ERROR', errorString, errorThrown);
      }
    })
  }

  componentWillMount() {
    this.populate();
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));