(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[49],{9316:function(t,e,i){var n=i(7294);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},o.apply(this,arguments)}var s=n.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},n.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),a=n.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},n.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function r(t){if(7===t.length)return t;for(var e="#",i=1;i<4;i+=1)e+=t[i]+t[i];return e}function h(t,e,i,n,o){return function(t,e,i,n,o){var s=(t-i)/(e-i);if(0===s)return n;if(1===s)return o;for(var a="#",r=1;r<6;r+=2){var h=parseInt(n.substr(r,2),16),l=parseInt(o.substr(r,2),16),c=Math.round((1-s)*h+s*l).toString(16);1===c.length&&(c="0"+c),a+=c}return a}(t,e,i,r(n),r(o))}var l=function(t){function e(e){t.call(this,e);var i=e.height,n=e.width,o=e.checked;this.t=e.handleDiameter||i-2,this.i=Math.max(n-i,n-(i+this.t)/2),this.o=Math.max(0,(i-this.t)/2),this.state={h:o?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.M=this.M.bind(this),this.m=this.m.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){this.W=!0},e.prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},e.prototype.componentWillUnmount=function(){this.W=!1},e.prototype.I=function(t){this.H.focus(),this.setState({R:t,j:!0,B:Date.now()})},e.prototype.L=function(t){var e=this.state,i=e.R,n=e.h,o=(this.props.checked?this.i:this.o)+t-i;e.N||t===i||this.setState({N:!0});var s=Math.min(this.i,Math.max(this.o,o));s!==n&&this.setState({h:s})},e.prototype.U=function(t){var e=this.state,i=e.h,n=e.N,o=e.B,s=this.props.checked,a=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var r=Date.now()-o;(!n||r<250||s&&i<=a||!s&&i>=a)&&this.A(t),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},e.prototype.p=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.I(t.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},e.prototype.v=function(t){t.preventDefault(),this.L(t.clientX)},e.prototype.g=function(t){this.U(t),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},e.prototype.k=function(t){this.X=null,this.I(t.touches[0].clientX)},e.prototype.M=function(t){this.L(t.touches[0].clientX)},e.prototype.m=function(t){t.preventDefault(),this.U(t)},e.prototype.$=function(t){Date.now()-this.l>50&&(this.A(t),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},e.prototype.C=function(){this.u=Date.now()},e.prototype.D=function(){this.setState({j:!0})},e.prototype.O=function(){this.setState({j:!1})},e.prototype.S=function(t){this.H=t},e.prototype.T=function(t){t.preventDefault(),this.H.focus(),this.A(t),this.W&&this.setState({j:!1})},e.prototype.A=function(t){var e=this.props;(0,e.onChange)(!e.checked,t,e.id)},e.prototype.render=function(){var t=this.props,e=t.checked,i=t.disabled,s=t.className,a=t.offColor,r=t.onColor,l=t.offHandleColor,c=t.onHandleColor,u=t.checkedIcon,d=t.uncheckedIcon,p=t.checkedHandleIcon,f=t.uncheckedHandleIcon,m=t.boxShadow,v=t.activeBoxShadow,b=t.height,y=t.width,k=t.borderRadius,g=function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&-1===e.indexOf(n)&&(i[n]=t[n]);return i}(t,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),w=this.state,E=w.h,x=w.N,C=w.j,M={position:"relative",display:"inline-block",textAlign:"left",opacity:i?.5:1,direction:"ltr",borderRadius:b/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},S={height:b,width:y,margin:Math.max(0,(this.t-b)/2),position:"relative",background:h(E,this.i,this.o,a,r),borderRadius:"number"==typeof k?k:b/2,cursor:i?"default":"pointer",WebkitTransition:x?null:"background 0.25s",MozTransition:x?null:"background 0.25s",transition:x?null:"background 0.25s"},T={height:b,width:Math.min(1.5*b,y-(this.t+b)/2+1),position:"relative",opacity:(E-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:x?null:"opacity 0.25s",MozTransition:x?null:"opacity 0.25s",transition:x?null:"opacity 0.25s"},D={height:b,width:Math.min(1.5*b,y-(this.t+b)/2+1),position:"absolute",opacity:1-(E-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:x?null:"opacity 0.25s",MozTransition:x?null:"opacity 0.25s",transition:x?null:"opacity 0.25s"},I={height:this.t,width:this.t,background:h(E,this.i,this.o,l,c),display:"inline-block",cursor:i?"default":"pointer",borderRadius:"number"==typeof k?k-1:"50%",position:"absolute",transform:"translateX("+E+"px)",top:Math.max(0,(b-this.t)/2),outline:0,boxShadow:C?v:m,border:0,WebkitTransition:x?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:x?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:x?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},H={height:this.t,width:this.t,opacity:Math.max(2*(1-(E-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:x?null:"opacity 0.25s",MozTransition:x?null:"opacity 0.25s",transition:x?null:"opacity 0.25s"},N={height:this.t,width:this.t,opacity:Math.max(2*((E-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:x?null:"opacity 0.25s",MozTransition:x?null:"opacity 0.25s",transition:x?null:"opacity 0.25s"};return n.createElement("div",{className:s,style:M},n.createElement("div",{className:"react-switch-bg",style:S,onClick:i?null:this.T,onMouseDown:function(t){return t.preventDefault()}},u&&n.createElement("div",{style:T},u),d&&n.createElement("div",{style:D},d)),n.createElement("div",{className:"react-switch-handle",style:I,onClick:function(t){return t.preventDefault()},onMouseDown:i?null:this.p,onTouchStart:i?null:this.k,onTouchMove:i?null:this.M,onTouchEnd:i?null:this.m,onTouchCancel:i?null:this.O},f&&n.createElement("div",{style:H},f),p&&n.createElement("div",{style:N},p)),n.createElement("input",o({},{type:"checkbox",role:"switch","aria-checked":e,checked:e,disabled:i,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},g,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},e}(n.Component);l.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:s,checkedIcon:a,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},e.default=l},7534:function(t,e,i){t.exports=i(9316)},6375:function(t,e,i){"use strict";i.d(e,{Z:function(){return u}});var n=i(7294);var o=i(1721),s=i(1597),a=i(7534),r=n.createContext(null),h=function(t){var e=t.to,i=t.children;return n.createElement("li",{className:"nav-link-item"},n.createElement("a",{href:e,className:"nav-link-text main-text-color"},i))},l=function(t){function e(e){var i;return(i=t.call(this,e)||this).state={checked:!0},i.handleChange=i.handleChange.bind(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(i)),i}(0,o.Z)(e,t);var i=e.prototype;return i.handleChange=function(t){(0,this.context.setTheme)(t?"light":"dark"),this.setState({checked:t})},i.render=function(){return n.createElement("label",null,n.createElement(a.default,{onChange:this.handleChange,checked:this.state.checked}))},e}(n.Component);l.contextType=r;var c=function(){return n.createElement("nav",{className:"nav-bar"},n.createElement(s.Link,{to:"/",className:"nav-logo-text main-text-color"},n.createElement("p",null,"{Y}")),n.createElement("ul",{className:"nav-links"},n.createElement(h,{to:"#Home"},"Home"),n.createElement(h,{to:"#Intro"},"Intro"),n.createElement(h,{to:"#Features"},"Features"),n.createElement(h,{to:"#terminal"},"Terminal")),n.createElement(l,null))},u=function(t){var e=t.pageTitle,i=t.children,o=(0,n.useState)("light"),s=o[0],a=o[1];return n.createElement(r.Provider,{value:{theme:s,setTheme:a}},n.createElement("div",{className:"container",id:s},n.createElement("title",null,e),n.createElement(c,null),n.createElement("main",{className:"main main-background-color"},i)))}},5666:function(t,e,i){"use strict";i.r(e);var n=i(7294),o=i(6375);e.default=function(){return n.createElement(o.Z,{pageTitle:"About Me",pageDesc:"Hi there! I'm the proud creator of this site"},n.createElement("p",null,"stuff"))}}}]);
//# sourceMappingURL=component---src-pages-about-tsx-7f891ffacff6dfff180b.js.map