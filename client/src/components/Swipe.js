import React, { Component } from 'react';
import api from '../api';

class Swipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      celebrities: [],
    };
  }

  componentDidMount () {
    api.getCelebrities()
      .then(celebrities => {
        console.log(celebrities)
        this.setState({
          celebrities
        });
      })
      .catch(err => console.log(err))
  }

  handleRedClick () {
    this.setState ({
      celebrities : this.state.celebrities.slice(1)
    });
  }

  handleGreenClick () {
    api.createConversation (this.state.celebrities[0]._id)
      .then (conversation => {
        console.log(conversation);
        this.props.history.push('/conversation/'+conversation._id)
      });
  }

  render() {
    if (this.state.celebrities.length === 0) {
      return (
        <div>
          <p> No more celebrities. Do you want to refresh ? </p>
          <button onClick ={() => {window.location.reload()}}>Refresh</button>
        </div>
      )
    }
    return (
      <div className="Swipe">
      <div class="card-image">
          <figure class="image is-4by3">
           <img src={this.state.celebrities.length > 0 && this.state.celebrities[0].pictureUrl}/>
          </figure>
        </div>
        <div class="card-content">
          <div class="media centered">
              <p class="titles title is-4">{this.state.celebrities.length > 0 && this.state.celebrities[0].firstName}</p>
          </div>
          <div class="content">
            {this.state.celebrities.length > 0 && this.state.celebrities[0].occupation}<br/>
          </div>
          <div class="level is-mobile">
            <div class="level-left">
              <div class="level-item">
                <a class="button is-success" onClick={() => {this.handleGreenClick()} }>Talk to me</a>
                </div>
                </div>
                <div class="level-right">
                  <div class="level-item">
                <a class="button is-danger" onClick={() => {this.handleRedClick()} }>OMG no</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Swipe;
