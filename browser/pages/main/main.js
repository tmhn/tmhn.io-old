'use strict'

import React from 'react'
import Sidebar from '../../components/sidebar'

class Main extends React.Component {
  render () {
    return (
      <div className='row'>
        <div className='col-lg-2 col-md-2 col-sm-2 col-xs-1'>
          <Sidebar />
        </div>
        <div className='col-lg-10 col-md-10 col-sm-10 col-xs-10'>
          <div style={containerFluid}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

var mainContainer = {
  height: '100%',
  minHeight: '100%',
  position: 'absolute'
}

var containerFluid = {
  height: '100%',
  minHeight: '100%',
  position: 'fixed'
}

export default Main
