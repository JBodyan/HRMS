import React from 'react'
import ReactDOM from 'react-dom'
import Main from './containers/main.container'
import "babel-polyfill"


ReactDOM.render( <Main /> , document.getElementById('root'))

module.hot.accept();
