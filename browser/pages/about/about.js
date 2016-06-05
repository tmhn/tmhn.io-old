'use strict'

import React from 'react'
import DocumentTitle from 'react-document-title'
import PageHeader from '../../components/page-header'
import { Link } from 'react-router'

class About extends React.Component {
  render () {
    return (
      <DocumentTitle title='About - Tom Hanson'>
        <div>
          <PageHeader text='About' />
          <div className='pageContent'>
            <h4>About Tom</h4>
            <div className='row' style={iconRow}>
              <div className='col-xs-4 col-sm-4 col-md-4 text-center'>
                <img style={websitesIcon} src='images/icons/website.png' className='center-block img-responsive' />
                <p className='colorTextHeadings'>Websites</p>
              </div>
              <div className='col-xs-4 col-sm-4 col-md-4 text-center'>
                <img style={appsIcon} src='images/icons/app.png' className='center-block img-responsive' />
                <p className='colorTextHeadings'>Apps</p>
              </div>
              <div className='col-xs-4 col-sm-4 col-md-4 text-center'>
                <img style={designIcon} src='images/icons/design.png' className='center-block img-responsive' />
                <p className='colorTextHeadings'>UI / UX</p>
              </div>
            </div>
            <hr />
            <p>I'm Tom Hanson, a Computer Science undergraduate at Sheffield Hallam University originally from Leeds. During my time at University I've studied a range of topics and concepts relating to Computer Science and Software Engineering. During my placement year at <a href='http://next.co.uk'>Next Group PLC</a> I worked in the dynamic eCommerce Systems dept developing the Next websites and back-end systems.</p>
            <br />
            <p>I love learning new things and scratching my own itch, recently this has included using <a href='https://nodejs.org/'>Node.js</a> and <a href='https://facebook.github.io/react/'>React.js</a> to create JavaScript web applications, alongside developing iOS/Android apps with <a href='https://facebook.github.io/react-native/'>ReactNative</a>. I am currently furthering my knowledge of these frameworks by producing a number of side projects, these can be found <Link to='projects'>here</Link>.</p>
            <br />
            <p>If you'd like to know a little more, then please feel free to download my <a href='' download='' className='colorText'>CV</a></p>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

var iconRow = {
  paddingTop: 20
}

var websitesIcon = {
  height: 59,
  width: 70
}

var appsIcon = {
  height: 59,
  width: 70
}

var designIcon = {
  height: 59,
  width: 59
}

export default About
