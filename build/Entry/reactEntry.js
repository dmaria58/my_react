'use strict';
var reactElement = require('../Element/reactElement');
var reactClass = require('../Class/reactClass');
//var ReactChildren = require('../Children/reactChildren');
var React = {
  /*Children: {
    map: ReactChildren.map,
    forEach: ReactChildren.forEach,
    count: ReactChildren.count,
    toArray: ReactChildren.toArray,
  },*/
  createClass: reactClass.createClass,
  createElement: reactElement.createElement,
  cloneElement: reactElement.cloneElement
};
module.exports = React;