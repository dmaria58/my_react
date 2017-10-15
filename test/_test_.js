import React, {Component, PropTypes} from 'react';
//import ReactDOM, {render} from 'react-dom';
var reactDom = require('../build/Dom/reactDomentry.js');



//var myReact= require('../build/Entry/reactEntry.js');
//    document.body.appendChild(document.createElement('div'))
var render=reactDom.render;
var HelloMessage = React.createClass({
  render: function() {
    return <h1>Hello {this.props.name}</h1>;
  }
});
render(
    <div id="hshsh" ><HelloMessage name="happy" /><div><li>iii</li><li>hello jack</li></div><div style={{color:"red"}}>lalala</div></div>,
    document.getElementById('example')
);

