(window.webpackJsonp=window.webpackJsonp||[]).push([["npm.vue-router"],{"5f2b":function(t,e,r){"use strict";
/*!
  * vue-router v3.3.2
  * (c) 2020 Evan You
  * @license MIT
  */function n(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function o(t,e){return n(t)&&t._isRouter&&(null==e||t.type===e)}function i(t,e){for(var r in e)t[r]=e[r];return t}var a={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var r=e.props,n=e.children,o=e.parent,a=e.data;a.routerView=!0;for(var u=o.$createElement,c=r.name,p=o.$route,f=o._routerViewCache||(o._routerViewCache={}),h=0,l=!1;o&&o._routerRoot!==o;){var d=o.$vnode?o.$vnode.data:{};d.routerView&&h++,d.keepAlive&&o._directInactive&&o._inactive&&(l=!0),o=o.$parent}if(a.routerViewDepth=h,l){var v=f[c],y=v&&v.component;return y?(v.configProps&&s(y,a,v.route,v.configProps),u(y,a,n)):u()}var m=p.matched[h],g=m&&m.components[c];if(!m||!g)return f[c]=null,u();f[c]={component:g},a.registerRouteInstance=function(t,e){var r=m.instances[c];(e&&r!==t||!e&&r===t)&&(m.instances[c]=e)},(a.hook||(a.hook={})).prepatch=function(t,e){m.instances[c]=e.componentInstance},a.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==m.instances[c]&&(m.instances[c]=t.componentInstance)};var w=m.props&&m.props[c];return w&&(i(f[c],{route:p,configProps:w}),s(g,a,p,w)),u(g,a,n)}};function s(t,e,r,n){var o=e.props=function(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}(r,n);if(o){o=e.props=i({},o);var a=e.attrs=e.attrs||{};for(var s in o)t.props&&s in t.props||(a[s]=o[s],delete o[s])}}var u=/[!'()*]/g,c=function(t){return"%"+t.charCodeAt(0).toString(16)},p=/%2C/g,f=function(t){return encodeURIComponent(t).replace(u,c).replace(p,",")},h=decodeURIComponent;function l(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach((function(t){var r=t.replace(/\+/g," ").split("="),n=h(r.shift()),o=r.length>0?h(r.join("=")):null;void 0===e[n]?e[n]=o:Array.isArray(e[n])?e[n].push(o):e[n]=[e[n],o]})),e):e}function d(t){var e=t?Object.keys(t).map((function(e){var r=t[e];if(void 0===r)return"";if(null===r)return f(e);if(Array.isArray(r)){var n=[];return r.forEach((function(t){void 0!==t&&(null===t?n.push(f(e)):n.push(f(e)+"="+f(t)))})),n.join("&")}return f(e)+"="+f(r)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var v=/\/?$/;function y(t,e,r,n){var o=n&&n.options.stringifyQuery,i=e.query||{};try{i=m(i)}catch(t){}var a={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:b(e,o),matched:t?w(t):[]};return r&&(a.redirectedFrom=b(r,o)),Object.freeze(a)}function m(t){if(Array.isArray(t))return t.map(m);if(t&&"object"==typeof t){var e={};for(var r in t)e[r]=m(t[r]);return e}return t}var g=y(null,{path:"/"});function w(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function b(t,e){var r=t.path,n=t.query;void 0===n&&(n={});var o=t.hash;return void 0===o&&(o=""),(r||"/")+(e||d)(n)+o}function x(t,e){return e===g?t===e:!!e&&(t.path&&e.path?t.path.replace(v,"")===e.path.replace(v,"")&&t.hash===e.hash&&k(t.query,e.query):!(!t.name||!e.name)&&(t.name===e.name&&t.hash===e.hash&&k(t.query,e.query)&&k(t.params,e.params)))}function k(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var r=Object.keys(t),n=Object.keys(e);return r.length===n.length&&r.every((function(r){var n=t[r],o=e[r];return"object"==typeof n&&"object"==typeof o?k(n,o):String(n)===String(o)}))}function R(t,e,r){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var o=e.split("/");r&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var s=i[a];".."===s?o.pop():"."!==s&&o.push(s)}return""!==o[0]&&o.unshift(""),o.join("/")}function E(t){return t.replace(/\/\//g,"/")}var O=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},A=B,C=$,_=function(t,e){return T($(t,e),e)},j=T,S=V,L=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function $(t,e){for(var r,n=[],o=0,i=0,a="",s=e&&e.delimiter||"/";null!=(r=L.exec(t));){var u=r[0],c=r[1],p=r.index;if(a+=t.slice(i,p),i=p+u.length,c)a+=c[1];else{var f=t[i],h=r[2],l=r[3],d=r[4],v=r[5],y=r[6],m=r[7];a&&(n.push(a),a="");var g=null!=h&&null!=f&&f!==h,w="+"===y||"*"===y,b="?"===y||"*"===y,x=r[2]||s,k=d||v;n.push({name:l||o++,prefix:h||"",delimiter:x,optional:b,repeat:w,partial:g,asterisk:!!m,pattern:k?U(k):m?".*":"[^"+q(x)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&n.push(a),n}function P(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function T(t,e){for(var r=new Array(t.length),n=0;n<t.length;n++)"object"==typeof t[n]&&(r[n]=new RegExp("^(?:"+t[n].pattern+")$",M(e)));return function(e,n){for(var o="",i=e||{},a=(n||{}).pretty?P:encodeURIComponent,s=0;s<t.length;s++){var u=t[s];if("string"!=typeof u){var c,p=i[u.name];if(null==p){if(u.optional){u.partial&&(o+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(O(p)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var f=0;f<p.length;f++){if(c=a(p[f]),!r[s].test(c))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(c)+"`");o+=(0===f?u.prefix:u.delimiter)+c}}else{if(c=u.asterisk?encodeURI(p).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):a(p),!r[s].test(c))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+c+'"');o+=u.prefix+c}}else o+=u}return o}}function q(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function U(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function I(t,e){return t.keys=e,t}function M(t){return t&&t.sensitive?"":"i"}function V(t,e,r){O(e)||(r=e||r,e=[]);for(var n=(r=r||{}).strict,o=!1!==r.end,i="",a=0;a<t.length;a++){var s=t[a];if("string"==typeof s)i+=q(s);else{var u=q(s.prefix),c="(?:"+s.pattern+")";e.push(s),s.repeat&&(c+="(?:"+u+c+")*"),i+=c=s.optional?s.partial?u+"("+c+")?":"(?:"+u+"("+c+"))?":u+"("+c+")"}}var p=q(r.delimiter||"/"),f=i.slice(-p.length)===p;return n||(i=(f?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":n&&f?"":"(?="+p+"|$)",I(new RegExp("^"+i,M(r)),e)}function B(t,e,r){return O(e)||(r=e||r,e=[]),r=r||{},t instanceof RegExp?function(t,e){var r=t.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return I(t,e)}(t,e):O(t)?function(t,e,r){for(var n=[],o=0;o<t.length;o++)n.push(B(t[o],e,r).source);return I(new RegExp("(?:"+n.join("|")+")",M(r)),e)}(t,e,r):function(t,e,r){return V($(t,r),e,r)}(t,e,r)}A.parse=C,A.compile=_,A.tokensToFunction=j,A.tokensToRegExp=S;var H=Object.create(null);function z(t,e,r){e=e||{};try{var n=H[t]||(H[t]=A.compile(t));return"string"==typeof e.pathMatch&&(e[0]=e.pathMatch),n(e,{pretty:!0})}catch(t){return""}finally{delete e[0]}}function F(t,e,r,n){var o="string"==typeof t?{path:t}:t;if(o._normalized)return o;if(o.name){var a=(o=i({},t)).params;return a&&"object"==typeof a&&(o.params=i({},a)),o}if(!o.path&&o.params&&e){(o=i({},o))._normalized=!0;var s=i(i({},e.params),o.params);if(e.name)o.name=e.name,o.params=s;else if(e.matched.length){var u=e.matched[e.matched.length-1].path;o.path=z(u,s,e.path)}else 0;return o}var c=function(t){var e="",r="",n=t.indexOf("#");n>=0&&(e=t.slice(n),t=t.slice(0,n));var o=t.indexOf("?");return o>=0&&(r=t.slice(o+1),t=t.slice(0,o)),{path:t,query:r,hash:e}}(o.path||""),p=e&&e.path||"/",f=c.path?R(c.path,p,r||o.append):p,h=function(t,e,r){void 0===e&&(e={});var n,o=r||l;try{n=o(t||"")}catch(t){n={}}for(var i in e)n[i]=e[i];return n}(c.query,o.query,n&&n.options.parseQuery),d=o.hash||c.hash;return d&&"#"!==d.charAt(0)&&(d="#"+d),{_normalized:!0,path:f,query:h,hash:d}}var N,D=function(){},J={name:"RouterLink",props:{to:{type:[String,Object],required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:[String,Array],default:"click"}},render:function(t){var e=this,r=this.$router,n=this.$route,o=r.resolve(this.to,n,this.append),a=o.location,s=o.route,u=o.href,c={},p=r.options.linkActiveClass,f=r.options.linkExactActiveClass,h=null==p?"router-link-active":p,l=null==f?"router-link-exact-active":f,d=null==this.activeClass?h:this.activeClass,m=null==this.exactActiveClass?l:this.exactActiveClass,g=s.redirectedFrom?y(null,F(s.redirectedFrom),null,r):s;c[m]=x(n,g),c[d]=this.exact?c[m]:function(t,e){return 0===t.path.replace(v,"/").indexOf(e.path.replace(v,"/"))&&(!e.hash||t.hash===e.hash)&&function(t,e){for(var r in e)if(!(r in t))return!1;return!0}(t.query,e.query)}(n,g);var w=c[m]?this.ariaCurrentValue:null,b=function(t){K(t)&&(e.replace?r.replace(a,D):r.push(a,D))},k={click:K};Array.isArray(this.event)?this.event.forEach((function(t){k[t]=b})):k[this.event]=b;var R={class:c},E=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:u,route:s,navigate:b,isActive:c[d],isExactActive:c[m]});if(E){if(1===E.length)return E[0];if(E.length>1||!E.length)return 0===E.length?t():t("span",{},E)}if("a"===this.tag)R.on=k,R.attrs={href:u,"aria-current":w};else{var O=function t(e){var r;if(e)for(var n=0;n<e.length;n++){if("a"===(r=e[n]).tag)return r;if(r.children&&(r=t(r.children)))return r}}(this.$slots.default);if(O){O.isStatic=!1;var A=O.data=i({},O.data);for(var C in A.on=A.on||{},A.on){var _=A.on[C];C in k&&(A.on[C]=Array.isArray(_)?_:[_])}for(var j in k)j in A.on?A.on[j].push(k[j]):A.on[j]=b;var S=O.data.attrs=i({},O.data.attrs);S.href=u,S["aria-current"]=w}else R.on=k}return t(this.tag,R,this.$slots.default)}};function K(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}var Q="undefined"!=typeof window;function X(t,e,r,n){var o=e||[],i=r||Object.create(null),a=n||Object.create(null);t.forEach((function(t){!function t(e,r,n,o,i,a){var s=o.path,u=o.name;0;var c=o.pathToRegexpOptions||{},p=function(t,e,r){r||(t=t.replace(/\/$/,""));if("/"===t[0])return t;if(null==e)return t;return E(e.path+"/"+t)}(s,i,c.strict);"boolean"==typeof o.caseSensitive&&(c.sensitive=o.caseSensitive);var f={path:p,regex:Y(p,c),components:o.components||{default:o.component},instances:{},name:u,parent:i,matchAs:a,redirect:o.redirect,beforeEnter:o.beforeEnter,meta:o.meta||{},props:null==o.props?{}:o.components?o.props:{default:o.props}};o.children&&o.children.forEach((function(o){var i=a?E(a+"/"+o.path):void 0;t(e,r,n,o,f,i)}));r[f.path]||(e.push(f.path),r[f.path]=f);if(void 0!==o.alias)for(var h=Array.isArray(o.alias)?o.alias:[o.alias],l=0;l<h.length;++l){0;var d={path:h[l],children:o.children};t(e,r,n,d,i,f.path||"/")}u&&(n[u]||(n[u]=f))}(o,i,a,t)}));for(var s=0,u=o.length;s<u;s++)"*"===o[s]&&(o.push(o.splice(s,1)[0]),u--,s--);return{pathList:o,pathMap:i,nameMap:a}}function Y(t,e){return A(t,[],e)}function W(t,e){var r=X(t),n=r.pathList,o=r.pathMap,i=r.nameMap;function a(t,r,a){var s=F(t,r,!1,e),c=s.name;if(c){var p=i[c];if(!p)return u(null,s);var f=p.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!=typeof s.params&&(s.params={}),r&&"object"==typeof r.params)for(var h in r.params)!(h in s.params)&&f.indexOf(h)>-1&&(s.params[h]=r.params[h]);return s.path=z(p.path,s.params),u(p,s,a)}if(s.path){s.params={};for(var l=0;l<n.length;l++){var d=n[l],v=o[d];if(G(v.regex,s.path,s.params))return u(v,s,a)}}return u(null,s)}function s(t,r){var n=t.redirect,o="function"==typeof n?n(y(t,r,null,e)):n;if("string"==typeof o&&(o={path:o}),!o||"object"!=typeof o)return u(null,r);var s=o,c=s.name,p=s.path,f=r.query,h=r.hash,l=r.params;if(f=s.hasOwnProperty("query")?s.query:f,h=s.hasOwnProperty("hash")?s.hash:h,l=s.hasOwnProperty("params")?s.params:l,c){i[c];return a({_normalized:!0,name:c,query:f,hash:h,params:l},void 0,r)}if(p){var d=function(t,e){return R(t,e.parent?e.parent.path:"/",!0)}(p,t);return a({_normalized:!0,path:z(d,l),query:f,hash:h},void 0,r)}return u(null,r)}function u(t,r,n){return t&&t.redirect?s(t,n||r):t&&t.matchAs?function(t,e,r){var n=a({_normalized:!0,path:z(r,e.params)});if(n){var o=n.matched,i=o[o.length-1];return e.params=n.params,u(i,e)}return u(null,e)}(0,r,t.matchAs):y(t,r,n,e)}return{match:a,addRoutes:function(t){X(t,n,o,i)}}}function G(t,e,r){var n=e.match(t);if(!n)return!1;if(!r)return!0;for(var o=1,i=n.length;o<i;++o){var a=t.keys[o-1],s="string"==typeof n[o]?decodeURIComponent(n[o]):n[o];a&&(r[a.name||"pathMatch"]=s)}return!0}var Z=Q&&window.performance&&window.performance.now?window.performance:Date;function tt(){return Z.now().toFixed(3)}var et=tt();function rt(){return et}function nt(t){return et=t}var ot=Object.create(null);function it(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),r=i({},window.history.state);return r.key=rt(),window.history.replaceState(r,"",e),window.addEventListener("popstate",ut),function(){window.removeEventListener("popstate",ut)}}function at(t,e,r,n){if(t.app){var o=t.options.scrollBehavior;o&&t.app.$nextTick((function(){var i=function(){var t=rt();if(t)return ot[t]}(),a=o.call(t,e,r,n?i:null);a&&("function"==typeof a.then?a.then((function(t){lt(t,i)})).catch((function(t){0})):lt(a,i))}))}}function st(){var t=rt();t&&(ot[t]={x:window.pageXOffset,y:window.pageYOffset})}function ut(t){st(),t.state&&t.state.key&&nt(t.state.key)}function ct(t){return ft(t.x)||ft(t.y)}function pt(t){return{x:ft(t.x)?t.x:window.pageXOffset,y:ft(t.y)?t.y:window.pageYOffset}}function ft(t){return"number"==typeof t}var ht=/^#\d/;function lt(t,e){var r,n="object"==typeof t;if(n&&"string"==typeof t.selector){var o=ht.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(o){var i=t.offset&&"object"==typeof t.offset?t.offset:{};e=function(t,e){var r=document.documentElement.getBoundingClientRect(),n=t.getBoundingClientRect();return{x:n.left-r.left-e.x,y:n.top-r.top-e.y}}(o,i={x:ft((r=i).x)?r.x:0,y:ft(r.y)?r.y:0})}else ct(t)&&(e=pt(t))}else n&&ct(t)&&(e=pt(t));e&&window.scrollTo(e.x,e.y)}var dt,vt=Q&&((-1===(dt=window.navigator.userAgent).indexOf("Android 2.")&&-1===dt.indexOf("Android 4.0")||-1===dt.indexOf("Mobile Safari")||-1!==dt.indexOf("Chrome")||-1!==dt.indexOf("Windows Phone"))&&window.history&&"function"==typeof window.history.pushState);function yt(t,e){st();var r=window.history;try{if(e){var n=i({},r.state);n.key=rt(),r.replaceState(n,"",t)}else r.pushState({key:nt(tt())},"",t)}catch(r){window.location[e?"replace":"assign"](t)}}function mt(t){yt(t,!0)}function gt(t,e,r){var n=function(o){o>=t.length?r():t[o]?e(t[o],(function(){n(o+1)})):n(o+1)};n(0)}function wt(t){return function(e,r,o){var i=!1,a=0,s=null;bt(t,(function(t,e,r,u){if("function"==typeof t&&void 0===t.cid){i=!0,a++;var c,p=Rt((function(e){var n;((n=e).__esModule||kt&&"Module"===n[Symbol.toStringTag])&&(e=e.default),t.resolved="function"==typeof e?e:N.extend(e),r.components[u]=e,--a<=0&&o()})),f=Rt((function(t){var e="Failed to resolve async component "+u+": "+t;s||(s=n(t)?t:new Error(e),o(s))}));try{c=t(p,f)}catch(t){f(t)}if(c)if("function"==typeof c.then)c.then(p,f);else{var h=c.component;h&&"function"==typeof h.then&&h.then(p,f)}}})),i||o()}}function bt(t,e){return xt(t.map((function(t){return Object.keys(t.components).map((function(r){return e(t.components[r],t.instances[r],t,r)}))})))}function xt(t){return Array.prototype.concat.apply([],t)}var kt="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;function Rt(t){var e=!1;return function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];if(!e)return e=!0,t.apply(this,r)}}var Et=1,Ot=2,At=3,Ct=4;function _t(t,e){return St(t,e,Et,'Redirected from "'+t.fullPath+'" to "'+function(t){if("string"==typeof t)return t;if("path"in t)return t.path;var e={};return Lt.forEach((function(r){r in t&&(e[r]=t[r])})),JSON.stringify(e,null,2)}(e)+'" via a navigation guard.')}function jt(t,e){return St(t,e,At,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function St(t,e,r,n){var o=new Error(n);return o._isRouter=!0,o.from=t,o.to=e,o.type=r,o}var Lt=["params","query","hash"];var $t=function(t,e){this.router=t,this.base=function(t){if(!t)if(Q){var e=document.querySelector("base");t=(t=e&&e.getAttribute("href")||"/").replace(/^https?:\/\/[^\/]+/,"")}else t="/";"/"!==t.charAt(0)&&(t="/"+t);return t.replace(/\/$/,"")}(e),this.current=g,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function Pt(t,e,r,n){var o=bt(t,(function(t,n,o,i){var a=function(t,e){"function"!=typeof t&&(t=N.extend(t));return t.options[e]}(t,e);if(a)return Array.isArray(a)?a.map((function(t){return r(t,n,o,i)})):r(a,n,o,i)}));return xt(n?o.reverse():o)}function Tt(t,e){if(e)return function(){return t.apply(e,arguments)}}$t.prototype.listen=function(t){this.cb=t},$t.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},$t.prototype.onError=function(t){this.errorCbs.push(t)},$t.prototype.transitionTo=function(t,e,r){var n=this,o=this.router.match(t,this.current);this.confirmTransition(o,(function(){var t=n.current;n.updateRoute(o),e&&e(o),n.ensureURL(),n.router.afterHooks.forEach((function(e){e&&e(o,t)})),n.ready||(n.ready=!0,n.readyCbs.forEach((function(t){t(o)})))}),(function(t){r&&r(t),t&&!n.ready&&(n.ready=!0,n.readyErrorCbs.forEach((function(e){e(t)})))}))},$t.prototype.confirmTransition=function(t,e,r){var i,a=this,s=this.current,u=function(t){!o(t)&&n(t)&&(a.errorCbs.length?a.errorCbs.forEach((function(e){e(t)})):console.error(t)),r&&r(t)};if(x(t,s)&&t.matched.length===s.matched.length)return this.ensureURL(),u(St(i=s,t,Ct,'Avoided redundant navigation to current location: "'+i.fullPath+'".'));var c=function(t,e){var r,n=Math.max(t.length,e.length);for(r=0;r<n&&t[r]===e[r];r++);return{updated:e.slice(0,r),activated:e.slice(r),deactivated:t.slice(r)}}(this.current.matched,t.matched),p=c.updated,f=c.deactivated,h=c.activated,l=[].concat(function(t){return Pt(t,"beforeRouteLeave",Tt,!0)}(f),this.router.beforeHooks,function(t){return Pt(t,"beforeRouteUpdate",Tt)}(p),h.map((function(t){return t.beforeEnter})),wt(h));this.pending=t;var d=function(e,r){if(a.pending!==t)return u(jt(s,t));try{e(t,s,(function(e){!1===e?(a.ensureURL(!0),u(function(t,e){return St(t,e,Ot,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}(s,t))):n(e)?(a.ensureURL(!0),u(e)):"string"==typeof e||"object"==typeof e&&("string"==typeof e.path||"string"==typeof e.name)?(u(_t(s,t)),"object"==typeof e&&e.replace?a.replace(e):a.push(e)):r(e)}))}catch(t){u(t)}};gt(l,d,(function(){var r=[];gt(function(t,e,r){return Pt(t,"beforeRouteEnter",(function(t,n,o,i){return function(t,e,r,n,o){return function(i,a,s){return t(i,a,(function(t){"function"==typeof t&&n.push((function(){!function t(e,r,n,o){r[n]&&!r[n]._isBeingDestroyed?e(r[n]):o()&&setTimeout((function(){t(e,r,n,o)}),16)}(t,e.instances,r,o)})),s(t)}))}}(t,o,i,e,r)}))}(h,r,(function(){return a.current===t})).concat(a.router.resolveHooks),d,(function(){if(a.pending!==t)return u(jt(s,t));a.pending=null,e(t),a.router.app&&a.router.app.$nextTick((function(){r.forEach((function(t){t()}))}))}))}))},$t.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},$t.prototype.setupListeners=function(){},$t.prototype.teardownListeners=function(){this.listeners.forEach((function(t){t()})),this.listeners=[]};var qt=function(t){function e(e,r){t.call(this,e,r),this._startLocation=Ut(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,r=e.options.scrollBehavior,n=vt&&r;n&&this.listeners.push(it());var o=function(){var r=t.current,o=Ut(t.base);t.current===g&&o===t._startLocation||t.transitionTo(o,(function(t){n&&at(e,t,r,!0)}))};window.addEventListener("popstate",o),this.listeners.push((function(){window.removeEventListener("popstate",o)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){yt(E(n.base+t.fullPath)),at(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){mt(E(n.base+t.fullPath)),at(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.ensureURL=function(t){if(Ut(this.base)!==this.current.fullPath){var e=E(this.base+this.current.fullPath);t?yt(e):mt(e)}},e.prototype.getCurrentLocation=function(){return Ut(this.base)},e}($t);function Ut(t){var e=decodeURI(window.location.pathname);return t&&0===e.toLowerCase().indexOf(t.toLowerCase())&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var It=function(t){function e(e,r,n){t.call(this,e,r),n&&function(t){var e=Ut(t);if(!/^\/#/.test(e))return window.location.replace(E(t+"/#"+e)),!0}(this.base)||Mt()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router.options.scrollBehavior,r=vt&&e;r&&this.listeners.push(it());var n=function(){var e=t.current;Mt()&&t.transitionTo(Vt(),(function(n){r&&at(t.router,n,e,!0),vt||zt(n.fullPath)}))},o=vt?"popstate":"hashchange";window.addEventListener(o,n),this.listeners.push((function(){window.removeEventListener(o,n)}))}},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){Ht(t.fullPath),at(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){zt(t.fullPath),at(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;Vt()!==e&&(t?Ht(e):zt(e))},e.prototype.getCurrentLocation=function(){return Vt()},e}($t);function Mt(){var t=Vt();return"/"===t.charAt(0)||(zt("/"+t),!1)}function Vt(){var t=window.location.href,e=t.indexOf("#");if(e<0)return"";var r=(t=t.slice(e+1)).indexOf("?");if(r<0){var n=t.indexOf("#");t=n>-1?decodeURI(t.slice(0,n))+t.slice(n):decodeURI(t)}else t=decodeURI(t.slice(0,r))+t.slice(r);return t}function Bt(t){var e=window.location.href,r=e.indexOf("#");return(r>=0?e.slice(0,r):e)+"#"+t}function Ht(t){vt?yt(Bt(t)):window.location.hash=t}function zt(t){vt?mt(Bt(t)):window.location.replace(Bt(t))}var Ft=function(t){function e(e,r){t.call(this,e,r),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,r){var n=this;this.transitionTo(t,(function(t){n.stack=n.stack.slice(0,n.index+1).concat(t),n.index++,e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this;this.transitionTo(t,(function(t){n.stack=n.stack.slice(0,n.index).concat(t),e&&e(t)}),r)},e.prototype.go=function(t){var e=this,r=this.index+t;if(!(r<0||r>=this.stack.length)){var n=this.stack[r];this.confirmTransition(n,(function(){e.index=r,e.updateRoute(n)}),(function(t){o(t,Ct)&&(e.index=r)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}($t),Nt=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=W(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!vt&&!1!==t.fallback,this.fallback&&(e="hash"),Q||(e="abstract"),this.mode=e,e){case"history":this.history=new qt(this,t.base);break;case"hash":this.history=new It(this,t.base,this.fallback);break;case"abstract":this.history=new Ft(this,t.base);break;default:0}},Dt={currentRoute:{configurable:!0}};function Jt(t,e){return t.push(e),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}Nt.prototype.match=function(t,e,r){return this.matcher.match(t,e,r)},Dt.currentRoute.get=function(){return this.history&&this.history.current},Nt.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var r=e.apps.indexOf(t);r>-1&&e.apps.splice(r,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardownListeners()})),!this.app){this.app=t;var r=this.history;if(r instanceof qt||r instanceof It){var n=function(){r.setupListeners()};r.transitionTo(r.getCurrentLocation(),n,n)}r.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},Nt.prototype.beforeEach=function(t){return Jt(this.beforeHooks,t)},Nt.prototype.beforeResolve=function(t){return Jt(this.resolveHooks,t)},Nt.prototype.afterEach=function(t){return Jt(this.afterHooks,t)},Nt.prototype.onReady=function(t,e){this.history.onReady(t,e)},Nt.prototype.onError=function(t){this.history.onError(t)},Nt.prototype.push=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!=typeof Promise)return new Promise((function(e,r){n.history.push(t,e,r)}));this.history.push(t,e,r)},Nt.prototype.replace=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!=typeof Promise)return new Promise((function(e,r){n.history.replace(t,e,r)}));this.history.replace(t,e,r)},Nt.prototype.go=function(t){this.history.go(t)},Nt.prototype.back=function(){this.go(-1)},Nt.prototype.forward=function(){this.go(1)},Nt.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},Nt.prototype.resolve=function(t,e,r){var n=F(t,e=e||this.history.current,r,this),o=this.match(n,e),i=o.redirectedFrom||o.fullPath;return{location:n,route:o,href:function(t,e,r){var n="hash"===r?"#"+e:e;return t?E(t+"/"+n):n}(this.history.base,i,this.mode),normalizedTo:n,resolved:o}},Nt.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==g&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(Nt.prototype,Dt),Nt.install=function t(e){if(!t.installed||N!==e){t.installed=!0,N=e;var r=function(t){return void 0!==t},n=function(t,e){var n=t.$options._parentVnode;r(n)&&r(n=n.data)&&r(n=n.registerRouteInstance)&&n(t,e)};e.mixin({beforeCreate:function(){r(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",a),e.component("RouterLink",J);var o=e.config.optionMergeStrategies;o.beforeRouteEnter=o.beforeRouteLeave=o.beforeRouteUpdate=o.created}},Nt.version="3.3.2",Q&&window.Vue&&window.Vue.use(Nt),e.a=Nt}}]);