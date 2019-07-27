import React from 'react';
import ReactDOM from 'react-dom';
import "babel-polyfill";
import { DefaultLayout }  from "./containers/defaultLayout/defaultLayout.component.js";

const routing = (
    <DefaultLayout/>
);

ReactDOM.render( routing , document.getElementById('root'))
module.hot.accept();
