import React, { Component } from 'react';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import api from '../api';
import ConversationList from './ConversationList';
import Conversation from './Conversation';
import Profile from './Profile';
import Swipe from './Swipe';
import './App.css';


class LoggedInPage extends Component {
  constructor(props) {
    super(props);
    console.log(this);
    api.loadUser();
  }

  logout () {
    api.logout();
    this.props.history.push("/login")
  }

  render() {
    return (
        <div className="App">
          <header class="navbar" className="App-header">
            <Link to="/profile">
              <img class="logo" src="/profile.png" />
            </Link>
            <Link to="/swipe">
              <img class="logo middle-logo" src="/the-good-d.png" />
            </Link>
            <Link to="/conversationlist">
              <img class="logo" src="/messages.png" />
            </Link>
          </header>
          <Switch>
            <Route path="/profile" exact component={Profile} />
            <Route path="/swipe" component={Swipe} />
            <Route path="/conversationlist" component={ConversationList} />
            <Route path="/conversation/:id" component={Conversation} />
            <Route render={() => <h2>404</h2>} />
          </Switch>
        </div>
)}
}

export default withRouter(LoggedInPage);
