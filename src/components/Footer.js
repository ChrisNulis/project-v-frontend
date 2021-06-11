import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'



class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container">
                  <div className ="text-center">
                      <nav id="footerLink">
                            <a href="https://www.linkedin.com/in/christopher-nugroho-b2814050/"><img style={{width: '50px', height: '50px'}} src="https://i.imgur.com/OA6SsbIs.png" alt="Linkedin"/></a>
                            <a href="https://github.com/ChrisNulis"><img style={{width: '50px', height: '50px'}} src="https://i.imgur.com/LA1DKG4t.png" alt="GitHub"/></a>
                      </nav>
                      <p>Christopher Nugroho</p>
                      <h6>M.E.R.N</h6>
                  </div>
            </div>
        )
    }
}

export default Footer
