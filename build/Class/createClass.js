'use strict';
/*
*DEFINE_MANY 当前组件类接口规范或者mixins中都可以定义的方法，注意，这里会生成一个调用两次该方法的函数，第一次是调用类规范中的，第二次是调用mixins中的
*DEFINE_MANY_MERGED 当前组件类接口规范或者mixins中都可以定义，注意，这里会生成一个合并两者结果的函数，然后挂载到当前组件原型链中去，方法名不变，如果返回结果中出现key冲突就会抛错
*DEFINE_ONCE 只能在当前组件类接口规范或者mixins中定义一次的方法，不能在两者之中都定义
*OVERRIDE_BASE 必须通过覆盖才能实现的方法
**/
function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
	var injectedMixins = [];
	var ReactClassInterface = {
	    mixins: 'DEFINE_MANY',
	    statics: 'DEFINE_MANY',
	    propTypes: 'DEFINE_MANY',
	    contextTypes: 'DEFINE_MANY',
	    childContextTypes: 'DEFINE_MANY',
	    getDefaultProps: 'DEFINE_MANY_MERGED',
	    getInitialState: 'DEFINE_MANY_MERGED',
	    getChildContext: 'DEFINE_MANY_MERGED',
	    render: 'DEFINE_ONCE',
	    componentWillMount: 'DEFINE_MANY',
	    componentDidMount: 'DEFINE_MANY',
	    componentWillReceiveProps: 'DEFINE_MANY',
	    shouldComponentUpdate: 'DEFINE_ONCE',
	    componentWillUpdate: 'DEFINE_MANY',
	    componentDidUpdate: 'DEFINE_MANY',
	    componentWillUnmount: 'DEFINE_MANY',
	    updateComponent: 'OVERRIDE_BASE'

	};
	function bindAutoBindMethods(component) {
	    var pairs = component.__reactAutoBindPairs;
	    for (var i = 0; i < pairs.length; i += 2) {
	      var autoBindKey = pairs[i];
	      var method = pairs[i + 1];
	      component[autoBindKey] = bindAutoBindMethod(component, method);
	    }
	}
	var ReactClassComponent = function() {};
	Object.assign(ReactClassComponent.prototype,ReactComponent.prototype,ReactClassMixin);
	function createClass(spec) {
	    var Constructor = identity(function(props, context, updater) {
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }

	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;

	      this.state = null;
	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      this.state = initialState;
	    });

	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];

	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

	    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
	    mixSpecIntoComponent(Constructor, spec);
	    mixSpecIntoComponent(Constructor, IsMountedPostMixin);ß
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }


	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }

	    return Constructor;
	}	
	return createClass;	  
}	 
module.exports = factory; 
