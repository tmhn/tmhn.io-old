'use strict'

import React from 'react'

class PageHeader extends React.Component {
  render() {
    return (
      <div className='pageHeaderContent'>
        <h2 style={header}>{this.props.text}</h2>
      </div>
    )
  }
}

var header = {
  color: '#6AA897'
}

export default PageHeader
