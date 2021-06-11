import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'



class SignUp extends React.Component {
  state= {
    username:'',
    password:''
  }

  handleSignup = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value
      }
    )
  }

  sendUserInfo = (event) => {
    this.props.signUp(event, this.state)
  }

    render() {
      return (
        <div id='signup'>
          <form action="/SignUp" onSubmit={this.sendUserInfo}>
          <h3> Sign Up </h3>
          <label htmlFor="username">User Name:</label>
          <br />
          <input
          type="text"
          id="username"
          value={this.state.username}
          onChange={this.handleSignup}/>
          <br />
          <label htmlFor="username">Password:</label>
          <br />
          <input
          type="text"
          id="password"
          value={this.state.username}
          onChange={this.handleSignup}/>
          <br />
          <input type="submit" value="Sign Up" />
          </form>
        </div>
      )
    }
  }

  export default SignUp
