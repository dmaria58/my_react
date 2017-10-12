'use strict';
var ReactMount = require('./reactMount.js');

var ReactDOMStack = {
  findDOMNode: "",
  render: ReactMount.render,
  unmountComponentAtNode: "",
  version: "",
};
module.exports = ReactDOMStack;