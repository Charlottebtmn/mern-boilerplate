import React, { Component } from 'react';
import api from '../api';
import { Route, Link, Switch, withRouter } from 'react-router-dom';


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName : "",
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
            firstName : user.firstName,
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
        <div class="main-container container">
          <div class=" columns is-mobile">
            <div class="profile-first-square column">
              <img class="img-cover" src={this.state.userPictureUrl}/>
            </div>
            <div class="column">
              <br/>            <br/>
              <p class="titles title is-3">{this.state.firstName}</p>
              <p class="subtitle is-5">{this.state.userDescription}</p>
              <button class="button-change-pic button is-small">Change profile pic</button>
              <br/>
              <button class="button is-small" onClick={this.logout.bind(this)}>Log Out</button>
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
                  <article class="message">
                    <div class="message-body">
                      Date more celebrities to add things to your to-do list !<br/>
                      <Link to="/swipe">
                        See celebrities
                      </Link>
                    </div>
                  </article>
        </div>
      </div>
    );
  }
}

export default Profile;
