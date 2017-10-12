import React, {Component, PropTypes} from 'react';
//import ReactDOM, {render} from 'react-dom';
var reactDom = require('../build/Dom/reactDomentry.js')
//var React= require('../build/Entry/reactEntry.js');
//    document.body.appendChild(document.createElement('div'))
var render=reactDom.render;
render(
    <div id="hshsh"><div><li>iii</li><li>hello jack</li></div><div style={{color:"red"}}>lalala</div></div>,
    document.getElementById('example')
);

