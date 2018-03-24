import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import api from '../api';
import Conversations from './Conversations';
import Profile from './Profile';
import Swipe from './Swipe';
import NotLoggedInPage from './NotLoggedInPage';
import LoggedInPage from './LoggedInPage';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    api.loadUser();
    console.log(api.loadUser());
  }

  render() {
    if (api.isLoggedIn()) {
      return (
        <LoggedInPage />
        // <div className="App">
        //   <header class="navbar" className="App-header">
        //     <Link to="/profile">Profile</Link>
        //     <Link to="/swipe">Swipe</Link>
        //     <Link to="/conversations">Conversations</Link>
        //   </header>
        //   <Switch>
        //     <Route path="/profile" exact component={Profile} />
        //     <Route path="/swipe" component={Swipe} />
        //     <Route path="/conversations" component={Conversations} />
        //     <Route render={() => <h2>404</h2>} />
        //   </Switch>
        // </div>
    )}
    return (
      <NotLoggedInPage />
    )}
}

export default App;
