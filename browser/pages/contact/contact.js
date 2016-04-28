'use strict'

import React from 'react'
import DocumentTitle from 'react-document-title'
import PageHeader from '../../components/page-header'

class Contact extends React.Component {
  render () {
    return (
      <DocumentTitle title='Tom Hanson - Contact'>
        <div>
          <PageHeader text='Contact' />
          <div className='pageContent'>
            <h4>Form</h4>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

export default Contact
