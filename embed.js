parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"SKGc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.escapeRegExp=void 0;var e=function(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")};exports.escapeRegExp=e;
},{}],"W1cr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.tripLink=exports.hostLink=exports.getTripSlugFromUrl=exports.getHostSlugFromUrl=exports.getExternalUrl=exports.getEmbedUrl=exports.getEmbedPath=exports.TRIP_PAGE=exports.HOST_PAGE=void 0;var e=require("src/utils/helper"),t="/experiences/:slug";exports.TRIP_PAGE=t;var r="/guides/:slug";exports.HOST_PAGE=r;var o=function(r){var o;return null===(o=r.match(new RegExp("^".concat((0,e.escapeRegExp)(l())).concat(t.replace(":slug","([^/?]+)")))))||void 0===o?void 0:o[1]};exports.getTripSlugFromUrl=o;var n=function(t){var o;return null===(o=t.match(new RegExp("^".concat((0,e.escapeRegExp)(l())).concat(r.replace(":slug","([^/?]+)")))))||void 0===o?void 0:o[1]};exports.getHostSlugFromUrl=n;var c=function(e){return t.replace(":slug",null!=e?e:"")};exports.tripLink=c;var s=function(e){return r.replace(":slug",null!=e?e:"")};exports.hostLink=s;var p=function(e){return"/embed".concat(e)};exports.getEmbedPath=p;var u=function(e){return"".concat("https://embed.out.gd").concat(e?"/#".concat(p(e)):"")};exports.getEmbedUrl=u;var l=function(e){return void 0===e&&(e=""),"".concat("https://www.outguided.com").concat(e)};exports.getExternalUrl=l;
},{"src/utils/helper":"SKGc"}],"OltC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.unregister=exports.send=exports.register=void 0;var e=function(e,r){var t=null!=r?r:{},s=t.target,n=t.targetOrigin,o=void 0===n?"*":n;(s||window).postMessage(e,o)};exports.send=e;var r=function(e){window.addEventListener("message",e,!1)};exports.register=r;var t=function(e){window.removeEventListener("message",e,!1)};exports.unregister=t;
},{}],"Hhy2":[function(require,module,exports) {
"use strict";var e=require("./config/Routes"),t=require("./utils/messenger"),r={border:"none",width:"0px",height:"0px","overflow-x":"hidden","overflow-y":"hidden",display:"block"},i={scrolling:"no",frameborder:"0",allowtransparency:"true",allowfullscreen:"true"};!function(n){var s={processedWidgets:[],listenerCallbacks:[],listenerRegistered:!1,init:function(){this.registerListener(),document.querySelectorAll('a[data-og-widget][href^="'.concat((0,e.getExternalUrl)(),'"]')).forEach(this.initializeWidget.bind(this))},registerListener:function(){var e=this;this.listenerRegistered||((0,t.register)(function(t){e.listenerCallbacks.forEach(function(e){return e(t)})}),this.listenerRegistered=!0)},addListenerCallback:function(e){this.listenerCallbacks.push(e)},initializeWidget:function(e){if(!this.processedWidgets.includes(e)){this.processedWidgets.push(e);var t=this.getWidgetCallbackUrl(e.href);if(t){var r=this.createIframe();r.src=t,r.onload=function(){e.remove()},e.after(r),this.addListenerCallback(this.getWidgetListenerCallback(r))}}},getWidgetCallbackUrl:function(t){var r;return(0,e.getTripSlugFromUrl)(t)?r=(0,e.getEmbedUrl)((0,e.tripLink)((0,e.getTripSlugFromUrl)(t))):(0,e.getHostSlugFromUrl)(t)&&(r=(0,e.getEmbedUrl)((0,e.hostLink)((0,e.getHostSlugFromUrl)(t)))),r},createIframe:function(){var e=document.createElement("iframe");return Object.keys(i).forEach(function(t){return e.setAttribute(t,i[t])}),Object.keys(r).forEach(function(t){return e.style.setProperty(t,r[t])}),e},getWidgetListenerCallback:function(t){return function(r){if((0,e.getEmbedUrl)().startsWith(r.origin))switch(r.data.type){case"size":var i=r.data,n=i.width,s=i.height;t.style.height=s+"px",t.style.width=n+"px";break;default:console.log(r.data)}}}};n.OGWidgets||(s.init(),n.onload=function(){return s.init()},n.OGWidgets=s)}(window);
},{"./config/Routes":"W1cr","./utils/messenger":"OltC"}]},{},["Hhy2"], null)
//# sourceMappingURL=embed.js.map