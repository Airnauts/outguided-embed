parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"IuG6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.EXAMPLE_TRIP=exports.EMBED_SCRIPT=void 0;var e='<script async src="'.concat("https://embed.out.gd",'/embed.js"><\/script>');exports.EMBED_SCRIPT=e;var t="https://www.outguided.com/experiences/24-hours-in-browns-canyon-deluxe-overnight-camping-experience-like-nothing-out-there-granite";exports.EXAMPLE_TRIP=t;
},{}],"SKGc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getSnippetLink=exports.getId=exports.escapeRegExp=void 0;var t=require("src/config/Widgets"),e=function(){return(e=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},r=function(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")};exports.escapeRegExp=r;var o=function(r,o,n){void 0===o&&(o="Powered by outguided.com");var c=void 0===n?{}:n,a=c.data,i=void 0===a?{}:a,p=c.withEmbedCode,s=Object.keys(e(e({},i),{widget:""})).map(function(t){return" data-og-".concat(t).concat(i[t]?'="'.concat(i[t],'"'):"")}).join("");return'<a href="'.concat(r,'"').concat(s,">").concat(o,"</a>").concat(p?t.EMBED_SCRIPT:"")};exports.getSnippetLink=o;var n=function(){return String(Date.now().toString(32)+Math.random().toString(16)).replace(/\./g,"")};exports.getId=n;
},{"src/config/Widgets":"IuG6"}],"W1cr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.tripLink=exports.hostLink=exports.getTripSlugFromUrl=exports.getHostSlugFromUrl=exports.getExternalUrl=exports.getEmbedUrl=exports.getEmbedSnippetUrl=exports.getEmbedSnippetPath=exports.getEmbedPath=exports.TRIP_PAGE=exports.HOST_PAGE=void 0;var e=require("src/utils/helper"),t="/experiences/:slug";exports.TRIP_PAGE=t;var r="/guides/:slug";exports.HOST_PAGE=r;var o=function(r){var o;return null===(o=r.match(new RegExp("^".concat((0,e.escapeRegExp)(i())).concat(t.replace(":slug","([^/?]+)")))))||void 0===o?void 0:o[1]};exports.getTripSlugFromUrl=o;var n=function(t){var o;return null===(o=t.match(new RegExp("^".concat((0,e.escapeRegExp)(i())).concat(r.replace(":slug","([^/?]+)")))))||void 0===o?void 0:o[1]};exports.getHostSlugFromUrl=n;var c=function(e){return t.replace(":slug",null!=e?e:"")};exports.tripLink=c;var p=function(e){return r.replace(":slug",null!=e?e:"")};exports.hostLink=p;var s=function(e){return"/embed".concat(e)};exports.getEmbedPath=s;var a=function(e){return"/code".concat(e)};exports.getEmbedSnippetPath=a;var u=function(e){return"".concat("https://embed.out.gd").concat(e?"/#".concat(s(e)):"")};exports.getEmbedUrl=u;var l=function(e){return"".concat("https://embed.out.gd").concat(e?"/#".concat(a(e)):"")};exports.getEmbedSnippetUrl=l;var i=function(e){return void 0===e&&(e=""),"".concat("https://www.outguided.com").concat(e)};exports.getExternalUrl=i;
},{"src/utils/helper":"SKGc"}],"OltC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.unregister=exports.send=exports.register=void 0;var e=function(e,r){var t=null!=r?r:{},s=t.target,n=t.targetOrigin,o=void 0===n?"*":n;(s||window).postMessage(e,o)};exports.send=e;var r=function(e){window.addEventListener("message",e,!1)};exports.register=r;var t=function(e){window.removeEventListener("message",e,!1)};exports.unregister=t;
},{}],"Hhy2":[function(require,module,exports) {
"use strict";var e=require("./config/Routes"),t=require("./utils/helper"),r=require("./utils/messenger"),i={border:"none",width:"0px",height:"0px","overflow-x":"hidden","overflow-y":"hidden",display:"block"},n={scrolling:"no",frameborder:"0",allowtransparency:"true",allowfullscreen:"true"};!function(a){var l={processedWidgets:[],listenerCallbacks:[],listenerRegistered:!1,init:function(){this.registerListener(),document.querySelectorAll('a[data-og-widget][href^="'.concat((0,e.getExternalUrl)(),'"]')).forEach(this.initializeWidget.bind(this))},registerListener:function(){var e=this;this.listenerRegistered||((0,r.register)(function(t){e.listenerCallbacks.forEach(function(e){return e(t)})}),this.listenerRegistered=!0)},addListenerCallback:function(e){this.listenerCallbacks.push(e)},initializeWidget:function(e){if(!this.processedWidgets.includes(e)){this.processedWidgets.push(e);var t=this.getWidgetCallbackUrl(e);if(t){var r=this.createIframe(t);r.onload=function(){e.remove()},e.dataset.ogCode&&(r.allow=""),e.after(r),this.addListenerCallback(this.getWidgetListenerCallback(r))}}},getWidgetCallbackUrl:function(t){var r,i=t.href,n=t.dataset.ogCode;return(0,e.getTripSlugFromUrl)(i)?r=(0,e.tripLink)((0,e.getTripSlugFromUrl)(i)):(0,e.getHostSlugFromUrl)(i)&&(r=(0,e.hostLink)((0,e.getHostSlugFromUrl)(i))),r?void 0!==n?(0,e.getEmbedSnippetUrl)(r):(0,e.getEmbedUrl)(r):null},createIframe:function(e){var r;try{r=document.createElement('<iframe name="'+(0,t.getId)()+'" allow="clipboard-write"></iframe>')}catch(a){(r=document.createElement("iframe")).name=(0,t.getId)()}return r.src=e,Object.keys(n).forEach(function(e){return r.setAttribute(e,n[e])}),Object.keys(i).forEach(function(e){return r.style.setProperty(e,i[e])}),r},getWidgetListenerCallback:function(t){return function(r){var i=r,n=i.origin,l=i.data,s=l.type,o=l.name;if(console.log(r),(0,e.getEmbedUrl)().startsWith(n)&&t.name===o)switch(s){case"size":var c=r.data,d=c.width,g=c.height;t.style.height=g+"px",t.style.width=d+"px";break;case"copy":var u=r.data.text;console.log("copy text",u),a.navigator.clipboard.writeText(u);break;default:console.log(r.data)}}}};a.OGWidgets||(l.init(),a.onload=function(){return l.init()},a.OGWidgets=l)}(window);
},{"./config/Routes":"W1cr","./utils/helper":"SKGc","./utils/messenger":"OltC"}]},{},["Hhy2"], null)
//# sourceMappingURL=embed.2a0e7d38.js.map