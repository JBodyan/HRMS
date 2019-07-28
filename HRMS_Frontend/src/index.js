import React from 'react';
import ReactDOM from 'react-dom';
import "babel-polyfill";
import { App }  from "./containers/app/app.component.js";

const routing = (
    <App/>
);

ReactDOM.render( routing , document.getElementById('root'))
module.hot.accept();
