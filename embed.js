parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"W1cr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.tripLink=exports.hostLink=exports.getExternalUrl=exports.getEmbedUrl=exports.getEmbedPath=exports.TRIP_PAGE=exports.HOST_PAGE=void 0;var t="/experiences/:slug";exports.TRIP_PAGE=t;var e="/guides/:slug";exports.HOST_PAGE=e;var r=function(e){return t.replace(":slug",e)};exports.tripLink=r;var o=function(t){return e.replace(":slug",t)};exports.hostLink=o;var n=function(t){return"/embed".concat(t)};exports.getEmbedPath=n;var s=function(t){return"".concat("https://embed.out.gd").concat(t?"/#".concat(n(t)):"")};exports.getEmbedUrl=s;var c=function(t){return void 0===t&&(t=""),"".concat("https://www.outguided.com").concat(t)};exports.getExternalUrl=c;
},{}],"OltC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.unregister=exports.sendToParent=exports.send=exports.register=void 0;var e=function(e,r){void 0===r&&(r={targetOrigin:"*"}),window.parent.postMessage(e,r.targetOrigin)};exports.sendToParent=e;var r=function(e,r){void 0===r&&(r={targetOrigin:"*"}),window.postMessage(e,r.targetOrigin)};exports.send=r;var t=function(e){window.addEventListener("message",e,!1)};exports.register=t;var s=function(e){window.removeEventListener("message",e,!1)};exports.unregister=s;
},{}],"Hhy2":[function(require,module,exports) {
"use strict";var e=require("./config/Routes"),t=require("./utils/messenger");!function(i){var s={processedWidgets:[],listeners:[],listenersRegistered:!1,addListener:function(e){this.listeners.push(e)},registerListeners:function(){var e=this;this.listenersRegistered||((0,t.register)(function(t){e.listeners.forEach(function(e){return e(t)})}),this.listenersRegistered=!0)},isValidWidgetElement:function(t){var i;return!(null===(i=t.getAttribute("href"))||void 0===i||!i.startsWith((0,e.getExternalUrl)()))&&!!t.dataset.ogWidget},getWidgetListener:function(t,i){return function(t){if((0,e.getEmbedUrl)().startsWith(t.origin))switch(t.data.type){case"size":var s=t.data,r=s.width,n=s.height;i.style.height=n+"px",i.style.width=r+"px";break;case"other":console.log("other event")}}},getWidgetCallbackUrl:function(t,i){var s,r=i.trip,n=i.guide;switch(t){case"trip":s=r&&(0,e.getEmbedUrl)((0,e.tripLink)(r));break;case"guide":s=n&&(0,e.getEmbedUrl)((0,e.hostLink)(n))}return s},getWidgetsToInitialize:function(){var e=this;return Array.from(document.querySelectorAll("[data-og-widget]")).filter(function(t){return!e.processedWidgets.includes(t)})},initializeWidget:function(e){if(this.processedWidgets.push(e),this.isValidWidgetElement(e)){var t=e.dataset,i=t.ogWidget,s=t.ogTrip,r=t.ogGuide,n=this.getWidgetCallbackUrl(i,{trip:s,guide:r});if(n){var d=document.createElement("iframe");d.src=n,d.style.border="none",d.style.width="0px",d.style.height="0px",d.style.overflowX="hidden",d.style.overflowY="hidden",d.style.display="block",this.addListener(this.getWidgetListener(e,d)),e.after(d),e.style.display="none"}}},init:function(){this.registerListeners(),this.getWidgetsToInitialize().forEach(this.initializeWidget.bind(this))}};i.OGWidgets||(i.onload=function(){return s.init()},i.OGWidgets=s)}(window);
},{"./config/Routes":"W1cr","./utils/messenger":"OltC"}]},{},["Hhy2"], null)
//# sourceMappingURL=embed.js.map