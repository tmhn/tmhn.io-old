'use strict'

import React from 'react'
import DocumentTitle from 'react-document-title'
import PageHeader from '../../components/page-header'
import { Link } from 'react-router'

class Doppio extends React.Component {
  render () {
    return (
      <DocumentTitle title='DoppioHealth - Tom Hanson'>
        <div>
          <PageHeader text='DoppioHealth' />
          <div className='pageContent'>
            <h4>DoppioHealth</h4>
            <hr />
            <p>
              DoppioHealth is a system that was developed as part of my undergraduate Computer Science degree for my dissertation. 
              The purpose of the system was to allow healthcare professionals to create personalised mobile applications for patients.
              Rather than downloading generic solutions that cater for many situations, the DoppioHealth iOS application will be customised
              for the patient with no excess functionality. The DoppioHealth system comprises of a React.js web application and a React Native
              iOS application that collaborate together.<br /><br />

              DoppioHealth originally implemented a Google Blockly visual programming user-interface, however after a Feasibility test
              conducted using the technologies, the decision was taken to move towards a solution that would ease data entry on behalf of the
              healthcare professional.
            </p>
            <Link to='/projects' className='btn btn-default button'><span className='glyphicon glyphicon-menu-left buttonGlyph'/>Back to Projects</Link>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

export default Doppio
