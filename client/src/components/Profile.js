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
        api.getProfile().then(user => {
          console.log("DEBUG user", user);
          console.log(user.todos);
          this.setState({
            userName : user.firstName,
            userEmail : user.email,
            userPictureUrl : user.pictureUrl,
            userDescription : user.description,
            userTodos: user.todos,
          });
        });
      };
    }

    logout () {
      api.logout();
      this.props.history.push("/login")
    }

  render() {
    return (
      <div className="Profile">
        <div class="columns is-mobile">
          <div class="profile-first-square column">
            <img src={this.state.userPictureUrl}/>
          </div>
          <div class="column">
            <br/>            <br/>
            <p class="titles title is-3">{this.state.userName}</p>
            <p class="subtitle is-5">{this.state.userDescription}</p>
            <button class="is-small">Add/change profile pic</button>
            <button onClick={this.logout.bind(this)}>Log Out</button>
          </div>
        </div>
        <h4 class="titles title is-4">This is your todo List !</h4>
        {this.state.userTodos.map((t, i) =>
        <div class="box">
          <article class="media">
            <div class="media-content">
              <div class="content">
                <label class="checkbox">
                  <input type="checkbox"/>
                    {"   "+t.description}
                </label>
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
