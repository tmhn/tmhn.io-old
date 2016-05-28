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
              Apollo is the assignment I completed for my Advanced Web Applications module as part of my final year.
              The brief was to produce a web application using techniques described in lectures that would allow prospective higher education
              students to apply for University courses at institutions. This application was made possible by
              consuming XML web services to provide the courses and Universities.<br /><br />            </p>
            <Link to='/projects' className='btn btn-default button'><span className='glyphicon glyphicon-menu-left buttonGlyph'/>Back to Projects</Link>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

export default WebApps
