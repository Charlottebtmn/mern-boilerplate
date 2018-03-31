import React, { Component } from 'react';
import api from '../api';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName : "",
      userEmail : "",
      userPictureUrl :"",
      userDescription :"",
    };
  }

  componentDidMount () {
    if (api.isLoggedIn()) {
        let user=api.loadUser();
        console.log(user)
        this.setState({
          userName : user.firstName,
          userEmail : user.email,
          userPictureUrl : user.pictureUrl,
          userDescription : user.description,
        });
      }
    }

  render() {
    return (
      <div className="Profile">
        <div class="columns is-mobile">
          <div class="column">
            <img src={this.state.userPictureUrl}/>
          </div>
          <div class="column">
            <p class="title">{this.state.userName}</p>
            <h2>{this.state.userDescription}</h2>
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
