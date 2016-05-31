'use strict'

import React from 'react'
import { Link } from 'react-router'
import content from '../content/site'

class Sidebar extends React.Component {
  render () {
    return (
      <div className='mainMenu'>
        <h2><Link to='/' className='navBrand'>{content.site.fullName}</Link></h2>
        <h5><a href=`${content.site.instagram[0].address}` className='navBrand'>{content.site.instagram[0].name}</a></h5>
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
