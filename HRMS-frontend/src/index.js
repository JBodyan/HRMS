import React from 'react'
import ReactDOM from 'react-dom'
import {Layout} from './containers/layout/layout.container'
import "babel-polyfill"


ReactDOM.render( <Layout /> , document.getElementById('root'))

module.hot.accept();
