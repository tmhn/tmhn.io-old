'use strict'

import React from 'react'
import DocumentTitle from 'react-document-title'

class Home extends React.Component {
  render () {
    return (
      <DocumentTitle title='Tom Hanson - Home'>
        <div className='pageContent'>
          <h2>Hi, I'm Tom</h2>
          <hr />
          <p>I'm a Computer Science Undergraduate at <a href='http://shu.ac.uk'>SHU</a> due to be graduating Summer 2016! I love crafting elegant digital solutions especially from open source software, with my current favourites being <a href='https://facebook.github.io/react/'>React.js</a> and <a href='https://facebook.github.io/react-native/'>ReactNative</a> alongside <a href='https://nodejs.org/'>Node.js</a>. These projects are usually fuelled by flat-whites and bagels.</p>
          <br />
          <p>When not developing new software solutions I am usually training for my next triathlon, however I am partial to the occasional pastry and strawberry milkshake.</p>
        </div>
      </DocumentTitle>
    )
  }
}

export default Home
