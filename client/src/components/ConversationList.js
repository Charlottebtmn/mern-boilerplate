import React, { Component } from 'react';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import api from '../api';

class ConversationList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      conversations:[]
    };

    // api.getAllConversations()
    // .then( (conversations) => {
    //   this.setState({
    //     conversations
    //   });
    // })
    // .catch(err => console.log(err))
  }

  componentDidMount() {
    api.getAllConversations()
    .then( (conversations) => {
      console.log("DEBUG conversations", conversations);
      this.setState({
        conversations
      });
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="ConversationList">
        {this.state.conversations.map((c, i) =>
          <Link to={'/conversation/'+c._id}>
            <div class="box">
              <article class="media">
                  <div class="media-left">
                    <figure class="image is-64x64">
                      <img src={c._celebrity.pictureUrl} alt="Image"/>
                    </figure>
                  </div>
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>{c._celebrity.firstName}</strong>
                        <br/>
                        {c._celebrity.occupation}
                      </p>
                    </div>
                    <nav class="level is-mobile">
                      <div class="level-left">
                        <a class="level-item">
                          <span class="icon is-small"><i class="fas fa-reply"></i></span>
                        </a>
                        <a class="level-item">
                          <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                        </a>
                        <a class="level-item">
                          <span class="icon is-small"><i class="fas fa-heart"></i></span>
                        </a>
                      </div>
                    </nav>
                  </div>
                </article>
            </div>
          </Link>
          )}
        <div>

        </div>
      </div>
      );
    }

}


export default ConversationList;
