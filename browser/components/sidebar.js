'use strict'

import React from 'react'
import { Link } from 'react-router'

class Sidebar extends React.Component {
  render () {
    return (
      <div className='mainMenu'>
        <h2>Tom Hanson</h2>
        <h5><a href='http://instagram.com/tmhn' style={nav}>@tmhn</a></h5>
        <hr style={navbarDivider}/>
        <div className='navSubbar'>
          <h4><Link to='/'>Home</Link></h4>
          <h4><Link to='about'>About</Link></h4>
          <h4><Link to='projects'>Projects</Link></h4>
          <h4><Link to='contact'>Contact</Link></h4>
        </div>
      </div>
    )
  }
}

var nav = {
  color: '#FFF'
}

var navbarDivider = {
  borderTopWidth: 2,
  color: '#FFF',
  float: 'right',
  width: '90%'
}

export default Sidebar
