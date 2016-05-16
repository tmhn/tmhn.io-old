'use strict'

import React from 'react'
import DocumentTitle from 'react-document-title'
import PageHeader from '../../components/page-header'
import { Link } from 'react-router'

class Projects extends React.Component {
  render () {
    return (
      <DocumentTitle title='Projects - Tom Hanson'>
        <div>
          <PageHeader text='Projects'/>
          <div className='pageContent'>
            <h4>DoppioHealth</h4>
            <hr />
            <p>DoppioHealth is a framework that allows healthcare professionals to create personalised mobile applications
            for patients to monitor their daily activities. Comprising of a Node.js web application with a React.js front-end, 
              MongoDB data store and then a React Native iOS component, this project was submitted as my dissertation project.</p>
            <Link to='/projects/doppio' className='btn btn-default button'>Read More</Link>
          </div>
          <div className='pageContent'>
            <h4>Apollo - National Admission Agency</h4>
            <hr />
            <p>DoppioHealth is a framework that allows healthcare professionals to create personalised mobile applications
            for patients to monitor their daily activities. Comprising of a Node.js web application with a React.js front-end, 
              MongoDB data store and then a React Native iOS component, this project was submitted as my dissertation project.</p>
            <Link to='/projects/web-apps' className='btn btn-default button'>Read More</Link>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

export default Projects
