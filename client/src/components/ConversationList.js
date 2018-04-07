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
      this.setState({
        conversations
      });
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="ConversationList"><br/>
        <div class="main-container container">
          {this.state.conversations.map((c, i) =>
            <Link to={'/conversation/'+c._id}>
              <div class="box">
                <article class="media">
                    <div class="media-left">
                      <figure class="image is-64x64">
                        <img class="img-cover" src={c._celebrity.pictureUrl} alt="Image"/>
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
                    </div>
                  </article>
              </div>
            </Link>
            )}
          <div>

          </div>
        </div>
      </div>
      );
    }

}


export default ConversationList;
