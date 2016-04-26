'use strict'

import React from 'react'
import Sidebar from '../../components/sidebar'

class Main extends React.Component {
  render () {
    return (
      <div className='row'>
        <div className='col-lg-2 col-md-2 col-sm-2 col-xs-1 sidebar'>
          <Sidebar />
        </div>
        <div className='col-lg-8 col-md-8 col-sm-8 col-xs-8 content'>
          <div style={containerFluid}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

var containerFluid = {
  paddingLeft: 200
}

export default Main
