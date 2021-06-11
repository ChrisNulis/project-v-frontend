import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'



class Home extends React.Component {
  render = () => {
    return (
      <div id="home">
        <h1>Wenues</h1>
        <h3><b>Event Bookings</b></h3>
        <div className="app-about">
          <h2><b>Welcome</b></h2>
          <p>For all your venue booking and listing needs</p>
        </div>
      </div>
    )
  }
}

export default Home
