'use strict';
/**
* 说明：生成dom node
* mountComponent：把虚拟 dom 的节点生成成具体的 dom node
* _updateDomprops:处理特殊props,如style,function
*/
var ReactDOMComponent =  {
  _updateDomprops:function(_props){
    var props=_props;
    var _myprops={};
    for(var key in props){
      switch(key){
        case 'style':
          var _styleprops=props[key];
          var _styledetail="";
          for(var _key in _styleprops){
            _styledetail+=_key+":"+_styleprops[_key];
          }
          _myprops[key]=_styledetail;
        break;
        default:
          _myprops[key]=props[key];
        break;
      }
    }
    return _myprops;
  },
  mountComponent:function(_currentElement) {
    var result;
    var props = _currentElement.props;
    var _this=this;
    if ( _currentElement.type) {
      result = document.createElement( _currentElement.type );
      props=_this._updateDomprops(props);
      for(var key in props ) {
        if(key!="children"){
           result.setAttribute( key, props[ key ] );
        }
        else{
          if(typeof props.children=="object"){
            if(props.children.length>1){
              props.children.forEach( child=>{              
                result.appendChild(_this.mountComponent(child));
              })
            }
            else{
                result.appendChild(_this.mountComponent(props.children));
            }
          }else{
            result.innerHTML=props.children;
          }
        }
      }
    }
    return result;
  }
}

module.exports = ReactDOMComponent;