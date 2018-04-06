import React, { Component } from 'react';
import api from '../api';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      firstName: "",
      password: "",
    }
  }

  handleInputChange(stateFieldName, event) {
    let newState = {}
    newState[stateFieldName] = event.target.value

    this.setState(newState)
  }

  handleClick(e) {
    e.preventDefault()
    let data = {
      email: this.state.email,
      firstName: this.state.firstName,
      password: this.state.password,
    }
    api.signup(data)
      .then(result => {
        console.log('SUCCESS!')
        this.props.history.push("/login") // Redirect to the login page
      })
      .catch(err => {
        console.log('ERROR')
      })
  }

  render() {
    return (
      <div className="Signup">
        <form>
          Email: <input type="text" value={this.state.email} onChange={(e) => {this.handleInputChange("email", e)}} /> <br/>
          First Name: <input type="text" value={this.state.firstName} onChange={(e) => {this.handleInputChange("firstName", e)}} /> <br/>
          Password: <input type="password" value={this.state.password} onChange={(e) => {this.handleInputChange("password", e)}}  /> <br/><br/>
          <button class="button" onClick={(e) => this.handleClick(e)}>Signup</button>
        </form>
      </div>
    );
  }
}

export default Signup;
