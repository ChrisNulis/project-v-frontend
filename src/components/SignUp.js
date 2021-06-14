import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Form, Button, Card } from 'react-bootstrap'



class SignUp extends React.Component {
  state= {
    username:'',
    password:''
  }
    render() {
      return (
        <>
        <Card>
          <Card.Body>
            <h1 className="text-center mb-4">Sign Up</h1>
            <h5 className ="text-center">UNDER CONSTRUCTION</h5>
          </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
          <form action="/SignUp">
              <label htmlFor="username">User Name:</label>
              <br />
              <input
                type="text"
                id="username"/>
              <br />
              <label htmlFor="password">Password:</label>
              <br />
              <input
                type="text"
                id="password"/>
                <br />
              <input type="submit" value="Sign Up" />
          </form>
        </div>
        <div className="w-100 text-center mt-2">
        Already have account? Log in
        </div>
        </>
      )
    }
  }

  export default SignUp
