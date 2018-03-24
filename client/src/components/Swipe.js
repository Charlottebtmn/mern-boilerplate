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

  handleChange () {
    this.setState ({
      celebrities : this.state.celebrities.slice(1)
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
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
              </figure>
            </div>
              <p class="title is-4">{this.state.celebrities.length > 0 && this.state.celebrities[0].firstName}</p>
          </div>
          <div class="content">
            {this.state.celebrities.length > 0 && this.state.celebrities[0].occupation}<br/>
          </div>
          <a class="button is-success">Talk to me</a>
          <a class="button is-danger" onClick={() => {this.handleChange()} }>OMG no</a>
        </div>
      </div>
    );
  }
}

export default Swipe;
