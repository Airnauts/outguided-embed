!function(){const e="/experiences/:slugOrId",t="/guides/:slugOrId",i=t=>{var i;return null===(i=t.match(new RegExp(`^.*${e.replace(":slugOrId","([^/?]+)")}`)))||void 0===i?void 0:i[1]},r=e=>{var i;return null===(i=e.match(new RegExp(`^.*${t.replace(":slugOrId","([^/?]+)")}`)))||void 0===i?void 0:i[1]},n=e=>t.replace(":slugOrId",e?""+e:""),s=e=>"https://embed.out.gd"+(e?`/#${(e=>`/embed${e}`)(e)}`:""),a=(e="")=>`https://outguided-frontend-dev.herokuapp.com${e}`,o=()=>String(Date.now().toString(32)+Math.random().toString(16)).replace(/\./g,""),d=(e,...t)=>{console.log(e,...t)},l=e=>{window.addEventListener("message",e,!1)},c={border:"none",width:"100%",height:"0px","overflow-x":"hidden","overflow-y":"hidden",display:"block"},g={scrolling:"no",frameborder:"0",allowtransparency:"true",allowfullscreen:"true"};!function(t){const u={processedWidgets:[],listenerCallbacks:[],listenerRegistered:!1,init:function(){this.registerListener();document.querySelectorAll(`a[data-og-widget][href^="${a()}"]`).forEach(this.initializeWidget.bind(this))},registerListener:function(){this.listenerRegistered||(l((e=>{this.listenerCallbacks.forEach((t=>t(e)))})),this.listenerRegistered=!0)},addListenerCallback:function(e){this.listenerCallbacks.push(e)},initializeWidget:function(e){if(this.processedWidgets.includes(e))return;this.processedWidgets.push(e);const t=this.getWidgetCallbackUrl(e);if(!t)return;const i=this.createIframe(t);i.onload=()=>{e.remove()},e.after(i),this.addListenerCallback(this.getWidgetListenerCallback(i))},getWidgetCallbackUrl:function(t){let a;const{href:o,dataset:{ogCode:d}}=t;var l,c;return i(o)?(l=i(o),a=e.replace(":slugOrId",l?""+l:"")):r(o)&&(a=n(r(o))),a?void 0!==d?"https://embed.out.gd"+((c=a)?`/#${(e=>`/code${e}`)(c)}`:""):s(a):null},createIframe:function(e){let i;try{i=document.createElement('<iframe name="'+o()+'"></iframe>')}catch(e){i=document.createElement("iframe"),i.name=o()}return i.src=e+"?source="+encodeURIComponent(t.location.origin),Object.keys(g).forEach((e=>i.setAttribute(e,g[e]))),Object.keys(c).forEach((e=>i.style.setProperty(e,c[e]))),i},getWidgetListenerCallback:function(e){return i=>{const{origin:r,data:{type:n,name:a}}=i;if(d("received event:",i.data),s().startsWith(r)&&e.name===a)switch(n){case"size":const{width:r,height:n}=i.data;e.style.height=n+"px";break;case"copy":const{text:s}=i.data;t.navigator.clipboard.writeText(s)}}}};t.OGWidgets||(u.init(),t.onload=()=>u.init(),t.OGWidgets=u)}(window)}();
//# sourceMappingURL=embed.js.map
