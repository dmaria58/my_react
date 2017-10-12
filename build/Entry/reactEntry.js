'use strict';
var reactElement = require('../Element/reactElement');
//var ReactChildren = require('../Children/reactChildren');
var React = {
  /*Children: {
    map: ReactChildren.map,
    forEach: ReactChildren.forEach,
    count: ReactChildren.count,
    toArray: ReactChildren.toArray,
  },*/
  createElement: reactElement.createElement,
  cloneElement: reactElement.cloneElement
};
module.exports = React;