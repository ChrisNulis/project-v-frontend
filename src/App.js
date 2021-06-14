import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Form, Button, Card } from 'react-bootstrap'
import axios from 'axios'
import AddForm from './components/AddForm'
import Nav from './components/Nav'
import Booking from './components/Booking'
import Content from './components/Content'
import Footer from './components/Footer'
import Indiv from './components/Indiv'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import Weather from './components/Weather'
import Map from './components/Map'
import Home from './components/Home'




class App extends React.Component {

  state = {
    img:'',
    name:'',
    date:'',
    location:'',
    description:'',
    venues:[],
  }


  addVenues = (venues) =>{
    axios
    .post('https://nulis-final-project-one.herokuapp.com', venues)
    .then((resposne) => {
      this.getVenues()
    })
    .catch((error) => console.log(error))
  }


  handleChange = (event) => {
    this.setState ({
      [event.target.id]: event.target.value,
    })
  }


  getVenues = () => {
    axios
      .get('https://nulis-final-project-one.herokuapp.com')
      .then(
        (response) => {
          this.setState({ venues: response.data })
        },
        (err) => console.log(err)
      )
      .catch((error) => console.log(error))

  }

  deleteVenues = (event) => {
    axios.delete('https://nulis-final-project-one.herokuapp.com/' + event.target.value).then((response) => {
      this.getVenues()
    })
  }

  updateVenues = (event) => {
    event.preventDefault()
    const id = event.target.id
    axios
    .put('https://nulis-final-project-one.herokuapp.com/' + id, this.state)
    .then((response) => {
      this.getVenues()
    })
  }

  componentDidMount = () => {
    this.getVenues()
  }


  render() {
    return (
      <Router>
        <div className="main-container">
          <Nav />
          <Switch>
            <Route path="/" exact component ={Home}>
              <Home />
            </Route>
            <Route path="/Booking">
            <Booking />
            </Route>
            <Route path="/SignUp">
            <SignUp />
            </Route>
            <Route path="/LogIn">
            <LogIn />
            </Route>
            <Route path="/Content">
            <AddForm
            addVenues={this.addVenues}
            id="add"/>
            <div className="drowpdowns">
              <div id="venue-container">
              {this.state.venues.map((venue) => {
                return(
                  <Content venue={venue}
                    updateVenues={this.updateVenues}
                    deleteVenues={this.deleteVenues}
                    handleChange={this.handleChange}
                    />
                )
              })}
              </div>
            </div>

            </Route>
          </Switch>

          <Footer />
        </div>
      </Router>

    )
  }
}
export default App
