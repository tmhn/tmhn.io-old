'use strict'

import React from 'react'
import DocumentTitle from 'react-document-title'

class Home extends React.Component {
  render () {
    return (
      <DocumentTitle title='Home'>
        <div style={homeSection}>
          <div style={content}>            
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

var homeSection = {
  backgroundColor: '#F5F5F5',
  height: '100%'
}

var content = {
  backgroundColor: '#FFF'
}

export default Home
