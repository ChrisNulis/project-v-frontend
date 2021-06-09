import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'



class LogIn extends React.Component {
  state= {
    username:'',
    password:''
  }

  handleLogin = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value
      }
    )
  }

  sendLoginInfo = (event) => {
    this.props.login(event, this.state)
  }

    render() {
      return (
        <div id='login'>
        <form action="/LogIn" onSubmit={this.sendLoginInfo}>
        <h3> Log In </h3>
        <label htmlFor="username">User Name:</label>
        <br />
        <input
        type="text"
        id="username"
        value={this.state.username}
        onChange={this.handleLogin}/>
        <br />
        <label htmlFor="username">Password:</label>
        <br />
        <input
        type="text"
        id="password"
        value={this.state.username}
        onChange={this.handleLogin}/>
        <br />
        <input type="submit" value="Log In" />
        </form>
        </div>
      )
    }
  }

  export default LogIn
