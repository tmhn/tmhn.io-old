'use strict'

import React from 'react'
import DocumentTitle from 'react-document-title'
import PageHeader from '../../components/page-header'

class Home extends React.Component {
  render () {
    return (
      <DocumentTitle title='Home - Tom Hanson'>
      <div>
        <PageHeader text="Hi, I'm Tom" />
        <div className='pageContent'>
          <h4>Welcome</h4>
          <hr />
          <p>I'm a Computer Science graduate from <a href='http://shu.ac.uk'>SHU</a>. I currently work at <a href="http://skybet.com">SkyBet</a> working in the Bet tribe. I love crafting elegant digital solutions especially from open source software, with my current favourites being <a href='https://facebook.github.io/react/'>React.js</a> and <a href='https://facebook.github.io/react-native/'>ReactNative</a> alongside <a href='https://nodejs.org/'>Node.js</a>. These projects are usually fuelled by flat-whites and bagels.</p>
          <br />
          <p>When not developing new software solutions I am usually training for my next triathlon, however I am partial to the occasional pastry and strawberry milkshake.</p>
        </div>
      </div>
      </DocumentTitle>
    )
  }
}

export default Home
