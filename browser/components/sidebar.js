'use strict'

import React from 'react'
import { Link } from 'react-router'

class Sidebar extends React.Component {
  render () {
    return (
      <div className='mainMenu'>
        <h2><Link to='/' className='navBrand'>Tom Hanson</Link></h2>
        <h5><a href='http://instagram.com/tmhn' className='navBrand'>@tmhn</a></h5>
        <hr className='navDivider'/>
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

export default Sidebar
