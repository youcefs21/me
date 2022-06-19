"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[691],{7059:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return w},P:function(){return b},S:function(){return q},_:function(){return l},a:function(){return s},b:function(){return c},g:function(){return u},h:function(){return o}});var n=a(7294),r=(a(2369),a(5697)),i=a.n(r);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(a=i[n])>=0||(r[a]=e[a]);return r}var o=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,a,n,r){return void 0===r&&(r={}),s({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:s({},r,{opacity:t?1:0})})}function u(e,t,a,n,r,i,l,o){var c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);var u=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}var m,d=["children"],p=function(e){var t=e.layout,a=e.width,r=e.height;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+r+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){var t=e.children,a=l(e,d);return n.createElement(n.Fragment,null,n.createElement(p,s({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],y=function(e){var t=e.src,a=e.srcSet,r=e.loading,i=e.alt,o=void 0===i?"":i,c=e.shouldLoad,u=l(e,h);return n.createElement("img",s({},u,{decoding:"async",loading:r,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:o}))},v=function(e){var t=e.fallback,a=e.sources,r=void 0===a?[]:a,i=e.shouldLoad,o=void 0===i||i,c=l(e,f),u=c.sizes||(null==t?void 0:t.sizes),m=n.createElement(y,s({},c,t,{sizes:u,shouldLoad:o}));return r.length?n.createElement("picture",null,r.map((function(e){var t=e.media,a=e.srcSet,r=e.type;return n.createElement("source",{key:t+"-"+r+"-"+a,type:r,media:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,sizes:u})})),m):m};y.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},v.displayName="Picture",v.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};var E=["fallback"],b=function(e){var t=e.fallback,a=l(e,E);return t?n.createElement(v,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",s({},a))};b.displayName="Placeholder",b.propTypes={fallback:r.string,sources:null==(m=v.propTypes)?void 0:m.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var w=function(e){return n.createElement(n.Fragment,null,n.createElement(v,s({},e)),n.createElement("noscript",null,n.createElement(v,s({},e,{shouldLoad:!0}))))};w.displayName="MainImage",w.propTypes=v.propTypes;var _,N,x=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),s=3;s<n;s++)r[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:i().object.isRequired,alt:x},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],S=["style","className"],k=new Set,I=function(e){var t=e.as,r=void 0===t?"div":t,i=e.image,c=e.style,u=e.backgroundColor,m=e.className,d=e.class,p=e.onStartLoad,g=e.onLoad,h=e.onError,f=l(e,L),y=i.width,v=i.height,E=i.layout,b=function(e,t,a){var n={},r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}(y,v,E),w=b.style,x=b.className,C=l(b,S),I=(0,n.useRef)(),T=(0,n.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);d&&(m=d);var H=function(e,t,a){var n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(E,y,v);return(0,n.useEffect)((function(){_||(_=Promise.all([a.e(774),a.e(680)]).then(a.bind(a,8680)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return N=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,n=I.current.querySelector("[data-gatsby-image-ssr]");return n&&o()?(n.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)})),void k.add(T)):N&&k.has(T)?void 0:(_.then((function(a){var n=a.renderImageToString,r=a.swapPlaceholderImage;I.current&&(I.current.innerHTML=n(s({isLoading:!0,isLoaded:k.has(T),image:i},f)),k.has(T)||(e=requestAnimationFrame((function(){I.current&&(t=r(I.current,T,k,c,p,g,h))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,n.useLayoutEffect)((function(){k.has(T)&&N&&(I.current.innerHTML=N(s({isLoading:k.has(T),isLoaded:k.has(T),image:i},f)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[i]),(0,n.createElement)(r,s({},C,{style:s({},w,c,{backgroundColor:u}),className:x+(m?" "+m:""),ref:I,dangerouslySetInnerHTML:{__html:H},suppressHydrationWarning:!0}))},T=(0,n.memo)((function(e){return e.image?(0,n.createElement)(I,e):null}));T.propTypes=C,T.displayName="GatsbyImage";var H,A=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],z=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},V=new Set(["fixed","fullWidth","constrained"]),O={src:i().string.isRequired,alt:x,width:z,height:z,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!V.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},q=(H=T,function(e){var t=e.src,a=e.__imageData,r=e.__error,i=l(e,A);return r&&console.warn(r),a?n.createElement(H,s({image:a},i)):(console.warn("Image not loaded",t),null)});q.displayName="StaticImage",q.propTypes=O},2369:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,n=!1,r=0;r<e.length;r++){var i=e[r];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,r)+"-"+e.slice(r),t=!1,n=a,a=!0,r++):a&&n&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,r-1)+"-"+e.slice(r-1),n=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,n=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},6081:function(e,t,a){a.r(t),a.d(t,{default:function(){return _}});var n=a(7294),r=a(6375),i=a(5414),s=a(1721),l=function(e){var t=e.args;switch(t[0]){case"help":return n.createElement(c,null);case"banner":return n.createElement(o,null)}return n.createElement(u,{command:t[0]})},o=function(){return n.createElement("div",null,n.createElement("p",null,"                                                           "," ",n.createElement("br",null)," /00     /11                                       /000100 "," ",n.createElement("br",null),"|  10   /10/                                      /00__  10"," ",n.createElement("br",null)," \\  01 /00//111000  /10   /11  /1000100  /010100 | 10  \\__/"," ",n.createElement("br",null),"  \\  0100//11__  00| 01  | 10 /10_____/ /00__  00| 0000    "," ",n.createElement("br",null),"   \\  11/| 01  \\ 10| 00  | 00| 00      | 00011000| 11_/    "," ",n.createElement("br",null),"    | 00 | 00  | 01| 10  | 00| 00      | 11_____/| 00      "," ",n.createElement("br",null),"    | 01 |  010010/|  100001/|  0011010|  0110001| 10      "," ",n.createElement("br",null),"    |__/  \\______/  \\______/  \\_______/ \\_______/|__/      "," ",n.createElement("br",null),"                                                           "),n.createElement("p",{className:"orange-terminal-text"},"Welcome to my interactive terminal based portfolio."),n.createElement("p",{className:"orange-terminal-text"},"For a list of available commands, type ",n.createElement("span",{className:"command"},"'help'")))},c=function(){return n.createElement("p",{className:"orange-terminal-text"},"it's looking very deserted around here... ",n.createElement("br",null)," ",n.createElement("br",null),"ig ",n.createElement("span",{className:"command"},"'banner'")," is a thing")},u=function(e){var t=e.command;return n.createElement("p",null,n.createElement("span",{className:"command"},"'",t,"'")," command not found")},m=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={inputValue:"",consoleLog:[n.createElement(o,{key:"InitialBanner"})],prefix:"me@youcefs21.github.io:~$ ",commandHistory:[null]},a.nameInput=null,a}(0,s.Z)(t,e);var a=t.prototype;return a.render=function(){var e=this;return n.createElement("div",{id:"terminal",className:"terminal-box",onClickCapture:function(t){return e.focusInput(t)}},this.state.consoleLog.map((function(e){return e})),n.createElement("b",null,this.state.prefix),n.createElement("span",{className:"orange-terminal-text"},this.state.inputValue),n.createElement("b",{className:"terminal-cursor"},"█"),n.createElement("form",{onSubmit:function(t){return e.processSubmission(t)}},n.createElement("input",{value:"",className:"terminal-input",ref:function(t){e.nameInput=t},onKeyDown:function(t){return e.processSpecialInput(t)},onChange:function(t){return e.processCharInput(t)}})))},a.focusInput=function(e){null!=this.nameInput&&this.nameInput.focus()},a.processSpecialInput=function(e){var t=e.key,a=this.state.inputValue;"Backspace"===t?a=a.slice(0,-1):"l"===t&&e.ctrlKey?(this.setState({consoleLog:[]}),e.preventDefault()):"ArrowUp"===t&&null!=this.state.commandHistory.at(-1)?(this.state.commandHistory.unshift(a),a=this.state.commandHistory.pop()):"ArrowDown"===t&&null!=this.state.commandHistory[0]&&""!=a&&(this.state.commandHistory.push(a),a=this.state.commandHistory.shift()),this.setState({inputValue:a,commandHistory:this.state.commandHistory})},a.processCharInput=function(e){var t=e.target.value;this.setState({inputValue:this.state.inputValue+t})},a.processSubmission=function(e){this.state.consoleLog.push(n.createElement("div",{key:"prompt"+this.state.consoleLog.length.toString()},n.createElement("b",null,this.state.prefix),n.createElement("span",{className:"orange-terminal-text"},this.state.inputValue)));var t=this.state.inputValue.split(" "),a="response"+this.state.consoleLog.length.toString();""!=this.state.inputValue&&(this.state.consoleLog.push(n.createElement(l,{args:t,key:a})),this.state.commandHistory.push(this.state.inputValue)),this.setState({inputValue:"",consoleLog:this.state.consoleLog,commandHistory:this.state.commandHistory}),e.preventDefault()},t}(n.Component),d=function(){return n.createElement("a",{href:"#terminal",className:"arrows-button"},n.createElement("svg",{width:"38",height:"60",viewBox:"0 0 38 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("g",{id:"Arrows"},n.createElement("path",{id:"BotArrow",opacity:"0.8",d:"M17.2322 46.7678C18.2085 47.7441 19.7915 47.7441 20.7678 46.7678L36.6777 30.8579C37.654 29.8816 37.654 28.2986 36.6777 27.3223C35.7014 26.346 34.1184 26.346 33.1421 27.3223L19 41.4645L4.85786 27.3223C3.88155 26.346 2.29864 26.346 1.32233 27.3223C0.34602 28.2986 0.34602 29.8816 1.32233 30.8579L17.2322 46.7678ZM16.5 41.25V45H21.5V41.25H16.5Z",className:"arrow-color"}),n.createElement("path",{id:"TopArrow",opacity:"0.8",d:"M17.2322 20.5178C18.2085 21.4941 19.7915 21.4941 20.7678 20.5178L36.6777 4.60786C37.654 3.63155 37.654 2.04864 36.6777 1.07233C35.7014 0.0960197 34.1184 0.0960197 33.1421 1.07233L19 15.2145L4.85786 1.07233C3.88155 0.0960197 2.29864 0.0960197 1.32233 1.07233C0.34602 2.04864 0.34602 3.63155 1.32233 4.60786L17.2322 20.5178ZM16.5 15V18.75H21.5V15H16.5Z",className:"arrow-color"}))))},p=function(e){var t=e.children,a=e.className,r=e.zIndex;return n.createElement("div",{className:"backdrop-parent",style:{zIndex:r}},n.createElement("div",{className:"backdrop "+a},t))},g=function(){for(var e=[],t=0;t<20;t++){var a={left:100*t/20+"vw",animation:"linear "+(5*Math.random()+5)+"s infinite binary-down",animationDelay:-1*Math.random()*10+"s"};e.push(n.createElement("p",{className:"binary-number",style:a,key:"binary"+t.toString()},"01100011 01100001 01101110"))}return n.createElement("div",{className:"binary-parent"},e.map((function(e){return e})))},h=a(7059),f=function(){return n.createElement(p,{className:"background-color-1",zIndex:10},n.createElement("div",{id:"Home",className:"page"},n.createElement("div",null,n.createElement("h1",{className:"heading main-text-color"},"Youcef"),n.createElement("h2",{className:"sub-heading main-text-color"},"I am a software engineer who loves learning new things and exploring new technologies")),n.createElement(d,null),n.createElement(g,null)))},y=function(){return n.createElement(p,{className:"background-color-2",zIndex:9},n.createElement("div",{id:"Intro",className:"page"},n.createElement("h2",{className:"main-text-color intro-heading"},"An Interactive Terminal Based Portfolio Experience"),n.createElement("p",{className:"description-text secondary-text-color"},"At the bottom of this page, you’ll find a powerful custom built command line interface just like this one"),n.createElement(h.S,{src:"../images/light.gif",alt:"white space",className:"main-demo",imgClassName:"main-demo-img",__imageData:a(4821)}),n.createElement(d,null)))},v=function(e){var t=e.heading,r=e.className;return n.createElement("div",null,n.createElement("p",{className:"description-text main-text-color"},t),n.createElement(h.S,{src:"../images/light.gif",alt:t,className:"feature-demo",imgClassName:r,__imageData:a(4821)}))},E=function(){return n.createElement("div",{className:"feature-container",style:{maxWidth:1700}},n.createElement(v,{heading:"Smart Auto Complete",className:"feature-demo-img"}),n.createElement(v,{heading:"Powerful Query",className:"feature-demo-img"}),n.createElement(v,{heading:"Command History",className:"feature-demo-img"}),n.createElement(v,{heading:"Elegant Shortcuts",className:"feature-demo-img"}))},b=function(){return n.createElement(p,{className:"background-color-3",zIndex:8},n.createElement("div",{id:"Features",className:"page"},n.createElement("h2",{className:"main-text-color intro-heading"},"Features"),n.createElement(E,null),n.createElement("p",{className:"secondary-text-color",style:{marginBottom:100}},"and many secrets to discover..."),n.createElement(d,null)))},w=function(){return n.createElement(n.Fragment,null,n.createElement("h1",{className:"heading main-text-color"},"The Terminal"),n.createElement(m,null))},_=function(){return n.createElement(r.Z,{pageTitle:"Youcef"},n.createElement(i.q,null,n.createElement("title",null,"Youcef"),n.createElement("meta",{name:"description",content:"A Portfolio Page",color:"#21212F"})),n.createElement(f,null),n.createElement(y,null),n.createElement(b,null),n.createElement(w,null))}},4821:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/me/static/b25a1f7023680b1172a2987747dcd495/72e45/light.gif","srcSet":"/me/static/b25a1f7023680b1172a2987747dcd495/d25ea/light.gif 144w,\\n/me/static/b25a1f7023680b1172a2987747dcd495/e036f/light.gif 288w,\\n/me/static/b25a1f7023680b1172a2987747dcd495/72e45/light.gif 576w","sizes":"(min-width: 576px) 576px, 100vw"},"sources":[{"srcSet":"/me/static/b25a1f7023680b1172a2987747dcd495/9ff24/light.webp 144w,\\n/me/static/b25a1f7023680b1172a2987747dcd495/46bd0/light.webp 288w,\\n/me/static/b25a1f7023680b1172a2987747dcd495/d7fa8/light.webp 576w","type":"image/webp","sizes":"(min-width: 576px) 576px, 100vw"}]},"width":576,"height":324}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-e7fe4c816fd21dae0710.js.map