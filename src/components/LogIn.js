import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Form, Button, Card } from 'react-bootstrap'



class LogIn extends React.Component {
  state= {
    username:'',
    password:''
  }


    render() {
      return (
        <>
        <Card>
        <Card.Body>
          <h1 className ="text-center mb-4">Log In</h1>
          <h5 className ="text-center">UNDER CONSTRUCTION</h5>
        </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
            <form action="/LogIn">
                <label htmlFor="username">User Name:</label>
                <br />
                <input
                  type="text"
                  id="username"/>
                <br />
                <label htmlFor="username">Password:</label>
                <br />
                <input
                  type="text"
                  id="password"/>
                <br />
                <input type="submit" value="Log In" />
            </form>
        </div>
        <div className="w-100 text-center mt-2">
        Don't have account? Sign Up
        </div>

        </>
      )
    }
  }

  export default LogIn
