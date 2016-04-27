'use strict'

import React from 'react'
import { Nav, NavItem, Navbar } from 'react-bootstrap'
import { Link } from 'react-router'

class Menu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const navbar = (
      <Navbar style={navbarMenu} className='navbar navbar-default navbar-fixed-top mobileNavbar'>
        <Navbar.Header className='container container-fluid' style={navbarHeader}>
          <Navbar.Brand>
            <a href='/' style={navbarBrand}>Tom Hanson</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
          <NavItem eventKey={1}>
            <Link to='/' style={navbarLinks}>Home</Link>
          </NavItem>
          <NavItem eventKey={2}>
            <Link to='about' style={navbarLinks}>About</Link>
            </NavItem>
          <NavItem eventKey={3}>
            <Link to='projects' style={navbarLinks}>Projects</Link>
          </NavItem>
          <NavItem eventKey={4}>
            <Link to='contact' style={navbarLinks}>Contact</Link>
          </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
    return (
      navbar
    )
  }
}

var navbarBrand = {
  fontSize: 25,
  fontFamily: 'Avenir',
  color: '#fff'
}

var navbarMenu = {
  minHeight: 80,
  backgroundColor: '#6AA897',
  border: 0
}

var navbarLinks = {
  color: '#fff',
  fontSize: 18,
  fontFamily: 'Avenir',
  lineHeight: 3
}

var navbarHeader = {
  paddingTop: 10,
  paddingLeft: 30
}

export default Menu
