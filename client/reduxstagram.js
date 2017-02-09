// let's go!
import React from 'react';
import { render } from 'react-dom';

// import css
import css from './styles/style.styl';

// components
import Main from './components/Main'

// routes
import routes from './config/routes'

render(routes, document.getElementById('root'));