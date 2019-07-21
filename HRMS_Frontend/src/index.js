import React from 'react';
import ReactDOM from 'react-dom';
import Lyaout from './containers/layout/layout.container.js';
import "babel-polyfill";

const routing = (
    <Lyaout/> 
);



ReactDOM.render( routing , document.getElementById('root'))

module.hot.accept();
