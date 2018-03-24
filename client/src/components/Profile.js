import React, { Component } from 'react';
import api from '../api';

class Profile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Profile">
        <div class="columns is-mobile">
          <div class="column">
            <img src="https://d2ojpxxtu63wzl.cloudfront.net/static/1befd10db74af412748cea4e819081fb_01ace2209d2c6ecc391618cc77d0f5d48e13c9c4da58e708a3ebe64a4dcc153e"/>
          </div>
          <div class="column">
            <p class="title">Julie</p>
            <h2>En train de chercher le sens de la life</h2>
          </div>
        </div>
        <div class="box">
          <p class="title">This is you To-Do List !</p>
          <p> Action 1 </p>
          <p> Action 2 </p>
          <p> Action 3 </p>
          <p> Action 4 </p>
        </div>
      </div>
    );
  }
}

export default Profile;
