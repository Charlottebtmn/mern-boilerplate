import React, { Component } from 'react';
import api from '../api';

class Conversations extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Conversations">
        <p class="box">Covnersation 1</p>
        <p class="box">Covnersation 2</p>
        <p class="box">Covnersation 3</p>
        <p class="box">Covnersation 4</p>
      </div>
    );
  }
}

export default Conversations;
