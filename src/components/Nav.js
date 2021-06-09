import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'


class Nav extends React.Component {
    render() {
      return (
        <nav>
          <ul className="nav-Links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/Content">
            <li>Venues</li>
          </Link>
          <Link to="/Booking">
            <li>Booking</li>
          </Link>
            <Link to="/LogIn">
              <li>LogIn</li>
            </Link>
            <Link to="SignUp">
              <li>SignUp</li>
            </Link>
          </ul>

        </nav>
      )
    }
  }

  export default Nav
