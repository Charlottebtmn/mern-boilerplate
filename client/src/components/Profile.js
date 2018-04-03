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
      userTodos: [],
    };
  }

  componentDidMount () {
    if (api.isLoggedIn()) {
        let user=api.loadUser();
        console.log(user);
        console.log(user.todos);
        this.setState({
          userName : user.firstName,
          userEmail : user.email,
          userPictureUrl : user.pictureUrl,
          userDescription : user.description,
          userTodos: user.todos,
        });
      };
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
        <h2 class="subtitle is-2">This is your todo List !</h2>
        {this.state.userTodos.map((t, i) =>
        <div class="box">
          <article class="media">
            <div class="media-content">
              <div class="content">
                <p>
                  {t.description}
                </p>
              </div>
            </div>
          </article>
        </div>
      )}
      </div>
    );
  }
}

export default Profile;
