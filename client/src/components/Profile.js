import React, { Component } from 'react';
import api from '../api';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user : [],
    };
  }

  // componentDidMount () {
  //   api.loadUser()
  //     .then (user => {
  //       console.log(user)
  //       this.setState
  //     }
  // }

  render() {
    return (
      <div className="Profile">
        <div class="columns is-mobile">
          <div class="column">
            <img src={this.state.user.length > 0 && this.state.user.pictureUrl}/>
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
