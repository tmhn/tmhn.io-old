'use strict'

import React from 'react'
import DocumentTitle from 'react-document-title'
import PageHeader from '../../components/page-header'
import content from '../../content/site'

class Contact extends React.Component {
  render () {
    const social = content.socialLinks

    return (
      <DocumentTitle title='Contact - Tom Hanson'>
        <div>
          <PageHeader text='Contact' />
          <div className='pageContent'>
            <h4>Some of the best ways to contact me:</h4>
            <hr />
            <div className='container'>
            
              {social.map(({name, address, icon}, index) =>
                <div className='row' style={elementRow}>
                  <a href={address}><img className='contactIcon' src={icon} /></a>
                  <a href={address} style={linkText}>{name}</a>
                </div>
              )}

            </div>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

var linkText = {
  fontSize: 18,
  paddingLeft: 15,
  color: '#7B7B82'
}

var elementRow = {
  marginBottom: 25
}

export default Contact
