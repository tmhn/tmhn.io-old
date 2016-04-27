/* Deprecated for Menu.js*/

'use strict'
import React from 'react'

class Navbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuToggle: false
    }
  }

  handleMenu (e) {
    if (this.state.menuToggle == true) {
      this.setState({
        menuToggle: false,
      });
    } else {
      this.setState({
        menuToggle: true
      })
    }
  }

  render () {
    if (this.state.toggleMenu) {
      var menuToggle = <div style={menuToggle}>TomHanson</div>
    }

    return (
      <nav className='navbar navbar-default navbar-fixed-top mobileNavbar' role='navigation' style={navbar}>
        <div className='container container-fluid' style={mobileMenu}>
          <div className='col-lg-2 col-md-1 col-sm-1' style={navbarHomeLink}>
            <a className='navbar-brand' href='/' style={navbarBrand}>
              Tom Hanson
            </a>
          </div> 
          <div className='col-lg-10 col-md-11 col-sm-11'>         
            <ul className='nav navbar-nav navbar-right' style={navbarRight}>
              <input type='button' onClick={this.handleMenu.bind(this)} value='Menu' style={menuButton}/>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

var navbarRight = {
  float: 'right',
  paddingLeft: 10,
  paddingRight: 19,
  paddingTop: 3,
  fontFamily: 'Avenir',
  fontSize: 18,
  color: '#fff'
}

var mobileMenu = {
  display: 'block',
  height: 60
}

var menuButton = {
  backgroundColor: '#6AA897',
  border: 'none'
}

var menuToggle = {
  height: 100,
  width: 100,
  backgroundColor: 'red'
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
