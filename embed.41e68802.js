parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"W1cr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.tripLink=exports.hostLink=exports.getExternalLink=exports.getEmbedPath=exports.TRIP_PAGE=exports.HOST_PAGE=void 0;var e="/experiences/:slug";exports.TRIP_PAGE=e;var t="/guides/:slug";exports.HOST_PAGE=t;var r=function(t){return e.replace(":slug",t)};exports.tripLink=r;var o=function(e){return t.replace(":slug",e)};exports.hostLink=o;var n=function(e){return"/embed".concat(e)};exports.getEmbedPath=n;var s=function(e){return void 0===e&&(e=""),"".concat("https://www.outguided.com").concat(e)};exports.getExternalLink=s;
},{}],"Hhy2":[function(require,module,exports) {
"use strict";var t=require("./config/Routes");document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll("[data-og-widget]:not([data-og-initialized])").forEach(function(e){e.setAttribute("data-og-initialized","1");var o=e.dataset,i=o.ogWidget,n=o.ogTrip,l=o.ogGuide;if(i){var d;switch(i){case"trip":d=n&&(0,t.getExternalLink)((0,t.getEmbedPath)((0,t.tripLink)(n)));break;case"guide":d=l&&(0,t.getExternalLink)((0,t.getEmbedPath)((0,t.hostLink)(l)))}if(d){console.log(d);var r=e.getAttribute("href");(null==r?void 0:r.startsWith((0,t.getExternalLink)()))||console.log("external link dont match: ",null==r?void 0:r.startsWith((0,t.getExternalLink)()));var a=document.createElement("iframe");a.src=d,a.style.border="none",a.style.overflowX="hidden",a.style.overflowY="hidden",a.style.display="block",a.onload=function(){var t,e,o,i=null===(t=null==a?void 0:a.contentWindow)||void 0===t?void 0:t.document.body.scrollHeight,n=null===(o=null===(e=null==a?void 0:a.contentWindow)||void 0===e?void 0:e.document.getElementById("root"))||void 0===o?void 0:o.children[0].scrollWidth;i&&(a.style.height=i+1+"px"),n&&(a.style.width=n+3+"px")},e.after(a),e.remove()}}})});
},{"./config/Routes":"W1cr"}]},{},["Hhy2"], null)
//# sourceMappingURL=embed.41e68802.js.map