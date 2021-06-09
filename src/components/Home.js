import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'



class Home extends React.Component {
  render = () => {
    return (
      <div id="home">
        <h1>Wenue</h1>
        <h3>Event Bookings</h3>
        <div className="app-about">
          <h2><b>Welcome</b></h2>
          <p>Put why you want to enter this darn app</p>
        </div>
      </div>
    )
  }
}

export default Home
