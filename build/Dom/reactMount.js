'use strict';
var ReactDOMComponent = require('./reactDOMComponent.js');
//测试下账号
/*import React, {Component, PropTypes} from 'react';
var topLevelRootCounter = 1;
var TopLevelWrapper = function () {
  this.rootID = topLevelRootCounter++;
};*/
var ReactMount = {
  render: function(nextElement, container, callback) {
  	console.log(nextElement);
    console.log(container);
    var my=ReactDOMComponent.mountComponent(nextElement);
    console.log(my);
    container.appendChild(my);
   return  my;
//React.createElement();
    //eval(container);
    //return nextElement;
    /*return ReactMount._renderSubtreeIntoContainer(
      null,
      nextElement,
      container,
      callback,
    );
    var nextWrappedElement = React.createElement(TopLevelWrapper, {
      child: nextElement,
    });
    var prevComponent = getReactRootElementInContainer(container);*/
  }
};
module.exports = ReactMount;