"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[351],{9230:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return E},P:function(){return b},S:function(){return R},_:function(){return s},a:function(){return o},b:function(){return l},g:function(){return d},h:function(){return c}});var r=a(7294),n=(a(2369),a(5697)),i=a.n(n);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}var c=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function l(e,t,a,r,n){return void 0===n&&(n={}),o({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,i,s,c){var l={};i&&(l.backgroundColor=i,"fixed"===a?(l.width=r,l.height=n,l.backgroundColor=i,l.position="relative"):("constrained"===a||"fullWidth"===a)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),s&&(l.objectFit=s),c&&(l.objectPosition=c);var d=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},l)});return d}var u,m=["children"],p=function(e){var t=e.layout,a=e.width,n=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){var t=e.children,a=s(e,m);return r.createElement(r.Fragment,null,r.createElement(p,o({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],v=function(e){var t=e.src,a=e.srcSet,n=e.loading,i=e.alt,c=void 0===i?"":i,l=e.shouldLoad,d=s(e,f);return r.createElement("img",o({},d,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:c}))},y=function(e){var t=e.fallback,a=e.sources,n=void 0===a?[]:a,i=e.shouldLoad,c=void 0===i||i,l=s(e,h),d=l.sizes||(null==t?void 0:t.sizes),u=r.createElement(v,o({},l,t,{sizes:d,shouldLoad:c}));return n.length?r.createElement("picture",null,n.map((function(e){var t=e.media,a=e.srcSet,n=e.type;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,sizes:d})})),u):u};v.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var w=["fallback"],b=function(e){var t=e.fallback,a=s(e,w);return t?r.createElement(y,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",o({},a))};b.displayName="Placeholder",b.propTypes={fallback:n.string,sources:null==(u=y.propTypes)?void 0:u.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var E=function(e){return r.createElement(r.Fragment,null,r.createElement(y,o({},e)),r.createElement("noscript",null,r.createElement(y,o({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=y.propTypes;var C,L,k=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),o=3;o<r;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},x={image:i().object.isRequired,alt:k},I=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],N=["style","className"],S=new Set,T=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,l=e.style,d=e.backgroundColor,u=e.className,m=e.class,p=e.onStartLoad,g=e.onLoad,f=e.onError,h=s(e,I),v=i.width,y=i.height,w=i.layout,b=function(e,t,a){var r={},n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(v,y,w),E=b.style,k=b.className,x=s(b,N),T=(0,r.useRef)(),O=(0,r.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);m&&(u=m);var A=function(e,t,a){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,v,y);return(0,r.useEffect)((function(){C||(C=Promise.all([a.e(774),a.e(36)]).then(a.bind(a,9036)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return L=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,r=T.current.querySelector("[data-gatsby-image-ssr]");return r&&c()?(r.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)})),void S.add(O)):L&&S.has(O)?void 0:(C.then((function(a){var r=a.renderImageToString,n=a.swapPlaceholderImage;T.current.innerHTML=r(o({isLoading:!0,isLoaded:S.has(O),image:i},h)),S.has(O)||(e=requestAnimationFrame((function(){T.current&&(t=n(T.current,O,S,l,p,g,f))})))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,r.useLayoutEffect)((function(){S.has(O)&&L&&(T.current.innerHTML=L(o({isLoading:S.has(O),isLoaded:S.has(O),image:i},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[i]),(0,r.createElement)(n,o({},x,{style:o({},E,l,{backgroundColor:d}),className:k+(u?" "+u:""),ref:T,dangerouslySetInnerHTML:{__html:A},suppressHydrationWarning:!0}))},O=(0,r.memo)((function(e){return e.image?(0,r.createElement)(T,e):null}));O.propTypes=x,O.displayName="GatsbyImage";var A,_=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],q=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},z=new Set(["fixed","fullWidth","constrained"]),M={src:i().string.isRequired,alt:k,width:q,height:q,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!z.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},R=(A=O,function(e){var t=e.src,a=e.__imageData,n=e.__error,i=s(e,_);return n&&console.warn(n),a?r.createElement(A,o({image:a},i)):(console.warn("Image not loaded",t),null)});R.displayName="StaticImage",R.propTypes=M},2369:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,r=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},9762:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(7294),n=a(1597),i=a(9230),o=function(e){var t=e.to,a=e.children;return r.createElement("li",{className:"nav-link-item"},r.createElement(n.Link,{to:t,className:"nav-link-text"},a))},s=function(e){var t=e.className;return r.createElement("nav",{className:t},r.createElement("ul",{className:"nav-links"},r.createElement(o,{to:"/"},"Home"),r.createElement(o,{to:"/"},r.createElement("div",{className:"crop-img"},r.createElement(i.S,{src:"../images/myIcon.png",alt:"Profile Picture",width:42,height:42,__imageData:a(3298)}))),r.createElement(o,{to:"/contact"},"Contact")))};function c(e){var t=document.getElementById("pageBottom");t&&t.scrollIntoView({behavior:"smooth",block:"start"})}var l=function(){return r.createElement("button",{onClick:c,className:"arrows-button"},r.createElement("p",{className:"arrow-text"},"click me"),r.createElement("svg",{width:"38",height:"60",viewBox:"0 0 38 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("g",{id:"Arrows"},r.createElement("path",{id:"BotArrow",opacity:"0.8",d:"M17.2322 46.7678C18.2085 47.7441 19.7915 47.7441 20.7678 46.7678L36.6777 30.8579C37.654 29.8816 37.654 28.2986 36.6777 27.3223C35.7014 26.346 34.1184 26.346 33.1421 27.3223L19 41.4645L4.85786 27.3223C3.88155 26.346 2.29864 26.346 1.32233 27.3223C0.34602 28.2986 0.34602 29.8816 1.32233 30.8579L17.2322 46.7678ZM16.5 41.25V45H21.5V41.25H16.5Z",fill:"white"}),r.createElement("path",{id:"TopArrow",opacity:"0.8",d:"M17.2322 20.5178C18.2085 21.4941 19.7915 21.4941 20.7678 20.5178L36.6777 4.60786C37.654 3.63155 37.654 2.04864 36.6777 1.07233C35.7014 0.0960197 34.1184 0.0960197 33.1421 1.07233L19 15.2145L4.85786 1.07233C3.88155 0.0960197 2.29864 0.0960197 1.32233 1.07233C0.34602 2.04864 0.34602 3.63155 1.32233 4.60786L17.2322 20.5178ZM16.5 15V18.75H21.5V15H16.5Z",fill:"white"}))))},d=function(e){var t=e.pageTitle,a=e.pageDesc,n=e.children;return r.createElement("div",{className:"container"},r.createElement("div",{className:"noise"}),r.createElement("title",null,t),r.createElement(s,{className:"nav-bar"}),r.createElement("main",null,r.createElement("div",{className:"front-page"},r.createElement("div",null),r.createElement("div",null,r.createElement("h1",{className:"heading"},t),r.createElement("h2",{className:"sub-heading"},a)),r.createElement(l,null)),n,r.createElement("div",{id:"pageBottom"})))}},3298:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/me/static/a8b33a5afe780cf5d66cd8e5666c6a6b/fc4a5/myIcon.png","srcSet":"/me/static/a8b33a5afe780cf5d66cd8e5666c6a6b/c27bc/myIcon.png 11w,\\n/me/static/a8b33a5afe780cf5d66cd8e5666c6a6b/4b259/myIcon.png 21w,\\n/me/static/a8b33a5afe780cf5d66cd8e5666c6a6b/fc4a5/myIcon.png 42w,\\n/me/static/a8b33a5afe780cf5d66cd8e5666c6a6b/74bab/myIcon.png 84w","sizes":"(min-width: 42px) 42px, 100vw"},"sources":[{"srcSet":"/me/static/a8b33a5afe780cf5d66cd8e5666c6a6b/32806/myIcon.webp 11w,\\n/me/static/a8b33a5afe780cf5d66cd8e5666c6a6b/8bc71/myIcon.webp 21w,\\n/me/static/a8b33a5afe780cf5d66cd8e5666c6a6b/544ae/myIcon.webp 42w,\\n/me/static/a8b33a5afe780cf5d66cd8e5666c6a6b/c5e44/myIcon.webp 84w","type":"image/webp","sizes":"(min-width: 42px) 42px, 100vw"}]},"width":42,"height":42}')}}]);
//# sourceMappingURL=commons-7ea820c86d13f8793764.js.map