import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'



class Content extends React.Component {
  render() {
      return (
              <article>
                  <img src={this.props.venue.img} alt={this.props.venue.name}/>
                  <p><span>Name:</span> {this.props.venue.name}</p>
                  <p><span>Date:</span> {this.props.venue.date}</p>
                  <p><span>Location:</span> {this.props.venue.location}</p>
                  <p><span>Description:</span> {this.props.venue.description}</p>

                  <details>
                    <summary>Edit Venue</summary>
                    <form id={this.props.venue.id} onSubmit={this.props.updateVenues}>
                      <label htmlFor="name">Name</label><br />
                      <input type="text" id="name" onChange={this.props.handleChange} />
                      <br />
                      <label htmlFor="image">Image</label><br />
                      <input type="text" id="image" onChange={this.props.handleChange} />
                      <br />
                      <label htmlFor="date">Date</label><br />
                      <input type="text" id="date" onChange={this.props.handleChange} />
                      <br />
                      <label htmlFor="location">Location</label><br />
                      <input type="text" id="location" onChange={this.props.handleChange} />
                      <br />
                      <input type="submit" value="Update Venue" />
                    </form>
                    <button value={this.props.venue.id} onClick={this.props.deleteVenues} id="del-btn">
                    Remove Venue
                    </button>
                  </details>
              </article>
      )
  }
}

export default Content
