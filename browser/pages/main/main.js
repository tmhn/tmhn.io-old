'use strict'

import React from 'react'
import Sidebar from '../../components/sidebar'

class Main extends React.Component {
  render () {
    return (
      <div className='main-container' style={mainContainer}>
        <Sidebar />
        <div className='container-fluid' style={containerFluid}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

var mainContainer = {
  height: '100%',
  minHeight: '100%'
}

var containerFluid = {
  paddingLeft: 0,
  paddingRight: 0,
  height: '100%',
  minHeight: '100%'
}

export default Main
