"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[691],{5865:function(e,t,n){n.r(t),n.d(t,{default:function(){return r}});var a=n(7294),u=n(9762),s=n(5414),o=n(1721),i=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={inputValue:"",consoleLog:[],prefix:"me@youcefs21.github.io:~$ "},n.nameInput=null,n}(0,o.Z)(t,e);var n=t.prototype;return n.render=function(){var e=this;return a.createElement("div",{className:"box",onClickCapture:function(t){return e.focusInput(t)}},a.createElement("form",{onSubmit:function(t){return e.processSubmission(t)}},a.createElement("input",{value:"",className:"terminal-input",ref:function(t){e.nameInput=t},onKeyDown:function(t){return e.processSpecialInput(t)},onChange:function(t){return e.processCharInput(t)}})),a.createElement("div",{className:"terminal-text"},this.state.consoleLog.map((function(e){return a.createElement("p",{style:{margin:"0 0 10px"}},e)})),a.createElement("b",null,this.state.prefix),this.state.inputValue,a.createElement("b",{className:"terminal-cursor"},"█")))},n.focusInput=function(e){null!=this.nameInput&&this.nameInput.focus()},n.processSpecialInput=function(e){var t=e.key,n=this.state.inputValue;"Backspace"===t&&(n=n.slice(0,-1)),"l"===t&&e.ctrlKey&&(this.setState({consoleLog:[]}),e.preventDefault()),this.setState({inputValue:n})},n.processCharInput=function(e){var t=e.target.value;this.setState({inputValue:this.state.inputValue+t})},n.processSubmission=function(e){this.state.consoleLog.push("me@youcefs21.github.io:~$ "+this.state.inputValue,"<insert cool response to the `"+this.state.inputValue+"` command here>"),this.setState({inputValue:"",consoleLog:this.state.consoleLog}),e.preventDefault()},t}(a.Component),r=function(){return a.createElement(u.Z,{pageTitle:"Youcef",pageDesc:"I am a software engineer who loves learning new things and exploring new technologies"},a.createElement("div",null,a.createElement(s.q,null,a.createElement("title",null,"Youcef"),a.createElement("meta",{name:"description",content:"A Portfolio Page"})),a.createElement(i,null)))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-b4ab73ad0e2ee2397862.js.map