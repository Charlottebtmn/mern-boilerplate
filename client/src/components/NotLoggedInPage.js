import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import api from '../api';
import Signup from './Signup';
import Login from './Login';
import Profile from './Profile';
import Swipe from './Swipe';
import './App.css';

class NotLoggedInPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <div class="NotLoggedInPage">
          <div class="content">
            <h1 class="title is-1">The Good D</h1>
            <p class="subtitle is-3">Good Date, Good Deed</p>
            <p>Signup to start dating Famous People and Do Good !</p>
              <button class="button">
                <Link to="/signup">Signup</Link>
              </button >
              <p><br/>Already have an account ?</p>
            <button class="button">
              <Link to="/login">Login</Link>
            </button>
          </div>
          <Switch>
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
)}
}

export default NotLoggedInPage;
