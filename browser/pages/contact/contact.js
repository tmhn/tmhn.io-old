'use strict'

import React from 'react'
import DocumentTitle from 'react-document-title'
import PageHeader from '../../components/page-header'

class Contact extends React.Component {
  render () {
    return (
      <DocumentTitle title='Contact - Tom Hanson'>
        <div>
          <PageHeader text='Contact' />
          <div className='pageContent'>
            <h4>Some of the best ways to contact me:</h4>
            <hr />
            <div className='container'>
              <div className='row' style={elementRow}>
                <a href='mailto:itomhanson@gmail.com'><img className='contactIcon' src='images/icons/ios7-email-outline.png' /></a>
                <a href='mailto:itomhanson@gmail.com' style={linkText}>Email</a>
              </div>
              <div className='row' style={elementRow}>
                <a href='http://github.com/tmhn'><img className='contactIcon' src='images/icons/social-github-outline.png' /></a>
                <a href='http://github.com/tmhn' style={linkText}>GitHub</a>
              </div>
              <div className='row' style={elementRow}>
                <a href='https://uk.linkedin.com/in/thomasmhanson'><img className='contactIcon' src='images/icons/social-linkedin-outline.png' /></a>
                <a href='https://uk.linkedin.com/in/thomasmhanson' style={linkText}>LinkedIn</a>
              </div>
              <div className='row' style={elementRow}>
                <a href='http://twitter.com/iTomHanson'><img className='contactIcon' src='images/icons/social-twitter-outline.png' /></a>
                <a href='http://twitter.com/iTomHanson' style={linkText}>Twitter</a>
              </div>   
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
