import React from 'react';
import ReactDOM from 'react-dom';
import "babel-polyfill";
import Header from "./components/header/header.component";

const routing = (
    <Header/>
);



ReactDOM.render( routing , document.getElementById('root'))

module.hot.accept();
