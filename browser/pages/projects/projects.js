'use strict'

import React from 'react'
import DocumentTitle from 'react-document-title'
import PageHeader from '../../components/page-header'

class Projects extends React.Component {
  render () {
    return (
      <DocumentTitle title='Tom Hanson - Projects'>
        <div>
          <PageHeader text='Projects'/>
          <div className='pageContent'>
            <h4>Doppio and DoppioHealth</h4>
            <hr />
            <p>Helvetica actually chambray disrupt, fixie tousled street art YOLO messenger bag godard. Direct trade mixtape typewriter man bun, 
            flannel lumbersexual portland scenester kogi taxidermy umami. Chillwave gochujang kombucha bushwick hoodie, migas vice single-origin coffee. 
            Ennui cardigan twee hella synth put a bird on it, swag affogato four dollar toast jean shorts sriracha hoodie XOXO kombucha. Chia cliche distillery, 
            disrupt banjo thundercats cred bicycle rights art party tofu pabst affogato roof party kale chips. Polaroid pour-over farm-to-table photo booth, 
            you probably haven't heard of them post-ironic banh mi four loko next level intelligentsia venmo whatever. Cray disrupt yuccie, messenger bag actually 
            fashion axe hella craft beer keytar meh gastropub fanny pack selfies sartorial mumblecore</p>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

export default Projects
