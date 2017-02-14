import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import store from '../store'
import { history } from '../store'
import App from '../components/App'
import PhotoGrid from '../components/PhotoGrid'
import Single from '../components/Single'

module.exports = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path='posts/:id' component={Single}/>
      </Route>
    </Router>
  </Provider>
)

