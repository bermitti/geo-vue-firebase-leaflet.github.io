(function(e){function t(t){for(var s,n,o=t[0],l=t[1],c=t[2],u=0,d=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);f&&f(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,n=1;n<a.length;n++){var o=a[n];0!==i[o]&&(s=!1)}s&&(r.splice(t--,1),e=l(l.s=a[0]))}return e}var s={},n={app:0},i={app:0},r=[];function o(e){return l.p+"js/"+({about:"about","user-profile":"user-profile"}[e]||e)+"."+{about:"cd0f436a","user-profile":"68fe36d4"}[e]+".js"}function l(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={"user-profile":1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var s="css/"+({about:"about","user-profile":"user-profile"}[e]||e)+"."+{about:"31d6cfe0","user-profile":"d05bd7f1"}[e]+".css",i=l.p+s,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var c=r[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===s||u===i))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){c=d[o],u=c.getAttribute("data-href");if(u===s||u===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var s=t&&t.target&&t.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=s,delete n[e],f.parentNode.removeChild(f),a(r)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){n[e]=0})));var s=i[e];if(0!==s)if(s)t.push(s[2]);else{var r=new Promise((function(t,a){s=i[e]=[t,a]}));t.push(s[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(f);var a=i[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+s+": "+n+")",d.name="ChunkLoadError",d.type=s,d.request=n,a[1](d)}i[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=s,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)l.d(a,s,function(t){return e[t]}.bind(null,s));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=u;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"032d":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return o}));var s=a("c23d"),n=a.n(s),i=(a("b7aa"),a("e89a"),{apiKey:"AIzaSyB1e1MHH_P31Yx6wNoXXLGae40dzN_ySfM",authDomain:"vue-firebase-general.firebaseapp.com",databaseURL:"https://vue-firebase-general.firebaseio.com",projectId:"vue-firebase-general",storageBucket:"vue-firebase-general.appspot.com",messagingSenderId:"381673290117",appId:"1:381673290117:web:198fcb8b15794c52fb2cec"});n.a.initializeApp(i);var r=n.a.auth(),o=n.a.firestore()},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("section",{staticClass:"hero is-success is-bold is-fullheight"},[a("div",{staticClass:"hero-head py-3 px-4"},[a("header",{staticClass:"navbar"},[a("MyNavbar",{attrs:{user:e.user},on:{logout:e.logout}})],1)]),a("div",{staticClass:"hero-body py-1 px-1"},[a("div",{staticClass:"container has-text-centered"},[a("router-view")],1)]),a("div",{staticClass:"hero-foot py-3"},[a("MyFooter",{attrs:{alias:e.alias}})],1)])])},i=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container",attrs:{id:"nav"}},[a("div",{staticClass:"navbar-brand1"},[a("router-link",{staticClass:"navbar-item_hover",attrs:{to:"/"}},[a("div",{staticClass:"is-size-2 has-text-light logo"},[e._v("GeoChat")])])],1),a("div",{staticClass:"navbar-menu1"},[a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item"},[a("div",{staticClass:"buttons"},[e.user?e._e():a("router-link",{staticClass:"button is-primary",attrs:{to:{name:"Register"}}},[a("strong",[e._v("Signup")])]),e.user?e._e():a("router-link",{staticClass:"button is-primary",attrs:{to:{name:"Login"}}},[a("strong",[e._v("Log in")])]),e.user?a("a",{staticClass:"button is-light",on:{click:e.logout}},[a("strong",[e._v("Log Out")])]):e._e()],1)])])])])},o=[],l={name:"MyNavbar",props:{user:{type:Object,default:null}},methods:{logout:function(){this.$emit("logout")}}},c=l,u=(a("e2d7"),a("2877")),d=Object(u["a"])(c,r,o,!1,null,"bd25894c",null),f=d.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",{staticClass:"has-text-black"},[e._v("alias of current user : "+e._s(e.alias))]),a("p",[e._v(e._s(new Date))])])},m=[],h={props:{alias:{type:String,default:""}}},v=h,g=Object(u["a"])(v,p,m,!1,null,"896847e0",null),b=g.exports,C=a("032d"),_=(a("4160"),a("159b"),a("96cf"),a("1da1")),w=function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a="null",e.next=3,C["b"].collection("geoUsers").where("user_id","==",t).get().then((function(e){e.forEach((function(e){a=e.data().alias}))})).catch((function(e){console.log("Error getting documents: ",e)}));case 3:return e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y={components:{MyNavbar:f,MyFooter:b},data:function(){return{user:null,alias:null}},methods:{logout:function(){var e=this;C["a"].signOut().then((function(){e.$router.push({name:"Login"})})).catch((function(e){console.log(e)}))}},created:function(){var e=this;C["a"].onAuthStateChanged((function(t){t?(e.user=t,w(t.uid).then((function(t){return e.alias=t}))):e.user=null}))}},x=y,E=(a("5c0b"),Object(u["a"])(x,n,i,!1,null,null,null)),k=E.exports,P=(a("45fc"),a("d3b7"),a("8c4f")),S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("LMap")],1)},O=[],$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"map"}})},M=[],j=(a("d81d"),a("6cc5"),a("e11e")),L=a.n(j);function A(){var e=document.querySelector(".hero-body"),t=document.querySelector("#map");t.style.height="";var a=e.clientHeight,s=parseInt(window.getComputedStyle(e).paddingTop)+parseInt(window.getComputedStyle(e).paddingBottom);t.style.height=a-s+"px"}var I={data:function(){return{mapInstance:null,lat:51.505,lng:-.09}},methods:{removeMapInstance:function(){this.mapInstance.remove()},createMapInstance:function(){var e=this,t=L.a.map("map",{preferCanvas:!0}).setView([this.lat,this.lng],13);L.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(t);var a=L.a.icon({iconUrl:"leaflet-maps-red-marker-vector.svg",iconSize:[58,48]});return C["b"].collection("geoUsers").get().then((function(s){s.docs.forEach((function(s){var n=s.data();if(n.geolocation){var i=L.a.marker([n.geolocation.lat,n.geolocation.lng],{icon:a,opacity:.7,title:s.id}).addTo(t);i.addEventListener("click",(function(){return e.$router.push({name:"UserProfile",params:{id:s.id}})}))}}))})),t},renderMap:function(){this.mapInstance=this.createMapInstance()}},mounted:function(){var e=this;A(),window.addEventListener("resize",A);var t=C["a"].currentUser;window.navigator?window.navigator.geolocation.getCurrentPosition((function(a){e.lat=a.coords.latitude,e.lng=a.coords.longitude,C["b"].collection("geoUsers").where("user_id","==",t.uid).get().then((function(t){t.forEach((function(t){C["b"].collection("geoUsers").doc(t.id).update({geolocation:{lat:e.lat,lng:e.lng}})}))})).then(e.renderMap()).catch((function(e){console.log("Error getting documents: ",e)}))}),(function(t){console.log(t),e.renderMap()})):this.renderMap()},beforeDestroy:function(){this.removeMapInstance(),window.removeEventListener("resize",A)}},N=I,T=Object(u["a"])(N,$,M,!1,null,"23b3a06e",null),U=T.exports,q={name:"Home",components:{LMap:U}},z=q,H=Object(u["a"])(z,S,O,!1,null,null,null),D=H.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"columns is-centered"},[a("div",{staticClass:"column is-6"},[a("h3",{staticClass:"title"},[e._v("Login")]),a("form",{staticClass:"box",on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[a("div",{staticClass:"field has-text-left"},[a("label",{staticClass:"label"},[e._v("Email:")]),a("div",{staticClass:"control has-icons-left has-icons-right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"input is-success",attrs:{type:"email",placeholder:"email input..."},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._m(0),e._m(1)])]),a("div",{staticClass:"field has-text-left"},[a("label",{staticClass:"label"},[e._v("Password:")]),a("p",{staticClass:"control has-icons-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input is-success",attrs:{type:"password",placeholder:"password..."},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._m(2)])]),a("div",{staticClass:"field"},[a("p",{staticClass:"help is-danger"},[e._v(e._s(e.feedback))])]),e._m(3)])])])},R=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fas fa-envelope"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"icon is-small is-right"},[a("i",{staticClass:"fas fa-exclamation-triangle"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fas fa-lock"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"field"},[a("p",{staticClass:"control"},[a("button",{staticClass:"button is-primary"},[e._v("Submit")])])])}],F={name:"Login",data:function(){return{auth:C["a"],email:null,password:null,feedback:null}},methods:{login:function(){var e=this;this.email&&this.password?(this.feedback=null,C["a"].signInWithEmailAndPassword(this.email,this.password).then((function(){return e.$router.push({name:"Home"})})).catch((function(t){e.feedback=t.message}))):this.feedback="Please fill in both fields"}}},G=F,J=Object(u["a"])(G,B,R,!1,null,"1103b56e",null),K=J.exports,W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"columns is-centered"},[a("div",{staticClass:"column is-6"},[a("h3",{staticClass:"title"},[e._v("Signup")]),a("form",{staticClass:"box",on:{submit:function(t){return t.preventDefault(),e.signup(t)}}},[a("div",{staticClass:"field has-text-left"},[a("label",{staticClass:"label"},[e._v("Email:")]),a("div",{staticClass:"control has-icons-left has-icons-right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"input is-success",attrs:{type:"email",placeholder:"email input..."},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._m(0),e._m(1)])]),a("div",{staticClass:"field has-text-left"},[a("label",{staticClass:"label"},[e._v("Password:")]),a("p",{staticClass:"control has-icons-left"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input is-success",attrs:{type:"password",placeholder:"password..."},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._m(2)])]),a("div",{staticClass:"field has-text-left"},[a("label",{staticClass:"label"},[e._v("Alias:")]),a("div",{staticClass:"control has-icons-left has-icons-right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.alias,expression:"alias"}],staticClass:"input is-success",attrs:{type:"text",placeholder:"alias..."},domProps:{value:e.alias},on:{input:function(t){t.target.composing||(e.alias=t.target.value)}}}),e._m(3),e._m(4)])]),a("div",{staticClass:"field"},[a("p",{staticClass:"help is-danger"},[e._v(e._s(e.feedback))])]),e._m(5)])])])},X=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fas fa-envelope"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"icon is-small is-right"},[a("i",{staticClass:"fas fa-exclamation-triangle"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fas fa-lock"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"icon is-small is-left"},[a("i",{staticClass:"fas fa-user"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"icon is-small is-right"},[a("i",{staticClass:"fas fa-check"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"field"},[a("p",{staticClass:"control"},[a("button",{staticClass:"button is-primary"},[e._v("Submit")])])])}],Y=a("3666"),V=a.n(Y),Q={name:"Register",data:function(){return{auth:C["a"],email:null,password:null,alias:null,feedback:null,slug:null}},methods:{signup:function(){var e=this;if(this.email&&this.password&&this.alias){this.slug=V()(this.alias,{replacement:"-",remove:/[*+~.()'"!:@]/g,lower:!0});var t=C["b"].collection("geoUsers").doc(this.slug);t.get().then((function(a){a.exists?e.feedback="This alias already exist":(e.feedback="This alias is free to use",C["a"].createUserWithEmailAndPassword(e.email,e.password).then((function(a){var s=a.user;t.set({alias:e.alias,geolocation:null,user_id:s.uid})})).then((function(){e.$router.push({name:"Home"})})).catch((function(t){return e.feedback=t.message})))}))}else this.feedback="You mast enter all fields"}}},Z=Q,ee=Object(u["a"])(Z,W,X,!1,null,"38fda890",null),te=ee.exports;s["a"].use(P["a"]);var ae=[{path:"/",name:"Home",component:D,meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:K},{path:"/register",name:"Register",component:te},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/profile/:id",name:"UserProfile",component:function(){return a.e("user-profile").then(a.bind(null,"4a39"))},meta:{requiresAuth:!0}}],se=new P["a"]({mode:"history",base:"/",routes:ae});se.beforeEach((function(e,t,a){e.matched.some((function(e){return e.meta.requiresAuth}))?C["a"].currentUser?a():a({path:"/login",query:{redirect:e.fullPath}}):a()}));var ne=se;a("b383");s["a"].config.productionTip=!1;var ie=null;C["a"].onAuthStateChanged((function(){ie||(ie=new s["a"]({router:ne,render:function(e){return e(k)}}).$mount("#app"))}))},"5c0b":function(e,t,a){"use strict";var s=a("9c0c"),n=a.n(s);n.a},"9c0c":function(e,t,a){},a93d:function(e,t,a){},b383:function(e,t,a){},e2d7:function(e,t,a){"use strict";var s=a("a93d"),n=a.n(s);n.a}});
//# sourceMappingURL=app.b5836513.js.map