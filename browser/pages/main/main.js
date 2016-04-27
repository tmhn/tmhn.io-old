'use strict'

import React from 'react'
import Sidebar from '../../components/sidebar'
import Navbar from '../../components/navbar'
import Menu from '../../components/menu'

class Main extends React.Component {

  render () {
    return (
      <div className='row'>
        <div className='col-lg-2 col-md-2 col-sm-2 col-xs-1 sidebar'>
          <Sidebar />
        </div>
        <div className='col-lg-8 col-md-8 col-sm-8 col-xs-6 content'>
          <div className='containerFluid'>
            <Menu className='mobileNavbar'/>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Main
