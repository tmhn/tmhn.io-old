'use strict'

import React from 'react'
import DocumentTitle from 'react-document-title'
import PageHeader from '../../components/page-header'
import { Link } from 'react-router'

class WebApps extends React.Component {
  render () {
    return (
      <DocumentTitle text='Apollo - Tom Hanson'>
        <div>
          <PageHeader text='Apollo' />
          <div className='pageContent'>
            <h4>Apollo</h4>
            <hr />
            <p>

            </p>
            <Link to='/projects' className='btn btn-default button'><span className='glyphicon glyphicon-menu-left buttonGlyph'/>Back to Projects</Link>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

export default WebApps
