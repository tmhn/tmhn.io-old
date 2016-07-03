'use strict'

import React from 'react'
import { Link } from 'react-router'
import content from '../content/site'

class Menu extends React.Component {

  render () {
    const links = content.pageLinks

    return (
      <nav className='navbar navbar-default navbar-fixed-top mobileNavbar' style={navbarMenu}>
        <div className='container-fluid'>
          <div className='navbar-header' style={navbarHeader}>
            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <Link className='navbar-brand' to='/' style={navbarBrand}>Tom Hanson</Link>
          </div>

          <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
            <ul className='nav navbar-nav'>

              {links.map(({name, address}, index) =>
                <li eventKey={index} key={index}><Link to={address} style={navbarLinks} data-toggle='collapse' data-target='.navbar-collapse'>{name}</Link></li>
              )}

            </ul>
          </div>
        </div>
      </nav>
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
