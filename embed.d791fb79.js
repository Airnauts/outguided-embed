parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Hhy2":[function(require,module,exports) {
"use strict";var e=require("./config/Routes"),t=require("./utils/helper"),r=require("./utils/messenger"),i={border:"none",width:"0px",height:"0px","overflow-x":"hidden","overflow-y":"hidden",display:"block"},n={scrolling:"no",frameborder:"0",allowtransparency:"true",allowfullscreen:"true"};!function(a){var o={processedWidgets:[],listenerCallbacks:[],listenerRegistered:!1,init:function(){this.registerListener(),document.querySelectorAll('a[data-og-widget][href^="'.concat((0,e.getExternalUrl)(),'"]')).forEach(this.initializeWidget.bind(this))},registerListener:function(){var e=this;this.listenerRegistered||((0,r.register)(function(t){e.listenerCallbacks.forEach(function(e){return e(t)})}),this.listenerRegistered=!0)},addListenerCallback:function(e){this.listenerCallbacks.push(e)},initializeWidget:function(e){if(!this.processedWidgets.includes(e)){this.processedWidgets.push(e);var t=this.getWidgetCallbackUrl(e);if(t){var r=this.createIframe(t);r.onload=function(){e.remove()},e.after(r),this.addListenerCallback(this.getWidgetListenerCallback(r))}}},getWidgetCallbackUrl:function(t){var r,i=t.href,n=t.dataset.ogCode;return(0,e.getTripSlugFromUrl)(i)?r=(0,e.tripLink)((0,e.getTripSlugFromUrl)(i)):(0,e.getHostSlugFromUrl)(i)&&(r=(0,e.hostLink)((0,e.getHostSlugFromUrl)(i))),r?void 0!==n?(0,e.getEmbedSnippetUrl)(r):(0,e.getEmbedUrl)(r):null},createIframe:function(e){var r;try{r=document.createElement('<iframe name="'+(0,t.getId)()+'"></iframe>')}catch(o){(r=document.createElement("iframe")).name=(0,t.getId)()}return r.src=e+"?source="+encodeURIComponent(a.location.origin),Object.keys(n).forEach(function(e){return r.setAttribute(e,n[e])}),Object.keys(i).forEach(function(e){return r.style.setProperty(e,i[e])}),r},getWidgetListenerCallback:function(t){return function(r){var i=r,n=i.origin,o=i.data,s=o.type,l=o.name;if(console.log("event received from iframe",r.data),(0,e.getEmbedUrl)().startsWith(n)&&t.name===l)switch(s){case"size":var c=r.data,d=c.width,g=c.height;t.style.height=g+"px",t.style.width=d+"px";break;case"copy":var u=r.data.text;console.log("copy text",u),a.navigator.clipboard.writeText(u);break;default:console.log(r.data)}}}};a.OGWidgets||(o.init(),a.onload=function(){return o.init()},a.OGWidgets=o)}(window);
},{"./config/Routes":"W1cr","./utils/helper":"SKGc","./utils/messenger":"OltC"}]},{},[], null)
//# sourceMappingURL=embed.d791fb79.js.map