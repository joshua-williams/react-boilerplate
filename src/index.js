import React from 'react';
import ReactDom from 'react-dom';
import App from './containers/App.js';

const $container = document.querySelector('#app');
ReactDom.render(<App/>, $container);
