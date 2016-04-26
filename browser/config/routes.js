'use strict'

import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Main from '../pages/main/main'
import Home from '../pages/home/home'
import About from '../pages/about/about'
import Projects from '../pages/projects/projects'
import Contact from '../pages/contact/contact'

export default (
  <Route name='home' path='/' component={Main}>
    <IndexRoute component={Home} />
    <Route name='about' path='about' component={About} />
    <Route name='projects' path='projects' component={Projects} />
    <Route name='contact' path='contact' component={Contact} />
  </Route>
)
