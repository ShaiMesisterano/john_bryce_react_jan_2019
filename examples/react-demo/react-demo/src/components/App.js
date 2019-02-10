import React, { Component } from 'react';
import GistsContainer from '../containers/GistsContainer';
import UsersContainer from '../containers/UsersContainer';

class App extends Component {
  state = {
    page: 'gists'
  }
  render() {
    return (
      <div>
        <ul>
        <li><a href="#" onClick={this.navigate.bind(this, 'gists')}>Gists</a></li>
        <li><a href="#" onClick={this.navigate.bind(this, 'users')}>Users</a></li>
        </ul>
        {
          this.state.page === 'gists' ? <GistsContainer /> : <UsersContainer />
        }
      </div>
    );
  }
  navigate(newPage) {
    this.setState({
      page: newPage
    })
  }
}

export default App;
