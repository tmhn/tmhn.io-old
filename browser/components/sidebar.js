'use strict'

import React from 'react'
import { Link, IndexLink } from 'react-router'

class Sidebar extends React.Component {
  render () {
    return (
      <div className='mainMenu'>
        <h2>Tom Hanson</h2>
        <h5><a href='http://instagram.com/tmhn' style={nav}>@tmhn</a></h5>
        <hr style={navbarDivider}/>
        <div className='navSubbar'>
          <h4><Link to='/' style={navLinks}>Home</Link></h4>
          <h4><Link to='about' style={navLinks}>About</Link></h4>
          <h4><Link to='projects' style={navLinks}>Projects</Link></h4>
          <h4><Link to='contact' style={navLinks}>Contact</Link></h4>
        </div>
      </div>
    )
  }
}

var nav = {
  color: '#FFF'
}

var navLinks = {
  color: 'rgba(255, 255, 255, 0.6)'
}

var navbarDivider = {
  borderTopWidth: 2,
  color: '#FFF',
  float: 'right',
  width: '90%'
}

export default Sidebar
