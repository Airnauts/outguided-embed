parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"W1cr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.tripLink=exports.hostLink=exports.getExternalUrl=exports.getEmbedUrl=exports.getEmbedPath=exports.TRIP_PAGE=exports.HOST_PAGE=void 0;var t="/experiences/:slug";exports.TRIP_PAGE=t;var e="/guides/:slug";exports.HOST_PAGE=e;var r=function(e){return t.replace(":slug",e)};exports.tripLink=r;var o=function(t){return e.replace(":slug",t)};exports.hostLink=o;var n=function(t){return"/embed".concat(t)};exports.getEmbedPath=n;var s=function(t){return"".concat("https://embed.out.gd").concat(t?"/#".concat(n(t)):"")};exports.getEmbedUrl=s;var c=function(t){return void 0===t&&(t=""),"".concat("https://www.outguided.com").concat(t)};exports.getExternalUrl=c;
},{}],"Hhy2":[function(require,module,exports) {
"use strict";var e=require("./config/Routes");!function(t){t.onload=function(){document.querySelectorAll("[data-og-widget]:not([data-og-initialized])").forEach(function(i){i.setAttribute("data-og-initialized","1");var o=i.dataset,r=o.ogWidget,a=o.ogTrip,n=o.ogGuide;if(r){var l;switch(r){case"trip":l=a&&(0,e.getEmbedUrl)((0,e.tripLink)(a));break;case"guide":l=n&&(0,e.getEmbedUrl)((0,e.hostLink)(n))}if(l){var s=i.getAttribute("href");if(null==s?void 0:s.startsWith((0,e.getExternalUrl)())){var d=document.createElement("iframe");d.src=l,d.style.border="none",d.style.overflowX="hidden",d.style.overflowY="hidden",d.style.display="block",null==t||t.addEventListener("message",function(t){if(console.log(t),(0,e.getEmbedUrl)().startsWith(t.origin))switch(t.data.type){case"size":var i=t.data,o=i.width,r=i.height;d.style.height=r+"px",d.style.width=o+"px";break;case"other":console.log("other event")}},!1),i.after(d),i.style.display="none"}}}})}}(window);
},{"./config/Routes":"W1cr"}]},{},["Hhy2"], null)
//# sourceMappingURL=embed.b43d3abe.js.map