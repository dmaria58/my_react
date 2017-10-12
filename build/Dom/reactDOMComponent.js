'use strict';
/*
*style、function单独处理
**/
var ReactDOMComponent =  {
  mountComponent:function(_currentElement) {
    var result;
    var props = _currentElement.props;
    var _this=this;
    if ( _currentElement.type) {
      result = document.createElement( _currentElement.type );
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