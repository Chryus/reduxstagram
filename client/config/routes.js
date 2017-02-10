import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store from '../store'
import { history } from '../store'
import Main from '../components/Main'
import PhotoGrid from '../components/PhotoGrid'
import Single from '../components/Single'

module.exports = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Main}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path='posts/:id' component={Single}/>
      </Route>
    </Router>
  </Provider>
)