!function(e){function t(r){if(n[r])return n[r].exports;var s=n[r]={exports:{},id:r,loaded:!1};return e[r].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var n={};t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";n(8),n(9),n(10)},,,,,,,,function(e,t){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t,r){function s(e,t){return(void 0===e?"undefined":n(e))===t}function i(e,t){return!!~(""+e).indexOf(t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):y?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function o(e,n,r,s){var i,o,c,l,u="modernizr",f=a("div"),d=function(){var e=t.body;return e||((e=a(y?"svg":"body")).fake=!0),e}();if(parseInt(r,10))for(;r--;)(c=a("div")).id=s?s[r]:u+(r+1),f.appendChild(c);return i=a("style"),i.type="text/css",i.id="s"+u,(d.fake?d:f).appendChild(i),d.appendChild(f),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),f.id=u,d.fake&&(d.style.background="",d.style.overflow="hidden",l=A.style.overflow,A.style.overflow="hidden",A.appendChild(d)),o=n(f,e),d.fake?(d.parentNode.removeChild(d),A.style.overflow=l,A.offsetHeight):f.parentNode.removeChild(f),!!o}function c(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function l(t,n){var s=t.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(c(t[s]),n))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];s--;)i.push("("+c(t[s])+":"+n+")");return i=i.join(" or "),o("@supports ("+i+") { #modernizr { position: absolute; } }",function(t){return"absolute"==function(t,n,r){var s;if("getComputedStyle"in e){s=getComputedStyle.call(e,t,n);var i=e.console;null!==s?r&&(s=s.getPropertyValue(r)):i&&i[i.error?"error":"log"].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else s=!n&&t.currentStyle&&t.currentStyle[r];return s}(t,null,"position")})}return r}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function f(e,t){return function(){return e.apply(t,arguments)}}function d(e,t,n,o,c){var d=e.charAt(0).toUpperCase()+e.slice(1),p=(e+" "+z.join(d+" ")+d).split(" ");return s(t,"string")||s(t,"undefined")?function(e,t,n,o){function c(){d&&(delete w.style,delete w.modElem)}if(o=!s(o,"undefined")&&o,!s(n,"undefined")){var f=l(e,n);if(!s(f,"undefined"))return f}for(var d,p,m,h,g,v=["modernizr","tspan","samp"];!w.style&&v.length;)d=!0,w.modElem=a(v.shift()),w.style=w.modElem.style;for(m=e.length,p=0;p<m;p++)if(h=e[p],g=w.style[h],i(h,"-")&&(h=u(h)),w.style[h]!==r){if(o||s(n,"undefined"))return c(),"pfx"!=t||h;try{w.style[h]=n}catch(e){}if(w.style[h]!=g)return c(),"pfx"!=t||h}return c(),!1}(p,t,o,c):(p=(e+" "+C.join(d+" ")+d).split(" "),function(e,t,n){var r;for(var i in e)if(e[i]in t)return!1===n?e[i]:(r=t[e[i]],s(r,"function")?f(r,n||t):r);return!1}(p,t,n))}function p(e,t,n){return d(e,r,r,t,n)}var m=[],h={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){m.push({name:e,fn:t,options:n})},addAsyncTest:function(e){m.push({name:null,fn:e})}},g=function(){};g.prototype=h,g=new g;var v=[],A=t.documentElement,y="svg"===A.nodeName.toLowerCase(),z=h._config.usePrefixes?"Moz O ms Webkit".split(" "):[];h._cssomPrefixes=z;var b={elem:a("modernizr")};g._q.push(function(){delete b.elem});var w={style:b.elem.style};g._q.unshift(function(){delete w.style});var C=h._config.usePrefixes?"Moz O ms Webkit".toLowerCase().split(" "):[];h._domPrefixes=C,h.testAllProps=d,h.testAllProps=p,g.addTest("flexbox",p("flexBasis","1px",!0)),g.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),function(){var e,t,n,r,i,a;for(var o in m)if(m.hasOwnProperty(o)){if(e=[],(t=m[o]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=s(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)1===(a=e[i].split(".")).length?g[a[0]]=r:(!g[a[0]]||g[a[0]]instanceof Boolean||(g[a[0]]=new Boolean(g[a[0]])),g[a[0]][a[1]]=r),v.push((r?"":"no-")+a.join("-"))}}(),function(e){var t=A.className,n=g._config.classPrefix||"";if(y&&(t=t.baseVal),g._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}g._config.enableClasses&&(t+=" "+n+e.join(" "+n),y?A.className.baseVal=t:A.className=t)}(v),delete h.addTest,delete h.addAsyncTest;for(var S=0;S<g._q.length;S++)g._q[S]();e.Modernizr=g}(window,document)},function(e,t,n){var r;!function(e){var t=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var t,n=document.createElement("source"),r=function(e){var t,r,s=e.parentNode;"PICTURE"===s.nodeName.toUpperCase()?(t=n.cloneNode(),s.insertBefore(t,s.firstElementChild),setTimeout(function(){s.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,r=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=r}))},s=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)r(t[e])},i=function(){clearTimeout(t),t=setTimeout(s,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),o=function(){i(),a&&a.addListener&&a.addListener(i)};return n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?o():document.addEventListener("DOMContentLoaded",o),i}())}(window),function(s,i,a){"use strict";function o(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function c(e,t,n,r){var s,i,a;return"saveData"===C.algorithm?e>2.7?a=n+1:(i=(t-n)*(s=Math.pow(e-.6,1.5)),r&&(i+=.1*s),a=e+i):a=n>1?Math.sqrt(e*t):e,a>n}function l(e,t){return e.res-t.res}function u(e,t){var n,r,s;if(e&&t)for(s=m.parseSet(t),e=m.makeUrl(e),n=0;n<s.length;n++)if(e===m.makeUrl(s[n].url)){r=s[n];break}return r}i.createElement("picture");var f,d,p,m={},h=!1,g=function(){},v=i.createElement("img"),A=v.getAttribute,y=v.setAttribute,z=v.removeAttribute,b=i.documentElement,w={},C={algorithm:""},S=navigator.userAgent,E=/rident/.test(S)||/ecko/.test(S)&&S.match(/rv\:(\d+)/)&&RegExp.$1>35,x="currentSrc",T=/\s+\+?\d+(e\d+)?w/,M=/(\([^)]+\))?\s*(.+)/,L=s.picturefillCFG,P="font-size:100%!important;",R=!0,N={},_={},B=s.devicePixelRatio,k={px:1,in:96},W=i.createElement("a"),$=!1,D=/^[ \t\n\r\u000c]+/,I=/^[, \t\n\r\u000c]+/,U=/^[^ \t\n\r\u000c]+/,O=/[,]+$/,F=/^\d+$/,H=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,j=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},q=function(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n]}},Q=function(){var e=/^([\d\.]+)(em|vw|px)$/,t=q(function(e){return"return "+function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(n,r){var s;if(!(n in N))if(N[n]=!1,r&&(s=n.match(e)))N[n]=s[1]*k[s[2]];else try{N[n]=new Function("e",t(n))(k)}catch(e){}return N[n]}}(),G=function(e,t){return e.w?(e.cWidth=m.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},V=function(e){if(h){var t,n,r,s=e||{};if(s.elements&&1===s.elements.nodeType&&("IMG"===s.elements.nodeName.toUpperCase()?s.elements=[s.elements]:(s.context=s.elements,s.elements=null)),t=s.elements||m.qsa(s.context||i,s.reevaluate||s.reselect?m.sel:m.selShort),r=t.length){for(m.setupRun(s),$=!0,n=0;n<r;n++)m.fillImg(t[n],s);m.teardownRun(s)}}};s.console&&console.warn,x in v||(x="src"),w["image/jpeg"]=!0,w["image/gif"]=!0,w["image/png"]=!0,w["image/svg+xml"]=i.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),m.ns=("pf"+(new Date).getTime()).substr(0,9),m.supSrcset="srcset"in v,m.supSizes="sizes"in v,m.supPicture=!!s.HTMLPictureElement,m.supSrcset&&m.supPicture&&!m.supSizes&&function(e){v.srcset="data:,a",e.src="data:,a",m.supSrcset=v.complete===e.complete,m.supPicture=m.supSrcset&&m.supPicture}(i.createElement("img")),m.supSrcset&&!m.supSizes?function(){var e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",t=i.createElement("img"),n=function(){2===t.width&&(m.supSizes=!0),d=m.supSrcset&&!m.supSizes,h=!0,setTimeout(V)};t.onload=n,t.onerror=n,t.setAttribute("sizes","9px"),t.srcset=e+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",t.src=e}():h=!0,m.selShort="picture>img,img[srcset]",m.sel=m.selShort,m.cfg=C,m.DPR=B||1,m.u=k,m.types=w,m.setSize=g,m.makeUrl=q(function(e){return W.href=e,W.href}),m.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},m.matchesMedia=function(){return s.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?m.matchesMedia=function(e){return!e||matchMedia(e).matches}:m.matchesMedia=m.mMQ,m.matchesMedia.apply(this,arguments)},m.mMQ=function(e){return!e||Q(e)},m.calcLength=function(e){var t=Q(e,!0)||!1;return t<0&&(t=!1),t},m.supportsType=function(e){return!e||w[e]},m.parseSize=q(function(e){var t=(e||"").match(M);return{media:t&&t[1],length:t&&t[2]}}),m.parseSet=function(e){return e.cands||(e.cands=function(e,t){function n(t){var n,r=t.exec(e.substring(d));if(r)return n=r[0],d+=n.length,n}function r(){var e,n,r,s,o,c,l,u,f,d=!1,m={};for(s=0;s<a.length;s++)c=(o=a[s])[o.length-1],l=o.substring(0,o.length-1),u=parseInt(l,10),f=parseFloat(l),F.test(l)&&"w"===c?((e||n)&&(d=!0),0===u?d=!0:e=u):H.test(l)&&"x"===c?((e||n||r)&&(d=!0),f<0?d=!0:n=f):F.test(l)&&"h"===c?((r||n)&&(d=!0),0===u?d=!0:r=u):d=!0;d||(m.url=i,e&&(m.w=e),n&&(m.d=n),r&&(m.h=r),r||n||e||(m.d=1),1===m.d&&(t.has1x=!0),m.set=t,p.push(m))}function s(){for(n(D),c="",l="in descriptor";;){if(u=e.charAt(d),"in descriptor"===l)if(o(u))c&&(a.push(c),c="",l="after descriptor");else{if(","===u)return d+=1,c&&a.push(c),void r();if("("===u)c+=u,l="in parens";else{if(""===u)return c&&a.push(c),void r();c+=u}}else if("in parens"===l)if(")"===u)c+=u,l="in descriptor";else{if(""===u)return a.push(c),void r();c+=u}else if("after descriptor"===l)if(o(u));else{if(""===u)return void r();l="in descriptor",d-=1}d+=1}}for(var i,a,c,l,u,f=e.length,d=0,p=[];;){if(n(I),d>=f)return p;i=n(U),a=[],","===i.slice(-1)?(i=i.replace(O,""),r()):s()}}(e.srcset,e)),e.cands},m.getEmValue=function(){var e;if(!f&&(e=i.body)){var t=i.createElement("div"),n=b.style.cssText,r=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",b.style.cssText=P,e.style.cssText=P,e.appendChild(t),f=t.offsetWidth,e.removeChild(t),f=parseFloat(f,10),b.style.cssText=n,e.style.cssText=r}return f||16},m.calcListLength=function(e){if(!(e in _)||C.uT){var t=m.calcLength(function(e){function t(e){return!!(l.test(e)&&parseFloat(e)>=0)||!!u.test(e)||"0"===e||"-0"===e||"+0"===e}var n,r,s,i,a,c,l=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,u=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(s=(r=function(e){function t(){s&&(i.push(s),s="")}function n(){i[0]&&(a.push(i),i=[])}for(var r,s="",i=[],a=[],c=0,l=0,u=!1;;){if(""===(r=e.charAt(l)))return t(),n(),a;if(u){if("*"===r&&"/"===e[l+1]){u=!1,l+=2,t();continue}l+=1}else{if(o(r)){if(e.charAt(l-1)&&o(e.charAt(l-1))||!s){l+=1;continue}if(0===c){t(),l+=1;continue}r=" "}else if("("===r)c+=1;else if(")"===r)c-=1;else{if(","===r){t(),n(),l+=1;continue}if("/"===r&&"*"===e.charAt(l+1)){u=!0,l+=2;continue}}s+=r,l+=1}}}(e)).length,n=0;n<s;n++)if(i=r[n],a=i[i.length-1],t(a)){if(c=a,i.pop(),0===i.length)return c;if(i=i.join(" "),m.matchesMedia(i))return c}return"100vw"}(e));_[e]=t||k.width}return _[e]},m.setRes=function(e){var t;if(e)for(var n=0,r=(t=m.parseSet(e)).length;n<r;n++)G(t[n],e.sizes);return t},m.setRes.res=G,m.applySetCandidate=function(e,t){if(e.length){var n,r,s,i,a,o,f,d,p,h=t[m.ns],g=m.DPR;if(o=h.curSrc||t[x],(f=h.curCan||function(e,t,n){var r;return!n&&t&&(n=(n=e[m.ns].sets)&&n[n.length-1]),(r=u(t,n))&&(t=m.makeUrl(t),e[m.ns].curSrc=t,e[m.ns].curCan=r,r.res||G(r,r.set.sizes)),r}(t,o,e[0].set))&&f.set===e[0].set&&((p=E&&!t.complete&&f.res-.1>g)||(f.cached=!0,f.res>=g&&(a=f))),!a)for(e.sort(l),a=e[(i=e.length)-1],r=0;r<i;r++)if((n=e[r]).res>=g){a=e[s=r-1]&&(p||o!==m.makeUrl(n.url))&&c(e[s].res,n.res,g,e[s].cached)?e[s]:n;break}a&&(d=m.makeUrl(a.url),h.curSrc=d,h.curCan=a,d!==o&&m.setSrc(t,a),m.setSize(t))}},m.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},m.getSet=function(e){var t,n,r,s=!1,i=e[m.ns].sets;for(t=0;t<i.length&&!s;t++)if((n=i[t]).srcset&&m.matchesMedia(n.media)&&(r=m.supportsType(n.type))){"pending"===r&&(n=r),s=n;break}return s},m.parseSets=function(e,t,n){var r,s,i,a,o=t&&"PICTURE"===t.nodeName.toUpperCase(),c=e[m.ns];(void 0===c.src||n.src)&&(c.src=A.call(e,"src"),c.src?y.call(e,"data-pfsrc",c.src):z.call(e,"data-pfsrc")),(void 0===c.srcset||n.srcset||!m.supSrcset||e.srcset)&&(r=A.call(e,"srcset"),c.srcset=r,a=!0),c.sets=[],o&&(c.pic=!0,function(e,t){var n,r,s,i,a=e.getElementsByTagName("source");for(n=0,r=a.length;n<r;n++)(s=a[n])[m.ns]=!0,(i=s.getAttribute("srcset"))&&t.push({srcset:i,media:s.getAttribute("media"),type:s.getAttribute("type"),sizes:s.getAttribute("sizes")})}(t,c.sets)),c.srcset?(s={srcset:c.srcset,sizes:A.call(e,"sizes")},c.sets.push(s),(i=(d||c.src)&&T.test(c.srcset||""))||!c.src||u(c.src,s)||s.has1x||(s.srcset+=", "+c.src,s.cands.push({url:c.src,d:1,set:s}))):c.src&&c.sets.push({srcset:c.src,sizes:null}),c.curCan=null,c.curSrc=void 0,c.supported=!(o||s&&!m.supSrcset||i&&!m.supSizes),a&&m.supSrcset&&!c.supported&&(r?(y.call(e,"data-pfsrcset",r),e.srcset=""):z.call(e,"data-pfsrcset")),c.supported&&!c.srcset&&(!c.src&&e.src||e.src!==m.makeUrl(c.src))&&(null===c.src?e.removeAttribute("src"):e.src=c.src),c.parsed=!0},m.fillImg=function(e,t){var n,r=t.reselect||t.reevaluate;e[m.ns]||(e[m.ns]={}),n=e[m.ns],(r||n.evaled!==p)&&(n.parsed&&!t.reevaluate||m.parseSets(e,e.parentNode,t),n.supported?n.evaled=p:function(e){var t,n=m.getSet(e),r=!1;"pending"!==n&&(r=p,n&&(t=m.setRes(n),m.applySetCandidate(t,e))),e[m.ns].evaled=r}(e))},m.setupRun=function(){$&&!R&&B===s.devicePixelRatio||(R=!1,B=s.devicePixelRatio,N={},_={},m.DPR=B||1,k.width=Math.max(s.innerWidth||0,b.clientWidth),k.height=Math.max(s.innerHeight||0,b.clientHeight),k.vw=k.width/100,k.vh=k.height/100,p=[k.height,k.width,B].join("-"),k.em=m.getEmValue(),k.rem=k.em)},m.supPicture?(V=g,m.fillImg=g):function(){var e,t=s.attachEvent?/d$|^c/:/d$|^c|^i/,n=function(){var s=i.readyState||"";r=setTimeout(n,"loading"===s?200:999),i.body&&(m.fillImgs(),(e=e||t.test(s))&&clearTimeout(r))},r=setTimeout(n,i.body?9:99),a=b.clientHeight;j(s,"resize",function(e,t){var n,r,s=function(){var i=new Date-r;i<t?n=setTimeout(s,t-i):(n=null,e())};return function(){r=new Date,n||(n=setTimeout(s,t))}}(function(){R=Math.max(s.innerWidth||0,b.clientWidth)!==k.width||b.clientHeight!==a,a=b.clientHeight,R&&m.fillImgs()},99)),j(i,"readystatechange",n)}(),m.picturefill=V,m.fillImgs=V,m.teardownRun=g,V._=m,s.picturefillCFG={pf:m,push:function(e){var t=e.shift();"function"==typeof m[t]?m[t].apply(m,e):(C[t]=e[0],$&&m.fillImgs({reselect:!0}))}};for(;L&&L.length;)s.picturefillCFG.push(L.shift());s.picturefill=V,"object"==typeof e&&"object"==typeof e.exports?e.exports=V:void 0!==(r=function(){return V}.call(t,n,t,e))&&(e.exports=r),m.supPicture||(w["image/webp"]=function(e,t){var n=new s.Image;return n.onerror=function(){w[e]=!1,V()},n.onload=function(){w[e]=1===n.width,V()},n.src=t,"pending"}("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document)},function(e,t){!function(t,n){var r=function(e,t){"use strict";if(!t.getElementsByClassName)return;var n,r=t.documentElement,s=e.Date,i=e.HTMLPictureElement,a=e.addEventListener,o=e.setTimeout,c=e.requestAnimationFrame||o,l=e.requestIdleCallback,u=/^picture$/i,f=["load","error","lazyincluded","_lazyloaded"],d={},p=Array.prototype.forEach,m=function(e,t){return d[t]||(d[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),d[t].test(e.getAttribute("class")||"")&&d[t]},h=function(e,t){m(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},g=function(e,t){var n;(n=m(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))},v=function(e,t,n){var r=n?"addEventListener":"removeEventListener";n&&v(e,t),f.forEach(function(n){e[r](n,t)})},A=function(e,n,r,s,i){var a=t.createEvent("CustomEvent");return a.initCustomEvent(n,!s,!i,r||{}),e.dispatchEvent(a),a},y=function(t,r){var s;!i&&(s=e.picturefill||n.pf)?s({reevaluate:!0,elements:[t]}):r&&r.src&&(t.src=r.src)},z=function(e,t){return(getComputedStyle(e,null)||{})[t]},b=function(e,t,r){for(r=r||e.offsetWidth;r<n.minSize&&t&&!e._lazysizesWidth;)r=t.offsetWidth,t=t.parentNode;return r},w=function(){var e,n,r=[],s=function(){var t;for(e=!0,n=!1;r.length;)(t=r.shift())[0].apply(t[1],t[2]);e=!1},i=function(i){e?i.apply(this,arguments):(r.push([i,this,arguments]),n||(n=!0,(t.hidden?o:c)(s)))};return i._lsFlush=s,i}(),C=function(e,t){return t?function(){w(e)}:function(){var t=this,n=arguments;w(function(){e.apply(t,n)})}},S=function(e){var t,n=0,r=666,i=function(){t=!1,n=s.now(),e()},a=l?function(){l(i,{timeout:r}),666!==r&&(r=666)}:C(function(){o(i)},!0);return function(e){var i;(e=!0===e)&&(r=44),t||(t=!0,(i=125-(s.now()-n))<0&&(i=0),e||i<9&&l?a():o(a,i))}},E=function(e){var t,n,r=function(){t=null,e()},i=function(){var e=s.now()-n;e<99?o(i,99-e):(l||r)(r)};return function(){n=s.now(),t||(t=o(i,99))}},x=function(){var i,c,l,f,d,b,x,M,L,P,R,N,_,B,k,W=/^img$/i,$=/^iframe$/i,D="onscroll"in e&&!/glebot/.test(navigator.userAgent),I=0,U=0,O=-1,F=function(e){U--,e&&e.target&&v(e.target,F),(!e||U<0||!e.target)&&(U=0)},H=function(e,n){var s,i=e,a="hidden"==z(t.body,"visibility")||"hidden"!=z(e,"visibility");for(L-=n,N+=n,P-=n,R+=n;a&&(i=i.offsetParent)&&i!=t.body&&i!=r;)(a=(z(i,"opacity")||1)>0)&&"visible"!=z(i,"overflow")&&(s=i.getBoundingClientRect(),a=R>s.left&&P<s.right&&N>s.top-1&&L<s.bottom+1);return a},j=function(){var e,s,a,o,u,f,p,m,h;if((d=n.loadMode)&&U<8&&(e=i.length)){s=0,O++,null==B&&("expand"in n||(n.expand=r.clientHeight>500&&r.clientWidth>500?500:370),_=n.expand,B=_*n.expFactor),I<B&&U<1&&O>2&&d>2&&!t.hidden?(I=B,O=0):I=d>1&&O>1&&U<6?_:0;for(;s<e;s++)if(i[s]&&!i[s]._lazyRace)if(D)if((m=i[s].getAttribute("data-expand"))&&(f=1*m)||(f=I),h!==f&&(x=innerWidth+f*k,M=innerHeight+f,p=-1*f,h=f),a=i[s].getBoundingClientRect(),(N=a.bottom)>=p&&(L=a.top)<=M&&(R=a.right)>=p*k&&(P=a.left)<=x&&(N||R||P||L)&&(l&&U<3&&!m&&(d<3||O<4)||H(i[s],f))){if(X(i[s]),u=!0,U>9)break}else!u&&l&&!o&&U<4&&O<4&&d>2&&(c[0]||n.preloadAfterLoad)&&(c[0]||!m&&(N||R||P||L||"auto"!=i[s].getAttribute(n.sizesAttr)))&&(o=c[0]||i[s]);else X(i[s]);o&&!u&&X(o)}},q=S(j),Q=function(e){h(e.target,n.loadedClass),g(e.target,n.loadingClass),v(e.target,V)},G=C(Q),V=function(e){G({target:e.target})},J=function(e){var t,r,s=e.getAttribute(n.srcsetAttr);(t=n.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),s&&e.setAttribute("srcset",s),t&&((r=e.parentNode).insertBefore(e.cloneNode(),e),r.removeChild(e))},K=C(function(e,t,r,s,i){var a,c,l,d,m,z;(m=A(e,"lazybeforeunveil",t)).defaultPrevented||(s&&(r?h(e,n.autosizesClass):e.setAttribute("sizes",s)),c=e.getAttribute(n.srcsetAttr),a=e.getAttribute(n.srcAttr),i&&(l=e.parentNode,d=l&&u.test(l.nodeName||"")),z=t.firesLoad||"src"in e&&(c||a||d),m={target:e},z&&(v(e,F,!0),clearTimeout(f),f=o(F,2500),h(e,n.loadingClass),v(e,V,!0)),d&&p.call(l.getElementsByTagName("source"),J),c?e.setAttribute("srcset",c):a&&!d&&($.test(e.nodeName)?function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}}(e,a):e.src=a),(c||d)&&y(e,{src:a})),w(function(){e._lazyRace&&delete e._lazyRace,g(e,n.lazyClass),z&&!e.complete||(z?F(m):U--,Q(m))})}),X=function(e){var t,r=W.test(e.nodeName),s=r&&(e.getAttribute(n.sizesAttr)||e.getAttribute("sizes")),i="auto"==s;(!i&&l||!r||!e.src&&!e.srcset||e.complete||m(e,n.errorClass))&&(t=A(e,"lazyunveilread").detail,i&&T.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,U++,K(e,t,i,s,r))},Z=function(){if(!l)if(s.now()-b<999)o(Z,999);else{var e=E(function(){n.loadMode=3,q()});l=!0,n.loadMode=3,q(),a("scroll",function(){3==n.loadMode&&(n.loadMode=2),e()},!0)}};return{_:function(){b=s.now(),i=t.getElementsByClassName(n.lazyClass),c=t.getElementsByClassName(n.lazyClass+" "+n.preloadClass),k=n.hFac,a("scroll",q,!0),a("resize",q,!0),e.MutationObserver?new MutationObserver(q).observe(r,{childList:!0,subtree:!0,attributes:!0}):(r.addEventListener("DOMNodeInserted",q,!0),r.addEventListener("DOMAttrModified",q,!0),setInterval(q,999)),a("hashchange",q,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t.addEventListener(e,q,!0)}),/d$|^c/.test(t.readyState)?Z():(a("load",Z),t.addEventListener("DOMContentLoaded",q),o(Z,2e4)),i.length?j():q()},checkElems:q,unveil:X}}(),T=function(){var e,r=C(function(e,t,n,r){var s,i,a;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),u.test(t.nodeName||""))for(s=t.getElementsByTagName("source"),i=0,a=s.length;i<a;i++)s[i].setAttribute("sizes",r);n.detail.dataAttr||y(e,n.detail)}),s=function(e,t,n){var s,i=e.parentNode;i&&(n=b(e,i,n),(s=A(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=s.detail.width)&&n!==e._lazysizesWidth&&r(e,i,s,n))},i=E(function(){var t,n=e.length;if(n)for(t=0;t<n;t++)s(e[t])});return{_:function(){e=t.getElementsByClassName(n.autosizesClass),a("resize",i)},checkElems:i,updateElem:s}}(),M=function(){M.i||(M.i=!0,T._(),x._())};return function(){var t,r={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2};n=e.lazySizesConfig||e.lazysizesConfig||{};for(t in r)t in n||(n[t]=r[t]);e.lazySizesConfig=n,o(function(){n.init&&M()})}(),{cfg:n,autoSizer:T,loader:x,init:M,uP:y,aC:h,rC:g,hC:m,fire:A,gW:b,rAF:w}}(t,t.document);t.lazySizes=r,"object"==typeof e&&e.exports&&(e.exports=r)}(window)}]);