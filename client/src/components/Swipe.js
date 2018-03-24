import React, { Component } from 'react';
import api from '../api';

class Swipe extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Swipe">
      <div class="card-image">
          <figure class="image is-4by3">
           <img src="http://www.bravotv.com/sites/nbcubravotv/files/styles/blog-post--mobile/public/field_blog_image/2017/02/jet-set-obama-vacation.jpg?itok=zvWoPAjQ&timestamp=1485970411"/>
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
              </figure>
            </div>
              <p class="title is-4">Barack Obama</p>
          </div>
          <div class="content">
            58 ans  <br/> Former President of the USA. <br/>
          </div>
          <a class="button is-success">Talk to me</a>
          <a class="button is-danger">OMG no</a>
        </div>
      </div>
    );
  }
}

export default Swipe;
