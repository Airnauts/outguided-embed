!function(){var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire7009;e.register("481fT",(function(t,i){var r=e("94AO8"),n=e("50qLl"),o=e("9rkCf");const l={border:"none",width:"0px",height:"0px","overflow-x":"hidden","overflow-y":"hidden",display:"block"},s={scrolling:"no",frameborder:"0",allowtransparency:"true",allowfullscreen:"true"};!function(e){const t={processedWidgets:[],listenerCallbacks:[],listenerRegistered:!1,init:function(){this.registerListener();document.querySelectorAll(`a[data-og-widget][href^="${(0,r.getExternalUrl)()}"]`).forEach(this.initializeWidget.bind(this))},registerListener:function(){this.listenerRegistered||((0,o.register)((e=>{this.listenerCallbacks.forEach((t=>t(e)))})),this.listenerRegistered=!0)},addListenerCallback:function(e){this.listenerCallbacks.push(e)},initializeWidget:function(e){if(this.processedWidgets.includes(e))return;this.processedWidgets.push(e);const t=this.getWidgetCallbackUrl(e);if(!t)return;const i=this.createIframe(t);i.onload=()=>{e.remove()},e.after(i),this.addListenerCallback(this.getWidgetListenerCallback(i))},getWidgetCallbackUrl:function(e){let t;const{href:i,dataset:{ogCode:n}}=e;return(0,r.getTripSlugFromUrl)(i)?t=(0,r.tripLink)((0,r.getTripSlugFromUrl)(i)):(0,r.getHostSlugFromUrl)(i)&&(t=(0,r.hostLink)((0,r.getHostSlugFromUrl)(i))),t?void 0!==n?(0,r.getEmbedSnippetUrl)(t):(0,r.getEmbedUrl)(t):null},createIframe:function(t){let i;try{i=document.createElement('<iframe name="'+(0,n.getId)()+'"></iframe>')}catch(e){i=document.createElement("iframe"),i.name=(0,n.getId)()}return i.src=t+"?source="+encodeURIComponent(e.location.origin),Object.keys(s).forEach((e=>i.setAttribute(e,s[e]))),Object.keys(l).forEach((e=>i.style.setProperty(e,l[e]))),i},getWidgetListenerCallback:function(t){return i=>{const{origin:n,data:{type:o,name:l}}=i;if(console.log("event received from iframe",i.data),(0,r.getEmbedUrl)().startsWith(n)&&t.name===l)switch(o){case"size":const{width:r,height:n}=i.data;t.style.height=n+"px",t.style.width=r+"px";break;case"copy":const{text:o}=i.data;console.log("copy text",o),e.navigator.clipboard.writeText(o);break;default:console.log(i.data)}}}};e.OGWidgets||(t.init(),e.onload=()=>t.init(),e.OGWidgets=t)}(window)}))}();
//# sourceMappingURL=embed.eedf1048.js.map
