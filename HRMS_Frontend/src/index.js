import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header.component.js';
import "babel-polyfill";

ReactDOM.render( <Header/> , document.getElementById('root'));
module.hot.accept();