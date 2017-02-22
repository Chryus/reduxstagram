// let's go!
import React from 'react';
import { render } from 'react-dom';

// import css
import css from './styles/style.styl';

// components
import Main from './components/Main'

import Raven from 'raven-js'
import { sentry_url } from './data/config'

Raven.config(sentry_url).install();

console.log(window.doesNotExist.nope);

// routes
import routes from './config/routes'

render(routes, document.getElementById('root'));