'use strict'
import React from 'react'

class Navbar extends React.Component {
  render () {
    return (
      <nav className='navbar navbar-default navbar-fixed-top mobileNavbar' role='navigation' style={navbar}>
        <div className='container container-fluid'>
          <div className='navbar-header col-lg-2 col-md-1 col-sm-1' style={navbarHomeLink}>
            <a className='navbar-brand' href='/' style={navbarBrand}>
              Tom Hanson
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

var navbar = {
  minHeight: 80,
  backgroundColor: '#6AA897',
  border: 0
}

var navbarHomeLink = {
  marginTop: 15
}

var navbarBrand = {
  fontSize: 25,
  fontFamily: 'Avenir',
  color: '#fff',
  display: 'block'
}

export default Navbar
