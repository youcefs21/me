"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[691],{8780:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var $=n(7294),a=n(9762),u=n(5414),l=n(1721),s=[" /$$     /$$                                       /$$$$$$ ","|  $$   /$$/                                      /$$__  $$"," \\  $$ /$$//$$$$$$  /$$   /$$  /$$$$$$$  /$$$$$$ | $$  \\__/","  \\  $$$$//$$__  $$| $$  | $$ /$$_____/ /$$__  $$| $$$$    ","   \\  $$/| $$  \\ $$| $$  | $$| $$      | $$$$$$$$| $$_/    ","    | $$ | $$  | $$| $$  | $$| $$      | $$_____/| $$      ","    | $$ |  $$$$$$/|  $$$$$$/|  $$$$$$$|  $$$$$$$| $$      ","    |__/  \\______/  \\______/  \\_______/ \\_______/|__/      ","                                                           ","                                                           ","                                                           "],r=function(){return $.createElement("div",null,s.map((function(e){return $.createElement("p",{style:{whiteSpace:"pre"}},e)})))},i=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={inputValue:"",consoleLog:[$.createElement(r,null)],prefix:"me@youcefs21.github.io:~$ "},n.nameInput=null,n}(0,l.Z)(t,e);var n=t.prototype;return n.render=function(){var e=this;return $.createElement("div",{className:"box",onClickCapture:function(t){return e.focusInput(t)}},$.createElement("div",{className:"terminal-text"},this.state.consoleLog.map((function(e){return e})),$.createElement("b",{className:"terminal-prefix"},this.state.prefix),this.state.inputValue,$.createElement("b",{className:"terminal-cursor"},"█")),$.createElement("form",{onSubmit:function(t){return e.processSubmission(t)}},$.createElement("input",{value:"",className:"terminal-input",ref:function(t){e.nameInput=t},onKeyDown:function(t){return e.processSpecialInput(t)},onChange:function(t){return e.processCharInput(t)}})))},n.focusInput=function(e){null!=this.nameInput&&this.nameInput.focus()},n.processSpecialInput=function(e){var t=e.key,n=this.state.inputValue;"Backspace"===t&&(n=n.slice(0,-1)),"l"===t&&e.ctrlKey&&(this.setState({consoleLog:[]}),e.preventDefault()),this.setState({inputValue:n})},n.processCharInput=function(e){var t=e.target.value;this.setState({inputValue:this.state.inputValue+t})},n.processSubmission=function(e){this.state.consoleLog.push($.createElement("p",null,$.createElement("b",{className:"terminal-prefix"},"me@youcefs21.github.io:~$ ")," ",this.state.inputValue),$.createElement("p",null,$.createElement("span",{className:"command"},"'",this.state.inputValue.split(" ")[0],"'")," command not found")),this.setState({inputValue:"",consoleLog:this.state.consoleLog}),e.preventDefault()},t}($.Component),o=function(){return $.createElement(a.Z,{pageTitle:"Youcef",pageDesc:"I am a software engineer who loves learning new things and exploring new technologies"},$.createElement("div",null,$.createElement(u.q,null,$.createElement("title",null,"Youcef"),$.createElement("meta",{name:"description",content:"A Portfolio Page",color:"#21212F"})),$.createElement(i,null)))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-202a7ba6558739bc4538.js.map