import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from 'axios'
import AddForm from './components/AddForm'
import Nav from './components/Nav'
import Banner from './components/Banner'
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

  componentDidMount = () => {
    this.getVenues()
  }


  render() {
    return (
      <Router>
        <div className="">
          <Nav />
          <Banner />
          <Content />
          <Switch>
            <Route path="/" exact component = {Home} />
            <Route path="/Indiv" component={Indiv} />
            <Route path="/LogIn" component={LogIn} />
            <Route path="/SignUp" component={SignUp} />
          </Switch>
          <Map />
          <Weather />
          <Footer />
        </div>
      </Router>
    )
  }
}
export default App
