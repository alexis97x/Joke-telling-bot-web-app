(function(){"use strict";var e={8289:function(e,t,n){var o=n(9242),r=n(3396),u=n(7718),i=n(3140);function a(e,t,n,o,a,l){const c=(0,r.up)("HelloWorld");return(0,r.wg)(),(0,r.j4)(u.q,null,{default:(0,r.w5)((()=>[(0,r.Wm)(i.O,null,{default:(0,r.w5)((()=>[(0,r.Wm)(c)])),_:1})])),_:1})}n(7658);var l=n(7139),c=n(4870),f=n(4161),s=n(6323),d=n(3369),p=n(6824),v=n(8521),h=n(2718),m=n(1240);var w={__name:"HelloWorld",setup(e){const t=(0,c.iH)(""),n=(0,c.iH)(""),u=new window.webkitSpeechRecognition,i=(0,c.iH)(""),a=(0,c.iH)([]),w=(0,c.iH)("");function g(e){"j"!==e.key&&"J"!==e.key||y()}function b(){u.start()}function y(){f.Z.get("https://official-joke-api.appspot.com/jokes/programming/random").then((e=>{t.value=e.data[0].setup,n.value=e.data[0].punchline,setTimeout((()=>{let e=new SpeechSynthesisUtterance(n.value);e.lang=w.value,window.speechSynthesis.speak(e)}),3e3);let o=new SpeechSynthesisUtterance(t.value);o.lang=w.value,window.speechSynthesis.speak(o)}))}return window.speechSynthesis.onvoiceschanged=()=>{const e=window.speechSynthesis.getVoices();w.value=e[0].lang;const t=new Set;e.forEach((e=>{t.add(e.lang)})),t.forEach((e=>{a.value.push(e)}))},(0,r.YP)(i,(()=>{"tell me a joke"==i.value.toLowerCase()&&y()})),window.addEventListener("keydown",g),u.continuos=!0,u.interimResults=!0,u.lang="en-US",u.onresult=e=>{i.value=e.results[0][0].transcript},u.start(),(e,u)=>((0,r.wg)(),(0,r.j4)(d.K,{align:"center",id:"container",class:"mt-5"},{default:(0,r.w5)((()=>[(0,r.wy)((0,r._)("h2",null,(0,l.zw)(t.value),513),[[o.F8,t.value]]),(0,r.wy)((0,r._)("h2",null,(0,l.zw)(n.value),513),[[o.F8,n.value]]),(0,r.Wm)(h.f,{src:"https://i.gifer.com/YseV.gif",width:"80vw",class:"mt-5",height:"70vh"},{default:(0,r.w5)((()=>[(0,r.Wm)(p.o,null,{default:(0,r.w5)((()=>[(0,r.Wm)(v.D,null,{default:(0,r.w5)((()=>[(0,r.Wm)(s.T,{onClick:b,id:"button2"},{default:(0,r.w5)((()=>[(0,r.Uk)("Say Tell me a joke")])),_:1})])),_:1}),(0,r.Wm)(v.D,{id:"button"},{default:(0,r.w5)((()=>[(0,r.Wm)(s.T,{color:"blue",onClick:y,onKeydown:g},{default:(0,r.w5)((()=>[(0,r.Uk)("Tell me a joke")])),_:1})])),_:1}),(0,r.Wm)(v.D,{id:"button"},{default:(0,r.w5)((()=>[(0,r.Wm)(m.rL,{label:"Select voice language",modelValue:w.value,"onUpdate:modelValue":u[0]||(u[0]=e=>w.value=e),items:a.value},null,8,["modelValue","items"])])),_:1})])),_:1})])),_:1})])),_:1}))}},g=n(89);const b=(0,g.Z)(w,[["__scopeId","data-v-6e2a8244"]]);var y=b,k={name:"App",components:{HelloWorld:y},data:()=>({})};const _=(0,g.Z)(k,[["render",a]]);var j=_,O=(n(9773),n(8727)),S=(0,O.Rd)();async function W(){const e=await n.e(461).then(n.t.bind(n,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}W(),(0,o.ri)(j).use(S).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var u=t[o]={exports:{}};return e[o].call(u.exports,u,u.exports,n),u.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,u){if(!o){var i=1/0;for(f=0;f<e.length;f++){o=e[f][0],r=e[f][1],u=e[f][2];for(var a=!0,l=0;l<o.length;l++)(!1&u||i>=u)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(a=!1,u<i&&(i=u));if(a){e.splice(f--,1);var c=r();void 0!==c&&(t=c)}}return t}u=u||0;for(var f=e.length;f>0&&e[f-1][2]>u;f--)e[f]=e[f-1];e[f]=[o,r,u]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"===typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"===typeof o.then)return o}var u=Object.create(null);n.r(u);var i={};e=e||[null,t({}),t([]),t(t)];for(var a=2&r&&o;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((function(e){i[e]=function(){return o[e]}}));return i["default"]=function(){return o},n.d(u,i),u}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/webfontloader.7a4643e8.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="joke-telling-bot:";n.l=function(o,r,u,i){if(e[o])e[o].push(r);else{var a,l;if(void 0!==u)for(var c=document.getElementsByTagName("script"),f=0;f<c.length;f++){var s=c[f];if(s.getAttribute("src")==o||s.getAttribute("data-webpack")==t+u){a=s;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+u),a.src=o),e[o]=[r];var d=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/Joke-telling-bot-web-app/"}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var u=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=u);var i=n.p+n.u(t),a=new Error,l=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var u=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+u+": "+i+")",a.name="ChunkLoadError",a.type=u,a.request=i,r[1](a)}};n.l(i,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,u,i=o[0],a=o[1],l=o[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(l)var f=l(n)}for(t&&t(o);c<i.length;c++)u=i[c],n.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return n.O(f)},o=self["webpackChunkjoke_telling_bot"]=self["webpackChunkjoke_telling_bot"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(8289)}));o=n.O(o)})();
//# sourceMappingURL=app.f47d26d6.js.map