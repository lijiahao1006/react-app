import React from 'react';
import ReactDom from 'react-dom';
import App from './view/App.js';

const element = <App />;

ReactDom.render(
    element,
    document.getElementById('app')
)