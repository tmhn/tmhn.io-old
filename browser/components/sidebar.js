'use strict'

import React from 'react'
// import { Link, IndexLink } from 'react-router'

class Sidebar extends React.Component {
  render () {
    return (
      <div className='col-lg-2 col-md-2' style={wrapper}>
        <div>
          <h2 style={nav}>Tom Hanson</h2>
          <hr style={wrapperHr}/>
          <div style={navSubbar}>
            <h4>Home</h4>
            <h4>About</h4>
            <h4>Projects</h4>
            <h4>Theme</h4>
          </div>
        </div>
      </div>
    )
  }
}

var wrapper = {
  width: 300,
  backgroundColor: '#6AA897',
  height: '100%',
  fontFamily: 'Montserrat',
  textAlign: 'right',
  paddingTop: '50'
}

var wrapperHr = {
  borderTopWidth: 2,
  backgroundColor: '(255, 255, 255, 0.2)'
}

var nav = {
  color: '#FFF'
}

var navSubbar = {
  color: '#FFF',

}

export default Sidebar
