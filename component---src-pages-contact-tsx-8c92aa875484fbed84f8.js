(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[650],{9316:function(t,e,n){var i=n(7294);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},o.apply(this,arguments)}var s=i.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},i.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),r=i.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},i.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function a(t){if(7===t.length)return t;for(var e="#",n=1;n<4;n+=1)e+=t[n]+t[n];return e}function h(t,e,n,i,o){return function(t,e,n,i,o){var s=(t-n)/(e-n);if(0===s)return i;if(1===s)return o;for(var r="#",a=1;a<6;a+=2){var h=parseInt(i.substr(a,2),16),l=parseInt(o.substr(a,2),16),c=Math.round((1-s)*h+s*l).toString(16);1===c.length&&(c="0"+c),r+=c}return r}(t,e,n,a(i),a(o))}var l=function(t){function e(e){t.call(this,e);var n=e.height,i=e.width,o=e.checked;this.t=e.handleDiameter||n-2,this.i=Math.max(i-n,i-(n+this.t)/2),this.o=Math.max(0,(n-this.t)/2),this.state={h:o?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.M=this.M.bind(this),this.m=this.m.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){this.W=!0},e.prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},e.prototype.componentWillUnmount=function(){this.W=!1},e.prototype.I=function(t){this.H.focus(),this.setState({R:t,j:!0,B:Date.now()})},e.prototype.L=function(t){var e=this.state,n=e.R,i=e.h,o=(this.props.checked?this.i:this.o)+t-n;e.N||t===n||this.setState({N:!0});var s=Math.min(this.i,Math.max(this.o,o));s!==i&&this.setState({h:s})},e.prototype.U=function(t){var e=this.state,n=e.h,i=e.N,o=e.B,s=this.props.checked,r=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var a=Date.now()-o;(!i||a<250||s&&n<=r||!s&&n>=r)&&this.A(t),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},e.prototype.p=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.I(t.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},e.prototype.v=function(t){t.preventDefault(),this.L(t.clientX)},e.prototype.g=function(t){this.U(t),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},e.prototype.k=function(t){this.X=null,this.I(t.touches[0].clientX)},e.prototype.M=function(t){this.L(t.touches[0].clientX)},e.prototype.m=function(t){t.preventDefault(),this.U(t)},e.prototype.$=function(t){Date.now()-this.l>50&&(this.A(t),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},e.prototype.C=function(){this.u=Date.now()},e.prototype.D=function(){this.setState({j:!0})},e.prototype.O=function(){this.setState({j:!1})},e.prototype.S=function(t){this.H=t},e.prototype.T=function(t){t.preventDefault(),this.H.focus(),this.A(t),this.W&&this.setState({j:!1})},e.prototype.A=function(t){var e=this.props;(0,e.onChange)(!e.checked,t,e.id)},e.prototype.render=function(){var t=this.props,e=t.checked,n=t.disabled,s=t.className,r=t.offColor,a=t.onColor,l=t.offHandleColor,c=t.onHandleColor,u=t.checkedIcon,d=t.uncheckedIcon,p=t.checkedHandleIcon,f=t.uncheckedHandleIcon,m=t.boxShadow,v=t.activeBoxShadow,b=t.height,y=t.width,k=t.borderRadius,g=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&-1===e.indexOf(i)&&(n[i]=t[i]);return n}(t,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),w=this.state,E=w.h,x=w.N,C=w.j,M={position:"relative",display:"inline-block",textAlign:"left",opacity:n?.5:1,direction:"ltr",borderRadius:b/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},T={height:b,width:y,margin:Math.max(0,(this.t-b)/2),position:"relative",background:h(E,this.i,this.o,r,a),borderRadius:"number"==typeof k?k:b/2,cursor:n?"default":"pointer",WebkitTransition:x?null:"background 0.25s",MozTransition:x?null:"background 0.25s",transition:x?null:"background 0.25s"},S={height:b,width:Math.min(1.5*b,y-(this.t+b)/2+1),position:"relative",opacity:(E-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:x?null:"opacity 0.25s",MozTransition:x?null:"opacity 0.25s",transition:x?null:"opacity 0.25s"},D={height:b,width:Math.min(1.5*b,y-(this.t+b)/2+1),position:"absolute",opacity:1-(E-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:x?null:"opacity 0.25s",MozTransition:x?null:"opacity 0.25s",transition:x?null:"opacity 0.25s"},I={height:this.t,width:this.t,background:h(E,this.i,this.o,l,c),display:"inline-block",cursor:n?"default":"pointer",borderRadius:"number"==typeof k?k-1:"50%",position:"absolute",transform:"translateX("+E+"px)",top:Math.max(0,(b-this.t)/2),outline:0,boxShadow:C?v:m,border:0,WebkitTransition:x?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:x?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:x?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},H={height:this.t,width:this.t,opacity:Math.max(2*(1-(E-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:x?null:"opacity 0.25s",MozTransition:x?null:"opacity 0.25s",transition:x?null:"opacity 0.25s"},N={height:this.t,width:this.t,opacity:Math.max(2*((E-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:x?null:"opacity 0.25s",MozTransition:x?null:"opacity 0.25s",transition:x?null:"opacity 0.25s"};return i.createElement("div",{className:s,style:M},i.createElement("div",{className:"react-switch-bg",style:T,onClick:n?null:this.T,onMouseDown:function(t){return t.preventDefault()}},u&&i.createElement("div",{style:S},u),d&&i.createElement("div",{style:D},d)),i.createElement("div",{className:"react-switch-handle",style:I,onClick:function(t){return t.preventDefault()},onMouseDown:n?null:this.p,onTouchStart:n?null:this.k,onTouchMove:n?null:this.M,onTouchEnd:n?null:this.m,onTouchCancel:n?null:this.O},f&&i.createElement("div",{style:H},f),p&&i.createElement("div",{style:N},p)),i.createElement("input",o({},{type:"checkbox",role:"switch","aria-checked":e,checked:e,disabled:n,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},g,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},e}(i.Component);l.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:s,checkedIcon:r,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},e.default=l},7534:function(t,e,n){t.exports=n(9316)},6375:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var i=n(7294);var o=n(1721),s=n(1597),r=n(7534),a=i.createContext(null),h=function(t){var e=t.to,n=t.children;return i.createElement("li",{className:"nav-link-item"},i.createElement("a",{href:e,className:"nav-link-text main-text-color"},n))},l=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={checked:!0},n.handleChange=n.handleChange.bind(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n)),n}(0,o.Z)(e,t);var n=e.prototype;return n.handleChange=function(t){(0,this.context.setTheme)(t?"light":"dark"),this.setState({checked:t})},n.render=function(){return i.createElement(r.default,{onChange:this.handleChange,checked:this.state.checked,onColor:"#FAD6A5",checkedIcon:!1,uncheckedIcon:!1,height:20,width:40})},e}(i.Component);l.contextType=a;var c=function(){return i.createElement("nav",{className:"nav-bar"},i.createElement(s.Link,{to:"/",className:"nav-logo-text main-text-color"},i.createElement("p",null,"{Y}")),i.createElement("ul",{className:"nav-links"},i.createElement(h,{to:"#Home"},"Home"),i.createElement(h,{to:"#Intro"},"Intro"),i.createElement(h,{to:"#Features"},"Features"),i.createElement(h,{to:"#terminal"},"Terminal")),i.createElement(l,null))},u=function(t){var e=t.pageTitle,n=t.children,o=(0,i.useState)("light"),s=o[0],r=o[1];return i.createElement(a.Provider,{value:{theme:s,setTheme:r}},i.createElement("div",{className:"container",id:s},i.createElement("title",null,e),i.createElement(c,null),i.createElement("main",{className:"main main-background-color"},n)))}},2724:function(t,e,n){"use strict";n.r(e);var i=n(7294),o=n(6375);e.default=function(){return i.createElement(o.Z,{pageTitle:"Contact Me",pageDesc:"Here is how you reach out to me",theme:"dark"},i.createElement("div",{style:{marginTop:2e3,textAlign:"center"}},"Work in Progress"))}}}]);
//# sourceMappingURL=component---src-pages-contact-tsx-8c92aa875484fbed84f8.js.map