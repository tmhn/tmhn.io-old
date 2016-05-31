'use strict'

import React from 'react'
import { Nav, NavItem, Navbar } from 'react-bootstrap'
import { Link } from 'react-router'
import content from '../content/site'

class Menu extends React.Component {

  render () {
    const links = content.pageLinks
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
            {links.map(({name, address}, index) =>
              <NavItem eventKey={index}>
                <Link to={address} style={navbarLinks}>{name}</Link>
              </NavItem>
            )}
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
  minHeight: 60,
  backgroundColor: '#24CC82',
  border: 0
}

var navbarLinks = {
  color: '#fff',
  fontSize: 18,
  fontFamily: 'Avenir',
  lineHeight: 3
}

var navbarHeader = {
  paddingTop: 8,
  paddingLeft: 5
}

export default Menu
