import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Main from '../components/Main'
import PhotoGrid from '../components/PhotoGrid'
import Single from '../components/Single'

module.exports = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path='posts/:id' component={Single}/>
    </Route>
  </Router>
)