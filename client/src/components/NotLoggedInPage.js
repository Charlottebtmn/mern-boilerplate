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
          <div class="header-home-page">
            <img class="img-home-page" src="/the-good-d.png"/>
            <p class="subtitle is-5">Good Date, Good Deed</p>
          </div>
          <div class="subblock-home-page content">
            <p>Signup to start dating Famous People <br/> and Do Good Things!</p>
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
