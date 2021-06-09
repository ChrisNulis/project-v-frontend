import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'


class Nav extends React.Component {
    render() {
      return (
        <nav>
          <h1>Nav</h1>
          <ul className="nav-Links">
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
