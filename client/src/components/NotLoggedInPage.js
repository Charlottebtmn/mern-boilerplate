import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import api from '../api';
import Conversations from './Conversations';
import Profile from './Profile';
import Swipe from './Swipe';
import './App.css';

class NotLoggedInPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <div>
          <p>You are not logged in</p>
          <button>
            <Link to="/signup">Signup</Link>
          </button>
          <p>Already have an account ?</p>
          <button>Login</button>
        </div>
)}
}

export default NotLoggedInPage;
