'use strict'

import React from 'react'
import DocumentTitle from 'react-document-title'
import PageHeader from '../../components/page-header'

class About extends React.Component {
  render () {
    return (
      <DocumentTitle title='Tom Hanson - About'>
        <div>
          <PageHeader text='About' />
          <div className='pageContent'>
            <h4>Tom Hanson</h4>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

export default About
