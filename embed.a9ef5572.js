var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire7009;e.register("fobPr",(function(t,i){var r=e("2lFDa"),n=e("1iypr"),o=e("dyKWZ"),l=e("8SdeH");const s={border:"none",width:"0px",height:"0px","overflow-x":"hidden","overflow-y":"hidden",display:"block"},a={scrolling:"no",frameborder:"0",allowtransparency:"true",allowfullscreen:"true"};!function(e){const t={processedWidgets:[],listenerCallbacks:[],listenerRegistered:!1,init:function(){this.registerListener();document.querySelectorAll(`a[data-og-widget][href^="${(0,r.getExternalUrl)()}"]`).forEach(this.initializeWidget.bind(this))},registerListener:function(){this.listenerRegistered||((0,l.register)((e=>{this.listenerCallbacks.forEach((t=>t(e)))})),this.listenerRegistered=!0)},addListenerCallback:function(e){this.listenerCallbacks.push(e)},initializeWidget:function(e){if(this.processedWidgets.includes(e))return;this.processedWidgets.push(e);const t=this.getWidgetCallbackUrl(e);if(!t)return;const i=this.createIframe(t);i.onload=()=>{e.remove()},e.after(i),this.addListenerCallback(this.getWidgetListenerCallback(i))},getWidgetCallbackUrl:function(e){let t;const{href:i,dataset:{ogCode:n}}=e;return(0,r.getTripSlugFromUrl)(i)?t=(0,r.tripLink)((0,r.getTripSlugFromUrl)(i)):(0,r.getHostSlugFromUrl)(i)&&(t=(0,r.hostLink)((0,r.getHostSlugFromUrl)(i))),t?void 0!==n?(0,r.getEmbedSnippetUrl)(t):(0,r.getEmbedUrl)(t):null},createIframe:function(t){let i;try{i=document.createElement('<iframe name="'+(0,n.getId)()+'"></iframe>')}catch(e){i=document.createElement("iframe"),i.name=(0,n.getId)()}return i.src=t+"?source="+encodeURIComponent(e.location.origin),Object.keys(a).forEach((e=>i.setAttribute(e,a[e]))),Object.keys(s).forEach((e=>i.style.setProperty(e,s[e]))),i},getWidgetListenerCallback:function(t){return i=>{const{origin:n,data:{type:l,name:s}}=i;if((0,o.log)("event received from iframe",i.data),(0,r.getEmbedUrl)().startsWith(n)&&t.name===s)switch(l){case"size":const{width:r,height:n}=i.data;t.style.height=n+"px",t.style.width=r+"px";break;case"copy":const{text:o}=i.data;e.navigator.clipboard.writeText(o);break;default:console.log(i.data)}}}};e.OGWidgets||(t.init(),e.onload=()=>t.init(),e.OGWidgets=t)}(window)})),e.register("dyKWZ",(function(e,t){var i,r,n,o;i=e.exports,r="log",n=function(){return l},Object.defineProperty(i,r,{get:n,set:o,enumerable:!0,configurable:!0});const l=(e,...t)=>{console.log("staging"),console.log(e,...t)}}));
//# sourceMappingURL=embed.a9ef5572.js.map