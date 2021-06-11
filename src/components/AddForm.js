import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


class AddForm extends React.Component {

    state= {
      name: '',
      image: '',
      date: '',
      location: '',
      description: '',
    }

    handleChange = (event) => {
      this.setState ({
        [event.target.id]: event.target.value,
      })
    }

    handleSubmit = (event) => {
      event.preventDefault()
      this.props.addVenues(this.state)
    }

    showForm = () => {
        const addForm = document.querySelector('.addForm')
        addForm.classList.toggle('visible')
    }

      render(){
          return (
              <div className="form-container" id="form-container">
                  <div className="main-text-at-add-form">
                      <h1>Wenues</h1>
                      <button class="button is-primary" onClick={this.showForm}>Add Venues</button>
                  </div>
                  <form className="addForm" onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label><br />
                    <input
                        type="text"
                        id="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label htmlFor="img">Image:</label><br />
                    <input
                        type="text"
                        id="img"
                        value={this.state.img}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label htmlFor="date">Date:</label><br />
                    <input
                        type="text"
                        id="date"
                        value={this.state.date}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label htmlFor="location">Location:</label><br />
                    <input
                        type="text"
                        id="location"
                        value={this.state.location}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label htmlFor="description">Description:</label><br />
                    <input
                        type="text"
                        id="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input className="btn btn-success mb-5"
                      type="submit"
                      value="Add New Location"
                      onClick={this.showForm}/>
                 </form>
              </div>
          )
      }
  }

export default AddForm
