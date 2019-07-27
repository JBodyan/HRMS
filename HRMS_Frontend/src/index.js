import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './containers/layout/layout.container.js';
import "babel-polyfill";

const routing = (
    <Layout/>
);



ReactDOM.render( routing , document.getElementById('root'))

module.hot.accept();
