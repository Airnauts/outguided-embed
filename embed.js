parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"IuG6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.EXAMPLE_TRIP=exports.EMBED_SCRIPT=void 0;var e='<script async src="'.concat("https://embed.out.gd",'/embed.js"><\/script>');exports.EMBED_SCRIPT=e;var t="https://www.outguided.com/experiences/24-hours-in-browns-canyon-deluxe-overnight-camping-experience-like-nothing-out-there-granite";exports.EXAMPLE_TRIP=t;
},{}],"SKGc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getSnippetLink=exports.getId=exports.escapeRegExp=void 0;var t=require("src/config/Widgets"),e=function(){return(e=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)},r=function(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")};exports.escapeRegExp=r;var o=function(r,o,n){void 0===o&&(o="Powered by outguided.com");var c=void 0===n?{}:n,a=c.data,i=void 0===a?{}:a,p=c.withEmbedCode,s=Object.keys(e(e({},i),{widget:""})).map(function(t){return" data-og-".concat(t).concat(i[t]?'="'.concat(i[t],'"'):"")}).join("");return'<a href="'.concat(r,'"').concat(s,">").concat(o,"</a>").concat(p?t.EMBED_SCRIPT:"")};exports.getSnippetLink=o;var n=function(){return String(Date.now().toString(32)+Math.random().toString(16)).replace(/\./g,"")};exports.getId=n;
},{"src/config/Widgets":"IuG6"}],"W1cr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.tripLink=exports.hostLink=exports.getTripSlugFromUrl=exports.getHostSlugFromUrl=exports.getExternalUrl=exports.getEmbedUrl=exports.getEmbedSnippetUrl=exports.getEmbedSnippetPath=exports.getEmbedPath=exports.TRIP_PAGE=exports.HOST_PAGE=void 0;var e=require("src/utils/helper"),t="/experiences/:slug";exports.TRIP_PAGE=t;var r="/guides/:slug";exports.HOST_PAGE=r;var o=function(r){var o;return null===(o=r.match(new RegExp("^".concat((0,e.escapeRegExp)(i())).concat(t.replace(":slug","([^/?]+)")))))||void 0===o?void 0:o[1]};exports.getTripSlugFromUrl=o;var n=function(t){var o;return null===(o=t.match(new RegExp("^".concat((0,e.escapeRegExp)(i())).concat(r.replace(":slug","([^/?]+)")))))||void 0===o?void 0:o[1]};exports.getHostSlugFromUrl=n;var c=function(e){return t.replace(":slug",null!=e?e:"")};exports.tripLink=c;var p=function(e){return r.replace(":slug",null!=e?e:"")};exports.hostLink=p;var s=function(e){return"/embed".concat(e)};exports.getEmbedPath=s;var a=function(e){return"/code".concat(e)};exports.getEmbedSnippetPath=a;var u=function(e){return"".concat("https://embed.out.gd").concat(e?"/#".concat(s(e)):"")};exports.getEmbedUrl=u;var l=function(e){return"".concat("https://embed.out.gd").concat(e?"/#".concat(a(e)):"")};exports.getEmbedSnippetUrl=l;var i=function(e){return void 0===e&&(e=""),"".concat("https://www.outguided.com").concat(e)};exports.getExternalUrl=i;
},{"src/utils/helper":"SKGc"}],"OltC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.unregister=exports.send=exports.register=void 0;var e=function(e,r){var t=null!=r?r:{},s=t.target,n=t.targetOrigin,o=void 0===n?"*":n;(s||window).postMessage(e,o)};exports.send=e;var r=function(e){window.addEventListener("message",e,!1)};exports.register=r;var t=function(e){window.removeEventListener("message",e,!1)};exports.unregister=t;
},{}],"Hhy2":[function(require,module,exports) {
"use strict";var e=require("./config/Routes"),t=require("./utils/helper"),i=require("./utils/messenger"),r={border:"none",width:"0px",height:"0px","overflow-x":"hidden","overflow-y":"hidden",display:"block"},n={scrolling:"no",frameborder:"0",allowtransparency:"true",allowfullscreen:"true"};!function(s){var l={processedWidgets:[],listenerCallbacks:[],listenerRegistered:!1,init:function(){this.registerListener(),document.querySelectorAll('a[data-og-widget][href^="'.concat((0,e.getExternalUrl)(),'"]')).forEach(this.initializeWidget.bind(this))},registerListener:function(){var e=this;this.listenerRegistered||((0,i.register)(function(t){e.listenerCallbacks.forEach(function(e){return e(t)})}),this.listenerRegistered=!0)},addListenerCallback:function(e){this.listenerCallbacks.push(e)},initializeWidget:function(e){if(!this.processedWidgets.includes(e)){this.processedWidgets.push(e);var t=this.getWidgetCallbackUrl(e);if(t){var i=this.createIframe(t);i.onload=function(){e.remove()},e.after(i),this.addListenerCallback(this.getWidgetListenerCallback(i))}}},getWidgetCallbackUrl:function(t){var i,r=t.href,n=t.dataset.ogCode;return(0,e.getTripSlugFromUrl)(r)?i=(0,e.tripLink)((0,e.getTripSlugFromUrl)(r)):(0,e.getHostSlugFromUrl)(r)&&(i=(0,e.hostLink)((0,e.getHostSlugFromUrl)(r))),i?void 0!==n?(0,e.getEmbedSnippetUrl)(i):(0,e.getEmbedUrl)(i):null},createIframe:function(e){var i=document.createElement("iframe"),s=(0,t.getId)();return i.src=e+"?id="+s,i.id="og-widget-".concat(s),Object.keys(n).forEach(function(e){return i.setAttribute(e,n[e])}),Object.keys(r).forEach(function(e){return i.style.setProperty(e,r[e])}),i},getWidgetListenerCallback:function(t){return function(i){var r=i,n=r.origin,s=r.data,l=s.type,a=s.id;if((0,e.getEmbedUrl)().startsWith(n)&&t.id==="og-widget-".concat(a))switch(l){case"size":var o=i.data,d=o.width,c=o.height;t.style.height=c+"px",t.style.width=d+"px";break;default:console.log(i.data)}}}};s.OGWidgets||(l.init(),s.onload=function(){return l.init()},s.OGWidgets=l)}(window);
},{"./config/Routes":"W1cr","./utils/helper":"SKGc","./utils/messenger":"OltC"}]},{},["Hhy2"], null)
//# sourceMappingURL=embed.js.map