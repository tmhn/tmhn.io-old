'use strict'

import React from 'react'

class PageHeader extends React.Component {
  render () {
    return (
      <div className='pageHeaderContent'>
        <h2>{this.props.text}</h2>
      </div>
    )
  }
}

export default PageHeader
