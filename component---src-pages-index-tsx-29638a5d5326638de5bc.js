"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[691],{5865:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var a=n(7294),o=n(9762),s=n(5414),i=n(1721),r=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={inputValue:"",consoleLog:[],prefix:"me@youcefs21.github.io:~$ "},n}(0,i.Z)(t,e);var n=t.prototype;return n.render=function(){var e=this;return a.createElement("div",{className:"box"},a.createElement("form",{onSubmit:function(t){return e.processSubmission(t)}},a.createElement("input",{value:"",className:"terminal-input",onKeyDown:function(t){return e.processSpecialInput(t)},onChange:function(t){return e.processCharInput(t)}})),a.createElement("div",{className:"terminal-text"},this.state.consoleLog.map((function(e){return a.createElement("p",null,e)})),this.state.prefix,this.state.inputValue,a.createElement("b",{className:"terminal-cursor"},"█")))},n.processSpecialInput=function(e){var t=e.key,n=this.state.inputValue;"Backspace"===t&&(n=n.slice(0,-1)),console.log(t),this.setState({inputValue:n})},n.processCharInput=function(e){var t=e.target.value;this.setState({inputValue:this.state.inputValue+t})},n.processSubmission=function(e){this.state.consoleLog.push("me@youcefs21.github.io:~$ "+this.state.inputValue,"<insert cool response to the `"+this.state.inputValue+"` command here>"),this.setState({inputValue:"",consoleLog:this.state.consoleLog}),e.preventDefault()},t}(a.Component),u=function(){return a.createElement(o.Z,{pageTitle:"Youcef",pageDesc:"I am a software engineer who loves learning new things and exploring new technologies"},a.createElement("div",null,a.createElement(s.q,null,a.createElement("title",null,"Youcef"),a.createElement("meta",{name:"description",content:"portfolio page"})),a.createElement(r,null)))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-29638a5d5326638de5bc.js.map