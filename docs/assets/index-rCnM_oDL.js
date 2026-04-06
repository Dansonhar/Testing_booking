(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function M_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var vm={exports:{}},Ll={},xm={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ba=Symbol.for("react.element"),E_=Symbol.for("react.portal"),T_=Symbol.for("react.fragment"),w_=Symbol.for("react.strict_mode"),A_=Symbol.for("react.profiler"),C_=Symbol.for("react.provider"),R_=Symbol.for("react.context"),b_=Symbol.for("react.forward_ref"),P_=Symbol.for("react.suspense"),L_=Symbol.for("react.memo"),D_=Symbol.for("react.lazy"),ch=Symbol.iterator;function N_(t){return t===null||typeof t!="object"?null:(t=ch&&t[ch]||t["@@iterator"],typeof t=="function"?t:null)}var Sm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ym=Object.assign,Mm={};function Is(t,e,n){this.props=t,this.context=e,this.refs=Mm,this.updater=n||Sm}Is.prototype.isReactComponent={};Is.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Is.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Em(){}Em.prototype=Is.prototype;function Yf(t,e,n){this.props=t,this.context=e,this.refs=Mm,this.updater=n||Sm}var qf=Yf.prototype=new Em;qf.constructor=Yf;ym(qf,Is.prototype);qf.isPureReactComponent=!0;var fh=Array.isArray,Tm=Object.prototype.hasOwnProperty,$f={current:null},wm={key:!0,ref:!0,__self:!0,__source:!0};function Am(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Tm.call(e,i)&&!wm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ba,type:t,key:s,ref:a,props:r,_owner:$f.current}}function I_(t,e){return{$$typeof:Ba,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Kf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ba}function U_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var dh=/\/+/g;function tu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?U_(""+t.key):e.toString(36)}function Bo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ba:case E_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+tu(a,0):i,fh(r)?(n="",t!=null&&(n=t.replace(dh,"$&/")+"/"),Bo(r,e,n,"",function(u){return u})):r!=null&&(Kf(r)&&(r=I_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(dh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",fh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+tu(s,o);a+=Bo(s,e,n,l,r)}else if(l=N_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+tu(s,o++),a+=Bo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function $a(t,e,n){if(t==null)return t;var i=[],r=0;return Bo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function F_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var tn={current:null},ko={transition:null},O_={ReactCurrentDispatcher:tn,ReactCurrentBatchConfig:ko,ReactCurrentOwner:$f};function Cm(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:$a,forEach:function(t,e,n){$a(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $a(t,function(){e++}),e},toArray:function(t){return $a(t,function(e){return e})||[]},only:function(t){if(!Kf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Component=Is;Ve.Fragment=T_;Ve.Profiler=A_;Ve.PureComponent=Yf;Ve.StrictMode=w_;Ve.Suspense=P_;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O_;Ve.act=Cm;Ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=ym({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=$f.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Tm.call(e,l)&&!wm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Ba,type:t.type,key:r,ref:s,props:i,_owner:a}};Ve.createContext=function(t){return t={$$typeof:R_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:C_,_context:t},t.Consumer=t};Ve.createElement=Am;Ve.createFactory=function(t){var e=Am.bind(null,t);return e.type=t,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:b_,render:t}};Ve.isValidElement=Kf;Ve.lazy=function(t){return{$$typeof:D_,_payload:{_status:-1,_result:t},_init:F_}};Ve.memo=function(t,e){return{$$typeof:L_,type:t,compare:e===void 0?null:e}};Ve.startTransition=function(t){var e=ko.transition;ko.transition={};try{t()}finally{ko.transition=e}};Ve.unstable_act=Cm;Ve.useCallback=function(t,e){return tn.current.useCallback(t,e)};Ve.useContext=function(t){return tn.current.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t){return tn.current.useDeferredValue(t)};Ve.useEffect=function(t,e){return tn.current.useEffect(t,e)};Ve.useId=function(){return tn.current.useId()};Ve.useImperativeHandle=function(t,e,n){return tn.current.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return tn.current.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return tn.current.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return tn.current.useMemo(t,e)};Ve.useReducer=function(t,e,n){return tn.current.useReducer(t,e,n)};Ve.useRef=function(t){return tn.current.useRef(t)};Ve.useState=function(t){return tn.current.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return tn.current.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return tn.current.useTransition()};Ve.version="18.3.1";xm.exports=Ve;var It=xm.exports;const B_=M_(It);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k_=It,z_=Symbol.for("react.element"),V_=Symbol.for("react.fragment"),H_=Object.prototype.hasOwnProperty,G_=k_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W_={key:!0,ref:!0,__self:!0,__source:!0};function Rm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)H_.call(e,i)&&!W_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:z_,type:t,key:s,ref:a,props:r,_owner:G_.current}}Ll.Fragment=V_;Ll.jsx=Rm;Ll.jsxs=Rm;vm.exports=Ll;var P=vm.exports,ac={},bm={exports:{}},yn={},Pm={exports:{}},Lm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(G,B){var Q=G.length;G.push(B);e:for(;0<Q;){var ie=Q-1>>>1,se=G[ie];if(0<r(se,B))G[ie]=B,G[Q]=se,Q=ie;else break e}}function n(G){return G.length===0?null:G[0]}function i(G){if(G.length===0)return null;var B=G[0],Q=G.pop();if(Q!==B){G[0]=Q;e:for(var ie=0,se=G.length,Pe=se>>>1;ie<Pe;){var Ge=2*(ie+1)-1,Ye=G[Ge],q=Ge+1,re=G[q];if(0>r(Ye,Q))q<se&&0>r(re,Ye)?(G[ie]=re,G[q]=Q,ie=q):(G[ie]=Ye,G[Ge]=Q,ie=Ge);else if(q<se&&0>r(re,Q))G[ie]=re,G[q]=Q,ie=q;else break e}}return B}function r(G,B){var Q=G.sortIndex-B.sortIndex;return Q!==0?Q:G.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],d=1,p=null,f=3,m=!1,_=!1,M=!1,g=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(G){for(var B=n(u);B!==null;){if(B.callback===null)i(u);else if(B.startTime<=G)i(u),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(u)}}function y(G){if(M=!1,v(G),!_)if(n(l)!==null)_=!0,z(A);else{var B=n(u);B!==null&&O(y,B.startTime-G)}}function A(G,B){_=!1,M&&(M=!1,c(x),x=-1),m=!0;var Q=f;try{for(v(B),p=n(l);p!==null&&(!(p.expirationTime>B)||G&&!b());){var ie=p.callback;if(typeof ie=="function"){p.callback=null,f=p.priorityLevel;var se=ie(p.expirationTime<=B);B=t.unstable_now(),typeof se=="function"?p.callback=se:p===n(l)&&i(l),v(B)}else i(l);p=n(l)}if(p!==null)var Pe=!0;else{var Ge=n(u);Ge!==null&&O(y,Ge.startTime-B),Pe=!1}return Pe}finally{p=null,f=Q,m=!1}}var w=!1,C=null,x=-1,T=5,U=-1;function b(){return!(t.unstable_now()-U<T)}function k(){if(C!==null){var G=t.unstable_now();U=G;var B=!0;try{B=C(!0,G)}finally{B?F():(w=!1,C=null)}}else w=!1}var F;if(typeof h=="function")F=function(){h(k)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,H=j.port2;j.port1.onmessage=k,F=function(){H.postMessage(null)}}else F=function(){g(k,0)};function z(G){C=G,w||(w=!0,F())}function O(G,B){x=g(function(){G(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(G){G.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,z(A))},t.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<G?Math.floor(1e3/G):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(G){switch(f){case 1:case 2:case 3:var B=3;break;default:B=f}var Q=f;f=B;try{return G()}finally{f=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(G,B){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var Q=f;f=G;try{return B()}finally{f=Q}},t.unstable_scheduleCallback=function(G,B,Q){var ie=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ie+Q:ie):Q=ie,G){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=Q+se,G={id:d++,callback:B,priorityLevel:G,startTime:Q,expirationTime:se,sortIndex:-1},Q>ie?(G.sortIndex=Q,e(u,G),n(l)===null&&G===n(u)&&(M?(c(x),x=-1):M=!0,O(y,Q-ie))):(G.sortIndex=se,e(l,G),_||m||(_=!0,z(A))),G},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(G){var B=f;return function(){var Q=f;f=B;try{return G.apply(this,arguments)}finally{f=Q}}}})(Lm);Pm.exports=Lm;var X_=Pm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j_=It,Sn=X_;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dm=new Set,_a={};function Fr(t,e){ys(t,e),ys(t+"Capture",e)}function ys(t,e){for(_a[t]=e,t=0;t<e.length;t++)Dm.add(e[t])}var Ti=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oc=Object.prototype.hasOwnProperty,Y_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hh={},ph={};function q_(t){return oc.call(ph,t)?!0:oc.call(hh,t)?!1:Y_.test(t)?ph[t]=!0:(hh[t]=!0,!1)}function $_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function K_(t,e,n,i){if(e===null||typeof e>"u"||$_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function nn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){zt[t]=new nn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];zt[e]=new nn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){zt[t]=new nn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){zt[t]=new nn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){zt[t]=new nn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){zt[t]=new nn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){zt[t]=new nn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){zt[t]=new nn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){zt[t]=new nn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Zf=/[\-:]([a-z])/g;function Qf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Zf,Qf);zt[e]=new nn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Zf,Qf);zt[e]=new nn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Zf,Qf);zt[e]=new nn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){zt[t]=new nn(t,1,!1,t.toLowerCase(),null,!1,!1)});zt.xlinkHref=new nn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){zt[t]=new nn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Jf(t,e,n,i){var r=zt.hasOwnProperty(e)?zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(K_(e,n,r,i)&&(n=null),i||r===null?q_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Li=j_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ka=Symbol.for("react.element"),ts=Symbol.for("react.portal"),ns=Symbol.for("react.fragment"),ed=Symbol.for("react.strict_mode"),lc=Symbol.for("react.profiler"),Nm=Symbol.for("react.provider"),Im=Symbol.for("react.context"),td=Symbol.for("react.forward_ref"),uc=Symbol.for("react.suspense"),cc=Symbol.for("react.suspense_list"),nd=Symbol.for("react.memo"),Vi=Symbol.for("react.lazy"),Um=Symbol.for("react.offscreen"),mh=Symbol.iterator;function zs(t){return t===null||typeof t!="object"?null:(t=mh&&t[mh]||t["@@iterator"],typeof t=="function"?t:null)}var mt=Object.assign,nu;function ta(t){if(nu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);nu=e&&e[1]||""}return`
`+nu+t}var iu=!1;function ru(t,e){if(!t||iu)return"";iu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{iu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ta(t):""}function Z_(t){switch(t.tag){case 5:return ta(t.type);case 16:return ta("Lazy");case 13:return ta("Suspense");case 19:return ta("SuspenseList");case 0:case 2:case 15:return t=ru(t.type,!1),t;case 11:return t=ru(t.type.render,!1),t;case 1:return t=ru(t.type,!0),t;default:return""}}function fc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ns:return"Fragment";case ts:return"Portal";case lc:return"Profiler";case ed:return"StrictMode";case uc:return"Suspense";case cc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Im:return(t.displayName||"Context")+".Consumer";case Nm:return(t._context.displayName||"Context")+".Provider";case td:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case nd:return e=t.displayName||null,e!==null?e:fc(t.type)||"Memo";case Vi:e=t._payload,t=t._init;try{return fc(t(e))}catch{}}return null}function Q_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fc(e);case 8:return e===ed?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function J_(t){var e=Fm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Za(t){t._valueTracker||(t._valueTracker=J_(t))}function Om(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Fm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function nl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function dc(t,e){var n=e.checked;return mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function gh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Bm(t,e){e=e.checked,e!=null&&Jf(t,"checked",e,!1)}function hc(t,e){Bm(t,e);var n=ir(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?pc(t,e.type,n):e.hasOwnProperty("defaultValue")&&pc(t,e.type,ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function _h(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function pc(t,e,n){(e!=="number"||nl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var na=Array.isArray;function hs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ir(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function mc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function vh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(na(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ir(n)}}function km(t,e){var n=ir(e.value),i=ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function xh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function zm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?zm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qa,Vm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Qa=Qa||document.createElement("div"),Qa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Qa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function va(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var oa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ev=["Webkit","ms","Moz","O"];Object.keys(oa).forEach(function(t){ev.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),oa[e]=oa[t]})});function Hm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||oa.hasOwnProperty(t)&&oa[t]?(""+e).trim():e+"px"}function Gm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Hm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var tv=mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _c(t,e){if(e){if(tv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function vc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xc=null;function id(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sc=null,ps=null,ms=null;function Sh(t){if(t=Va(t)){if(typeof Sc!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=Fl(e),Sc(t.stateNode,t.type,e))}}function Wm(t){ps?ms?ms.push(t):ms=[t]:ps=t}function Xm(){if(ps){var t=ps,e=ms;if(ms=ps=null,Sh(t),e)for(t=0;t<e.length;t++)Sh(e[t])}}function jm(t,e){return t(e)}function Ym(){}var su=!1;function qm(t,e,n){if(su)return t(e,n);su=!0;try{return jm(t,e,n)}finally{su=!1,(ps!==null||ms!==null)&&(Ym(),Xm())}}function xa(t,e){var n=t.stateNode;if(n===null)return null;var i=Fl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var yc=!1;if(Ti)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){yc=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{yc=!1}function nv(t,e,n,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var la=!1,il=null,rl=!1,Mc=null,iv={onError:function(t){la=!0,il=t}};function rv(t,e,n,i,r,s,a,o,l){la=!1,il=null,nv.apply(iv,arguments)}function sv(t,e,n,i,r,s,a,o,l){if(rv.apply(this,arguments),la){if(la){var u=il;la=!1,il=null}else throw Error(ee(198));rl||(rl=!0,Mc=u)}}function Or(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $m(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yh(t){if(Or(t)!==t)throw Error(ee(188))}function av(t){var e=t.alternate;if(!e){if(e=Or(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return yh(r),t;if(s===i)return yh(r),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function Km(t){return t=av(t),t!==null?Zm(t):null}function Zm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Zm(t);if(e!==null)return e;t=t.sibling}return null}var Qm=Sn.unstable_scheduleCallback,Mh=Sn.unstable_cancelCallback,ov=Sn.unstable_shouldYield,lv=Sn.unstable_requestPaint,St=Sn.unstable_now,uv=Sn.unstable_getCurrentPriorityLevel,rd=Sn.unstable_ImmediatePriority,Jm=Sn.unstable_UserBlockingPriority,sl=Sn.unstable_NormalPriority,cv=Sn.unstable_LowPriority,eg=Sn.unstable_IdlePriority,Dl=null,ni=null;function fv(t){if(ni&&typeof ni.onCommitFiberRoot=="function")try{ni.onCommitFiberRoot(Dl,t,void 0,(t.current.flags&128)===128)}catch{}}var Gn=Math.clz32?Math.clz32:pv,dv=Math.log,hv=Math.LN2;function pv(t){return t>>>=0,t===0?32:31-(dv(t)/hv|0)|0}var Ja=64,eo=4194304;function ia(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function al(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ia(o):(s&=a,s!==0&&(i=ia(s)))}else a=n&~r,a!==0?i=ia(a):s!==0&&(i=ia(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Gn(e),r=1<<n,i|=t[n],e&=~r;return i}function mv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Gn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=mv(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Ec(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function tg(){var t=Ja;return Ja<<=1,!(Ja&4194240)&&(Ja=64),t}function au(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ka(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Gn(e),t[e]=n}function _v(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Gn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function sd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Gn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var nt=0;function ng(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ig,ad,rg,sg,ag,Tc=!1,to=[],$i=null,Ki=null,Zi=null,Sa=new Map,ya=new Map,Gi=[],vv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Eh(t,e){switch(t){case"focusin":case"focusout":$i=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":Sa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ya.delete(e.pointerId)}}function Hs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Va(e),e!==null&&ad(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function xv(t,e,n,i,r){switch(e){case"focusin":return $i=Hs($i,t,e,n,i,r),!0;case"dragenter":return Ki=Hs(Ki,t,e,n,i,r),!0;case"mouseover":return Zi=Hs(Zi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Sa.set(s,Hs(Sa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ya.set(s,Hs(ya.get(s)||null,t,e,n,i,r)),!0}return!1}function og(t){var e=Er(t.target);if(e!==null){var n=Or(e);if(n!==null){if(e=n.tag,e===13){if(e=$m(n),e!==null){t.blockedOn=e,ag(t.priority,function(){rg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);xc=i,n.target.dispatchEvent(i),xc=null}else return e=Va(n),e!==null&&ad(e),t.blockedOn=n,!1;e.shift()}return!0}function Th(t,e,n){zo(t)&&n.delete(e)}function Sv(){Tc=!1,$i!==null&&zo($i)&&($i=null),Ki!==null&&zo(Ki)&&(Ki=null),Zi!==null&&zo(Zi)&&(Zi=null),Sa.forEach(Th),ya.forEach(Th)}function Gs(t,e){t.blockedOn===e&&(t.blockedOn=null,Tc||(Tc=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,Sv)))}function Ma(t){function e(r){return Gs(r,t)}if(0<to.length){Gs(to[0],t);for(var n=1;n<to.length;n++){var i=to[n];i.blockedOn===t&&(i.blockedOn=null)}}for($i!==null&&Gs($i,t),Ki!==null&&Gs(Ki,t),Zi!==null&&Gs(Zi,t),Sa.forEach(e),ya.forEach(e),n=0;n<Gi.length;n++)i=Gi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Gi.length&&(n=Gi[0],n.blockedOn===null);)og(n),n.blockedOn===null&&Gi.shift()}var gs=Li.ReactCurrentBatchConfig,ol=!0;function yv(t,e,n,i){var r=nt,s=gs.transition;gs.transition=null;try{nt=1,od(t,e,n,i)}finally{nt=r,gs.transition=s}}function Mv(t,e,n,i){var r=nt,s=gs.transition;gs.transition=null;try{nt=4,od(t,e,n,i)}finally{nt=r,gs.transition=s}}function od(t,e,n,i){if(ol){var r=wc(t,e,n,i);if(r===null)gu(t,e,i,ll,n),Eh(t,i);else if(xv(r,t,e,n,i))i.stopPropagation();else if(Eh(t,i),e&4&&-1<vv.indexOf(t)){for(;r!==null;){var s=Va(r);if(s!==null&&ig(s),s=wc(t,e,n,i),s===null&&gu(t,e,i,ll,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else gu(t,e,i,null,n)}}var ll=null;function wc(t,e,n,i){if(ll=null,t=id(i),t=Er(t),t!==null)if(e=Or(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$m(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ll=t,null}function lg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uv()){case rd:return 1;case Jm:return 4;case sl:case cv:return 16;case eg:return 536870912;default:return 16}default:return 16}}var ji=null,ld=null,Vo=null;function ug(){if(Vo)return Vo;var t,e=ld,n=e.length,i,r="value"in ji?ji.value:ji.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Vo=r.slice(t,1<i?1-i:void 0)}function Ho(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function no(){return!0}function wh(){return!1}function Mn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?no:wh,this.isPropagationStopped=wh,this}return mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=no)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=no)},persist:function(){},isPersistent:no}),e}var Us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ud=Mn(Us),za=mt({},Us,{view:0,detail:0}),Ev=Mn(za),ou,lu,Ws,Nl=mt({},za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ws&&(Ws&&t.type==="mousemove"?(ou=t.screenX-Ws.screenX,lu=t.screenY-Ws.screenY):lu=ou=0,Ws=t),ou)},movementY:function(t){return"movementY"in t?t.movementY:lu}}),Ah=Mn(Nl),Tv=mt({},Nl,{dataTransfer:0}),wv=Mn(Tv),Av=mt({},za,{relatedTarget:0}),uu=Mn(Av),Cv=mt({},Us,{animationName:0,elapsedTime:0,pseudoElement:0}),Rv=Mn(Cv),bv=mt({},Us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Pv=Mn(bv),Lv=mt({},Us,{data:0}),Ch=Mn(Lv),Dv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Iv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Iv[t])?!!e[t]:!1}function cd(){return Uv}var Fv=mt({},za,{key:function(t){if(t.key){var e=Dv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ho(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Nv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cd,charCode:function(t){return t.type==="keypress"?Ho(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ho(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ov=Mn(Fv),Bv=mt({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rh=Mn(Bv),kv=mt({},za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cd}),zv=Mn(kv),Vv=mt({},Us,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hv=Mn(Vv),Gv=mt({},Nl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Wv=Mn(Gv),Xv=[9,13,27,32],fd=Ti&&"CompositionEvent"in window,ua=null;Ti&&"documentMode"in document&&(ua=document.documentMode);var jv=Ti&&"TextEvent"in window&&!ua,cg=Ti&&(!fd||ua&&8<ua&&11>=ua),bh=" ",Ph=!1;function fg(t,e){switch(t){case"keyup":return Xv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var is=!1;function Yv(t,e){switch(t){case"compositionend":return dg(e);case"keypress":return e.which!==32?null:(Ph=!0,bh);case"textInput":return t=e.data,t===bh&&Ph?null:t;default:return null}}function qv(t,e){if(is)return t==="compositionend"||!fd&&fg(t,e)?(t=ug(),Vo=ld=ji=null,is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return cg&&e.locale!=="ko"?null:e.data;default:return null}}var $v={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!$v[t.type]:e==="textarea"}function hg(t,e,n,i){Wm(i),e=ul(e,"onChange"),0<e.length&&(n=new ud("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ca=null,Ea=null;function Kv(t){Tg(t,0)}function Il(t){var e=as(t);if(Om(e))return t}function Zv(t,e){if(t==="change")return e}var pg=!1;if(Ti){var cu;if(Ti){var fu="oninput"in document;if(!fu){var Dh=document.createElement("div");Dh.setAttribute("oninput","return;"),fu=typeof Dh.oninput=="function"}cu=fu}else cu=!1;pg=cu&&(!document.documentMode||9<document.documentMode)}function Nh(){ca&&(ca.detachEvent("onpropertychange",mg),Ea=ca=null)}function mg(t){if(t.propertyName==="value"&&Il(Ea)){var e=[];hg(e,Ea,t,id(t)),qm(Kv,e)}}function Qv(t,e,n){t==="focusin"?(Nh(),ca=e,Ea=n,ca.attachEvent("onpropertychange",mg)):t==="focusout"&&Nh()}function Jv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Il(Ea)}function ex(t,e){if(t==="click")return Il(e)}function tx(t,e){if(t==="input"||t==="change")return Il(e)}function nx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Xn=typeof Object.is=="function"?Object.is:nx;function Ta(t,e){if(Xn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!oc.call(e,r)||!Xn(t[r],e[r]))return!1}return!0}function Ih(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Uh(t,e){var n=Ih(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ih(n)}}function gg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?gg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _g(){for(var t=window,e=nl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=nl(t.document)}return e}function dd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ix(t){var e=_g(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&gg(n.ownerDocument.documentElement,n)){if(i!==null&&dd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Uh(n,s);var a=Uh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rx=Ti&&"documentMode"in document&&11>=document.documentMode,rs=null,Ac=null,fa=null,Cc=!1;function Fh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cc||rs==null||rs!==nl(i)||(i=rs,"selectionStart"in i&&dd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),fa&&Ta(fa,i)||(fa=i,i=ul(Ac,"onSelect"),0<i.length&&(e=new ud("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=rs)))}function io(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ss={animationend:io("Animation","AnimationEnd"),animationiteration:io("Animation","AnimationIteration"),animationstart:io("Animation","AnimationStart"),transitionend:io("Transition","TransitionEnd")},du={},vg={};Ti&&(vg=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function Ul(t){if(du[t])return du[t];if(!ss[t])return t;var e=ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in vg)return du[t]=e[n];return t}var xg=Ul("animationend"),Sg=Ul("animationiteration"),yg=Ul("animationstart"),Mg=Ul("transitionend"),Eg=new Map,Oh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ar(t,e){Eg.set(t,e),Fr(e,[t])}for(var hu=0;hu<Oh.length;hu++){var pu=Oh[hu],sx=pu.toLowerCase(),ax=pu[0].toUpperCase()+pu.slice(1);ar(sx,"on"+ax)}ar(xg,"onAnimationEnd");ar(Sg,"onAnimationIteration");ar(yg,"onAnimationStart");ar("dblclick","onDoubleClick");ar("focusin","onFocus");ar("focusout","onBlur");ar(Mg,"onTransitionEnd");ys("onMouseEnter",["mouseout","mouseover"]);ys("onMouseLeave",["mouseout","mouseover"]);ys("onPointerEnter",["pointerout","pointerover"]);ys("onPointerLeave",["pointerout","pointerover"]);Fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ox=new Set("cancel close invalid load scroll toggle".split(" ").concat(ra));function Bh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,sv(i,e,void 0,t),t.currentTarget=null}function Tg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Bh(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Bh(r,o,u),s=l}}}if(rl)throw t=Mc,rl=!1,Mc=null,t}function ct(t,e){var n=e[Dc];n===void 0&&(n=e[Dc]=new Set);var i=t+"__bubble";n.has(i)||(wg(e,t,2,!1),n.add(i))}function mu(t,e,n){var i=0;e&&(i|=4),wg(n,t,i,e)}var ro="_reactListening"+Math.random().toString(36).slice(2);function wa(t){if(!t[ro]){t[ro]=!0,Dm.forEach(function(n){n!=="selectionchange"&&(ox.has(n)||mu(n,!1,t),mu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ro]||(e[ro]=!0,mu("selectionchange",!1,e))}}function wg(t,e,n,i){switch(lg(e)){case 1:var r=yv;break;case 4:r=Mv;break;default:r=od}n=r.bind(null,e,n,t),r=void 0,!yc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function gu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Er(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}qm(function(){var u=s,d=id(n),p=[];e:{var f=Eg.get(t);if(f!==void 0){var m=ud,_=t;switch(t){case"keypress":if(Ho(n)===0)break e;case"keydown":case"keyup":m=Ov;break;case"focusin":_="focus",m=uu;break;case"focusout":_="blur",m=uu;break;case"beforeblur":case"afterblur":m=uu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Ah;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=wv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=zv;break;case xg:case Sg:case yg:m=Rv;break;case Mg:m=Hv;break;case"scroll":m=Ev;break;case"wheel":m=Wv;break;case"copy":case"cut":case"paste":m=Pv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Rh}var M=(e&4)!==0,g=!M&&t==="scroll",c=M?f!==null?f+"Capture":null:f;M=[];for(var h=u,v;h!==null;){v=h;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,c!==null&&(y=xa(h,c),y!=null&&M.push(Aa(h,y,v)))),g)break;h=h.return}0<M.length&&(f=new m(f,_,null,n,d),p.push({event:f,listeners:M}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==xc&&(_=n.relatedTarget||n.fromElement)&&(Er(_)||_[wi]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=u,_=_?Er(_):null,_!==null&&(g=Or(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=u),m!==_)){if(M=Ah,y="onMouseLeave",c="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(M=Rh,y="onPointerLeave",c="onPointerEnter",h="pointer"),g=m==null?f:as(m),v=_==null?f:as(_),f=new M(y,h+"leave",m,n,d),f.target=g,f.relatedTarget=v,y=null,Er(d)===u&&(M=new M(c,h+"enter",_,n,d),M.target=v,M.relatedTarget=g,y=M),g=y,m&&_)t:{for(M=m,c=_,h=0,v=M;v;v=zr(v))h++;for(v=0,y=c;y;y=zr(y))v++;for(;0<h-v;)M=zr(M),h--;for(;0<v-h;)c=zr(c),v--;for(;h--;){if(M===c||c!==null&&M===c.alternate)break t;M=zr(M),c=zr(c)}M=null}else M=null;m!==null&&kh(p,f,m,M,!1),_!==null&&g!==null&&kh(p,g,_,M,!0)}}e:{if(f=u?as(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var A=Zv;else if(Lh(f))if(pg)A=tx;else{A=Jv;var w=Qv}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(A=ex);if(A&&(A=A(t,u))){hg(p,A,n,d);break e}w&&w(t,f,u),t==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&pc(f,"number",f.value)}switch(w=u?as(u):window,t){case"focusin":(Lh(w)||w.contentEditable==="true")&&(rs=w,Ac=u,fa=null);break;case"focusout":fa=Ac=rs=null;break;case"mousedown":Cc=!0;break;case"contextmenu":case"mouseup":case"dragend":Cc=!1,Fh(p,n,d);break;case"selectionchange":if(rx)break;case"keydown":case"keyup":Fh(p,n,d)}var C;if(fd)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else is?fg(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(cg&&n.locale!=="ko"&&(is||x!=="onCompositionStart"?x==="onCompositionEnd"&&is&&(C=ug()):(ji=d,ld="value"in ji?ji.value:ji.textContent,is=!0)),w=ul(u,x),0<w.length&&(x=new Ch(x,t,null,n,d),p.push({event:x,listeners:w}),C?x.data=C:(C=dg(n),C!==null&&(x.data=C)))),(C=jv?Yv(t,n):qv(t,n))&&(u=ul(u,"onBeforeInput"),0<u.length&&(d=new Ch("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=C))}Tg(p,e)})}function Aa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ul(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=xa(t,n),s!=null&&i.unshift(Aa(t,s,r)),s=xa(t,e),s!=null&&i.push(Aa(t,s,r))),t=t.return}return i}function zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=xa(n,s),l!=null&&a.unshift(Aa(n,l,o))):r||(l=xa(n,s),l!=null&&a.push(Aa(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var lx=/\r\n?/g,ux=/\u0000|\uFFFD/g;function zh(t){return(typeof t=="string"?t:""+t).replace(lx,`
`).replace(ux,"")}function so(t,e,n){if(e=zh(e),zh(t)!==e&&n)throw Error(ee(425))}function cl(){}var Rc=null,bc=null;function Pc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Lc=typeof setTimeout=="function"?setTimeout:void 0,cx=typeof clearTimeout=="function"?clearTimeout:void 0,Vh=typeof Promise=="function"?Promise:void 0,fx=typeof queueMicrotask=="function"?queueMicrotask:typeof Vh<"u"?function(t){return Vh.resolve(null).then(t).catch(dx)}:Lc;function dx(t){setTimeout(function(){throw t})}function _u(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ma(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ma(e)}function Qi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),Jn="__reactFiber$"+Fs,Ca="__reactProps$"+Fs,wi="__reactContainer$"+Fs,Dc="__reactEvents$"+Fs,hx="__reactListeners$"+Fs,px="__reactHandles$"+Fs;function Er(t){var e=t[Jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[wi]||n[Jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hh(t);t!==null;){if(n=t[Jn])return n;t=Hh(t)}return e}t=n,n=t.parentNode}return null}function Va(t){return t=t[Jn]||t[wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function as(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function Fl(t){return t[Ca]||null}var Nc=[],os=-1;function or(t){return{current:t}}function ft(t){0>os||(t.current=Nc[os],Nc[os]=null,os--)}function ut(t,e){os++,Nc[os]=t.current,t.current=e}var rr={},qt=or(rr),on=or(!1),Pr=rr;function Ms(t,e){var n=t.type.contextTypes;if(!n)return rr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function ln(t){return t=t.childContextTypes,t!=null}function fl(){ft(on),ft(qt)}function Gh(t,e,n){if(qt.current!==rr)throw Error(ee(168));ut(qt,e),ut(on,n)}function Ag(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,Q_(t)||"Unknown",r));return mt({},n,i)}function dl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||rr,Pr=qt.current,ut(qt,t),ut(on,on.current),!0}function Wh(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=Ag(t,e,Pr),i.__reactInternalMemoizedMergedChildContext=t,ft(on),ft(qt),ut(qt,t)):ft(on),ut(on,n)}var gi=null,Ol=!1,vu=!1;function Cg(t){gi===null?gi=[t]:gi.push(t)}function mx(t){Ol=!0,Cg(t)}function lr(){if(!vu&&gi!==null){vu=!0;var t=0,e=nt;try{var n=gi;for(nt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}gi=null,Ol=!1}catch(r){throw gi!==null&&(gi=gi.slice(t+1)),Qm(rd,lr),r}finally{nt=e,vu=!1}}return null}var ls=[],us=0,hl=null,pl=0,wn=[],An=0,Lr=null,vi=1,xi="";function vr(t,e){ls[us++]=pl,ls[us++]=hl,hl=t,pl=e}function Rg(t,e,n){wn[An++]=vi,wn[An++]=xi,wn[An++]=Lr,Lr=t;var i=vi;t=xi;var r=32-Gn(i)-1;i&=~(1<<r),n+=1;var s=32-Gn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,vi=1<<32-Gn(e)+r|n<<r|i,xi=s+t}else vi=1<<s|n<<r|i,xi=t}function hd(t){t.return!==null&&(vr(t,1),Rg(t,1,0))}function pd(t){for(;t===hl;)hl=ls[--us],ls[us]=null,pl=ls[--us],ls[us]=null;for(;t===Lr;)Lr=wn[--An],wn[An]=null,xi=wn[--An],wn[An]=null,vi=wn[--An],wn[An]=null}var xn=null,vn=null,dt=!1,zn=null;function bg(t,e){var n=Rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Xh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xn=t,vn=Qi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xn=t,vn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Lr!==null?{id:vi,overflow:xi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xn=t,vn=null,!0):!1;default:return!1}}function Ic(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Uc(t){if(dt){var e=vn;if(e){var n=e;if(!Xh(t,e)){if(Ic(t))throw Error(ee(418));e=Qi(n.nextSibling);var i=xn;e&&Xh(t,e)?bg(i,n):(t.flags=t.flags&-4097|2,dt=!1,xn=t)}}else{if(Ic(t))throw Error(ee(418));t.flags=t.flags&-4097|2,dt=!1,xn=t}}}function jh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xn=t}function ao(t){if(t!==xn)return!1;if(!dt)return jh(t),dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Pc(t.type,t.memoizedProps)),e&&(e=vn)){if(Ic(t))throw Pg(),Error(ee(418));for(;e;)bg(t,e),e=Qi(e.nextSibling)}if(jh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vn=Qi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vn=null}}else vn=xn?Qi(t.stateNode.nextSibling):null;return!0}function Pg(){for(var t=vn;t;)t=Qi(t.nextSibling)}function Es(){vn=xn=null,dt=!1}function md(t){zn===null?zn=[t]:zn.push(t)}var gx=Li.ReactCurrentBatchConfig;function Xs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function oo(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Yh(t){var e=t._init;return e(t._payload)}function Lg(t){function e(c,h){if(t){var v=c.deletions;v===null?(c.deletions=[h],c.flags|=16):v.push(h)}}function n(c,h){if(!t)return null;for(;h!==null;)e(c,h),h=h.sibling;return null}function i(c,h){for(c=new Map;h!==null;)h.key!==null?c.set(h.key,h):c.set(h.index,h),h=h.sibling;return c}function r(c,h){return c=nr(c,h),c.index=0,c.sibling=null,c}function s(c,h,v){return c.index=v,t?(v=c.alternate,v!==null?(v=v.index,v<h?(c.flags|=2,h):v):(c.flags|=2,h)):(c.flags|=1048576,h)}function a(c){return t&&c.alternate===null&&(c.flags|=2),c}function o(c,h,v,y){return h===null||h.tag!==6?(h=wu(v,c.mode,y),h.return=c,h):(h=r(h,v),h.return=c,h)}function l(c,h,v,y){var A=v.type;return A===ns?d(c,h,v.props.children,y,v.key):h!==null&&(h.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Vi&&Yh(A)===h.type)?(y=r(h,v.props),y.ref=Xs(c,h,v),y.return=c,y):(y=$o(v.type,v.key,v.props,null,c.mode,y),y.ref=Xs(c,h,v),y.return=c,y)}function u(c,h,v,y){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=Au(v,c.mode,y),h.return=c,h):(h=r(h,v.children||[]),h.return=c,h)}function d(c,h,v,y,A){return h===null||h.tag!==7?(h=br(v,c.mode,y,A),h.return=c,h):(h=r(h,v),h.return=c,h)}function p(c,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=wu(""+h,c.mode,v),h.return=c,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ka:return v=$o(h.type,h.key,h.props,null,c.mode,v),v.ref=Xs(c,null,h),v.return=c,v;case ts:return h=Au(h,c.mode,v),h.return=c,h;case Vi:var y=h._init;return p(c,y(h._payload),v)}if(na(h)||zs(h))return h=br(h,c.mode,v,null),h.return=c,h;oo(c,h)}return null}function f(c,h,v,y){var A=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return A!==null?null:o(c,h,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ka:return v.key===A?l(c,h,v,y):null;case ts:return v.key===A?u(c,h,v,y):null;case Vi:return A=v._init,f(c,h,A(v._payload),y)}if(na(v)||zs(v))return A!==null?null:d(c,h,v,y,null);oo(c,v)}return null}function m(c,h,v,y,A){if(typeof y=="string"&&y!==""||typeof y=="number")return c=c.get(v)||null,o(h,c,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ka:return c=c.get(y.key===null?v:y.key)||null,l(h,c,y,A);case ts:return c=c.get(y.key===null?v:y.key)||null,u(h,c,y,A);case Vi:var w=y._init;return m(c,h,v,w(y._payload),A)}if(na(y)||zs(y))return c=c.get(v)||null,d(h,c,y,A,null);oo(h,y)}return null}function _(c,h,v,y){for(var A=null,w=null,C=h,x=h=0,T=null;C!==null&&x<v.length;x++){C.index>x?(T=C,C=null):T=C.sibling;var U=f(c,C,v[x],y);if(U===null){C===null&&(C=T);break}t&&C&&U.alternate===null&&e(c,C),h=s(U,h,x),w===null?A=U:w.sibling=U,w=U,C=T}if(x===v.length)return n(c,C),dt&&vr(c,x),A;if(C===null){for(;x<v.length;x++)C=p(c,v[x],y),C!==null&&(h=s(C,h,x),w===null?A=C:w.sibling=C,w=C);return dt&&vr(c,x),A}for(C=i(c,C);x<v.length;x++)T=m(C,c,x,v[x],y),T!==null&&(t&&T.alternate!==null&&C.delete(T.key===null?x:T.key),h=s(T,h,x),w===null?A=T:w.sibling=T,w=T);return t&&C.forEach(function(b){return e(c,b)}),dt&&vr(c,x),A}function M(c,h,v,y){var A=zs(v);if(typeof A!="function")throw Error(ee(150));if(v=A.call(v),v==null)throw Error(ee(151));for(var w=A=null,C=h,x=h=0,T=null,U=v.next();C!==null&&!U.done;x++,U=v.next()){C.index>x?(T=C,C=null):T=C.sibling;var b=f(c,C,U.value,y);if(b===null){C===null&&(C=T);break}t&&C&&b.alternate===null&&e(c,C),h=s(b,h,x),w===null?A=b:w.sibling=b,w=b,C=T}if(U.done)return n(c,C),dt&&vr(c,x),A;if(C===null){for(;!U.done;x++,U=v.next())U=p(c,U.value,y),U!==null&&(h=s(U,h,x),w===null?A=U:w.sibling=U,w=U);return dt&&vr(c,x),A}for(C=i(c,C);!U.done;x++,U=v.next())U=m(C,c,x,U.value,y),U!==null&&(t&&U.alternate!==null&&C.delete(U.key===null?x:U.key),h=s(U,h,x),w===null?A=U:w.sibling=U,w=U);return t&&C.forEach(function(k){return e(c,k)}),dt&&vr(c,x),A}function g(c,h,v,y){if(typeof v=="object"&&v!==null&&v.type===ns&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ka:e:{for(var A=v.key,w=h;w!==null;){if(w.key===A){if(A=v.type,A===ns){if(w.tag===7){n(c,w.sibling),h=r(w,v.props.children),h.return=c,c=h;break e}}else if(w.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Vi&&Yh(A)===w.type){n(c,w.sibling),h=r(w,v.props),h.ref=Xs(c,w,v),h.return=c,c=h;break e}n(c,w);break}else e(c,w);w=w.sibling}v.type===ns?(h=br(v.props.children,c.mode,y,v.key),h.return=c,c=h):(y=$o(v.type,v.key,v.props,null,c.mode,y),y.ref=Xs(c,h,v),y.return=c,c=y)}return a(c);case ts:e:{for(w=v.key;h!==null;){if(h.key===w)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(c,h.sibling),h=r(h,v.children||[]),h.return=c,c=h;break e}else{n(c,h);break}else e(c,h);h=h.sibling}h=Au(v,c.mode,y),h.return=c,c=h}return a(c);case Vi:return w=v._init,g(c,h,w(v._payload),y)}if(na(v))return _(c,h,v,y);if(zs(v))return M(c,h,v,y);oo(c,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(c,h.sibling),h=r(h,v),h.return=c,c=h):(n(c,h),h=wu(v,c.mode,y),h.return=c,c=h),a(c)):n(c,h)}return g}var Ts=Lg(!0),Dg=Lg(!1),ml=or(null),gl=null,cs=null,gd=null;function _d(){gd=cs=gl=null}function vd(t){var e=ml.current;ft(ml),t._currentValue=e}function Fc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function _s(t,e){gl=t,gd=cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(an=!0),t.firstContext=null)}function Ln(t){var e=t._currentValue;if(gd!==t)if(t={context:t,memoizedValue:e,next:null},cs===null){if(gl===null)throw Error(ee(308));cs=t,gl.dependencies={lanes:0,firstContext:t}}else cs=cs.next=t;return e}var Tr=null;function xd(t){Tr===null?Tr=[t]:Tr.push(t)}function Ng(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,xd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ai(t,i)}function Ai(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hi=!1;function Sd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ig(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ji(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ai(t,n)}return r=i.interleaved,r===null?(e.next=e,xd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ai(t,n)}function Go(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,sd(t,n)}}function qh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _l(t,e,n,i){var r=t.updateQueue;Hi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=u:o.next=u,d.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;a=0,d=u=l=null,o=s;do{var f=o.lane,m=o.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,M=o;switch(f=e,m=n,M.tag){case 1:if(_=M.payload,typeof _=="function"){p=_.call(m,p,f);break e}p=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=M.payload,f=typeof _=="function"?_.call(m,p,f):_,f==null)break e;p=mt({},p,f);break e;case 2:Hi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else m={eventTime:m,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=m,l=p):d=d.next=m,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=p),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Nr|=a,t.lanes=a,t.memoizedState=p}}function $h(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var Ha={},ii=or(Ha),Ra=or(Ha),ba=or(Ha);function wr(t){if(t===Ha)throw Error(ee(174));return t}function yd(t,e){switch(ut(ba,e),ut(Ra,t),ut(ii,Ha),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gc(e,t)}ft(ii),ut(ii,e)}function ws(){ft(ii),ft(Ra),ft(ba)}function Ug(t){wr(ba.current);var e=wr(ii.current),n=gc(e,t.type);e!==n&&(ut(Ra,t),ut(ii,n))}function Md(t){Ra.current===t&&(ft(ii),ft(Ra))}var ht=or(0);function vl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var xu=[];function Ed(){for(var t=0;t<xu.length;t++)xu[t]._workInProgressVersionPrimary=null;xu.length=0}var Wo=Li.ReactCurrentDispatcher,Su=Li.ReactCurrentBatchConfig,Dr=0,pt=null,At=null,Nt=null,xl=!1,da=!1,Pa=0,_x=0;function Ht(){throw Error(ee(321))}function Td(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Xn(t[n],e[n]))return!1;return!0}function wd(t,e,n,i,r,s){if(Dr=s,pt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Wo.current=t===null||t.memoizedState===null?yx:Mx,t=n(i,r),da){s=0;do{if(da=!1,Pa=0,25<=s)throw Error(ee(301));s+=1,Nt=At=null,e.updateQueue=null,Wo.current=Ex,t=n(i,r)}while(da)}if(Wo.current=Sl,e=At!==null&&At.next!==null,Dr=0,Nt=At=pt=null,xl=!1,e)throw Error(ee(300));return t}function Ad(){var t=Pa!==0;return Pa=0,t}function Kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?pt.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function Dn(){if(At===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Nt===null?pt.memoizedState:Nt.next;if(e!==null)Nt=e,At=t;else{if(t===null)throw Error(ee(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Nt===null?pt.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function La(t,e){return typeof e=="function"?e(t):e}function yu(t){var e=Dn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=At,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var d=u.lane;if((Dr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=p,a=i):l=l.next=p,pt.lanes|=d,Nr|=d}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,Xn(i,e.memoizedState)||(an=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,pt.lanes|=s,Nr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Mu(t){var e=Dn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Xn(s,e.memoizedState)||(an=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Fg(){}function Og(t,e){var n=pt,i=Dn(),r=e(),s=!Xn(i.memoizedState,r);if(s&&(i.memoizedState=r,an=!0),i=i.queue,Cd(zg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Nt!==null&&Nt.memoizedState.tag&1){if(n.flags|=2048,Da(9,kg.bind(null,n,i,r,e),void 0,null),Ut===null)throw Error(ee(349));Dr&30||Bg(n,e,r)}return r}function Bg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function kg(t,e,n,i){e.value=n,e.getSnapshot=i,Vg(e)&&Hg(t)}function zg(t,e,n){return n(function(){Vg(e)&&Hg(t)})}function Vg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Xn(t,n)}catch{return!0}}function Hg(t){var e=Ai(t,1);e!==null&&Wn(e,t,1,-1)}function Kh(t){var e=Kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:t},e.queue=t,t=t.dispatch=Sx.bind(null,pt,t),[e.memoizedState,t]}function Da(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Gg(){return Dn().memoizedState}function Xo(t,e,n,i){var r=Kn();pt.flags|=t,r.memoizedState=Da(1|e,n,void 0,i===void 0?null:i)}function Bl(t,e,n,i){var r=Dn();i=i===void 0?null:i;var s=void 0;if(At!==null){var a=At.memoizedState;if(s=a.destroy,i!==null&&Td(i,a.deps)){r.memoizedState=Da(e,n,s,i);return}}pt.flags|=t,r.memoizedState=Da(1|e,n,s,i)}function Zh(t,e){return Xo(8390656,8,t,e)}function Cd(t,e){return Bl(2048,8,t,e)}function Wg(t,e){return Bl(4,2,t,e)}function Xg(t,e){return Bl(4,4,t,e)}function jg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Yg(t,e,n){return n=n!=null?n.concat([t]):null,Bl(4,4,jg.bind(null,e,t),n)}function Rd(){}function qg(t,e){var n=Dn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Td(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function $g(t,e){var n=Dn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Td(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Kg(t,e,n){return Dr&21?(Xn(n,e)||(n=tg(),pt.lanes|=n,Nr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,an=!0),t.memoizedState=n)}function vx(t,e){var n=nt;nt=n!==0&&4>n?n:4,t(!0);var i=Su.transition;Su.transition={};try{t(!1),e()}finally{nt=n,Su.transition=i}}function Zg(){return Dn().memoizedState}function xx(t,e,n){var i=tr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Qg(t))Jg(e,n);else if(n=Ng(t,e,n,i),n!==null){var r=Qt();Wn(n,t,i,r),e0(n,e,i)}}function Sx(t,e,n){var i=tr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qg(t))Jg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Xn(o,a)){var l=e.interleaved;l===null?(r.next=r,xd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Ng(t,e,r,i),n!==null&&(r=Qt(),Wn(n,t,i,r),e0(n,e,i))}}function Qg(t){var e=t.alternate;return t===pt||e!==null&&e===pt}function Jg(t,e){da=xl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function e0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,sd(t,n)}}var Sl={readContext:Ln,useCallback:Ht,useContext:Ht,useEffect:Ht,useImperativeHandle:Ht,useInsertionEffect:Ht,useLayoutEffect:Ht,useMemo:Ht,useReducer:Ht,useRef:Ht,useState:Ht,useDebugValue:Ht,useDeferredValue:Ht,useTransition:Ht,useMutableSource:Ht,useSyncExternalStore:Ht,useId:Ht,unstable_isNewReconciler:!1},yx={readContext:Ln,useCallback:function(t,e){return Kn().memoizedState=[t,e===void 0?null:e],t},useContext:Ln,useEffect:Zh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xo(4194308,4,jg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xo(4,2,t,e)},useMemo:function(t,e){var n=Kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Kn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=xx.bind(null,pt,t),[i.memoizedState,t]},useRef:function(t){var e=Kn();return t={current:t},e.memoizedState=t},useState:Kh,useDebugValue:Rd,useDeferredValue:function(t){return Kn().memoizedState=t},useTransition:function(){var t=Kh(!1),e=t[0];return t=vx.bind(null,t[1]),Kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=pt,r=Kn();if(dt){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),Ut===null)throw Error(ee(349));Dr&30||Bg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Zh(zg.bind(null,i,s,t),[t]),i.flags|=2048,Da(9,kg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Kn(),e=Ut.identifierPrefix;if(dt){var n=xi,i=vi;n=(i&~(1<<32-Gn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Pa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_x++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Mx={readContext:Ln,useCallback:qg,useContext:Ln,useEffect:Cd,useImperativeHandle:Yg,useInsertionEffect:Wg,useLayoutEffect:Xg,useMemo:$g,useReducer:yu,useRef:Gg,useState:function(){return yu(La)},useDebugValue:Rd,useDeferredValue:function(t){var e=Dn();return Kg(e,At.memoizedState,t)},useTransition:function(){var t=yu(La)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:Fg,useSyncExternalStore:Og,useId:Zg,unstable_isNewReconciler:!1},Ex={readContext:Ln,useCallback:qg,useContext:Ln,useEffect:Cd,useImperativeHandle:Yg,useInsertionEffect:Wg,useLayoutEffect:Xg,useMemo:$g,useReducer:Mu,useRef:Gg,useState:function(){return Mu(La)},useDebugValue:Rd,useDeferredValue:function(t){var e=Dn();return At===null?e.memoizedState=t:Kg(e,At.memoizedState,t)},useTransition:function(){var t=Mu(La)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:Fg,useSyncExternalStore:Og,useId:Zg,unstable_isNewReconciler:!1};function Bn(t,e){if(t&&t.defaultProps){e=mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Oc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var kl={isMounted:function(t){return(t=t._reactInternals)?Or(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=tr(t),s=yi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ji(t,s,r),e!==null&&(Wn(e,t,r,i),Go(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=tr(t),s=yi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ji(t,s,r),e!==null&&(Wn(e,t,r,i),Go(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qt(),i=tr(t),r=yi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ji(t,r,i),e!==null&&(Wn(e,t,i,n),Go(e,t,i))}};function Qh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ta(n,i)||!Ta(r,s):!0}function t0(t,e,n){var i=!1,r=rr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ln(s):(r=ln(e)?Pr:qt.current,i=e.contextTypes,s=(i=i!=null)?Ms(t,r):rr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=kl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Jh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&kl.enqueueReplaceState(e,e.state,null)}function Bc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Sd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Ln(s):(s=ln(e)?Pr:qt.current,r.context=Ms(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Oc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&kl.enqueueReplaceState(r,r.state,null),_l(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function As(t,e){try{var n="",i=e;do n+=Z_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Eu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function kc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Tx=typeof WeakMap=="function"?WeakMap:Map;function n0(t,e,n){n=yi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ml||(Ml=!0,$c=i),kc(t,e)},n}function i0(t,e,n){n=yi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){kc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){kc(t,e),typeof i!="function"&&(er===null?er=new Set([this]):er.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function ep(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Tx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Bx.bind(null,t,e,n),e.then(t,t))}function tp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function np(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yi(-1,1),e.tag=2,Ji(n,e,1))),n.lanes|=1),t)}var wx=Li.ReactCurrentOwner,an=!1;function Zt(t,e,n,i){e.child=t===null?Dg(e,null,n,i):Ts(e,t.child,n,i)}function ip(t,e,n,i,r){n=n.render;var s=e.ref;return _s(e,r),i=wd(t,e,n,i,s,r),n=Ad(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ci(t,e,r)):(dt&&n&&hd(e),e.flags|=1,Zt(t,e,i,r),e.child)}function rp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Fd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,r0(t,e,s,i,r)):(t=$o(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ta,n(a,i)&&t.ref===e.ref)return Ci(t,e,r)}return e.flags|=1,t=nr(s,i),t.ref=e.ref,t.return=e,e.child=t}function r0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ta(s,i)&&t.ref===e.ref)if(an=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(an=!0);else return e.lanes=t.lanes,Ci(t,e,r)}return zc(t,e,n,i,r)}function s0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(ds,gn),gn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(ds,gn),gn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ut(ds,gn),gn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ut(ds,gn),gn|=i;return Zt(t,e,r,n),e.child}function a0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function zc(t,e,n,i,r){var s=ln(n)?Pr:qt.current;return s=Ms(e,s),_s(e,r),n=wd(t,e,n,i,s,r),i=Ad(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ci(t,e,r)):(dt&&i&&hd(e),e.flags|=1,Zt(t,e,n,r),e.child)}function sp(t,e,n,i,r){if(ln(n)){var s=!0;dl(e)}else s=!1;if(_s(e,r),e.stateNode===null)jo(t,e),t0(e,n,i),Bc(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ln(u):(u=ln(n)?Pr:qt.current,u=Ms(e,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&Jh(e,a,i,u),Hi=!1;var f=e.memoizedState;a.state=f,_l(e,i,a,r),l=e.memoizedState,o!==i||f!==l||on.current||Hi?(typeof d=="function"&&(Oc(e,n,d,i),l=e.memoizedState),(o=Hi||Qh(e,n,o,i,f,l,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Ig(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Bn(e.type,o),a.props=u,p=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ln(l):(l=ln(n)?Pr:qt.current,l=Ms(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||f!==l)&&Jh(e,a,i,l),Hi=!1,f=e.memoizedState,a.state=f,_l(e,i,a,r);var _=e.memoizedState;o!==p||f!==_||on.current||Hi?(typeof m=="function"&&(Oc(e,n,m,i),_=e.memoizedState),(u=Hi||Qh(e,n,u,i,f,_,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Vc(t,e,n,i,s,r)}function Vc(t,e,n,i,r,s){a0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Wh(e,n,!1),Ci(t,e,s);i=e.stateNode,wx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ts(e,t.child,null,s),e.child=Ts(e,null,o,s)):Zt(t,e,o,s),e.memoizedState=i.state,r&&Wh(e,n,!0),e.child}function o0(t){var e=t.stateNode;e.pendingContext?Gh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Gh(t,e.context,!1),yd(t,e.containerInfo)}function ap(t,e,n,i,r){return Es(),md(r),e.flags|=256,Zt(t,e,n,i),e.child}var Hc={dehydrated:null,treeContext:null,retryLane:0};function Gc(t){return{baseLanes:t,cachePool:null,transitions:null}}function l0(t,e,n){var i=e.pendingProps,r=ht.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(ht,r&1),t===null)return Uc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Hl(a,i,0,null),t=br(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Gc(n),e.memoizedState=Hc,t):bd(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Ax(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=nr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=nr(o,s):(s=br(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Gc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Hc,i}return s=t.child,t=s.sibling,i=nr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function bd(t,e){return e=Hl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function lo(t,e,n,i){return i!==null&&md(i),Ts(e,t.child,null,n),t=bd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ax(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Eu(Error(ee(422))),lo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Hl({mode:"visible",children:i.children},r,0,null),s=br(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ts(e,t.child,null,a),e.child.memoizedState=Gc(a),e.memoizedState=Hc,s);if(!(e.mode&1))return lo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ee(419)),i=Eu(s,i,void 0),lo(t,e,a,i)}if(o=(a&t.childLanes)!==0,an||o){if(i=Ut,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ai(t,r),Wn(i,t,r,-1))}return Ud(),i=Eu(Error(ee(421))),lo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=kx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,vn=Qi(r.nextSibling),xn=e,dt=!0,zn=null,t!==null&&(wn[An++]=vi,wn[An++]=xi,wn[An++]=Lr,vi=t.id,xi=t.overflow,Lr=e),e=bd(e,i.children),e.flags|=4096,e)}function op(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Fc(t.return,e,n)}function Tu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function u0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Zt(t,e,i.children,n),i=ht.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&op(t,n,e);else if(t.tag===19)op(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&vl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Tu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&vl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Tu(e,!0,n,null,s);break;case"together":Tu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function jo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ci(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Nr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Cx(t,e,n){switch(e.tag){case 3:o0(e),Es();break;case 5:Ug(e);break;case 1:ln(e.type)&&dl(e);break;case 4:yd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(ml,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(ht,ht.current&1),e.flags|=128,null):n&e.child.childLanes?l0(t,e,n):(ut(ht,ht.current&1),t=Ci(t,e,n),t!==null?t.sibling:null);ut(ht,ht.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return u0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(ht,ht.current),i)break;return null;case 22:case 23:return e.lanes=0,s0(t,e,n)}return Ci(t,e,n)}var c0,Wc,f0,d0;c0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wc=function(){};f0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,wr(ii.current);var s=null;switch(n){case"input":r=dc(t,r),i=dc(t,i),s=[];break;case"select":r=mt({},r,{value:void 0}),i=mt({},i,{value:void 0}),s=[];break;case"textarea":r=mc(t,r),i=mc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=cl)}_c(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(_a.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(_a.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ct("scroll",t),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};d0=function(t,e,n,i){n!==i&&(e.flags|=4)};function js(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Rx(t,e,n){var i=e.pendingProps;switch(pd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gt(e),null;case 1:return ln(e.type)&&fl(),Gt(e),null;case 3:return i=e.stateNode,ws(),ft(on),ft(qt),Ed(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ao(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,zn!==null&&(Qc(zn),zn=null))),Wc(t,e),Gt(e),null;case 5:Md(e);var r=wr(ba.current);if(n=e.type,t!==null&&e.stateNode!=null)f0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return Gt(e),null}if(t=wr(ii.current),ao(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Jn]=e,i[Ca]=s,t=(e.mode&1)!==0,n){case"dialog":ct("cancel",i),ct("close",i);break;case"iframe":case"object":case"embed":ct("load",i);break;case"video":case"audio":for(r=0;r<ra.length;r++)ct(ra[r],i);break;case"source":ct("error",i);break;case"img":case"image":case"link":ct("error",i),ct("load",i);break;case"details":ct("toggle",i);break;case"input":gh(i,s),ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ct("invalid",i);break;case"textarea":vh(i,s),ct("invalid",i)}_c(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&so(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&so(i.textContent,o,t),r=["children",""+o]):_a.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ct("scroll",i)}switch(n){case"input":Za(i),_h(i,s,!0);break;case"textarea":Za(i),xh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=cl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=zm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Jn]=e,t[Ca]=i,c0(t,e,!1,!1),e.stateNode=t;e:{switch(a=vc(n,i),n){case"dialog":ct("cancel",t),ct("close",t),r=i;break;case"iframe":case"object":case"embed":ct("load",t),r=i;break;case"video":case"audio":for(r=0;r<ra.length;r++)ct(ra[r],t);r=i;break;case"source":ct("error",t),r=i;break;case"img":case"image":case"link":ct("error",t),ct("load",t),r=i;break;case"details":ct("toggle",t),r=i;break;case"input":gh(t,i),r=dc(t,i),ct("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=mt({},i,{value:void 0}),ct("invalid",t);break;case"textarea":vh(t,i),r=mc(t,i),ct("invalid",t);break;default:r=i}_c(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Gm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Vm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&va(t,l):typeof l=="number"&&va(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_a.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ct("scroll",t):l!=null&&Jf(t,s,l,a))}switch(n){case"input":Za(t),_h(t,i,!1);break;case"textarea":Za(t),xh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ir(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?hs(t,!!i.multiple,s,!1):i.defaultValue!=null&&hs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=cl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Gt(e),null;case 6:if(t&&e.stateNode!=null)d0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=wr(ba.current),wr(ii.current),ao(e)){if(i=e.stateNode,n=e.memoizedProps,i[Jn]=e,(s=i.nodeValue!==n)&&(t=xn,t!==null))switch(t.tag){case 3:so(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&so(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Jn]=e,e.stateNode=i}return Gt(e),null;case 13:if(ft(ht),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&vn!==null&&e.mode&1&&!(e.flags&128))Pg(),Es(),e.flags|=98560,s=!1;else if(s=ao(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[Jn]=e}else Es(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Gt(e),s=!1}else zn!==null&&(Qc(zn),zn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ht.current&1?Ct===0&&(Ct=3):Ud())),e.updateQueue!==null&&(e.flags|=4),Gt(e),null);case 4:return ws(),Wc(t,e),t===null&&wa(e.stateNode.containerInfo),Gt(e),null;case 10:return vd(e.type._context),Gt(e),null;case 17:return ln(e.type)&&fl(),Gt(e),null;case 19:if(ft(ht),s=e.memoizedState,s===null)return Gt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)js(s,!1);else{if(Ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=vl(t),a!==null){for(e.flags|=128,js(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(ht,ht.current&1|2),e.child}t=t.sibling}s.tail!==null&&St()>Cs&&(e.flags|=128,i=!0,js(s,!1),e.lanes=4194304)}else{if(!i)if(t=vl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),js(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!dt)return Gt(e),null}else 2*St()-s.renderingStartTime>Cs&&n!==1073741824&&(e.flags|=128,i=!0,js(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=St(),e.sibling=null,n=ht.current,ut(ht,i?n&1|2:n&1),e):(Gt(e),null);case 22:case 23:return Id(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?gn&1073741824&&(Gt(e),e.subtreeFlags&6&&(e.flags|=8192)):Gt(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function bx(t,e){switch(pd(e),e.tag){case 1:return ln(e.type)&&fl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ws(),ft(on),ft(qt),Ed(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Md(e),null;case 13:if(ft(ht),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));Es()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(ht),null;case 4:return ws(),null;case 10:return vd(e.type._context),null;case 22:case 23:return Id(),null;case 24:return null;default:return null}}var uo=!1,jt=!1,Px=typeof WeakSet=="function"?WeakSet:Set,ge=null;function fs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){_t(t,e,i)}else n.current=null}function Xc(t,e,n){try{n()}catch(i){_t(t,e,i)}}var lp=!1;function Lx(t,e){if(Rc=ol,t=_g(),dd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,d=0,p=t,f=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(l=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===t)break t;if(f===n&&++u===r&&(o=a),f===s&&++d===i&&(l=a),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(bc={focusedElem:t,selectionRange:n},ol=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var M=_.memoizedProps,g=_.memoizedState,c=e.stateNode,h=c.getSnapshotBeforeUpdate(e.elementType===e.type?M:Bn(e.type,M),g);c.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(y){_t(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return _=lp,lp=!1,_}function ha(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Xc(e,n,s)}r=r.next}while(r!==i)}}function zl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function jc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function h0(t){var e=t.alternate;e!==null&&(t.alternate=null,h0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Jn],delete e[Ca],delete e[Dc],delete e[hx],delete e[px])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function p0(t){return t.tag===5||t.tag===3||t.tag===4}function up(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||p0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=cl));else if(i!==4&&(t=t.child,t!==null))for(Yc(t,e,n),t=t.sibling;t!==null;)Yc(t,e,n),t=t.sibling}function qc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(qc(t,e,n),t=t.sibling;t!==null;)qc(t,e,n),t=t.sibling}var Ot=null,kn=!1;function Ii(t,e,n){for(n=n.child;n!==null;)m0(t,e,n),n=n.sibling}function m0(t,e,n){if(ni&&typeof ni.onCommitFiberUnmount=="function")try{ni.onCommitFiberUnmount(Dl,n)}catch{}switch(n.tag){case 5:jt||fs(n,e);case 6:var i=Ot,r=kn;Ot=null,Ii(t,e,n),Ot=i,kn=r,Ot!==null&&(kn?(t=Ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ot.removeChild(n.stateNode));break;case 18:Ot!==null&&(kn?(t=Ot,n=n.stateNode,t.nodeType===8?_u(t.parentNode,n):t.nodeType===1&&_u(t,n),Ma(t)):_u(Ot,n.stateNode));break;case 4:i=Ot,r=kn,Ot=n.stateNode.containerInfo,kn=!0,Ii(t,e,n),Ot=i,kn=r;break;case 0:case 11:case 14:case 15:if(!jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Xc(n,e,a),r=r.next}while(r!==i)}Ii(t,e,n);break;case 1:if(!jt&&(fs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){_t(n,e,o)}Ii(t,e,n);break;case 21:Ii(t,e,n);break;case 22:n.mode&1?(jt=(i=jt)||n.memoizedState!==null,Ii(t,e,n),jt=i):Ii(t,e,n);break;default:Ii(t,e,n)}}function cp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Px),e.forEach(function(i){var r=zx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function In(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ot=o.stateNode,kn=!1;break e;case 3:Ot=o.stateNode.containerInfo,kn=!0;break e;case 4:Ot=o.stateNode.containerInfo,kn=!0;break e}o=o.return}if(Ot===null)throw Error(ee(160));m0(s,a,r),Ot=null,kn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){_t(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)g0(e,t),e=e.sibling}function g0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(In(e,t),Yn(t),i&4){try{ha(3,t,t.return),zl(3,t)}catch(M){_t(t,t.return,M)}try{ha(5,t,t.return)}catch(M){_t(t,t.return,M)}}break;case 1:In(e,t),Yn(t),i&512&&n!==null&&fs(n,n.return);break;case 5:if(In(e,t),Yn(t),i&512&&n!==null&&fs(n,n.return),t.flags&32){var r=t.stateNode;try{va(r,"")}catch(M){_t(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Bm(r,s),vc(o,a);var u=vc(o,s);for(a=0;a<l.length;a+=2){var d=l[a],p=l[a+1];d==="style"?Gm(r,p):d==="dangerouslySetInnerHTML"?Vm(r,p):d==="children"?va(r,p):Jf(r,d,p,u)}switch(o){case"input":hc(r,s);break;case"textarea":km(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?hs(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?hs(r,!!s.multiple,s.defaultValue,!0):hs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ca]=s}catch(M){_t(t,t.return,M)}}break;case 6:if(In(e,t),Yn(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){_t(t,t.return,M)}}break;case 3:if(In(e,t),Yn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ma(e.containerInfo)}catch(M){_t(t,t.return,M)}break;case 4:In(e,t),Yn(t);break;case 13:In(e,t),Yn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Dd=St())),i&4&&cp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(jt=(u=jt)||d,In(e,t),jt=u):In(e,t),Yn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(ge=t,d=t.child;d!==null;){for(p=ge=d;ge!==null;){switch(f=ge,m=f.child,f.tag){case 0:case 11:case 14:case 15:ha(4,f,f.return);break;case 1:fs(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(M){_t(i,n,M)}}break;case 5:fs(f,f.return);break;case 22:if(f.memoizedState!==null){dp(p);continue}}m!==null?(m.return=f,ge=m):dp(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{r=p.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Hm("display",a))}catch(M){_t(t,t.return,M)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(M){_t(t,t.return,M)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:In(e,t),Yn(t),i&4&&cp(t);break;case 21:break;default:In(e,t),Yn(t)}}function Yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(p0(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(va(r,""),i.flags&=-33);var s=up(t);qc(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=up(t);Yc(t,o,a);break;default:throw Error(ee(161))}}catch(l){_t(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Dx(t,e,n){ge=t,_0(t)}function _0(t,e,n){for(var i=(t.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||uo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||jt;o=uo;var u=jt;if(uo=a,(jt=l)&&!u)for(ge=r;ge!==null;)a=ge,l=a.child,a.tag===22&&a.memoizedState!==null?hp(r):l!==null?(l.return=a,ge=l):hp(r);for(;s!==null;)ge=s,_0(s),s=s.sibling;ge=r,uo=o,jt=u}fp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ge=s):fp(t)}}function fp(t){for(;ge!==null;){var e=ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||zl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Bn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&$h(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}$h(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Ma(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}jt||e.flags&512&&jc(e)}catch(f){_t(e,e.return,f)}}if(e===t){ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}}function dp(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ge=n;break}ge=e.return}}function hp(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{zl(4,e)}catch(l){_t(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){_t(e,r,l)}}var s=e.return;try{jc(e)}catch(l){_t(e,s,l)}break;case 5:var a=e.return;try{jc(e)}catch(l){_t(e,a,l)}}}catch(l){_t(e,e.return,l)}if(e===t){ge=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ge=o;break}ge=e.return}}var Nx=Math.ceil,yl=Li.ReactCurrentDispatcher,Pd=Li.ReactCurrentOwner,bn=Li.ReactCurrentBatchConfig,je=0,Ut=null,wt=null,kt=0,gn=0,ds=or(0),Ct=0,Na=null,Nr=0,Vl=0,Ld=0,pa=null,sn=null,Dd=0,Cs=1/0,mi=null,Ml=!1,$c=null,er=null,co=!1,Yi=null,El=0,ma=0,Kc=null,Yo=-1,qo=0;function Qt(){return je&6?St():Yo!==-1?Yo:Yo=St()}function tr(t){return t.mode&1?je&2&&kt!==0?kt&-kt:gx.transition!==null?(qo===0&&(qo=tg()),qo):(t=nt,t!==0||(t=window.event,t=t===void 0?16:lg(t.type)),t):1}function Wn(t,e,n,i){if(50<ma)throw ma=0,Kc=null,Error(ee(185));ka(t,n,i),(!(je&2)||t!==Ut)&&(t===Ut&&(!(je&2)&&(Vl|=n),Ct===4&&Wi(t,kt)),un(t,i),n===1&&je===0&&!(e.mode&1)&&(Cs=St()+500,Ol&&lr()))}function un(t,e){var n=t.callbackNode;gv(t,e);var i=al(t,t===Ut?kt:0);if(i===0)n!==null&&Mh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Mh(n),e===1)t.tag===0?mx(pp.bind(null,t)):Cg(pp.bind(null,t)),fx(function(){!(je&6)&&lr()}),n=null;else{switch(ng(i)){case 1:n=rd;break;case 4:n=Jm;break;case 16:n=sl;break;case 536870912:n=eg;break;default:n=sl}n=w0(n,v0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function v0(t,e){if(Yo=-1,qo=0,je&6)throw Error(ee(327));var n=t.callbackNode;if(vs()&&t.callbackNode!==n)return null;var i=al(t,t===Ut?kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Tl(t,i);else{e=i;var r=je;je|=2;var s=S0();(Ut!==t||kt!==e)&&(mi=null,Cs=St()+500,Rr(t,e));do try{Fx();break}catch(o){x0(t,o)}while(!0);_d(),yl.current=s,je=r,wt!==null?e=0:(Ut=null,kt=0,e=Ct)}if(e!==0){if(e===2&&(r=Ec(t),r!==0&&(i=r,e=Zc(t,r))),e===1)throw n=Na,Rr(t,0),Wi(t,i),un(t,St()),n;if(e===6)Wi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Ix(r)&&(e=Tl(t,i),e===2&&(s=Ec(t),s!==0&&(i=s,e=Zc(t,s))),e===1))throw n=Na,Rr(t,0),Wi(t,i),un(t,St()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:xr(t,sn,mi);break;case 3:if(Wi(t,i),(i&130023424)===i&&(e=Dd+500-St(),10<e)){if(al(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Lc(xr.bind(null,t,sn,mi),e);break}xr(t,sn,mi);break;case 4:if(Wi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Gn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=St()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Nx(i/1960))-i,10<i){t.timeoutHandle=Lc(xr.bind(null,t,sn,mi),i);break}xr(t,sn,mi);break;case 5:xr(t,sn,mi);break;default:throw Error(ee(329))}}}return un(t,St()),t.callbackNode===n?v0.bind(null,t):null}function Zc(t,e){var n=pa;return t.current.memoizedState.isDehydrated&&(Rr(t,e).flags|=256),t=Tl(t,e),t!==2&&(e=sn,sn=n,e!==null&&Qc(e)),t}function Qc(t){sn===null?sn=t:sn.push.apply(sn,t)}function Ix(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Xn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wi(t,e){for(e&=~Ld,e&=~Vl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Gn(e),i=1<<n;t[n]=-1,e&=~i}}function pp(t){if(je&6)throw Error(ee(327));vs();var e=al(t,0);if(!(e&1))return un(t,St()),null;var n=Tl(t,e);if(t.tag!==0&&n===2){var i=Ec(t);i!==0&&(e=i,n=Zc(t,i))}if(n===1)throw n=Na,Rr(t,0),Wi(t,e),un(t,St()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,xr(t,sn,mi),un(t,St()),null}function Nd(t,e){var n=je;je|=1;try{return t(e)}finally{je=n,je===0&&(Cs=St()+500,Ol&&lr())}}function Ir(t){Yi!==null&&Yi.tag===0&&!(je&6)&&vs();var e=je;je|=1;var n=bn.transition,i=nt;try{if(bn.transition=null,nt=1,t)return t()}finally{nt=i,bn.transition=n,je=e,!(je&6)&&lr()}}function Id(){gn=ds.current,ft(ds)}function Rr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cx(n)),wt!==null)for(n=wt.return;n!==null;){var i=n;switch(pd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&fl();break;case 3:ws(),ft(on),ft(qt),Ed();break;case 5:Md(i);break;case 4:ws();break;case 13:ft(ht);break;case 19:ft(ht);break;case 10:vd(i.type._context);break;case 22:case 23:Id()}n=n.return}if(Ut=t,wt=t=nr(t.current,null),kt=gn=e,Ct=0,Na=null,Ld=Vl=Nr=0,sn=pa=null,Tr!==null){for(e=0;e<Tr.length;e++)if(n=Tr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Tr=null}return t}function x0(t,e){do{var n=wt;try{if(_d(),Wo.current=Sl,xl){for(var i=pt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}xl=!1}if(Dr=0,Nt=At=pt=null,da=!1,Pa=0,Pd.current=null,n===null||n.return===null){Ct=1,Na=e,wt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=kt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=o,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=tp(a);if(m!==null){m.flags&=-257,np(m,a,o,s,e),m.mode&1&&ep(s,u,e),e=m,l=u;var _=e.updateQueue;if(_===null){var M=new Set;M.add(l),e.updateQueue=M}else _.add(l);break e}else{if(!(e&1)){ep(s,u,e),Ud();break e}l=Error(ee(426))}}else if(dt&&o.mode&1){var g=tp(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),np(g,a,o,s,e),md(As(l,o));break e}}s=l=As(l,o),Ct!==4&&(Ct=2),pa===null?pa=[s]:pa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=n0(s,l,e);qh(s,c);break e;case 1:o=l;var h=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(er===null||!er.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=i0(s,o,e);qh(s,y);break e}}s=s.return}while(s!==null)}M0(n)}catch(A){e=A,wt===n&&n!==null&&(wt=n=n.return);continue}break}while(!0)}function S0(){var t=yl.current;return yl.current=Sl,t===null?Sl:t}function Ud(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),Ut===null||!(Nr&268435455)&&!(Vl&268435455)||Wi(Ut,kt)}function Tl(t,e){var n=je;je|=2;var i=S0();(Ut!==t||kt!==e)&&(mi=null,Rr(t,e));do try{Ux();break}catch(r){x0(t,r)}while(!0);if(_d(),je=n,yl.current=i,wt!==null)throw Error(ee(261));return Ut=null,kt=0,Ct}function Ux(){for(;wt!==null;)y0(wt)}function Fx(){for(;wt!==null&&!ov();)y0(wt)}function y0(t){var e=T0(t.alternate,t,gn);t.memoizedProps=t.pendingProps,e===null?M0(t):wt=e,Pd.current=null}function M0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=bx(n,e),n!==null){n.flags&=32767,wt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ct=6,wt=null;return}}else if(n=Rx(n,e,gn),n!==null){wt=n;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=t}while(e!==null);Ct===0&&(Ct=5)}function xr(t,e,n){var i=nt,r=bn.transition;try{bn.transition=null,nt=1,Ox(t,e,n,i)}finally{bn.transition=r,nt=i}return null}function Ox(t,e,n,i){do vs();while(Yi!==null);if(je&6)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(_v(t,s),t===Ut&&(wt=Ut=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||co||(co=!0,w0(sl,function(){return vs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=bn.transition,bn.transition=null;var a=nt;nt=1;var o=je;je|=4,Pd.current=null,Lx(t,n),g0(n,t),ix(bc),ol=!!Rc,bc=Rc=null,t.current=n,Dx(n),lv(),je=o,nt=a,bn.transition=s}else t.current=n;if(co&&(co=!1,Yi=t,El=r),s=t.pendingLanes,s===0&&(er=null),fv(n.stateNode),un(t,St()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ml)throw Ml=!1,t=$c,$c=null,t;return El&1&&t.tag!==0&&vs(),s=t.pendingLanes,s&1?t===Kc?ma++:(ma=0,Kc=t):ma=0,lr(),null}function vs(){if(Yi!==null){var t=ng(El),e=bn.transition,n=nt;try{if(bn.transition=null,nt=16>t?16:t,Yi===null)var i=!1;else{if(t=Yi,Yi=null,El=0,je&6)throw Error(ee(331));var r=je;for(je|=4,ge=t.current;ge!==null;){var s=ge,a=s.child;if(ge.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(ge=u;ge!==null;){var d=ge;switch(d.tag){case 0:case 11:case 15:ha(8,d,s)}var p=d.child;if(p!==null)p.return=d,ge=p;else for(;ge!==null;){d=ge;var f=d.sibling,m=d.return;if(h0(d),d===u){ge=null;break}if(f!==null){f.return=m,ge=f;break}ge=m}}}var _=s.alternate;if(_!==null){var M=_.child;if(M!==null){_.child=null;do{var g=M.sibling;M.sibling=null,M=g}while(M!==null)}}ge=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ge=a;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ha(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,ge=c;break e}ge=s.return}}var h=t.current;for(ge=h;ge!==null;){a=ge;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,ge=v;else e:for(a=h;ge!==null;){if(o=ge,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:zl(9,o)}}catch(A){_t(o,o.return,A)}if(o===a){ge=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,ge=y;break e}ge=o.return}}if(je=r,lr(),ni&&typeof ni.onPostCommitFiberRoot=="function")try{ni.onPostCommitFiberRoot(Dl,t)}catch{}i=!0}return i}finally{nt=n,bn.transition=e}}return!1}function mp(t,e,n){e=As(n,e),e=n0(t,e,1),t=Ji(t,e,1),e=Qt(),t!==null&&(ka(t,1,e),un(t,e))}function _t(t,e,n){if(t.tag===3)mp(t,t,n);else for(;e!==null;){if(e.tag===3){mp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(er===null||!er.has(i))){t=As(n,t),t=i0(e,t,1),e=Ji(e,t,1),t=Qt(),e!==null&&(ka(e,1,t),un(e,t));break}}e=e.return}}function Bx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Qt(),t.pingedLanes|=t.suspendedLanes&n,Ut===t&&(kt&n)===n&&(Ct===4||Ct===3&&(kt&130023424)===kt&&500>St()-Dd?Rr(t,0):Ld|=n),un(t,e)}function E0(t,e){e===0&&(t.mode&1?(e=eo,eo<<=1,!(eo&130023424)&&(eo=4194304)):e=1);var n=Qt();t=Ai(t,e),t!==null&&(ka(t,e,n),un(t,n))}function kx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),E0(t,n)}function zx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),E0(t,n)}var T0;T0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||on.current)an=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return an=!1,Cx(t,e,n);an=!!(t.flags&131072)}else an=!1,dt&&e.flags&1048576&&Rg(e,pl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;jo(t,e),t=e.pendingProps;var r=Ms(e,qt.current);_s(e,n),r=wd(null,e,i,t,r,n);var s=Ad();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ln(i)?(s=!0,dl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Sd(e),r.updater=kl,e.stateNode=r,r._reactInternals=e,Bc(e,i,t,n),e=Vc(null,e,i,!0,s,n)):(e.tag=0,dt&&s&&hd(e),Zt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(jo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Hx(i),t=Bn(i,t),r){case 0:e=zc(null,e,i,t,n);break e;case 1:e=sp(null,e,i,t,n);break e;case 11:e=ip(null,e,i,t,n);break e;case 14:e=rp(null,e,i,Bn(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),zc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),sp(t,e,i,r,n);case 3:e:{if(o0(e),t===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ig(t,e),_l(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=As(Error(ee(423)),e),e=ap(t,e,i,n,r);break e}else if(i!==r){r=As(Error(ee(424)),e),e=ap(t,e,i,n,r);break e}else for(vn=Qi(e.stateNode.containerInfo.firstChild),xn=e,dt=!0,zn=null,n=Dg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Es(),i===r){e=Ci(t,e,n);break e}Zt(t,e,i,n)}e=e.child}return e;case 5:return Ug(e),t===null&&Uc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Pc(i,r)?a=null:s!==null&&Pc(i,s)&&(e.flags|=32),a0(t,e),Zt(t,e,a,n),e.child;case 6:return t===null&&Uc(e),null;case 13:return l0(t,e,n);case 4:return yd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ts(e,null,i,n):Zt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),ip(t,e,i,r,n);case 7:return Zt(t,e,e.pendingProps,n),e.child;case 8:return Zt(t,e,e.pendingProps.children,n),e.child;case 12:return Zt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ut(ml,i._currentValue),i._currentValue=a,s!==null)if(Xn(s.value,a)){if(s.children===r.children&&!on.current){e=Ci(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=yi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Fc(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ee(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Fc(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Zt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,_s(e,n),r=Ln(r),i=i(r),e.flags|=1,Zt(t,e,i,n),e.child;case 14:return i=e.type,r=Bn(i,e.pendingProps),r=Bn(i.type,r),rp(t,e,i,r,n);case 15:return r0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),jo(t,e),e.tag=1,ln(i)?(t=!0,dl(e)):t=!1,_s(e,n),t0(e,i,r),Bc(e,i,r,n),Vc(null,e,i,!0,t,n);case 19:return u0(t,e,n);case 22:return s0(t,e,n)}throw Error(ee(156,e.tag))};function w0(t,e){return Qm(t,e)}function Vx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(t,e,n,i){return new Vx(t,e,n,i)}function Fd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Hx(t){if(typeof t=="function")return Fd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===td)return 11;if(t===nd)return 14}return 2}function nr(t,e){var n=t.alternate;return n===null?(n=Rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function $o(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Fd(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ns:return br(n.children,r,s,e);case ed:a=8,r|=8;break;case lc:return t=Rn(12,n,e,r|2),t.elementType=lc,t.lanes=s,t;case uc:return t=Rn(13,n,e,r),t.elementType=uc,t.lanes=s,t;case cc:return t=Rn(19,n,e,r),t.elementType=cc,t.lanes=s,t;case Um:return Hl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Nm:a=10;break e;case Im:a=9;break e;case td:a=11;break e;case nd:a=14;break e;case Vi:a=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=Rn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function br(t,e,n,i){return t=Rn(7,t,i,e),t.lanes=n,t}function Hl(t,e,n,i){return t=Rn(22,t,i,e),t.elementType=Um,t.lanes=n,t.stateNode={isHidden:!1},t}function wu(t,e,n){return t=Rn(6,t,null,e),t.lanes=n,t}function Au(t,e,n){return e=Rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Gx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=au(0),this.expirationTimes=au(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=au(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Od(t,e,n,i,r,s,a,o,l){return t=new Gx(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Rn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sd(s),t}function Wx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ts,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function A0(t){if(!t)return rr;t=t._reactInternals;e:{if(Or(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(ln(n))return Ag(t,n,e)}return e}function C0(t,e,n,i,r,s,a,o,l){return t=Od(n,i,!0,t,r,s,a,o,l),t.context=A0(null),n=t.current,i=Qt(),r=tr(n),s=yi(i,r),s.callback=e??null,Ji(n,s,r),t.current.lanes=r,ka(t,r,i),un(t,i),t}function Gl(t,e,n,i){var r=e.current,s=Qt(),a=tr(r);return n=A0(n),e.context===null?e.context=n:e.pendingContext=n,e=yi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ji(r,e,a),t!==null&&(Wn(t,r,a,s),Go(t,r,a)),a}function wl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function gp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Bd(t,e){gp(t,e),(t=t.alternate)&&gp(t,e)}function Xx(){return null}var R0=typeof reportError=="function"?reportError:function(t){console.error(t)};function kd(t){this._internalRoot=t}Wl.prototype.render=kd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));Gl(t,e,null,null)};Wl.prototype.unmount=kd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ir(function(){Gl(null,t,null,null)}),e[wi]=null}};function Wl(t){this._internalRoot=t}Wl.prototype.unstable_scheduleHydration=function(t){if(t){var e=sg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gi.length&&e!==0&&e<Gi[n].priority;n++);Gi.splice(n,0,t),n===0&&og(t)}};function zd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _p(){}function jx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=wl(a);s.call(u)}}var a=C0(e,i,t,0,null,!1,!1,"",_p);return t._reactRootContainer=a,t[wi]=a.current,wa(t.nodeType===8?t.parentNode:t),Ir(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=wl(l);o.call(u)}}var l=Od(t,0,!1,null,null,!1,!1,"",_p);return t._reactRootContainer=l,t[wi]=l.current,wa(t.nodeType===8?t.parentNode:t),Ir(function(){Gl(e,l,n,i)}),l}function jl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=wl(a);o.call(l)}}Gl(e,a,t,r)}else a=jx(n,e,t,r,i);return wl(a)}ig=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ia(e.pendingLanes);n!==0&&(sd(e,n|1),un(e,St()),!(je&6)&&(Cs=St()+500,lr()))}break;case 13:Ir(function(){var i=Ai(t,1);if(i!==null){var r=Qt();Wn(i,t,1,r)}}),Bd(t,1)}};ad=function(t){if(t.tag===13){var e=Ai(t,134217728);if(e!==null){var n=Qt();Wn(e,t,134217728,n)}Bd(t,134217728)}};rg=function(t){if(t.tag===13){var e=tr(t),n=Ai(t,e);if(n!==null){var i=Qt();Wn(n,t,e,i)}Bd(t,e)}};sg=function(){return nt};ag=function(t,e){var n=nt;try{return nt=t,e()}finally{nt=n}};Sc=function(t,e,n){switch(e){case"input":if(hc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Fl(i);if(!r)throw Error(ee(90));Om(i),hc(i,r)}}}break;case"textarea":km(t,n);break;case"select":e=n.value,e!=null&&hs(t,!!n.multiple,e,!1)}};jm=Nd;Ym=Ir;var Yx={usingClientEntryPoint:!1,Events:[Va,as,Fl,Wm,Xm,Nd]},Ys={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qx={bundleType:Ys.bundleType,version:Ys.version,rendererPackageName:Ys.rendererPackageName,rendererConfig:Ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Li.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Km(t),t===null?null:t.stateNode},findFiberByHostInstance:Ys.findFiberByHostInstance||Xx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fo.isDisabled&&fo.supportsFiber)try{Dl=fo.inject(qx),ni=fo}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yx;yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zd(e))throw Error(ee(200));return Wx(t,e,null,n)};yn.createRoot=function(t,e){if(!zd(t))throw Error(ee(299));var n=!1,i="",r=R0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Od(t,1,!1,null,null,n,!1,i,r),t[wi]=e.current,wa(t.nodeType===8?t.parentNode:t),new kd(e)};yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=Km(e),t=t===null?null:t.stateNode,t};yn.flushSync=function(t){return Ir(t)};yn.hydrate=function(t,e,n){if(!Xl(e))throw Error(ee(200));return jl(null,t,e,!0,n)};yn.hydrateRoot=function(t,e,n){if(!zd(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=R0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=C0(e,null,t,1,n??null,r,!1,s,a),t[wi]=e.current,wa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Wl(e)};yn.render=function(t,e,n){if(!Xl(e))throw Error(ee(200));return jl(null,t,e,!1,n)};yn.unmountComponentAtNode=function(t){if(!Xl(t))throw Error(ee(40));return t._reactRootContainer?(Ir(function(){jl(null,null,t,!1,function(){t._reactRootContainer=null,t[wi]=null})}),!0):!1};yn.unstable_batchedUpdates=Nd;yn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Xl(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return jl(t,e,n,!1,i)};yn.version="18.3.1-next-f1338f8080-20240426";function b0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b0)}catch(t){console.error(t)}}b0(),bm.exports=yn;var $x=bm.exports,vp=$x;ac.createRoot=vp.createRoot,ac.hydrateRoot=vp.hydrateRoot;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vd="183",Kx=0,xp=1,Zx=2,Ko=1,Qx=2,sa=3,sr=0,cn=1,_i=2,Mi=0,xs=1,Rs=2,Sp=3,yp=4,Jx=5,yr=100,eS=101,tS=102,nS=103,iS=104,rS=200,sS=201,aS=202,oS=203,Jc=204,ef=205,lS=206,uS=207,cS=208,fS=209,dS=210,hS=211,pS=212,mS=213,gS=214,tf=0,nf=1,rf=2,bs=3,sf=4,af=5,of=6,lf=7,P0=0,_S=1,vS=2,ri=0,L0=1,D0=2,N0=3,I0=4,U0=5,F0=6,O0=7,B0=300,Ur=301,Ps=302,Cu=303,Ru=304,Yl=306,uf=1e3,Si=1001,cf=1002,Bt=1003,xS=1004,ho=1005,Yt=1006,bu=1007,Ar=1008,Cn=1009,k0=1010,z0=1011,Ia=1012,Hd=1013,ai=1014,ei=1015,Ri=1016,Gd=1017,Wd=1018,Ua=1020,V0=35902,H0=35899,G0=1021,W0=1022,Hn=1023,bi=1026,Cr=1027,X0=1028,Xd=1029,Ls=1030,jd=1031,Yd=1033,Zo=33776,Qo=33777,Jo=33778,el=33779,ff=35840,df=35841,hf=35842,pf=35843,mf=36196,gf=37492,_f=37496,vf=37488,xf=37489,Sf=37490,yf=37491,Mf=37808,Ef=37809,Tf=37810,wf=37811,Af=37812,Cf=37813,Rf=37814,bf=37815,Pf=37816,Lf=37817,Df=37818,Nf=37819,If=37820,Uf=37821,Ff=36492,Of=36494,Bf=36495,kf=36283,zf=36284,Vf=36285,Hf=36286,SS=3200,yS=0,MS=1,Xi="",Tn="srgb",Ds="srgb-linear",Al="linear",et="srgb",Vr=7680,Mp=519,ES=512,TS=513,wS=514,qd=515,AS=516,CS=517,$d=518,RS=519,Ep=35044,Tp="300 es",ti=2e3,Cl=2001;function bS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Rl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function PS(){const t=Rl("canvas");return t.style.display="block",t}const wp={};function Ap(...t){const e="THREE."+t.shift();console.log(e,...t)}function j0(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function De(...t){t=j0(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function $e(...t){t=j0(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function bl(...t){const e=t.join(" ");e in wp||(wp[e]=!0,De(...t))}function LS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const DS={[tf]:nf,[rf]:of,[sf]:lf,[bs]:af,[nf]:tf,[of]:rf,[lf]:sf,[af]:bs};class Os{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pu=Math.PI/180,Gf=180/Math.PI;function Ga(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function He(t,e,n){return Math.max(e,Math.min(n,t))}function NS(t,e){return(t%e+e)%e}function Lu(t,e,n){return(1-n)*t+n*e}function qs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function rn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,n=0){Ke.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=He(this.x,e.x,n.x),this.y=He(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=He(this.x,e,n),this.y=He(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(He(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],d=i[r+2],p=i[r+3],f=s[a+0],m=s[a+1],_=s[a+2],M=s[a+3];if(p!==M||l!==f||u!==m||d!==_){let g=l*f+u*m+d*_+p*M;g<0&&(f=-f,m=-m,_=-_,M=-M,g=-g);let c=1-o;if(g<.9995){const h=Math.acos(g),v=Math.sin(h);c=Math.sin(c*h)/v,o=Math.sin(o*h)/v,l=l*c+f*o,u=u*c+m*o,d=d*c+_*o,p=p*c+M*o}else{l=l*c+f*o,u=u*c+m*o,d=d*c+_*o,p=p*c+M*o;const h=1/Math.sqrt(l*l+u*u+d*d+p*p);l*=h,u*=h,d*=h,p*=h}}e[n]=l,e[n+1]=u,e[n+2]=d,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],d=i[r+3],p=s[a],f=s[a+1],m=s[a+2],_=s[a+3];return e[n]=o*_+d*p+l*m-u*f,e[n+1]=l*_+d*f+u*p-o*m,e[n+2]=u*_+d*m+o*f-l*p,e[n+3]=d*_-o*p-l*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),d=o(r/2),p=o(s/2),f=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*d*p+u*m*_,this._y=u*m*p-f*d*_,this._z=u*d*_+f*m*p,this._w=u*d*p-f*m*_;break;case"YXZ":this._x=f*d*p+u*m*_,this._y=u*m*p-f*d*_,this._z=u*d*_-f*m*p,this._w=u*d*p+f*m*_;break;case"ZXY":this._x=f*d*p-u*m*_,this._y=u*m*p+f*d*_,this._z=u*d*_+f*m*p,this._w=u*d*p-f*m*_;break;case"ZYX":this._x=f*d*p-u*m*_,this._y=u*m*p+f*d*_,this._z=u*d*_-f*m*p,this._w=u*d*p+f*m*_;break;case"YZX":this._x=f*d*p+u*m*_,this._y=u*m*p+f*d*_,this._z=u*d*_-f*m*p,this._w=u*d*p-f*m*_;break;case"XZY":this._x=f*d*p-u*m*_,this._y=u*m*p-f*d*_,this._z=u*d*_+f*m*p,this._w=u*d*p+f*m*_;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],d=n[6],p=n[10],f=i+o+p;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(d-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,d=n._w;return this._x=i*d+a*o+r*u-s*l,this._y=r*d+a*l+s*o-i*u,this._z=s*d+a*u+i*l-r*o,this._w=a*d-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const u=Math.acos(o),d=Math.sin(u);l=Math.sin(l*u)/d,n=Math.sin(n*u)/d,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,n=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Cp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Cp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),d=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+l*u+a*p-o*d,this.y=i+l*d+o*u-s*p,this.z=r+l*p+s*d-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=He(this.x,e.x,n.x),this.y=He(this.y,e.y,n.y),this.z=He(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=He(this.x,e,n),this.y=He(this.y,e,n),this.z=He(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Du.copy(this).projectOnVector(e),this.sub(Du)}reflect(e){return this.sub(Du.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(He(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Du=new V,Cp=new Bs;class Fe{constructor(e,n,i,r,s,a,o,l,u){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],d=i[4],p=i[7],f=i[2],m=i[5],_=i[8],M=r[0],g=r[3],c=r[6],h=r[1],v=r[4],y=r[7],A=r[2],w=r[5],C=r[8];return s[0]=a*M+o*h+l*A,s[3]=a*g+o*v+l*w,s[6]=a*c+o*y+l*C,s[1]=u*M+d*h+p*A,s[4]=u*g+d*v+p*w,s[7]=u*c+d*y+p*C,s[2]=f*M+m*h+_*A,s[5]=f*g+m*v+_*w,s[8]=f*c+m*y+_*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],d=e[8];return n*a*d-n*o*u-i*s*d+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],d=e[8],p=d*a-o*u,f=o*l-d*s,m=u*s-a*l,_=n*p+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=p*M,e[1]=(r*u-d*i)*M,e[2]=(o*i-r*a)*M,e[3]=f*M,e[4]=(d*n-r*l)*M,e[5]=(r*s-o*n)*M,e[6]=m*M,e[7]=(i*l-u*n)*M,e[8]=(a*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Nu.makeScale(e,n)),this}rotate(e){return this.premultiply(Nu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Nu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nu=new Fe,Rp=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bp=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function IS(){const t={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===et&&(r.r=Ei(r.r),r.g=Ei(r.g),r.b=Ei(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(r.r=Ss(r.r),r.g=Ss(r.g),r.b=Ss(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Xi?Al:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return bl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return bl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Ds]:{primaries:e,whitePoint:i,transfer:Al,toXYZ:Rp,fromXYZ:bp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:e,whitePoint:i,transfer:et,toXYZ:Rp,fromXYZ:bp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}}),t}const Xe=IS();function Ei(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ss(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Hr;class US{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Hr===void 0&&(Hr=Rl("canvas")),Hr.width=e.width,Hr.height=e.height;const r=Hr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Hr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Rl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ei(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ei(n[i]/255)*255):n[i]=Ei(n[i]);return{data:n,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let FS=0;class Kd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=Ga(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Iu(r[a].image)):s.push(Iu(r[a]))}else s=Iu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Iu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?US.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let OS=0;const Uu=new V;class Jt extends Os{constructor(e=Jt.DEFAULT_IMAGE,n=Jt.DEFAULT_MAPPING,i=Si,r=Si,s=Yt,a=Ar,o=Hn,l=Cn,u=Jt.DEFAULT_ANISOTROPY,d=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=Ga(),this.name="",this.source=new Kd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Uu).x}get height(){return this.source.getSize(Uu).y}get depth(){return this.source.getSize(Uu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){De(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){De(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==B0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uf:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case cf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uf:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case cf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=B0;Jt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,n=0,i=0,r=1){yt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],d=l[4],p=l[8],f=l[1],m=l[5],_=l[9],M=l[2],g=l[6],c=l[10];if(Math.abs(d-f)<.01&&Math.abs(p-M)<.01&&Math.abs(_-g)<.01){if(Math.abs(d+f)<.1&&Math.abs(p+M)<.1&&Math.abs(_+g)<.1&&Math.abs(u+m+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,y=(m+1)/2,A=(c+1)/2,w=(d+f)/4,C=(p+M)/4,x=(_+g)/4;return v>y&&v>A?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=w/i,s=C/i):y>A?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=x/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=C/s,r=x/s),this.set(i,r,s,n),this}let h=Math.sqrt((g-_)*(g-_)+(p-M)*(p-M)+(f-d)*(f-d));return Math.abs(h)<.001&&(h=1),this.x=(g-_)/h,this.y=(p-M)/h,this.z=(f-d)/h,this.w=Math.acos((u+m+c-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=He(this.x,e.x,n.x),this.y=He(this.y,e.y,n.y),this.z=He(this.z,e.z,n.z),this.w=He(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=He(this.x,e,n),this.y=He(this.y,e,n),this.z=He(this.z,e,n),this.w=He(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(He(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class BS extends Os{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new yt(0,0,e,n),this.scissorTest=!1,this.viewport=new yt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new Jt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Kd(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends BS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Y0 extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kS extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mt{constructor(e,n,i,r,s,a,o,l,u,d,p,f,m,_,M,g){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,d,p,f,m,_,M,g)}set(e,n,i,r,s,a,o,l,u,d,p,f,m,_,M,g){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=a,c[9]=o,c[13]=l,c[2]=u,c[6]=d,c[10]=p,c[14]=f,c[3]=m,c[7]=_,c[11]=M,c[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Gr.setFromMatrixColumn(e,0).length(),s=1/Gr.setFromMatrixColumn(e,1).length(),a=1/Gr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),d=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const f=a*d,m=a*p,_=o*d,M=o*p;n[0]=l*d,n[4]=-l*p,n[8]=u,n[1]=m+_*u,n[5]=f-M*u,n[9]=-o*l,n[2]=M-f*u,n[6]=_+m*u,n[10]=a*l}else if(e.order==="YXZ"){const f=l*d,m=l*p,_=u*d,M=u*p;n[0]=f+M*o,n[4]=_*o-m,n[8]=a*u,n[1]=a*p,n[5]=a*d,n[9]=-o,n[2]=m*o-_,n[6]=M+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*d,m=l*p,_=u*d,M=u*p;n[0]=f-M*o,n[4]=-a*p,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*d,n[9]=M-f*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*d,m=a*p,_=o*d,M=o*p;n[0]=l*d,n[4]=_*u-m,n[8]=f*u+M,n[1]=l*p,n[5]=M*u+f,n[9]=m*u-_,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*u,_=o*l,M=o*u;n[0]=l*d,n[4]=M-f*p,n[8]=_*p+m,n[1]=p,n[5]=a*d,n[9]=-o*d,n[2]=-u*d,n[6]=m*p+_,n[10]=f-M*p}else if(e.order==="XZY"){const f=a*l,m=a*u,_=o*l,M=o*u;n[0]=l*d,n[4]=-p,n[8]=u*d,n[1]=f*p+M,n[5]=a*d,n[9]=m*p-_,n[2]=_*p-m,n[6]=o*d,n[10]=M*p+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zS,e,VS)}lookAt(e,n,i){const r=this.elements;return pn.subVectors(e,n),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Ui.crossVectors(i,pn),Ui.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Ui.crossVectors(i,pn)),Ui.normalize(),po.crossVectors(pn,Ui),r[0]=Ui.x,r[4]=po.x,r[8]=pn.x,r[1]=Ui.y,r[5]=po.y,r[9]=pn.y,r[2]=Ui.z,r[6]=po.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],d=i[1],p=i[5],f=i[9],m=i[13],_=i[2],M=i[6],g=i[10],c=i[14],h=i[3],v=i[7],y=i[11],A=i[15],w=r[0],C=r[4],x=r[8],T=r[12],U=r[1],b=r[5],k=r[9],F=r[13],j=r[2],H=r[6],z=r[10],O=r[14],G=r[3],B=r[7],Q=r[11],ie=r[15];return s[0]=a*w+o*U+l*j+u*G,s[4]=a*C+o*b+l*H+u*B,s[8]=a*x+o*k+l*z+u*Q,s[12]=a*T+o*F+l*O+u*ie,s[1]=d*w+p*U+f*j+m*G,s[5]=d*C+p*b+f*H+m*B,s[9]=d*x+p*k+f*z+m*Q,s[13]=d*T+p*F+f*O+m*ie,s[2]=_*w+M*U+g*j+c*G,s[6]=_*C+M*b+g*H+c*B,s[10]=_*x+M*k+g*z+c*Q,s[14]=_*T+M*F+g*O+c*ie,s[3]=h*w+v*U+y*j+A*G,s[7]=h*C+v*b+y*H+A*B,s[11]=h*x+v*k+y*z+A*Q,s[15]=h*T+v*F+y*O+A*ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],d=e[2],p=e[6],f=e[10],m=e[14],_=e[3],M=e[7],g=e[11],c=e[15],h=l*m-u*f,v=o*m-u*p,y=o*f-l*p,A=a*m-u*d,w=a*f-l*d,C=a*p-o*d;return n*(M*h-g*v+c*y)-i*(_*h-g*A+c*w)+r*(_*v-M*A+c*C)-s*(_*y-M*w+g*C)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],d=e[8],p=e[9],f=e[10],m=e[11],_=e[12],M=e[13],g=e[14],c=e[15],h=n*o-i*a,v=n*l-r*a,y=n*u-s*a,A=i*l-r*o,w=i*u-s*o,C=r*u-s*l,x=d*M-p*_,T=d*g-f*_,U=d*c-m*_,b=p*g-f*M,k=p*c-m*M,F=f*c-m*g,j=h*F-v*k+y*b+A*U-w*T+C*x;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/j;return e[0]=(o*F-l*k+u*b)*H,e[1]=(r*k-i*F-s*b)*H,e[2]=(M*C-g*w+c*A)*H,e[3]=(f*w-p*C-m*A)*H,e[4]=(l*U-a*F-u*T)*H,e[5]=(n*F-r*U+s*T)*H,e[6]=(g*y-_*C-c*v)*H,e[7]=(d*C-f*y+m*v)*H,e[8]=(a*k-o*U+u*x)*H,e[9]=(i*U-n*k-s*x)*H,e[10]=(_*w-M*y+c*h)*H,e[11]=(p*y-d*w-m*h)*H,e[12]=(o*T-a*b-l*x)*H,e[13]=(n*b-i*T+r*x)*H,e[14]=(M*v-_*A-g*h)*H,e[15]=(d*A-p*v+f*h)*H,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,d=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,d*o+i,d*l-r*a,0,u*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,d=a+a,p=o+o,f=s*u,m=s*d,_=s*p,M=a*d,g=a*p,c=o*p,h=l*u,v=l*d,y=l*p,A=i.x,w=i.y,C=i.z;return r[0]=(1-(M+c))*A,r[1]=(m+y)*A,r[2]=(_-v)*A,r[3]=0,r[4]=(m-y)*w,r[5]=(1-(f+c))*w,r[6]=(g+h)*w,r[7]=0,r[8]=(_+v)*C,r[9]=(g-h)*C,r[10]=(1-(f+M))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Gr.set(r[0],r[1],r[2]).length();const o=Gr.set(r[4],r[5],r[6]).length(),l=Gr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Un.copy(this);const u=1/a,d=1/o,p=1/l;return Un.elements[0]*=u,Un.elements[1]*=u,Un.elements[2]*=u,Un.elements[4]*=d,Un.elements[5]*=d,Un.elements[6]*=d,Un.elements[8]*=p,Un.elements[9]*=p,Un.elements[10]*=p,n.setFromRotationMatrix(Un),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=ti,l=!1){const u=this.elements,d=2*s/(n-e),p=2*s/(i-r),f=(n+e)/(n-e),m=(i+r)/(i-r);let _,M;if(l)_=s/(a-s),M=a*s/(a-s);else if(o===ti)_=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===Cl)_=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=d,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=p,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=M,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ti,l=!1){const u=this.elements,d=2/(n-e),p=2/(i-r),f=-(n+e)/(n-e),m=-(i+r)/(i-r);let _,M;if(l)_=1/(a-s),M=a/(a-s);else if(o===ti)_=-2/(a-s),M=-(a+s)/(a-s);else if(o===Cl)_=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=d,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=p,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=_,u[14]=M,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Gr=new V,Un=new Mt,zS=new V(0,0,0),VS=new V(1,1,1),Ui=new V,po=new V,pn=new V,Pp=new Mt,Lp=new Bs;class Pi{constructor(e=0,n=0,i=0,r=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],d=r[9],p=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(He(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-He(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Pp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Lp.setFromEuler(this),this.setFromQuaternion(Lp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class q0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let HS=0;const Dp=new V,Wr=new Bs,ci=new Mt,mo=new V,$s=new V,GS=new V,WS=new Bs,Np=new V(1,0,0),Ip=new V(0,1,0),Up=new V(0,0,1),Fp={type:"added"},XS={type:"removed"},Xr={type:"childadded",child:null},Fu={type:"childremoved",child:null};class fn extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=Ga(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new V,n=new Pi,i=new Bs,r=new V(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Fe}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new q0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Wr.setFromAxisAngle(e,n),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(e,n){return Wr.setFromAxisAngle(e,n),this.quaternion.premultiply(Wr),this}rotateX(e){return this.rotateOnAxis(Np,e)}rotateY(e){return this.rotateOnAxis(Ip,e)}rotateZ(e){return this.rotateOnAxis(Up,e)}translateOnAxis(e,n){return Dp.copy(e).applyQuaternion(this.quaternion),this.position.add(Dp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Np,e)}translateY(e){return this.translateOnAxis(Ip,e)}translateZ(e){return this.translateOnAxis(Up,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?mo.copy(e):mo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt($s,mo,this.up):ci.lookAt(mo,$s,this.up),this.quaternion.setFromRotationMatrix(ci),r&&(ci.extractRotation(r.matrixWorld),Wr.setFromRotationMatrix(ci),this.quaternion.premultiply(Wr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fp),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(XS),Fu.child=e,this.dispatchEvent(Fu),Fu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fp),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,GS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,WS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const p=l[u];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),d=a(e.images),p=a(e.shapes),f=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const u in o){const d=o[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}fn.DEFAULT_UP=new V(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class go extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jS={type:"move"};class Ou{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new go,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new go,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new go,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const M of e.hand.values()){const g=n.getJointPose(M,i),c=this._getHandJoint(u,M);g!==null&&(c.matrix.fromArray(g.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=g.radius),c.visible=g!==null}const d=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],f=d.position.distanceTo(p.position),m=.02,_=.005;u.inputState.pinching&&f>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jS)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new go;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const $0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},_o={h:0,s:0,l:0};function Bu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Xe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Xe.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Xe.workingColorSpace){if(e=NS(e,1),n=He(n,0,1),i=He(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Bu(a,s,e+1/3),this.g=Bu(a,s,e),this.b=Bu(a,s,e-1/3)}return Xe.colorSpaceToWorking(this,r),this}setStyle(e,n=Tn){function i(s){s!==void 0&&parseFloat(s)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:De("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Tn){const i=$0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}copyLinearToSRGB(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return Xe.workingToColorSpace(Xt.copy(this),e),Math.round(He(Xt.r*255,0,255))*65536+Math.round(He(Xt.g*255,0,255))*256+Math.round(He(Xt.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Xe.workingColorSpace){Xe.workingToColorSpace(Xt.copy(this),n);const i=Xt.r,r=Xt.g,s=Xt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const d=(o+a)/2;if(o===a)l=0,u=0;else{const p=a-o;switch(u=d<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,n=Xe.workingColorSpace){return Xe.workingToColorSpace(Xt.copy(this),n),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Tn){Xe.workingToColorSpace(Xt.copy(this),e);const n=Xt.r,i=Xt.g,r=Xt.b;return e!==Tn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+n,Fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Fi),e.getHSL(_o);const i=Lu(Fi.h,_o.h,n),r=Lu(Fi.s,_o.s,n),s=Lu(Fi.l,_o.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new tt;tt.NAMES=$0;class K0 extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Fn=new V,fi=new V,ku=new V,di=new V,jr=new V,Yr=new V,Op=new V,zu=new V,Vu=new V,Hu=new V,Gu=new yt,Wu=new yt,Xu=new yt;class Vn{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Fn.subVectors(e,n),r.cross(Fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Fn.subVectors(r,n),fi.subVectors(i,n),ku.subVectors(e,n);const a=Fn.dot(Fn),o=Fn.dot(fi),l=Fn.dot(ku),u=fi.dot(fi),d=fi.dot(ku),p=a*u-o*o;if(p===0)return s.set(0,0,0),null;const f=1/p,m=(u*l-o*d)*f,_=(a*d-o*l)*f;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,di.x),l.addScaledVector(a,di.y),l.addScaledVector(o,di.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Gu.setScalar(0),Wu.setScalar(0),Xu.setScalar(0),Gu.fromBufferAttribute(e,n),Wu.fromBufferAttribute(e,i),Xu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Gu,s.x),a.addScaledVector(Wu,s.y),a.addScaledVector(Xu,s.z),a}static isFrontFacing(e,n,i,r){return Fn.subVectors(i,n),fi.subVectors(e,n),Fn.cross(fi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Fn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Vn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Vn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;jr.subVectors(r,i),Yr.subVectors(s,i),zu.subVectors(e,i);const l=jr.dot(zu),u=Yr.dot(zu);if(l<=0&&u<=0)return n.copy(i);Vu.subVectors(e,r);const d=jr.dot(Vu),p=Yr.dot(Vu);if(d>=0&&p<=d)return n.copy(r);const f=l*p-d*u;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(jr,a);Hu.subVectors(e,s);const m=jr.dot(Hu),_=Yr.dot(Hu);if(_>=0&&m<=_)return n.copy(s);const M=m*u-l*_;if(M<=0&&u>=0&&_<=0)return o=u/(u-_),n.copy(i).addScaledVector(Yr,o);const g=d*_-m*p;if(g<=0&&p-d>=0&&m-_>=0)return Op.subVectors(s,r),o=(p-d)/(p-d+(m-_)),n.copy(r).addScaledVector(Op,o);const c=1/(g+M+f);return a=M*c,o=f*c,n.copy(i).addScaledVector(jr,a).addScaledVector(Yr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Wa{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(On.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(On.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=On.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,On):On.fromBufferAttribute(s,a),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vo.copy(i.boundingBox)),vo.applyMatrix4(e.matrixWorld),this.union(vo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),xo.subVectors(this.max,Ks),qr.subVectors(e.a,Ks),$r.subVectors(e.b,Ks),Kr.subVectors(e.c,Ks),Oi.subVectors($r,qr),Bi.subVectors(Kr,$r),dr.subVectors(qr,Kr);let n=[0,-Oi.z,Oi.y,0,-Bi.z,Bi.y,0,-dr.z,dr.y,Oi.z,0,-Oi.x,Bi.z,0,-Bi.x,dr.z,0,-dr.x,-Oi.y,Oi.x,0,-Bi.y,Bi.x,0,-dr.y,dr.x,0];return!ju(n,qr,$r,Kr,xo)||(n=[1,0,0,0,1,0,0,0,1],!ju(n,qr,$r,Kr,xo))?!1:(So.crossVectors(Oi,Bi),n=[So.x,So.y,So.z],ju(n,qr,$r,Kr,xo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const hi=[new V,new V,new V,new V,new V,new V,new V,new V],On=new V,vo=new Wa,qr=new V,$r=new V,Kr=new V,Oi=new V,Bi=new V,dr=new V,Ks=new V,xo=new V,So=new V,hr=new V;function ju(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){hr.fromArray(t,s);const o=r.x*Math.abs(hr.x)+r.y*Math.abs(hr.y)+r.z*Math.abs(hr.z),l=e.dot(hr),u=n.dot(hr),d=i.dot(hr);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>o)return!1}return!0}const Tt=new V,yo=new Ke;let YS=0;class dn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:YS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ep,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)yo.fromBufferAttribute(this,n),yo.applyMatrix3(e),this.setXY(n,yo.x,yo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=qs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=rn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=qs(n,this.array)),n}setX(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=qs(n,this.array)),n}setY(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=qs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=qs(n,this.array)),n}setW(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array),s=rn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ep&&(e.usage=this.usage),e}}class Z0 extends dn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Q0 extends dn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class en extends dn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const qS=new Wa,Zs=new V,Yu=new V;class ql{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):qS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);const n=Zs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Zs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zs.copy(e.center).add(Yu)),this.expandByPoint(Zs.copy(e.center).sub(Yu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let $S=0;const En=new Mt,qu=new fn,Zr=new V,mn=new Wa,Qs=new Wa,Dt=new V;class $t extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=Ga(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bS(e)?Q0:Z0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,n,i){return En.makeTranslation(e,n,i),this.applyMatrix4(En),this}scale(e,n,i){return En.makeScale(e,n,i),this.applyMatrix4(En),this}lookAt(e){return qu.lookAt(e),qu.updateMatrix(),this.applyMatrix4(qu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new en(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ql);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(mn.min,Qs.min),mn.expandByPoint(Dt),Dt.addVectors(mn.max,Qs.max),mn.expandByPoint(Dt)):(mn.expandByPoint(Qs.min),mn.expandByPoint(Qs.max))}mn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,d=o.count;u<d;u++)Dt.fromBufferAttribute(o,u),l&&(Zr.fromBufferAttribute(e,u),Dt.add(Zr)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new V,l[x]=new V;const u=new V,d=new V,p=new V,f=new Ke,m=new Ke,_=new Ke,M=new V,g=new V;function c(x,T,U){u.fromBufferAttribute(i,x),d.fromBufferAttribute(i,T),p.fromBufferAttribute(i,U),f.fromBufferAttribute(s,x),m.fromBufferAttribute(s,T),_.fromBufferAttribute(s,U),d.sub(u),p.sub(u),m.sub(f),_.sub(f);const b=1/(m.x*_.y-_.x*m.y);isFinite(b)&&(M.copy(d).multiplyScalar(_.y).addScaledVector(p,-m.y).multiplyScalar(b),g.copy(p).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(b),o[x].add(M),o[T].add(M),o[U].add(M),l[x].add(g),l[T].add(g),l[U].add(g))}let h=this.groups;h.length===0&&(h=[{start:0,count:e.count}]);for(let x=0,T=h.length;x<T;++x){const U=h[x],b=U.start,k=U.count;for(let F=b,j=b+k;F<j;F+=3)c(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const v=new V,y=new V,A=new V,w=new V;function C(x){A.fromBufferAttribute(r,x),w.copy(A);const T=o[x];v.copy(T),v.sub(A.multiplyScalar(A.dot(T))).normalize(),y.crossVectors(w,T);const b=y.dot(l[x])<0?-1:1;a.setXYZW(x,v.x,v.y,v.z,b)}for(let x=0,T=h.length;x<T;++x){const U=h[x],b=U.start,k=U.count;for(let F=b,j=b+k;F<j;F+=3)C(e.getX(F+0)),C(e.getX(F+1)),C(e.getX(F+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new V,s=new V,a=new V,o=new V,l=new V,u=new V,d=new V,p=new V;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),M=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,M),a.fromBufferAttribute(n,g),d.subVectors(a,s),p.subVectors(r,s),d.cross(p),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),u.fromBufferAttribute(i,g),o.add(d),l.add(d),u.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),d.subVectors(a,s),p.subVectors(r,s),d.cross(p),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Dt.fromBufferAttribute(e,n),Dt.normalize(),e.setXYZ(n,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){const u=o.array,d=o.itemSize,p=o.normalized,f=new u.constructor(l.length*d);let m=0,_=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*d;for(let c=0;c<d;c++)f[_++]=u[m++]}return new dn(f,d,p)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new $t,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let d=0,p=u.length;d<p;d++){const f=u[d],m=e(f,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let p=0,f=u.length;p<f;p++){const m=u[p];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(n))}const s=e.morphAttributes;for(const u in s){const d=[],p=s[u];for(let f=0,m=p.length;f<m;f++)d.push(p[f].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,d=a.length;u<d;u++){const p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let KS=0;class Xa extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=Ga(),this.name="",this.type="Material",this.blending=xs,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jc,this.blendDst=ef,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vr,this.stencilZFail=Vr,this.stencilZPass=Vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){De(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){De(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(i.blending=this.blending),this.side!==sr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jc&&(i.blendSrc=this.blendSrc),this.blendDst!==ef&&(i.blendDst=this.blendDst),this.blendEquation!==yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const pi=new V,$u=new V,Mo=new V,ki=new V,Ku=new V,Eo=new V,Zu=new V;class J0{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,n),pi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){$u.copy(e).add(n).multiplyScalar(.5),Mo.copy(n).sub(e).normalize(),ki.copy(this.origin).sub($u);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Mo),o=ki.dot(this.direction),l=-ki.dot(Mo),u=ki.lengthSq(),d=Math.abs(1-a*a);let p,f,m,_;if(d>0)if(p=a*l-o,f=a*o-l,_=s*d,p>=0)if(f>=-_)if(f<=_){const M=1/d;p*=M,f*=M,m=p*(p+a*f+2*o)+f*(a*p+f+2*l)+u}else f=s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+u;else f=-s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+u;else f<=-_?(p=Math.max(0,-(-a*s+o)),f=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+f*(f+2*l)+u):f<=_?(p=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+u):(p=Math.max(0,-(a*s+o)),f=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+f*(f+2*l)+u);else f=a>0?-s:s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy($u).addScaledVector(Mo,f),m}intersectSphere(e,n){pi.subVectors(e.center,this.origin);const i=pi.dot(this.direction),r=pi.dot(pi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),d>=0?(s=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-f.z)*p,l=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,l=(e.min.z-f.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,n,i,r,s){Ku.subVectors(n,e),Eo.subVectors(i,e),Zu.crossVectors(Ku,Eo);let a=this.direction.dot(Zu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ki.subVectors(this.origin,e);const l=o*this.direction.dot(Eo.crossVectors(ki,Eo));if(l<0)return null;const u=o*this.direction.dot(Ku.cross(ki));if(u<0||l+u>a)return null;const d=-o*ki.dot(Zu);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ga extends Xa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=P0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bp=new Mt,pr=new J0,To=new ql,kp=new V,wo=new V,Ao=new V,Co=new V,Qu=new V,Ro=new V,zp=new V,bo=new V;class Pn extends fn{constructor(e=new $t,n=new ga){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ro.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const d=o[l],p=s[l];d!==0&&(Qu.fromBufferAttribute(p,e),a?Ro.addScaledVector(Qu,d):Ro.addScaledVector(Qu.sub(n),d))}n.add(Ro)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),To.copy(i.boundingSphere),To.applyMatrix4(s),pr.copy(e.ray).recast(e.near),!(To.containsPoint(pr.origin)===!1&&(pr.intersectSphere(To,kp)===null||pr.origin.distanceToSquared(kp)>(e.far-e.near)**2))&&(Bp.copy(s).invert(),pr.copy(e.ray).applyMatrix4(Bp),!(i.boundingBox!==null&&pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,pr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=f.length;_<M;_++){const g=f[_],c=a[g.materialIndex],h=Math.max(g.start,m.start),v=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let y=h,A=v;y<A;y+=3){const w=o.getX(y),C=o.getX(y+1),x=o.getX(y+2);r=Po(this,c,e,i,u,d,p,w,C,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let g=_,c=M;g<c;g+=3){const h=o.getX(g),v=o.getX(g+1),y=o.getX(g+2);r=Po(this,a,e,i,u,d,p,h,v,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,M=f.length;_<M;_++){const g=f[_],c=a[g.materialIndex],h=Math.max(g.start,m.start),v=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let y=h,A=v;y<A;y+=3){const w=y,C=y+1,x=y+2;r=Po(this,c,e,i,u,d,p,w,C,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let g=_,c=M;g<c;g+=3){const h=g,v=g+1,y=g+2;r=Po(this,a,e,i,u,d,p,h,v,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function ZS(t,e,n,i,r,s,a,o){let l;if(e.side===cn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===sr,o),l===null)return null;bo.copy(o),bo.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(bo);return u<n.near||u>n.far?null:{distance:u,point:bo.clone(),object:t}}function Po(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,wo),t.getVertexPosition(l,Ao),t.getVertexPosition(u,Co);const d=ZS(t,e,n,i,wo,Ao,Co,zp);if(d){const p=new V;Vn.getBarycoord(zp,wo,Ao,Co,p),r&&(d.uv=Vn.getInterpolatedAttribute(r,o,l,u,p,new Ke)),s&&(d.uv1=Vn.getInterpolatedAttribute(s,o,l,u,p,new Ke)),a&&(d.normal=Vn.getInterpolatedAttribute(a,o,l,u,p,new V),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new V,materialIndex:0};Vn.getNormal(wo,Ao,Co,f.normal),d.face=f,d.barycoord=p}return d}class QS extends Jt{constructor(e=null,n=1,i=1,r,s,a,o,l,u=Bt,d=Bt,p,f){super(null,a,o,l,u,d,r,s,p,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ju=new V,JS=new V,ey=new Fe;class Sr{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ju.subVectors(i,n).cross(JS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ju),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||ey.getNormalMatrix(e),r=this.coplanarPoint(Ju).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new ql,ty=new Ke(.5,.5),Lo=new V;class e_{constructor(e=new Sr,n=new Sr,i=new Sr,r=new Sr,s=new Sr,a=new Sr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ti,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],u=s[3],d=s[4],p=s[5],f=s[6],m=s[7],_=s[8],M=s[9],g=s[10],c=s[11],h=s[12],v=s[13],y=s[14],A=s[15];if(r[0].setComponents(u-a,m-d,c-_,A-h).normalize(),r[1].setComponents(u+a,m+d,c+_,A+h).normalize(),r[2].setComponents(u+o,m+p,c+M,A+v).normalize(),r[3].setComponents(u-o,m-p,c-M,A-v).normalize(),i)r[4].setComponents(l,f,g,y).normalize(),r[5].setComponents(u-l,m-f,c-g,A-y).normalize();else if(r[4].setComponents(u-l,m-f,c-g,A-y).normalize(),n===ti)r[5].setComponents(u+l,m+f,c+g,A+y).normalize();else if(n===Cl)r[5].setComponents(l,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){mr.center.set(0,0,0);const n=ty.distanceTo(e.center);return mr.radius=.7071067811865476+n,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Lo.x=r.normal.x>0?e.max.x:e.min.x,Lo.y=r.normal.y>0?e.max.y:e.min.y,Lo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fa extends Xa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vp=new Mt,Wf=new J0,Do=new ql,No=new V;class Pl extends fn{constructor(e=new $t,n=new Fa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Do.copy(i.boundingSphere),Do.applyMatrix4(r),Do.radius+=s,e.ray.intersectsSphere(Do)===!1)return;Vp.copy(r).invert(),Wf.copy(e.ray).applyMatrix4(Vp);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=i.index,p=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=f,M=m;_<M;_++){const g=u.getX(_);No.fromBufferAttribute(p,g),Hp(No,g,l,r,e,n,this)}}else{const f=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let _=f,M=m;_<M;_++)No.fromBufferAttribute(p,_),Hp(No,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Hp(t,e,n,i,r,s,a){const o=Wf.distanceSqToPoint(t);if(o<n){const l=new V;Wf.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class t_ extends Jt{constructor(e=[],n=Ur,i,r,s,a,o,l,u,d){super(e,n,i,r,s,a,o,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Oa extends Jt{constructor(e,n,i=ai,r,s,a,o=Bt,l=Bt,u,d=bi,p=1){if(d!==bi&&d!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:p};super(f,r,s,a,o,l,d,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class ny extends Oa{constructor(e,n=ai,i=Ur,r,s,a=Bt,o=Bt,l,u=bi){const d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,n,i,r,s,a,o,l,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class n_ extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ja extends $t{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],d=[],p=[];let f=0,m=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new en(u,3)),this.setAttribute("normal",new en(d,3)),this.setAttribute("uv",new en(p,2));function _(M,g,c,h,v,y,A,w,C,x,T){const U=y/C,b=A/x,k=y/2,F=A/2,j=w/2,H=C+1,z=x+1;let O=0,G=0;const B=new V;for(let Q=0;Q<z;Q++){const ie=Q*b-F;for(let se=0;se<H;se++){const Pe=se*U-k;B[M]=Pe*h,B[g]=ie*v,B[c]=j,u.push(B.x,B.y,B.z),B[M]=0,B[g]=0,B[c]=w>0?1:-1,d.push(B.x,B.y,B.z),p.push(se/C),p.push(1-Q/x),O+=1}}for(let Q=0;Q<x;Q++)for(let ie=0;ie<C;ie++){const se=f+ie+H*Q,Pe=f+ie+H*(Q+1),Ge=f+(ie+1)+H*(Q+1),Ye=f+(ie+1)+H*Q;l.push(se,Pe,Ye),l.push(Pe,Ge,Ye),G+=6}o.addGroup(m,G,T),m+=G,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class $l extends $t{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),u(i),d(),this.setAttribute("position",new en(s,3)),this.setAttribute("normal",new en(s.slice(),3)),this.setAttribute("uv",new en(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(h){const v=new V,y=new V,A=new V;for(let w=0;w<n.length;w+=3)m(n[w+0],v),m(n[w+1],y),m(n[w+2],A),l(v,y,A,h)}function l(h,v,y,A){const w=A+1,C=[];for(let x=0;x<=w;x++){C[x]=[];const T=h.clone().lerp(y,x/w),U=v.clone().lerp(y,x/w),b=w-x;for(let k=0;k<=b;k++)k===0&&x===w?C[x][k]=T:C[x][k]=T.clone().lerp(U,k/b)}for(let x=0;x<w;x++)for(let T=0;T<2*(w-x)-1;T++){const U=Math.floor(T/2);T%2===0?(f(C[x][U+1]),f(C[x+1][U]),f(C[x][U])):(f(C[x][U+1]),f(C[x+1][U+1]),f(C[x+1][U]))}}function u(h){const v=new V;for(let y=0;y<s.length;y+=3)v.x=s[y+0],v.y=s[y+1],v.z=s[y+2],v.normalize().multiplyScalar(h),s[y+0]=v.x,s[y+1]=v.y,s[y+2]=v.z}function d(){const h=new V;for(let v=0;v<s.length;v+=3){h.x=s[v+0],h.y=s[v+1],h.z=s[v+2];const y=g(h)/2/Math.PI+.5,A=c(h)/Math.PI+.5;a.push(y,1-A)}_(),p()}function p(){for(let h=0;h<a.length;h+=6){const v=a[h+0],y=a[h+2],A=a[h+4],w=Math.max(v,y,A),C=Math.min(v,y,A);w>.9&&C<.1&&(v<.2&&(a[h+0]+=1),y<.2&&(a[h+2]+=1),A<.2&&(a[h+4]+=1))}}function f(h){s.push(h.x,h.y,h.z)}function m(h,v){const y=h*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function _(){const h=new V,v=new V,y=new V,A=new V,w=new Ke,C=new Ke,x=new Ke;for(let T=0,U=0;T<s.length;T+=9,U+=6){h.set(s[T+0],s[T+1],s[T+2]),v.set(s[T+3],s[T+4],s[T+5]),y.set(s[T+6],s[T+7],s[T+8]),w.set(a[U+0],a[U+1]),C.set(a[U+2],a[U+3]),x.set(a[U+4],a[U+5]),A.copy(h).add(v).add(y).divideScalar(3);const b=g(A);M(w,U+0,h,b),M(C,U+2,v,b),M(x,U+4,y,b)}}function M(h,v,y,A){A<0&&h.x===1&&(a[v]=h.x-1),y.x===0&&y.z===0&&(a[v]=A/2/Math.PI+.5)}function g(h){return Math.atan2(h.z,-h.x)}function c(h){return Math.atan2(-h.y,Math.sqrt(h.x*h.x+h.z*h.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $l(e.vertices,e.indices,e.radius,e.detail)}}class Zd extends $l{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Zd(e.radius,e.detail)}}class Qd extends $l{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Qd(e.radius,e.detail)}}class Kl extends $t{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,d=l+1,p=e/o,f=n/l,m=[],_=[],M=[],g=[];for(let c=0;c<d;c++){const h=c*f-a;for(let v=0;v<u;v++){const y=v*p-s;_.push(y,-h,0),M.push(0,0,1),g.push(v/o),g.push(1-c/l)}}for(let c=0;c<l;c++)for(let h=0;h<o;h++){const v=h+u*c,y=h+u*(c+1),A=h+1+u*(c+1),w=h+1+u*c;m.push(v,y,w),m.push(y,A,w)}this.setIndex(m),this.setAttribute("position",new en(_,3)),this.setAttribute("normal",new en(M,3)),this.setAttribute("uv",new en(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Jd extends $t{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let u=0;const d=[],p=new V,f=new V,m=[],_=[],M=[],g=[];for(let c=0;c<=i;c++){const h=[],v=c/i;let y=0;c===0&&a===0?y=.5/n:c===i&&l===Math.PI&&(y=-.5/n);for(let A=0;A<=n;A++){const w=A/n;p.x=-e*Math.cos(r+w*s)*Math.sin(a+v*o),p.y=e*Math.cos(a+v*o),p.z=e*Math.sin(r+w*s)*Math.sin(a+v*o),_.push(p.x,p.y,p.z),f.copy(p).normalize(),M.push(f.x,f.y,f.z),g.push(w+y,1-v),h.push(u++)}d.push(h)}for(let c=0;c<i;c++)for(let h=0;h<n;h++){const v=d[c][h+1],y=d[c][h],A=d[c+1][h],w=d[c+1][h+1];(c!==0||a>0)&&m.push(v,y,w),(c!==i-1||l<Math.PI)&&m.push(y,A,w)}this.setIndex(m),this.setAttribute("position",new en(_,3)),this.setAttribute("normal",new en(M,3)),this.setAttribute("uv",new en(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ns(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Kt(t){const e={};for(let n=0;n<t.length;n++){const i=Ns(t[n]);for(const r in i)e[r]=i[r]}return e}function iy(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function i_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const ry={clone:Ns,merge:Kt};var sy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ay=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends Xa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sy,this.fragmentShader=ay,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=iy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class oy extends oi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ly extends Xa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=SS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uy extends Xa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Io=new V,Uo=new Bs,qn=new V;class r_ extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Io,Uo,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Io,Uo,qn.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Io,Uo,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Io,Uo,qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const zi=new V,Gp=new Ke,Wp=new Ke;class _n extends r_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Gf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gf*2*Math.atan(Math.tan(Pu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,n){return this.getViewBounds(e,Gp,Wp),n.subVectors(Wp,Gp)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Pu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class s_ extends r_{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Qr=-90,Jr=1;class cy extends fn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(Qr,Jr,e,n);r.layers=this.layers,this.add(r);const s=new _n(Qr,Jr,e,n);s.layers=this.layers,this.add(s);const a=new _n(Qr,Jr,e,n);a.layers=this.layers,this.add(a);const o=new _n(Qr,Jr,e,n);o.layers=this.layers,this.add(o);const l=new _n(Qr,Jr,e,n);l.layers=this.layers,this.add(l);const u=new _n(Qr,Jr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Cl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,d]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(p,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class fy extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class a_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,De("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Xp(t,e,n,i){const r=dy(i);switch(n){case G0:return t*e;case X0:return t*e/r.components*r.byteLength;case Xd:return t*e/r.components*r.byteLength;case Ls:return t*e*2/r.components*r.byteLength;case jd:return t*e*2/r.components*r.byteLength;case W0:return t*e*3/r.components*r.byteLength;case Hn:return t*e*4/r.components*r.byteLength;case Yd:return t*e*4/r.components*r.byteLength;case Zo:case Qo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Jo:case el:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case df:case pf:return Math.max(t,16)*Math.max(e,8)/4;case ff:case hf:return Math.max(t,8)*Math.max(e,8)/2;case mf:case gf:case vf:case xf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case _f:case Sf:case yf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Mf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ef:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Tf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case wf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Af:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Cf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Rf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case bf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Pf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Df:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Nf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case If:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Uf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ff:case Of:case Bf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case kf:case zf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Vf:case Hf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function dy(t){switch(t){case Cn:case k0:return{byteLength:1,components:1};case Ia:case z0:case Ri:return{byteLength:2,components:1};case Gd:case Wd:return{byteLength:2,components:4};case ai:case Hd:case ei:return{byteLength:4,components:1};case V0:case H0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vd}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function o_(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function hy(t){const e=new WeakMap;function n(o,l){const u=o.array,d=o.usage,p=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,d),o.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,u){const d=l.array,p=l.updateRanges;if(t.bindBuffer(u,o),p.length===0)t.bufferSubData(u,0,d);else{p.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<p.length;m++){const _=p[f],M=p[m];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++f,p[f]=M)}p.length=f+1;for(let m=0,_=p.length;m<_;m++){const M=p[m];t.bufferSubData(u,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var py=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,my=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_y=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,My=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ey=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ty=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ay=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ry=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,by=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ny=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Iy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Uy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Fy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Oy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,By=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ky=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Yy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,qy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$y=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ky=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,aM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,oM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,dM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_M=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,SM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,MM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,EM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,AM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,PM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,DM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,NM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,FM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,OM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,BM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,GM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$M=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,KM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ZM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,QM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,JM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,iE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,oE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,SE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ME=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,EE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,RE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,DE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,IE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,UE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,BE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,HE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:py,alphahash_pars_fragment:my,alphamap_fragment:gy,alphamap_pars_fragment:_y,alphatest_fragment:vy,alphatest_pars_fragment:xy,aomap_fragment:Sy,aomap_pars_fragment:yy,batching_pars_vertex:My,batching_vertex:Ey,begin_vertex:Ty,beginnormal_vertex:wy,bsdfs:Ay,iridescence_fragment:Cy,bumpmap_pars_fragment:Ry,clipping_planes_fragment:by,clipping_planes_pars_fragment:Py,clipping_planes_pars_vertex:Ly,clipping_planes_vertex:Dy,color_fragment:Ny,color_pars_fragment:Iy,color_pars_vertex:Uy,color_vertex:Fy,common:Oy,cube_uv_reflection_fragment:By,defaultnormal_vertex:ky,displacementmap_pars_vertex:zy,displacementmap_vertex:Vy,emissivemap_fragment:Hy,emissivemap_pars_fragment:Gy,colorspace_fragment:Wy,colorspace_pars_fragment:Xy,envmap_fragment:jy,envmap_common_pars_fragment:Yy,envmap_pars_fragment:qy,envmap_pars_vertex:$y,envmap_physical_pars_fragment:aM,envmap_vertex:Ky,fog_vertex:Zy,fog_pars_vertex:Qy,fog_fragment:Jy,fog_pars_fragment:eM,gradientmap_pars_fragment:tM,lightmap_pars_fragment:nM,lights_lambert_fragment:iM,lights_lambert_pars_fragment:rM,lights_pars_begin:sM,lights_toon_fragment:oM,lights_toon_pars_fragment:lM,lights_phong_fragment:uM,lights_phong_pars_fragment:cM,lights_physical_fragment:fM,lights_physical_pars_fragment:dM,lights_fragment_begin:hM,lights_fragment_maps:pM,lights_fragment_end:mM,logdepthbuf_fragment:gM,logdepthbuf_pars_fragment:_M,logdepthbuf_pars_vertex:vM,logdepthbuf_vertex:xM,map_fragment:SM,map_pars_fragment:yM,map_particle_fragment:MM,map_particle_pars_fragment:EM,metalnessmap_fragment:TM,metalnessmap_pars_fragment:wM,morphinstance_vertex:AM,morphcolor_vertex:CM,morphnormal_vertex:RM,morphtarget_pars_vertex:bM,morphtarget_vertex:PM,normal_fragment_begin:LM,normal_fragment_maps:DM,normal_pars_fragment:NM,normal_pars_vertex:IM,normal_vertex:UM,normalmap_pars_fragment:FM,clearcoat_normal_fragment_begin:OM,clearcoat_normal_fragment_maps:BM,clearcoat_pars_fragment:kM,iridescence_pars_fragment:zM,opaque_fragment:VM,packing:HM,premultiplied_alpha_fragment:GM,project_vertex:WM,dithering_fragment:XM,dithering_pars_fragment:jM,roughnessmap_fragment:YM,roughnessmap_pars_fragment:qM,shadowmap_pars_fragment:$M,shadowmap_pars_vertex:KM,shadowmap_vertex:ZM,shadowmask_pars_fragment:QM,skinbase_vertex:JM,skinning_pars_vertex:eE,skinning_vertex:tE,skinnormal_vertex:nE,specularmap_fragment:iE,specularmap_pars_fragment:rE,tonemapping_fragment:sE,tonemapping_pars_fragment:aE,transmission_fragment:oE,transmission_pars_fragment:lE,uv_pars_fragment:uE,uv_pars_vertex:cE,uv_vertex:fE,worldpos_vertex:dE,background_vert:hE,background_frag:pE,backgroundCube_vert:mE,backgroundCube_frag:gE,cube_vert:_E,cube_frag:vE,depth_vert:xE,depth_frag:SE,distance_vert:yE,distance_frag:ME,equirect_vert:EE,equirect_frag:TE,linedashed_vert:wE,linedashed_frag:AE,meshbasic_vert:CE,meshbasic_frag:RE,meshlambert_vert:bE,meshlambert_frag:PE,meshmatcap_vert:LE,meshmatcap_frag:DE,meshnormal_vert:NE,meshnormal_frag:IE,meshphong_vert:UE,meshphong_frag:FE,meshphysical_vert:OE,meshphysical_frag:BE,meshtoon_vert:kE,meshtoon_frag:zE,points_vert:VE,points_frag:HE,shadow_vert:GE,shadow_frag:WE,sprite_vert:XE,sprite_frag:jE},fe={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Zn={basic:{uniforms:Kt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Kt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Kt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Kt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Kt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new tt(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Kt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Kt([fe.points,fe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Kt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Kt([fe.common,fe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Kt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Kt([fe.sprite,fe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:Kt([fe.common,fe.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:Kt([fe.lights,fe.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Zn.physical={uniforms:Kt([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Fo={r:0,b:0,g:0},gr=new Pi,YE=new Mt;function qE(t,e,n,i,r,s){const a=new tt(0);let o=r===!0?0:1,l,u,d=null,p=0,f=null;function m(h){let v=h.isScene===!0?h.background:null;if(v&&v.isTexture){const y=h.backgroundBlurriness>0;v=e.get(v,y)}return v}function _(h){let v=!1;const y=m(h);y===null?g(a,o):y&&y.isColor&&(g(y,1),v=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function M(h,v){const y=m(v);y&&(y.isCubeTexture||y.mapping===Yl)?(u===void 0&&(u=new Pn(new ja(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:Ns(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),gr.copy(v.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(YE.makeRotationFromEuler(gr)),u.material.toneMapped=Xe.getTransfer(y.colorSpace)!==et,(d!==y||p!==y.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,d=y,p=y.version,f=t.toneMapping),u.layers.enableAll(),h.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Pn(new Kl(2,2),new oi({name:"BackgroundMaterial",uniforms:Ns(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(y.colorSpace)!==et,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||p!==y.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,d=y,p=y.version,f=t.toneMapping),l.layers.enableAll(),h.unshift(l,l.geometry,l.material,0,0,null))}function g(h,v){h.getRGB(Fo,i_(t)),n.buffers.color.setClear(Fo.r,Fo.g,Fo.b,v,s)}function c(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(h,v=1){a.set(h),o=v,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(h){o=h,g(a,o)},render:_,addToRenderList:M,dispose:c}}function $E(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(b,k,F,j,H){let z=!1;const O=p(b,j,F,k);s!==O&&(s=O,u(s.object)),z=m(b,j,F,H),z&&_(b,j,F,H),H!==null&&e.update(H,t.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,y(b,k,F,j),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return t.createVertexArray()}function u(b){return t.bindVertexArray(b)}function d(b){return t.deleteVertexArray(b)}function p(b,k,F,j){const H=j.wireframe===!0;let z=i[k.id];z===void 0&&(z={},i[k.id]=z);const O=b.isInstancedMesh===!0?b.id:0;let G=z[O];G===void 0&&(G={},z[O]=G);let B=G[F.id];B===void 0&&(B={},G[F.id]=B);let Q=B[H];return Q===void 0&&(Q=f(l()),B[H]=Q),Q}function f(b){const k=[],F=[],j=[];for(let H=0;H<n;H++)k[H]=0,F[H]=0,j[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:F,attributeDivisors:j,object:b,attributes:{},index:null}}function m(b,k,F,j){const H=s.attributes,z=k.attributes;let O=0;const G=F.getAttributes();for(const B in G)if(G[B].location>=0){const ie=H[B];let se=z[B];if(se===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(se=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(se=b.instanceColor)),ie===void 0||ie.attribute!==se||se&&ie.data!==se.data)return!0;O++}return s.attributesNum!==O||s.index!==j}function _(b,k,F,j){const H={},z=k.attributes;let O=0;const G=F.getAttributes();for(const B in G)if(G[B].location>=0){let ie=z[B];ie===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(ie=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(ie=b.instanceColor));const se={};se.attribute=ie,ie&&ie.data&&(se.data=ie.data),H[B]=se,O++}s.attributes=H,s.attributesNum=O,s.index=j}function M(){const b=s.newAttributes;for(let k=0,F=b.length;k<F;k++)b[k]=0}function g(b){c(b,0)}function c(b,k){const F=s.newAttributes,j=s.enabledAttributes,H=s.attributeDivisors;F[b]=1,j[b]===0&&(t.enableVertexAttribArray(b),j[b]=1),H[b]!==k&&(t.vertexAttribDivisor(b,k),H[b]=k)}function h(){const b=s.newAttributes,k=s.enabledAttributes;for(let F=0,j=k.length;F<j;F++)k[F]!==b[F]&&(t.disableVertexAttribArray(F),k[F]=0)}function v(b,k,F,j,H,z,O){O===!0?t.vertexAttribIPointer(b,k,F,H,z):t.vertexAttribPointer(b,k,F,j,H,z)}function y(b,k,F,j){M();const H=j.attributes,z=F.getAttributes(),O=k.defaultAttributeValues;for(const G in z){const B=z[G];if(B.location>=0){let Q=H[G];if(Q===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(Q=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(Q=b.instanceColor)),Q!==void 0){const ie=Q.normalized,se=Q.itemSize,Pe=e.get(Q);if(Pe===void 0)continue;const Ge=Pe.buffer,Ye=Pe.type,q=Pe.bytesPerElement,re=Ye===t.INT||Ye===t.UNSIGNED_INT||Q.gpuType===Hd;if(Q.isInterleavedBufferAttribute){const ce=Q.data,Ue=ce.stride,Re=Q.offset;if(ce.isInstancedInterleavedBuffer){for(let Le=0;Le<B.locationSize;Le++)c(B.location+Le,ce.meshPerAttribute);b.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Le=0;Le<B.locationSize;Le++)g(B.location+Le);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let Le=0;Le<B.locationSize;Le++)v(B.location+Le,se/B.locationSize,Ye,ie,Ue*q,(Re+se/B.locationSize*Le)*q,re)}else{if(Q.isInstancedBufferAttribute){for(let ce=0;ce<B.locationSize;ce++)c(B.location+ce,Q.meshPerAttribute);b.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ce=0;ce<B.locationSize;ce++)g(B.location+ce);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let ce=0;ce<B.locationSize;ce++)v(B.location+ce,se/B.locationSize,Ye,ie,se*q,se/B.locationSize*ce*q,re)}}else if(O!==void 0){const ie=O[G];if(ie!==void 0)switch(ie.length){case 2:t.vertexAttrib2fv(B.location,ie);break;case 3:t.vertexAttrib3fv(B.location,ie);break;case 4:t.vertexAttrib4fv(B.location,ie);break;default:t.vertexAttrib1fv(B.location,ie)}}}}h()}function A(){T();for(const b in i){const k=i[b];for(const F in k){const j=k[F];for(const H in j){const z=j[H];for(const O in z)d(z[O].object),delete z[O];delete j[H]}}delete i[b]}}function w(b){if(i[b.id]===void 0)return;const k=i[b.id];for(const F in k){const j=k[F];for(const H in j){const z=j[H];for(const O in z)d(z[O].object),delete z[O];delete j[H]}}delete i[b.id]}function C(b){for(const k in i){const F=i[k];for(const j in F){const H=F[j];if(H[b.id]===void 0)continue;const z=H[b.id];for(const O in z)d(z[O].object),delete z[O];delete H[b.id]}}}function x(b){for(const k in i){const F=i[k],j=b.isInstancedMesh===!0?b.id:0,H=F[j];if(H!==void 0){for(const z in H){const O=H[z];for(const G in O)d(O[G].object),delete O[G];delete H[z]}delete F[j],Object.keys(F).length===0&&delete i[k]}}}function T(){U(),a=!0,s!==r&&(s=r,u(s.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:U,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:g,disableUnusedAttributes:h}}function KE(t,e,n){let i;function r(u){i=u}function s(u,d){t.drawArrays(i,u,d),n.update(d,i,1)}function a(u,d,p){p!==0&&(t.drawArraysInstanced(i,u,d,p),n.update(d,i,p))}function o(u,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,d,0,p);let m=0;for(let _=0;_<p;_++)m+=d[_];n.update(m,i,1)}function l(u,d,p,f){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<u.length;_++)a(u[_],d[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,d,0,f,0,p);let _=0;for(let M=0;M<p;M++)_+=d[M]*f[M];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ZE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Hn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const x=C===Ri&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Cn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ei&&!x)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const d=l(u);d!==u&&(De("WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const p=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),c=t.getParameter(t.MAX_VERTEX_ATTRIBS),h=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:g,maxAttributes:c,maxVertexUniforms:h,maxVaryings:v,maxFragmentUniforms:y,maxSamples:A,samples:w}}function QE(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Sr,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const m=p.length!==0||f||i!==0||r;return r=f,i=p.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){n=d(p,f,0)},this.setState=function(p,f,m){const _=p.clippingPlanes,M=p.clipIntersection,g=p.clipShadows,c=t.get(p);if(!r||_===null||_.length===0||s&&!g)s?d(null):u();else{const h=s?0:i,v=h*4;let y=c.clippingState||null;l.value=y,y=d(_,f,v,m);for(let A=0;A!==v;++A)y[A]=n[A];c.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=h}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(p,f,m,_){const M=p!==null?p.length:0;let g=null;if(M!==0){if(g=l.value,_!==!0||g===null){const c=m+M*4,h=f.matrixWorldInverse;o.getNormalMatrix(h),(g===null||g.length<c)&&(g=new Float32Array(c));for(let v=0,y=m;v!==M;++v,y+=4)a.copy(p[v]).applyMatrix4(h,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}const qi=4,jp=[.125,.215,.35,.446,.526,.582],Mr=20,JE=256,Js=new s_,Yp=new tt;let ec=null,tc=0,nc=0,ic=!1;const e1=new V;class qp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=e1}=s;ec=this._renderer.getRenderTarget(),tc=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ec,tc,nc),this._renderer.xr.enabled=ic,e.scissorTest=!1,es(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ur||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ec=this._renderer.getRenderTarget(),tc=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:Ri,format:Hn,colorSpace:Ds,depthBuffer:!1},r=$p(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$p(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=t1(s)),this._blurMaterial=i1(s,e,n),this._ggxMaterial=n1(s,e,n)}return r}_compileMaterial(e){const n=new Pn(new $t,e);this._renderer.compile(n,Js)}_sceneToCubeUV(e,n,i,r,s){const l=new _n(90,1,n,i),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,m=p.toneMapping;p.getClearColor(Yp),p.toneMapping=ri,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pn(new ja,new ga({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,g=M.material;let c=!1;const h=e.background;h?h.isColor&&(g.color.copy(h),e.background=null,c=!0):(g.color.copy(Yp),c=!0);for(let v=0;v<6;v++){const y=v%3;y===0?(l.up.set(0,u[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[v],s.y,s.z)):y===1?(l.up.set(0,0,u[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[v],s.z)):(l.up.set(0,u[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[v]));const A=this._cubeSize;es(r,y*A,v>2?A:0,A,A),p.setRenderTarget(r),c&&p.render(M,l),p.render(e,l)}p.toneMapping=m,p.autoClear=f,e.background=h}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ur||e.mapping===Ps;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;es(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Js)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,u=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),p=Math.sqrt(u*u-d*d),f=0+u*1.25,m=p*f,{_lodMax:_}=this,M=this._sizeLods[i],g=3*M*(i>_-qi?i-_+qi:0),c=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=_-n,es(s,g,c,3*M,2*M),r.setRenderTarget(s),r.render(o,Js),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,es(e,g,c,3*M,2*M),r.setRenderTarget(e),r.render(o,Js)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&$e("blur direction must be either latitudinal or longitudinal!");const d=3,p=this._lodMeshes[r];p.material=u;const f=u.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Mr-1),M=s/_,g=isFinite(s)?1+Math.floor(d*M):Mr;g>Mr&&De(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Mr}`);const c=[];let h=0;for(let C=0;C<Mr;++C){const x=C/M,T=Math.exp(-x*x/2);c.push(T),C===0?h+=T:C<g&&(h+=2*T)}for(let C=0;C<c.length;C++)c[C]=c[C]/h;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=c,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-i;const y=this._sizeLods[r],A=3*y*(r>v-qi?r-v+qi:0),w=4*(this._cubeSize-y);es(n,A,w,3*y,2*y),l.setRenderTarget(n),l.render(p,Js)}}function t1(t){const e=[],n=[],i=[];let r=t;const s=t-qi+1+jp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-qi?l=jp[a-t+qi-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),d=-u,p=1+u,f=[d,d,p,d,p,p,d,d,p,p,d,p],m=6,_=6,M=3,g=2,c=1,h=new Float32Array(M*_*m),v=new Float32Array(g*_*m),y=new Float32Array(c*_*m);for(let w=0;w<m;w++){const C=w%3*2/3-1,x=w>2?0:-1,T=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];h.set(T,M*_*w),v.set(f,g*_*w);const U=[w,w,w,w,w,w];y.set(U,c*_*w)}const A=new $t;A.setAttribute("position",new dn(h,M)),A.setAttribute("uv",new dn(v,g)),A.setAttribute("faceIndex",new dn(y,c)),i.push(new Pn(A,null)),r>qi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function $p(t,e,n){const i=new si(t,e,n);return i.texture.mapping=Yl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function es(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function n1(t,e,n){return new oi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:JE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function i1(t,e,n){const i=new Float32Array(Mr),r=new V(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Kp(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Zp(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Zl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class l_ extends si{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new t_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ja(5,5,5),s=new oi({name:"CubemapFromEquirect",uniforms:Ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Mi});s.uniforms.tEquirect.value=n;const a=new Pn(r,s),o=n.minFilter;return n.minFilter===Ar&&(n.minFilter=Yt),new cy(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function r1(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,m=!1){return f==null?null:m?a(f):s(f)}function s(f){if(f&&f.isTexture){const m=f.mapping;if(m===Cu||m===Ru)if(e.has(f)){const _=e.get(f).texture;return o(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const M=new l_(_.height);return M.fromEquirectangularTexture(t,f),e.set(f,M),f.addEventListener("dispose",u),o(M.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const m=f.mapping,_=m===Cu||m===Ru,M=m===Ur||m===Ps;if(_||M){let g=n.get(f);const c=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==c)return i===null&&(i=new qp(t)),g=_?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),g.texture;if(g!==void 0)return g.texture;{const h=f.image;return _&&h&&h.height>0||M&&h&&l(h)?(i===null&&(i=new qp(t)),g=_?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),f.addEventListener("dispose",d),g.texture):null}}}return f}function o(f,m){return m===Cu?f.mapping=Ur:m===Ru&&(f.mapping=Ps),f}function l(f){let m=0;const _=6;for(let M=0;M<_;M++)f[M]!==void 0&&m++;return m===_}function u(f){const m=f.target;m.removeEventListener("dispose",u);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function d(f){const m=f.target;m.removeEventListener("dispose",d);const _=n.get(m);_!==void 0&&(n.delete(m),_.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function s1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&bl("WebGLRenderer: "+i+" extension not supported."),r}}}function a1(t,e,n,i){const r={},s=new WeakMap;function a(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(p,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(p){const f=p.attributes;for(const m in f)e.update(f[m],t.ARRAY_BUFFER)}function u(p){const f=[],m=p.index,_=p.attributes.position;let M=0;if(_===void 0)return;if(m!==null){const h=m.array;M=m.version;for(let v=0,y=h.length;v<y;v+=3){const A=h[v+0],w=h[v+1],C=h[v+2];f.push(A,w,w,C,C,A)}}else{const h=_.array;M=_.version;for(let v=0,y=h.length/3-1;v<y;v+=3){const A=v+0,w=v+1,C=v+2;f.push(A,w,w,C,C,A)}}const g=new(_.count>=65535?Q0:Z0)(f,1);g.version=M;const c=s.get(p);c&&e.remove(c),s.set(p,g)}function d(p){const f=s.get(p);if(f){const m=p.index;m!==null&&f.version<m.version&&u(p)}else u(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function o1(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,m){t.drawElements(i,m,s,f*a),n.update(m,i,1)}function u(f,m,_){_!==0&&(t.drawElementsInstanced(i,m,s,f*a,_),n.update(m,i,_))}function d(f,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,_);let g=0;for(let c=0;c<_;c++)g+=m[c];n.update(g,i,1)}function p(f,m,_,M){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let c=0;c<f.length;c++)u(f[c]/a,m[c],M[c]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,M,0,_);let c=0;for(let h=0;h<_;h++)c+=m[h]*M[h];n.update(c,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function l1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function u1(t,e,n){const i=new WeakMap,r=new yt;function s(a,o,l){const u=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let f=i.get(o);if(f===void 0||f.count!==p){let U=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",U)};var m=U;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,c=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let y=0;_===!0&&(y=1),M===!0&&(y=2),g===!0&&(y=3);let A=o.attributes.position.count*y,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*w*4*p),x=new Y0(C,A,w,p);x.type=ei,x.needsUpdate=!0;const T=y*4;for(let b=0;b<p;b++){const k=c[b],F=h[b],j=v[b],H=A*w*4*b;for(let z=0;z<k.count;z++){const O=z*T;_===!0&&(r.fromBufferAttribute(k,z),C[H+O+0]=r.x,C[H+O+1]=r.y,C[H+O+2]=r.z,C[H+O+3]=0),M===!0&&(r.fromBufferAttribute(F,z),C[H+O+4]=r.x,C[H+O+5]=r.y,C[H+O+6]=r.z,C[H+O+7]=0),g===!0&&(r.fromBufferAttribute(j,z),C[H+O+8]=r.x,C[H+O+9]=r.y,C[H+O+10]=r.z,C[H+O+11]=j.itemSize===4?r.w:1)}}f={count:p,texture:x,size:new Ke(A,w)},i.set(o,f),o.addEventListener("dispose",U)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let g=0;g<u.length;g++)_+=u[g];const M=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",M),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function c1(t,e,n,i,r){let s=new WeakMap;function a(u){const d=r.render.frame,p=u.geometry,f=e.get(u,p);if(s.get(f)!==d&&(e.update(f),s.set(f,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==d&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,d))),u.isSkinnedMesh){const m=u.skeleton;s.get(m)!==d&&(m.update(),s.set(m,d))}return f}function o(){s=new WeakMap}function l(u){const d=u.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:a,dispose:o}}const f1={[L0]:"LINEAR_TONE_MAPPING",[D0]:"REINHARD_TONE_MAPPING",[N0]:"CINEON_TONE_MAPPING",[I0]:"ACES_FILMIC_TONE_MAPPING",[F0]:"AGX_TONE_MAPPING",[O0]:"NEUTRAL_TONE_MAPPING",[U0]:"CUSTOM_TONE_MAPPING"};function d1(t,e,n,i,r){const s=new si(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),a=new si(e,n,{type:Ri,depthBuffer:!1,stencilBuffer:!1}),o=new $t;o.setAttribute("position",new en([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new en([0,2,0,0,2,0],2));const l=new oy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Pn(o,l),d=new s_(-1,1,1,-1,0,1);let p=null,f=null,m=!1,_,M=null,g=[],c=!1;this.setSize=function(h,v){s.setSize(h,v),a.setSize(h,v);for(let y=0;y<g.length;y++){const A=g[y];A.setSize&&A.setSize(h,v)}},this.setEffects=function(h){g=h,c=g.length>0&&g[0].isRenderPass===!0;const v=s.width,y=s.height;for(let A=0;A<g.length;A++){const w=g[A];w.setSize&&w.setSize(v,y)}},this.begin=function(h,v){if(m||h.toneMapping===ri&&g.length===0)return!1;if(M=v,v!==null){const y=v.width,A=v.height;(s.width!==y||s.height!==A)&&this.setSize(y,A)}return c===!1&&h.setRenderTarget(s),_=h.toneMapping,h.toneMapping=ri,!0},this.hasRenderPass=function(){return c},this.end=function(h,v){h.toneMapping=_,m=!0;let y=s,A=a;for(let w=0;w<g.length;w++){const C=g[w];if(C.enabled!==!1&&(C.render(h,A,y,v),C.needsSwap!==!1)){const x=y;y=A,A=x}}if(p!==h.outputColorSpace||f!==h.toneMapping){p=h.outputColorSpace,f=h.toneMapping,l.defines={},Xe.getTransfer(p)===et&&(l.defines.SRGB_TRANSFER="");const w=f1[f];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,h.setRenderTarget(M),h.render(u,d),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const u_=new Jt,Xf=new Oa(1,1),c_=new Y0,f_=new kS,d_=new t_,Qp=[],Jp=[],em=new Float32Array(16),tm=new Float32Array(9),nm=new Float32Array(4);function ks(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Qp[r];if(s===void 0&&(s=new Float32Array(r),Qp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ql(t,e){let n=Jp[e];n===void 0&&(n=new Int32Array(e),Jp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function h1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function p1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),bt(n,e)}}function m1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),bt(n,e)}}function g1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),bt(n,e)}}function _1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(n,e)}else{if(Rt(n,i))return;nm.set(i),t.uniformMatrix2fv(this.addr,!1,nm),bt(n,i)}}function v1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(n,e)}else{if(Rt(n,i))return;tm.set(i),t.uniformMatrix3fv(this.addr,!1,tm),bt(n,i)}}function x1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(n,e)}else{if(Rt(n,i))return;em.set(i),t.uniformMatrix4fv(this.addr,!1,em),bt(n,i)}}function S1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function y1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),bt(n,e)}}function M1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),bt(n,e)}}function E1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),bt(n,e)}}function T1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function w1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),bt(n,e)}}function A1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),bt(n,e)}}function C1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),bt(n,e)}}function R1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Xf.compareFunction=n.isReversedDepthBuffer()?$d:qd,s=Xf):s=u_,n.setTexture2D(e||s,r)}function b1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||f_,r)}function P1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||d_,r)}function L1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||c_,r)}function D1(t){switch(t){case 5126:return h1;case 35664:return p1;case 35665:return m1;case 35666:return g1;case 35674:return _1;case 35675:return v1;case 35676:return x1;case 5124:case 35670:return S1;case 35667:case 35671:return y1;case 35668:case 35672:return M1;case 35669:case 35673:return E1;case 5125:return T1;case 36294:return w1;case 36295:return A1;case 36296:return C1;case 35678:case 36198:case 36298:case 36306:case 35682:return R1;case 35679:case 36299:case 36307:return b1;case 35680:case 36300:case 36308:case 36293:return P1;case 36289:case 36303:case 36311:case 36292:return L1}}function N1(t,e){t.uniform1fv(this.addr,e)}function I1(t,e){const n=ks(e,this.size,2);t.uniform2fv(this.addr,n)}function U1(t,e){const n=ks(e,this.size,3);t.uniform3fv(this.addr,n)}function F1(t,e){const n=ks(e,this.size,4);t.uniform4fv(this.addr,n)}function O1(t,e){const n=ks(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function B1(t,e){const n=ks(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function k1(t,e){const n=ks(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function z1(t,e){t.uniform1iv(this.addr,e)}function V1(t,e){t.uniform2iv(this.addr,e)}function H1(t,e){t.uniform3iv(this.addr,e)}function G1(t,e){t.uniform4iv(this.addr,e)}function W1(t,e){t.uniform1uiv(this.addr,e)}function X1(t,e){t.uniform2uiv(this.addr,e)}function j1(t,e){t.uniform3uiv(this.addr,e)}function Y1(t,e){t.uniform4uiv(this.addr,e)}function q1(t,e,n){const i=this.cache,r=e.length,s=Ql(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Xf:a=u_;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function $1(t,e,n){const i=this.cache,r=e.length,s=Ql(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||f_,s[a])}function K1(t,e,n){const i=this.cache,r=e.length,s=Ql(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||d_,s[a])}function Z1(t,e,n){const i=this.cache,r=e.length,s=Ql(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||c_,s[a])}function Q1(t){switch(t){case 5126:return N1;case 35664:return I1;case 35665:return U1;case 35666:return F1;case 35674:return O1;case 35675:return B1;case 35676:return k1;case 5124:case 35670:return z1;case 35667:case 35671:return V1;case 35668:case 35672:return H1;case 35669:case 35673:return G1;case 5125:return W1;case 36294:return X1;case 36295:return j1;case 36296:return Y1;case 35678:case 36198:case 36298:case 36306:case 35682:return q1;case 35679:case 36299:case 36307:return $1;case 35680:case 36300:case 36308:case 36293:return K1;case 36289:case 36303:case 36311:case 36292:return Z1}}class J1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=D1(n.type)}}class eT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Q1(n.type)}}class tT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const rc=/(\w+)(\])?(\[|\.)?/g;function im(t,e){t.seq.push(e),t.map[e.id]=e}function nT(t,e,n){const i=t.name,r=i.length;for(rc.lastIndex=0;;){const s=rc.exec(i),a=rc.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){im(n,u===void 0?new J1(o,t,e):new eT(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new tT(o),im(n,p)),n=p}}}class tl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);nT(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function rm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const iT=37297;let rT=0;function sT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const sm=new Fe;function aT(t){Xe._getMatrix(sm,Xe.workingColorSpace,t);const e=`mat3( ${sm.elements.map(n=>n.toFixed(4))} )`;switch(Xe.getTransfer(t)){case Al:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function am(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+sT(t.getShaderSource(e),o)}else return s}function oT(t,e){const n=aT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const lT={[L0]:"Linear",[D0]:"Reinhard",[N0]:"Cineon",[I0]:"ACESFilmic",[F0]:"AgX",[O0]:"Neutral",[U0]:"Custom"};function uT(t,e){const n=lT[e];return n===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Oo=new V;function cT(){Xe.getLuminanceCoefficients(Oo);const t=Oo.x.toFixed(4),e=Oo.y.toFixed(4),n=Oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(aa).join(`
`)}function dT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function hT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function aa(t){return t!==""}function om(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pT=/^[ \t]*#include +<([\w\d./]+)>/gm;function jf(t){return t.replace(pT,gT)}const mT=new Map;function gT(t,e){let n=Oe[e];if(n===void 0){const i=mT.get(e);if(i!==void 0)n=Oe[i],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return jf(n)}const _T=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function um(t){return t.replace(_T,vT)}function vT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function cm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const xT={[Ko]:"SHADOWMAP_TYPE_PCF",[sa]:"SHADOWMAP_TYPE_VSM"};function ST(t){return xT[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const yT={[Ur]:"ENVMAP_TYPE_CUBE",[Ps]:"ENVMAP_TYPE_CUBE",[Yl]:"ENVMAP_TYPE_CUBE_UV"};function MT(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":yT[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const ET={[Ps]:"ENVMAP_MODE_REFRACTION"};function TT(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":ET[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const wT={[P0]:"ENVMAP_BLENDING_MULTIPLY",[_S]:"ENVMAP_BLENDING_MIX",[vS]:"ENVMAP_BLENDING_ADD"};function AT(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":wT[t.combine]||"ENVMAP_BLENDING_NONE"}function CT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function RT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=ST(n),u=MT(n),d=TT(n),p=AT(n),f=CT(n),m=fT(n),_=dT(s),M=r.createProgram();let g,c,h=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(aa).join(`
`),g.length>0&&(g+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(aa).join(`
`),c.length>0&&(c+=`
`)):(g=[cm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),c=[cm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ri?"#define TONE_MAPPING":"",n.toneMapping!==ri?Oe.tonemapping_pars_fragment:"",n.toneMapping!==ri?uT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,oT("linearToOutputTexel",n.outputColorSpace),cT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(aa).join(`
`)),a=jf(a),a=om(a,n),a=lm(a,n),o=jf(o),o=om(o,n),o=lm(o,n),a=um(a),o=um(o),n.isRawShaderMaterial!==!0&&(h=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,c=["#define varying in",n.glslVersion===Tp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Tp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const v=h+g+a,y=h+c+o,A=rm(r,r.VERTEX_SHADER,v),w=rm(r,r.FRAGMENT_SHADER,y);r.attachShader(M,A),r.attachShader(M,w),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function C(b){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(M)||"",F=r.getShaderInfoLog(A)||"",j=r.getShaderInfoLog(w)||"",H=k.trim(),z=F.trim(),O=j.trim();let G=!0,B=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,A,w);else{const Q=am(r,A,"vertex"),ie=am(r,w,"fragment");$e("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+H+`
`+Q+`
`+ie)}else H!==""?De("WebGLProgram: Program Info Log:",H):(z===""||O==="")&&(B=!1);B&&(b.diagnostics={runnable:G,programLog:H,vertexShader:{log:z,prefix:g},fragmentShader:{log:O,prefix:c}})}r.deleteShader(A),r.deleteShader(w),x=new tl(r,M),T=hT(r,M)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(M,iT)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=rT++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=A,this.fragmentShader=w,this}let bT=0;class PT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new LT(e),n.set(e,i)),i}}class LT{constructor(e){this.id=bT++,this.code=e,this.usedTimes=0}}function DT(t,e,n,i,r,s){const a=new q0,o=new PT,l=new Set,u=[],d=new Map,p=i.logarithmicDepthBuffer;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function M(x,T,U,b,k){const F=b.fog,j=k.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?b.environment:null,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,O=e.get(x.envMap||H,z),G=O&&O.mapping===Yl?O.image.height:null,B=m[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&De("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const Q=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ie=Q!==void 0?Q.length:0;let se=0;j.morphAttributes.position!==void 0&&(se=1),j.morphAttributes.normal!==void 0&&(se=2),j.morphAttributes.color!==void 0&&(se=3);let Pe,Ge,Ye,q;if(B){const Je=Zn[B];Pe=Je.vertexShader,Ge=Je.fragmentShader}else Pe=x.vertexShader,Ge=x.fragmentShader,o.update(x),Ye=o.getVertexShaderID(x),q=o.getFragmentShaderID(x);const re=t.getRenderTarget(),ce=t.state.buffers.depth.getReversed(),Ue=k.isInstancedMesh===!0,Re=k.isBatchedMesh===!0,Le=!!x.map,Pt=!!x.matcap,We=!!O,Qe=!!x.aoMap,st=!!x.lightMap,Be=!!x.bumpMap,vt=!!x.normalMap,L=!!x.displacementMap,Et=!!x.emissiveMap,Ze=!!x.metalnessMap,ot=!!x.roughnessMap,Ee=x.anisotropy>0,R=x.clearcoat>0,S=x.dispersion>0,N=x.iridescence>0,Z=x.sheen>0,J=x.transmission>0,K=Ee&&!!x.anisotropyMap,ve=R&&!!x.clearcoatMap,le=R&&!!x.clearcoatNormalMap,Ce=R&&!!x.clearcoatRoughnessMap,be=N&&!!x.iridescenceMap,te=N&&!!x.iridescenceThicknessMap,ae=Z&&!!x.sheenColorMap,xe=Z&&!!x.sheenRoughnessMap,ye=!!x.specularMap,pe=!!x.specularColorMap,ke=!!x.specularIntensityMap,D=J&&!!x.transmissionMap,ue=J&&!!x.thicknessMap,oe=!!x.gradientMap,_e=!!x.alphaMap,ne=x.alphaTest>0,$=!!x.alphaHash,Se=!!x.extensions;let Ne=ri;x.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Ne=t.toneMapping);const lt={shaderID:B,shaderType:x.type,shaderName:x.name,vertexShader:Pe,fragmentShader:Ge,defines:x.defines,customVertexShaderID:Ye,customFragmentShaderID:q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Re,batchingColor:Re&&k._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&k.instanceColor!==null,instancingMorph:Ue&&k.morphTexture!==null,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ds,alphaToCoverage:!!x.alphaToCoverage,map:Le,matcap:Pt,envMap:We,envMapMode:We&&O.mapping,envMapCubeUVHeight:G,aoMap:Qe,lightMap:st,bumpMap:Be,normalMap:vt,displacementMap:L,emissiveMap:Et,normalMapObjectSpace:vt&&x.normalMapType===MS,normalMapTangentSpace:vt&&x.normalMapType===yS,metalnessMap:Ze,roughnessMap:ot,anisotropy:Ee,anisotropyMap:K,clearcoat:R,clearcoatMap:ve,clearcoatNormalMap:le,clearcoatRoughnessMap:Ce,dispersion:S,iridescence:N,iridescenceMap:be,iridescenceThicknessMap:te,sheen:Z,sheenColorMap:ae,sheenRoughnessMap:xe,specularMap:ye,specularColorMap:pe,specularIntensityMap:ke,transmission:J,transmissionMap:D,thicknessMap:ue,gradientMap:oe,opaque:x.transparent===!1&&x.blending===xs&&x.alphaToCoverage===!1,alphaMap:_e,alphaTest:ne,alphaHash:$,combine:x.combine,mapUv:Le&&_(x.map.channel),aoMapUv:Qe&&_(x.aoMap.channel),lightMapUv:st&&_(x.lightMap.channel),bumpMapUv:Be&&_(x.bumpMap.channel),normalMapUv:vt&&_(x.normalMap.channel),displacementMapUv:L&&_(x.displacementMap.channel),emissiveMapUv:Et&&_(x.emissiveMap.channel),metalnessMapUv:Ze&&_(x.metalnessMap.channel),roughnessMapUv:ot&&_(x.roughnessMap.channel),anisotropyMapUv:K&&_(x.anisotropyMap.channel),clearcoatMapUv:ve&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:te&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:xe&&_(x.sheenRoughnessMap.channel),specularMapUv:ye&&_(x.specularMap.channel),specularColorMapUv:pe&&_(x.specularColorMap.channel),specularIntensityMapUv:ke&&_(x.specularIntensityMap.channel),transmissionMapUv:D&&_(x.transmissionMap.channel),thicknessMapUv:ue&&_(x.thicknessMap.channel),alphaMapUv:_e&&_(x.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(vt||Ee),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!j.attributes.uv&&(Le||_e),fog:!!F,useFog:x.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||j.attributes.normal===void 0&&vt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ce,skinning:k.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:se,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ne,decodeVideoTexture:Le&&x.map.isVideoTexture===!0&&Xe.getTransfer(x.map.colorSpace)===et,decodeVideoTextureEmissive:Et&&x.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(x.emissiveMap.colorSpace)===et,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===_i,flipSided:x.side===cn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Se&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&x.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return lt.vertexUv1s=l.has(1),lt.vertexUv2s=l.has(2),lt.vertexUv3s=l.has(3),l.clear(),lt}function g(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const U in x.defines)T.push(U),T.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(c(T,x),h(T,x),T.push(t.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function c(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function h(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),x.push(a.mask)}function v(x){const T=m[x.type];let U;if(T){const b=Zn[T];U=ry.clone(b.uniforms)}else U=x.uniforms;return U}function y(x,T){let U=d.get(T);return U!==void 0?++U.usedTimes:(U=new RT(t,T,x,r),u.push(U),d.set(T,U)),U}function A(x){if(--x.usedTimes===0){const T=u.indexOf(x);u[T]=u[u.length-1],u.pop(),d.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function C(){o.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:v,acquireProgram:y,releaseProgram:A,releaseShaderCache:w,programs:u,dispose:C}}function NT(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function IT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function fm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function dm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function o(f,m,_,M,g,c){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:m,material:_,materialVariant:a(f),groupOrder:M,renderOrder:f.renderOrder,z:g,group:c},t[e]=h):(h.id=f.id,h.object=f,h.geometry=m,h.material=_,h.materialVariant=a(f),h.groupOrder=M,h.renderOrder=f.renderOrder,h.z=g,h.group=c),e++,h}function l(f,m,_,M,g,c){const h=o(f,m,_,M,g,c);_.transmission>0?i.push(h):_.transparent===!0?r.push(h):n.push(h)}function u(f,m,_,M,g,c){const h=o(f,m,_,M,g,c);_.transmission>0?i.unshift(h):_.transparent===!0?r.unshift(h):n.unshift(h)}function d(f,m){n.length>1&&n.sort(f||IT),i.length>1&&i.sort(m||fm),r.length>1&&r.sort(m||fm)}function p(){for(let f=e,m=t.length;f<m;f++){const _=t[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:p,sort:d}}function UT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new dm,t.set(i,[a])):r>=s.length?(a=new dm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function FT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new tt};break;case"SpotLight":n={position:new V,direction:new V,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function OT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let BT=0;function kT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function zT(t){const e=new FT,n=OT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new V);const r=new V,s=new Mt,a=new Mt;function o(u){let d=0,p=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let m=0,_=0,M=0,g=0,c=0,h=0,v=0,y=0,A=0,w=0,C=0;u.sort(kT);for(let T=0,U=u.length;T<U;T++){const b=u[T],k=b.color,F=b.intensity,j=b.distance;let H=null;if(b.shadow&&b.shadow.map&&(b.shadow.map.texture.format===Ls?H=b.shadow.map.texture:H=b.shadow.map.depthTexture||b.shadow.map.texture),b.isAmbientLight)d+=k.r*F,p+=k.g*F,f+=k.b*F;else if(b.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(b.sh.coefficients[z],F);C++}else if(b.isDirectionalLight){const z=e.get(b);if(z.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const O=b.shadow,G=n.get(b);G.shadowIntensity=O.intensity,G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,i.directionalShadow[m]=G,i.directionalShadowMap[m]=H,i.directionalShadowMatrix[m]=b.shadow.matrix,h++}i.directional[m]=z,m++}else if(b.isSpotLight){const z=e.get(b);z.position.setFromMatrixPosition(b.matrixWorld),z.color.copy(k).multiplyScalar(F),z.distance=j,z.coneCos=Math.cos(b.angle),z.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),z.decay=b.decay,i.spot[M]=z;const O=b.shadow;if(b.map&&(i.spotLightMap[A]=b.map,A++,O.updateMatrices(b),b.castShadow&&w++),i.spotLightMatrix[M]=O.matrix,b.castShadow){const G=n.get(b);G.shadowIntensity=O.intensity,G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,i.spotShadow[M]=G,i.spotShadowMap[M]=H,y++}M++}else if(b.isRectAreaLight){const z=e.get(b);z.color.copy(k).multiplyScalar(F),z.halfWidth.set(b.width*.5,0,0),z.halfHeight.set(0,b.height*.5,0),i.rectArea[g]=z,g++}else if(b.isPointLight){const z=e.get(b);if(z.color.copy(b.color).multiplyScalar(b.intensity),z.distance=b.distance,z.decay=b.decay,b.castShadow){const O=b.shadow,G=n.get(b);G.shadowIntensity=O.intensity,G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,G.shadowCameraNear=O.camera.near,G.shadowCameraFar=O.camera.far,i.pointShadow[_]=G,i.pointShadowMap[_]=H,i.pointShadowMatrix[_]=b.shadow.matrix,v++}i.point[_]=z,_++}else if(b.isHemisphereLight){const z=e.get(b);z.skyColor.copy(b.color).multiplyScalar(F),z.groundColor.copy(b.groundColor).multiplyScalar(F),i.hemi[c]=z,c++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=f;const x=i.hash;(x.directionalLength!==m||x.pointLength!==_||x.spotLength!==M||x.rectAreaLength!==g||x.hemiLength!==c||x.numDirectionalShadows!==h||x.numPointShadows!==v||x.numSpotShadows!==y||x.numSpotMaps!==A||x.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=M,i.rectArea.length=g,i.point.length=_,i.hemi.length=c,i.directionalShadow.length=h,i.directionalShadowMap.length=h,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=h,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,x.directionalLength=m,x.pointLength=_,x.spotLength=M,x.rectAreaLength=g,x.hemiLength=c,x.numDirectionalShadows=h,x.numPointShadows=v,x.numSpotShadows=y,x.numSpotMaps=A,x.numLightProbes=C,i.version=BT++)}function l(u,d){let p=0,f=0,m=0,_=0,M=0;const g=d.matrixWorldInverse;for(let c=0,h=u.length;c<h;c++){const v=u[c];if(v.isDirectionalLight){const y=i.directional[p];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),p++}else if(v.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),m++}else if(v.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),a.identity(),s.copy(v.matrixWorld),s.premultiply(g),a.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){const y=i.hemi[M];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),M++}}}return{setup:o,setupView:l,state:i}}function hm(t){const e=new zT(t),n=[],i=[];function r(d){u.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function a(d){i.push(d)}function o(){e.setup(n)}function l(d){e.setupView(n,d)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function VT(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new hm(t),e.set(r,[o])):s>=a.length?(o=new hm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const HT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,WT=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],XT=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],pm=new Mt,ea=new V,sc=new V;function jT(t,e,n){let i=new e_;const r=new Ke,s=new Ke,a=new yt,o=new ly,l=new uy,u={},d=n.maxTextureSize,p={[sr]:cn,[cn]:sr,[_i]:_i},f=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:HT,fragmentShader:GT}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new $t;_.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Pn(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ko;let c=this.type;this.render=function(w,C,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Qx&&(De("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ko);const T=t.getRenderTarget(),U=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),k=t.state;k.setBlending(Mi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const F=c!==this.type;F&&C.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(H=>H.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,H=w.length;j<H;j++){const z=w[j],O=z.shadow;if(O===void 0){De("WebGLShadowMap:",z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const G=O.getFrameExtents();r.multiply(G),s.copy(O.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/G.x),r.x=s.x*G.x,O.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/G.y),r.y=s.y*G.y,O.mapSize.y=s.y));const B=t.state.buffers.depth.getReversed();if(O.camera._reversedDepth=B,O.map===null||F===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===sa){if(z.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new si(r.x,r.y,{format:Ls,type:Ri,minFilter:Yt,magFilter:Yt,generateMipmaps:!1}),O.map.texture.name=z.name+".shadowMap",O.map.depthTexture=new Oa(r.x,r.y,ei),O.map.depthTexture.name=z.name+".shadowMapDepth",O.map.depthTexture.format=bi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Bt,O.map.depthTexture.magFilter=Bt}else z.isPointLight?(O.map=new l_(r.x),O.map.depthTexture=new ny(r.x,ai)):(O.map=new si(r.x,r.y),O.map.depthTexture=new Oa(r.x,r.y,ai)),O.map.depthTexture.name=z.name+".shadowMap",O.map.depthTexture.format=bi,this.type===Ko?(O.map.depthTexture.compareFunction=B?$d:qd,O.map.depthTexture.minFilter=Yt,O.map.depthTexture.magFilter=Yt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Bt,O.map.depthTexture.magFilter=Bt);O.camera.updateProjectionMatrix()}const Q=O.map.isWebGLCubeRenderTarget?6:1;for(let ie=0;ie<Q;ie++){if(O.map.isWebGLCubeRenderTarget)t.setRenderTarget(O.map,ie),t.clear();else{ie===0&&(t.setRenderTarget(O.map),t.clear());const se=O.getViewport(ie);a.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),k.viewport(a)}if(z.isPointLight){const se=O.camera,Pe=O.matrix,Ge=z.distance||se.far;Ge!==se.far&&(se.far=Ge,se.updateProjectionMatrix()),ea.setFromMatrixPosition(z.matrixWorld),se.position.copy(ea),sc.copy(se.position),sc.add(WT[ie]),se.up.copy(XT[ie]),se.lookAt(sc),se.updateMatrixWorld(),Pe.makeTranslation(-ea.x,-ea.y,-ea.z),pm.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),O._frustum.setFromProjectionMatrix(pm,se.coordinateSystem,se.reversedDepth)}else O.updateMatrices(z);i=O.getFrustum(),y(C,x,O.camera,z,this.type)}O.isPointLightShadow!==!0&&this.type===sa&&h(O,x),O.needsUpdate=!1}c=this.type,g.needsUpdate=!1,t.setRenderTarget(T,U,b)};function h(w,C){const x=e.update(M);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new si(r.x,r.y,{format:Ls,type:Ri})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(C,null,x,f,M,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(C,null,x,m,M,null)}function v(w,C,x,T){let U=null;const b=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(b!==void 0)U=b;else if(U=x.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const k=U.uuid,F=C.uuid;let j=u[k];j===void 0&&(j={},u[k]=j);let H=j[F];H===void 0&&(H=U.clone(),j[F]=H,C.addEventListener("dispose",A)),U=H}if(U.visible=C.visible,U.wireframe=C.wireframe,T===sa?U.side=C.shadowSide!==null?C.shadowSide:C.side:U.side=C.shadowSide!==null?C.shadowSide:p[C.side],U.alphaMap=C.alphaMap,U.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,U.map=C.map,U.clipShadows=C.clipShadows,U.clippingPlanes=C.clippingPlanes,U.clipIntersection=C.clipIntersection,U.displacementMap=C.displacementMap,U.displacementScale=C.displacementScale,U.displacementBias=C.displacementBias,U.wireframeLinewidth=C.wireframeLinewidth,U.linewidth=C.linewidth,x.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const k=t.properties.get(U);k.light=x}return U}function y(w,C,x,T,U){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&U===sa)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const F=e.update(w),j=w.material;if(Array.isArray(j)){const H=F.groups;for(let z=0,O=H.length;z<O;z++){const G=H[z],B=j[G.materialIndex];if(B&&B.visible){const Q=v(w,B,T,U);w.onBeforeShadow(t,w,C,x,F,Q,G),t.renderBufferDirect(x,null,F,Q,w,G),w.onAfterShadow(t,w,C,x,F,Q,G)}}}else if(j.visible){const H=v(w,j,T,U);w.onBeforeShadow(t,w,C,x,F,H,null),t.renderBufferDirect(x,null,F,H,w,null),w.onAfterShadow(t,w,C,x,F,H,null)}}const k=w.children;for(let F=0,j=k.length;F<j;F++)y(k[F],C,x,T,U)}function A(w){w.target.removeEventListener("dispose",A);for(const x in u){const T=u[x],U=w.target.uuid;U in T&&(T[U].dispose(),delete T[U])}}}function YT(t,e){function n(){let D=!1;const ue=new yt;let oe=null;const _e=new yt(0,0,0,0);return{setMask:function(ne){oe!==ne&&!D&&(t.colorMask(ne,ne,ne,ne),oe=ne)},setLocked:function(ne){D=ne},setClear:function(ne,$,Se,Ne,lt){lt===!0&&(ne*=Ne,$*=Ne,Se*=Ne),ue.set(ne,$,Se,Ne),_e.equals(ue)===!1&&(t.clearColor(ne,$,Se,Ne),_e.copy(ue))},reset:function(){D=!1,oe=null,_e.set(-1,0,0,0)}}}function i(){let D=!1,ue=!1,oe=null,_e=null,ne=null;return{setReversed:function($){if(ue!==$){const Se=e.get("EXT_clip_control");$?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),ue=$;const Ne=ne;ne=null,this.setClear(Ne)}},getReversed:function(){return ue},setTest:function($){$?re(t.DEPTH_TEST):ce(t.DEPTH_TEST)},setMask:function($){oe!==$&&!D&&(t.depthMask($),oe=$)},setFunc:function($){if(ue&&($=DS[$]),_e!==$){switch($){case tf:t.depthFunc(t.NEVER);break;case nf:t.depthFunc(t.ALWAYS);break;case rf:t.depthFunc(t.LESS);break;case bs:t.depthFunc(t.LEQUAL);break;case sf:t.depthFunc(t.EQUAL);break;case af:t.depthFunc(t.GEQUAL);break;case of:t.depthFunc(t.GREATER);break;case lf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}_e=$}},setLocked:function($){D=$},setClear:function($){ne!==$&&(ne=$,ue&&($=1-$),t.clearDepth($))},reset:function(){D=!1,oe=null,_e=null,ne=null,ue=!1}}}function r(){let D=!1,ue=null,oe=null,_e=null,ne=null,$=null,Se=null,Ne=null,lt=null;return{setTest:function(Je){D||(Je?re(t.STENCIL_TEST):ce(t.STENCIL_TEST))},setMask:function(Je){ue!==Je&&!D&&(t.stencilMask(Je),ue=Je)},setFunc:function(Je,li,ui){(oe!==Je||_e!==li||ne!==ui)&&(t.stencilFunc(Je,li,ui),oe=Je,_e=li,ne=ui)},setOp:function(Je,li,ui){($!==Je||Se!==li||Ne!==ui)&&(t.stencilOp(Je,li,ui),$=Je,Se=li,Ne=ui)},setLocked:function(Je){D=Je},setClear:function(Je){lt!==Je&&(t.clearStencil(Je),lt=Je)},reset:function(){D=!1,ue=null,oe=null,_e=null,ne=null,$=null,Se=null,Ne=null,lt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,u=new WeakMap;let d={},p={},f=new WeakMap,m=[],_=null,M=!1,g=null,c=null,h=null,v=null,y=null,A=null,w=null,C=new tt(0,0,0),x=0,T=!1,U=null,b=null,k=null,F=null,j=null;const H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,O=0;const G=t.getParameter(t.VERSION);G.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(G)[1]),z=O>=1):G.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),z=O>=2);let B=null,Q={};const ie=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),Pe=new yt().fromArray(ie),Ge=new yt().fromArray(se);function Ye(D,ue,oe,_e){const ne=new Uint8Array(4),$=t.createTexture();t.bindTexture(D,$),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Se=0;Se<oe;Se++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,_e,0,t.RGBA,t.UNSIGNED_BYTE,ne):t.texImage2D(ue+Se,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ne);return $}const q={};q[t.TEXTURE_2D]=Ye(t.TEXTURE_2D,t.TEXTURE_2D,1),q[t.TEXTURE_CUBE_MAP]=Ye(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[t.TEXTURE_2D_ARRAY]=Ye(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),q[t.TEXTURE_3D]=Ye(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(t.DEPTH_TEST),a.setFunc(bs),Be(!1),vt(xp),re(t.CULL_FACE),Qe(Mi);function re(D){d[D]!==!0&&(t.enable(D),d[D]=!0)}function ce(D){d[D]!==!1&&(t.disable(D),d[D]=!1)}function Ue(D,ue){return p[D]!==ue?(t.bindFramebuffer(D,ue),p[D]=ue,D===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=ue),D===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function Re(D,ue){let oe=m,_e=!1;if(D){oe=f.get(ue),oe===void 0&&(oe=[],f.set(ue,oe));const ne=D.textures;if(oe.length!==ne.length||oe[0]!==t.COLOR_ATTACHMENT0){for(let $=0,Se=ne.length;$<Se;$++)oe[$]=t.COLOR_ATTACHMENT0+$;oe.length=ne.length,_e=!0}}else oe[0]!==t.BACK&&(oe[0]=t.BACK,_e=!0);_e&&t.drawBuffers(oe)}function Le(D){return _!==D?(t.useProgram(D),_=D,!0):!1}const Pt={[yr]:t.FUNC_ADD,[eS]:t.FUNC_SUBTRACT,[tS]:t.FUNC_REVERSE_SUBTRACT};Pt[nS]=t.MIN,Pt[iS]=t.MAX;const We={[rS]:t.ZERO,[sS]:t.ONE,[aS]:t.SRC_COLOR,[Jc]:t.SRC_ALPHA,[dS]:t.SRC_ALPHA_SATURATE,[cS]:t.DST_COLOR,[lS]:t.DST_ALPHA,[oS]:t.ONE_MINUS_SRC_COLOR,[ef]:t.ONE_MINUS_SRC_ALPHA,[fS]:t.ONE_MINUS_DST_COLOR,[uS]:t.ONE_MINUS_DST_ALPHA,[hS]:t.CONSTANT_COLOR,[pS]:t.ONE_MINUS_CONSTANT_COLOR,[mS]:t.CONSTANT_ALPHA,[gS]:t.ONE_MINUS_CONSTANT_ALPHA};function Qe(D,ue,oe,_e,ne,$,Se,Ne,lt,Je){if(D===Mi){M===!0&&(ce(t.BLEND),M=!1);return}if(M===!1&&(re(t.BLEND),M=!0),D!==Jx){if(D!==g||Je!==T){if((c!==yr||y!==yr)&&(t.blendEquation(t.FUNC_ADD),c=yr,y=yr),Je)switch(D){case xs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Rs:t.blendFunc(t.ONE,t.ONE);break;case Sp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case yp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:$e("WebGLState: Invalid blending: ",D);break}else switch(D){case xs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Rs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Sp:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yp:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",D);break}h=null,v=null,A=null,w=null,C.set(0,0,0),x=0,g=D,T=Je}return}ne=ne||ue,$=$||oe,Se=Se||_e,(ue!==c||ne!==y)&&(t.blendEquationSeparate(Pt[ue],Pt[ne]),c=ue,y=ne),(oe!==h||_e!==v||$!==A||Se!==w)&&(t.blendFuncSeparate(We[oe],We[_e],We[$],We[Se]),h=oe,v=_e,A=$,w=Se),(Ne.equals(C)===!1||lt!==x)&&(t.blendColor(Ne.r,Ne.g,Ne.b,lt),C.copy(Ne),x=lt),g=D,T=!1}function st(D,ue){D.side===_i?ce(t.CULL_FACE):re(t.CULL_FACE);let oe=D.side===cn;ue&&(oe=!oe),Be(oe),D.blending===xs&&D.transparent===!1?Qe(Mi):Qe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const _e=D.stencilWrite;o.setTest(_e),_e&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Et(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?re(t.SAMPLE_ALPHA_TO_COVERAGE):ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function Be(D){U!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),U=D)}function vt(D){D!==Kx?(re(t.CULL_FACE),D!==b&&(D===xp?t.cullFace(t.BACK):D===Zx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ce(t.CULL_FACE),b=D}function L(D){D!==k&&(z&&t.lineWidth(D),k=D)}function Et(D,ue,oe){D?(re(t.POLYGON_OFFSET_FILL),(F!==ue||j!==oe)&&(F=ue,j=oe,a.getReversed()&&(ue=-ue),t.polygonOffset(ue,oe))):ce(t.POLYGON_OFFSET_FILL)}function Ze(D){D?re(t.SCISSOR_TEST):ce(t.SCISSOR_TEST)}function ot(D){D===void 0&&(D=t.TEXTURE0+H-1),B!==D&&(t.activeTexture(D),B=D)}function Ee(D,ue,oe){oe===void 0&&(B===null?oe=t.TEXTURE0+H-1:oe=B);let _e=Q[oe];_e===void 0&&(_e={type:void 0,texture:void 0},Q[oe]=_e),(_e.type!==D||_e.texture!==ue)&&(B!==oe&&(t.activeTexture(oe),B=oe),t.bindTexture(D,ue||q[D]),_e.type=D,_e.texture=ue)}function R(){const D=Q[B];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function S(){try{t.compressedTexImage2D(...arguments)}catch(D){$e("WebGLState:",D)}}function N(){try{t.compressedTexImage3D(...arguments)}catch(D){$e("WebGLState:",D)}}function Z(){try{t.texSubImage2D(...arguments)}catch(D){$e("WebGLState:",D)}}function J(){try{t.texSubImage3D(...arguments)}catch(D){$e("WebGLState:",D)}}function K(){try{t.compressedTexSubImage2D(...arguments)}catch(D){$e("WebGLState:",D)}}function ve(){try{t.compressedTexSubImage3D(...arguments)}catch(D){$e("WebGLState:",D)}}function le(){try{t.texStorage2D(...arguments)}catch(D){$e("WebGLState:",D)}}function Ce(){try{t.texStorage3D(...arguments)}catch(D){$e("WebGLState:",D)}}function be(){try{t.texImage2D(...arguments)}catch(D){$e("WebGLState:",D)}}function te(){try{t.texImage3D(...arguments)}catch(D){$e("WebGLState:",D)}}function ae(D){Pe.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Pe.copy(D))}function xe(D){Ge.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Ge.copy(D))}function ye(D,ue){let oe=u.get(ue);oe===void 0&&(oe=new WeakMap,u.set(ue,oe));let _e=oe.get(D);_e===void 0&&(_e=t.getUniformBlockIndex(ue,D.name),oe.set(D,_e))}function pe(D,ue){const _e=u.get(ue).get(D);l.get(ue)!==_e&&(t.uniformBlockBinding(ue,_e,D.__bindingPointIndex),l.set(ue,_e))}function ke(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},B=null,Q={},p={},f=new WeakMap,m=[],_=null,M=!1,g=null,c=null,h=null,v=null,y=null,A=null,w=null,C=new tt(0,0,0),x=0,T=!1,U=null,b=null,k=null,F=null,j=null,Pe.set(0,0,t.canvas.width,t.canvas.height),Ge.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:re,disable:ce,bindFramebuffer:Ue,drawBuffers:Re,useProgram:Le,setBlending:Qe,setMaterial:st,setFlipSided:Be,setCullFace:vt,setLineWidth:L,setPolygonOffset:Et,setScissorTest:Ze,activeTexture:ot,bindTexture:Ee,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:N,texImage2D:be,texImage3D:te,updateUBOMapping:ye,uniformBlockBinding:pe,texStorage2D:le,texStorage3D:Ce,texSubImage2D:Z,texSubImage3D:J,compressedTexSubImage2D:K,compressedTexSubImage3D:ve,scissor:ae,viewport:xe,reset:ke}}function qT(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ke,d=new WeakMap;let p;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,S){return m?new OffscreenCanvas(R,S):Rl("canvas")}function M(R,S,N){let Z=1;const J=Ee(R);if((J.width>N||J.height>N)&&(Z=N/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor(Z*J.width),ve=Math.floor(Z*J.height);p===void 0&&(p=_(K,ve));const le=S?_(K,ve):p;return le.width=K,le.height=ve,le.getContext("2d").drawImage(R,0,0,K,ve),De("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+K+"x"+ve+")."),le}else return"data"in R&&De("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function g(R){return R.generateMipmaps}function c(R){t.generateMipmap(R)}function h(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(R,S,N,Z,J=!1){if(R!==null){if(t[R]!==void 0)return t[R];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=S;if(S===t.RED&&(N===t.FLOAT&&(K=t.R32F),N===t.HALF_FLOAT&&(K=t.R16F),N===t.UNSIGNED_BYTE&&(K=t.R8)),S===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(K=t.R8UI),N===t.UNSIGNED_SHORT&&(K=t.R16UI),N===t.UNSIGNED_INT&&(K=t.R32UI),N===t.BYTE&&(K=t.R8I),N===t.SHORT&&(K=t.R16I),N===t.INT&&(K=t.R32I)),S===t.RG&&(N===t.FLOAT&&(K=t.RG32F),N===t.HALF_FLOAT&&(K=t.RG16F),N===t.UNSIGNED_BYTE&&(K=t.RG8)),S===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&(K=t.RG8UI),N===t.UNSIGNED_SHORT&&(K=t.RG16UI),N===t.UNSIGNED_INT&&(K=t.RG32UI),N===t.BYTE&&(K=t.RG8I),N===t.SHORT&&(K=t.RG16I),N===t.INT&&(K=t.RG32I)),S===t.RGB_INTEGER&&(N===t.UNSIGNED_BYTE&&(K=t.RGB8UI),N===t.UNSIGNED_SHORT&&(K=t.RGB16UI),N===t.UNSIGNED_INT&&(K=t.RGB32UI),N===t.BYTE&&(K=t.RGB8I),N===t.SHORT&&(K=t.RGB16I),N===t.INT&&(K=t.RGB32I)),S===t.RGBA_INTEGER&&(N===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),N===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),N===t.UNSIGNED_INT&&(K=t.RGBA32UI),N===t.BYTE&&(K=t.RGBA8I),N===t.SHORT&&(K=t.RGBA16I),N===t.INT&&(K=t.RGBA32I)),S===t.RGB&&(N===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),N===t.UNSIGNED_INT_10F_11F_11F_REV&&(K=t.R11F_G11F_B10F)),S===t.RGBA){const ve=J?Al:Xe.getTransfer(Z);N===t.FLOAT&&(K=t.RGBA32F),N===t.HALF_FLOAT&&(K=t.RGBA16F),N===t.UNSIGNED_BYTE&&(K=ve===et?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function y(R,S){let N;return R?S===null||S===ai||S===Ua?N=t.DEPTH24_STENCIL8:S===ei?N=t.DEPTH32F_STENCIL8:S===Ia&&(N=t.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ai||S===Ua?N=t.DEPTH_COMPONENT24:S===ei?N=t.DEPTH_COMPONENT32F:S===Ia&&(N=t.DEPTH_COMPONENT16),N}function A(R,S){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Bt&&R.minFilter!==Yt?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function w(R){const S=R.target;S.removeEventListener("dispose",w),x(S),S.isVideoTexture&&d.delete(S)}function C(R){const S=R.target;S.removeEventListener("dispose",C),U(S)}function x(R){const S=i.get(R);if(S.__webglInit===void 0)return;const N=R.source,Z=f.get(N);if(Z){const J=Z[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&T(R),Object.keys(Z).length===0&&f.delete(N)}i.remove(R)}function T(R){const S=i.get(R);t.deleteTexture(S.__webglTexture);const N=R.source,Z=f.get(N);delete Z[S.__cacheKey],a.memory.textures--}function U(R){const S=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let J=0;J<S.__webglFramebuffer[Z].length;J++)t.deleteFramebuffer(S.__webglFramebuffer[Z][J]);else t.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)t.deleteFramebuffer(S.__webglFramebuffer[Z]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const N=R.textures;for(let Z=0,J=N.length;Z<J;Z++){const K=i.get(N[Z]);K.__webglTexture&&(t.deleteTexture(K.__webglTexture),a.memory.textures--),i.remove(N[Z])}i.remove(R)}let b=0;function k(){b=0}function F(){const R=b;return R>=r.maxTextures&&De("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),b+=1,R}function j(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function H(R,S){const N=i.get(R);if(R.isVideoTexture&&Ze(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&N.__version!==R.version){const Z=R.image;if(Z===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{q(N,R,S);return}}else R.isExternalTexture&&(N.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+S)}function z(R,S){const N=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&N.__version!==R.version){q(N,R,S);return}else R.isExternalTexture&&(N.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+S)}function O(R,S){const N=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&N.__version!==R.version){q(N,R,S);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+S)}function G(R,S){const N=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&N.__version!==R.version){re(N,R,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+S)}const B={[uf]:t.REPEAT,[Si]:t.CLAMP_TO_EDGE,[cf]:t.MIRRORED_REPEAT},Q={[Bt]:t.NEAREST,[xS]:t.NEAREST_MIPMAP_NEAREST,[ho]:t.NEAREST_MIPMAP_LINEAR,[Yt]:t.LINEAR,[bu]:t.LINEAR_MIPMAP_NEAREST,[Ar]:t.LINEAR_MIPMAP_LINEAR},ie={[ES]:t.NEVER,[RS]:t.ALWAYS,[TS]:t.LESS,[qd]:t.LEQUAL,[wS]:t.EQUAL,[$d]:t.GEQUAL,[AS]:t.GREATER,[CS]:t.NOTEQUAL};function se(R,S){if(S.type===ei&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Yt||S.magFilter===bu||S.magFilter===ho||S.magFilter===Ar||S.minFilter===Yt||S.minFilter===bu||S.minFilter===ho||S.minFilter===Ar)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,B[S.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,B[S.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,B[S.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Q[S.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Q[S.minFilter]),S.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,ie[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Bt||S.minFilter!==ho&&S.minFilter!==Ar||S.type===ei&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Pe(R,S){let N=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",w));const Z=S.source;let J=f.get(Z);J===void 0&&(J={},f.set(Z,J));const K=j(S);if(K!==R.__cacheKey){J[K]===void 0&&(J[K]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,N=!0),J[K].usedTimes++;const ve=J[R.__cacheKey];ve!==void 0&&(J[R.__cacheKey].usedTimes--,ve.usedTimes===0&&T(S)),R.__cacheKey=K,R.__webglTexture=J[K].texture}return N}function Ge(R,S,N){return Math.floor(Math.floor(R/N)/S)}function Ye(R,S,N,Z){const K=R.updateRanges;if(K.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,N,Z,S.data);else{K.sort((te,ae)=>te.start-ae.start);let ve=0;for(let te=1;te<K.length;te++){const ae=K[ve],xe=K[te],ye=ae.start+ae.count,pe=Ge(xe.start,S.width,4),ke=Ge(ae.start,S.width,4);xe.start<=ye+1&&pe===ke&&Ge(xe.start+xe.count-1,S.width,4)===pe?ae.count=Math.max(ae.count,xe.start+xe.count-ae.start):(++ve,K[ve]=xe)}K.length=ve+1;const le=t.getParameter(t.UNPACK_ROW_LENGTH),Ce=t.getParameter(t.UNPACK_SKIP_PIXELS),be=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let te=0,ae=K.length;te<ae;te++){const xe=K[te],ye=Math.floor(xe.start/4),pe=Math.ceil(xe.count/4),ke=ye%S.width,D=Math.floor(ye/S.width),ue=pe,oe=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ke),t.pixelStorei(t.UNPACK_SKIP_ROWS,D),n.texSubImage2D(t.TEXTURE_2D,0,ke,D,ue,oe,N,Z,S.data)}R.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,le),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ce),t.pixelStorei(t.UNPACK_SKIP_ROWS,be)}}function q(R,S,N){let Z=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=t.TEXTURE_3D);const J=Pe(R,S),K=S.source;n.bindTexture(Z,R.__webglTexture,t.TEXTURE0+N);const ve=i.get(K);if(K.version!==ve.__version||J===!0){n.activeTexture(t.TEXTURE0+N);const le=Xe.getPrimaries(Xe.workingColorSpace),Ce=S.colorSpace===Xi?null:Xe.getPrimaries(S.colorSpace),be=S.colorSpace===Xi||le===Ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let te=M(S.image,!1,r.maxTextureSize);te=ot(S,te);const ae=s.convert(S.format,S.colorSpace),xe=s.convert(S.type);let ye=v(S.internalFormat,ae,xe,S.colorSpace,S.isVideoTexture);se(Z,S);let pe;const ke=S.mipmaps,D=S.isVideoTexture!==!0,ue=ve.__version===void 0||J===!0,oe=K.dataReady,_e=A(S,te);if(S.isDepthTexture)ye=y(S.format===Cr,S.type),ue&&(D?n.texStorage2D(t.TEXTURE_2D,1,ye,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,ye,te.width,te.height,0,ae,xe,null));else if(S.isDataTexture)if(ke.length>0){D&&ue&&n.texStorage2D(t.TEXTURE_2D,_e,ye,ke[0].width,ke[0].height);for(let ne=0,$=ke.length;ne<$;ne++)pe=ke[ne],D?oe&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,pe.width,pe.height,ae,xe,pe.data):n.texImage2D(t.TEXTURE_2D,ne,ye,pe.width,pe.height,0,ae,xe,pe.data);S.generateMipmaps=!1}else D?(ue&&n.texStorage2D(t.TEXTURE_2D,_e,ye,te.width,te.height),oe&&Ye(S,te,ae,xe)):n.texImage2D(t.TEXTURE_2D,0,ye,te.width,te.height,0,ae,xe,te.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){D&&ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,_e,ye,ke[0].width,ke[0].height,te.depth);for(let ne=0,$=ke.length;ne<$;ne++)if(pe=ke[ne],S.format!==Hn)if(ae!==null)if(D){if(oe)if(S.layerUpdates.size>0){const Se=Xp(pe.width,pe.height,S.format,S.type);for(const Ne of S.layerUpdates){const lt=pe.data.subarray(Ne*Se/pe.data.BYTES_PER_ELEMENT,(Ne+1)*Se/pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,Ne,pe.width,pe.height,1,ae,lt)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,pe.width,pe.height,te.depth,ae,pe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,ye,pe.width,pe.height,te.depth,0,pe.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?oe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,pe.width,pe.height,te.depth,ae,xe,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,ye,pe.width,pe.height,te.depth,0,ae,xe,pe.data)}else{D&&ue&&n.texStorage2D(t.TEXTURE_2D,_e,ye,ke[0].width,ke[0].height);for(let ne=0,$=ke.length;ne<$;ne++)pe=ke[ne],S.format!==Hn?ae!==null?D?oe&&n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,pe.width,pe.height,ae,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,ye,pe.width,pe.height,0,pe.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?oe&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,pe.width,pe.height,ae,xe,pe.data):n.texImage2D(t.TEXTURE_2D,ne,ye,pe.width,pe.height,0,ae,xe,pe.data)}else if(S.isDataArrayTexture)if(D){if(ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,_e,ye,te.width,te.height,te.depth),oe)if(S.layerUpdates.size>0){const ne=Xp(te.width,te.height,S.format,S.type);for(const $ of S.layerUpdates){const Se=te.data.subarray($*ne/te.data.BYTES_PER_ELEMENT,($+1)*ne/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,$,te.width,te.height,1,ae,xe,Se)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ae,xe,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ye,te.width,te.height,te.depth,0,ae,xe,te.data);else if(S.isData3DTexture)D?(ue&&n.texStorage3D(t.TEXTURE_3D,_e,ye,te.width,te.height,te.depth),oe&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ae,xe,te.data)):n.texImage3D(t.TEXTURE_3D,0,ye,te.width,te.height,te.depth,0,ae,xe,te.data);else if(S.isFramebufferTexture){if(ue)if(D)n.texStorage2D(t.TEXTURE_2D,_e,ye,te.width,te.height);else{let ne=te.width,$=te.height;for(let Se=0;Se<_e;Se++)n.texImage2D(t.TEXTURE_2D,Se,ye,ne,$,0,ae,xe,null),ne>>=1,$>>=1}}else if(ke.length>0){if(D&&ue){const ne=Ee(ke[0]);n.texStorage2D(t.TEXTURE_2D,_e,ye,ne.width,ne.height)}for(let ne=0,$=ke.length;ne<$;ne++)pe=ke[ne],D?oe&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,ae,xe,pe):n.texImage2D(t.TEXTURE_2D,ne,ye,ae,xe,pe);S.generateMipmaps=!1}else if(D){if(ue){const ne=Ee(te);n.texStorage2D(t.TEXTURE_2D,_e,ye,ne.width,ne.height)}oe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae,xe,te)}else n.texImage2D(t.TEXTURE_2D,0,ye,ae,xe,te);g(S)&&c(Z),ve.__version=K.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function re(R,S,N){if(S.image.length!==6)return;const Z=Pe(R,S),J=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+N);const K=i.get(J);if(J.version!==K.__version||Z===!0){n.activeTexture(t.TEXTURE0+N);const ve=Xe.getPrimaries(Xe.workingColorSpace),le=S.colorSpace===Xi?null:Xe.getPrimaries(S.colorSpace),Ce=S.colorSpace===Xi||ve===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const be=S.isCompressedTexture||S.image[0].isCompressedTexture,te=S.image[0]&&S.image[0].isDataTexture,ae=[];for(let $=0;$<6;$++)!be&&!te?ae[$]=M(S.image[$],!0,r.maxCubemapSize):ae[$]=te?S.image[$].image:S.image[$],ae[$]=ot(S,ae[$]);const xe=ae[0],ye=s.convert(S.format,S.colorSpace),pe=s.convert(S.type),ke=v(S.internalFormat,ye,pe,S.colorSpace),D=S.isVideoTexture!==!0,ue=K.__version===void 0||Z===!0,oe=J.dataReady;let _e=A(S,xe);se(t.TEXTURE_CUBE_MAP,S);let ne;if(be){D&&ue&&n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,ke,xe.width,xe.height);for(let $=0;$<6;$++){ne=ae[$].mipmaps;for(let Se=0;Se<ne.length;Se++){const Ne=ne[Se];S.format!==Hn?ye!==null?D?oe&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,0,0,Ne.width,Ne.height,ye,Ne.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,ke,Ne.width,Ne.height,0,Ne.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,0,0,Ne.width,Ne.height,ye,pe,Ne.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,ke,Ne.width,Ne.height,0,ye,pe,Ne.data)}}}else{if(ne=S.mipmaps,D&&ue){ne.length>0&&_e++;const $=Ee(ae[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,ke,$.width,$.height)}for(let $=0;$<6;$++)if(te){D?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ae[$].width,ae[$].height,ye,pe,ae[$].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ke,ae[$].width,ae[$].height,0,ye,pe,ae[$].data);for(let Se=0;Se<ne.length;Se++){const lt=ne[Se].image[$].image;D?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,0,0,lt.width,lt.height,ye,pe,lt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,ke,lt.width,lt.height,0,ye,pe,lt.data)}}else{D?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ye,pe,ae[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ke,ye,pe,ae[$]);for(let Se=0;Se<ne.length;Se++){const Ne=ne[Se];D?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,0,0,ye,pe,Ne.image[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,ke,ye,pe,Ne.image[$])}}}g(S)&&c(t.TEXTURE_CUBE_MAP),K.__version=J.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ce(R,S,N,Z,J,K){const ve=s.convert(N.format,N.colorSpace),le=s.convert(N.type),Ce=v(N.internalFormat,ve,le,N.colorSpace),be=i.get(S),te=i.get(N);if(te.__renderTarget=S,!be.__hasExternalTextures){const ae=Math.max(1,S.width>>K),xe=Math.max(1,S.height>>K);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,K,Ce,ae,xe,S.depth,0,ve,le,null):n.texImage2D(J,K,Ce,ae,xe,0,ve,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Et(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,J,te.__webglTexture,0,L(S)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,J,te.__webglTexture,K),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ue(R,S,N){if(t.bindRenderbuffer(t.RENDERBUFFER,R),S.depthBuffer){const Z=S.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,K=y(S.stencilBuffer,J),ve=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Et(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,L(S),K,S.width,S.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,L(S),K,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,K,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ve,t.RENDERBUFFER,R)}else{const Z=S.textures;for(let J=0;J<Z.length;J++){const K=Z[J],ve=s.convert(K.format,K.colorSpace),le=s.convert(K.type),Ce=v(K.internalFormat,ve,le,K.colorSpace);Et(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,L(S),Ce,S.width,S.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,L(S),Ce,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,Ce,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Re(R,S,N){const Z=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(S.depthTexture);if(J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z){if(J.__webglInit===void 0&&(J.__webglInit=!0,S.depthTexture.addEventListener("dispose",w)),J.__webglTexture===void 0){J.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),se(t.TEXTURE_CUBE_MAP,S.depthTexture);const be=s.convert(S.depthTexture.format),te=s.convert(S.depthTexture.type);let ae;S.depthTexture.format===bi?ae=t.DEPTH_COMPONENT24:S.depthTexture.format===Cr&&(ae=t.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ae,S.width,S.height,0,be,te,null)}}else H(S.depthTexture,0);const K=J.__webglTexture,ve=L(S),le=Z?t.TEXTURE_CUBE_MAP_POSITIVE_X+N:t.TEXTURE_2D,Ce=S.depthTexture.format===Cr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===bi)Et(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ce,le,K,0,ve):t.framebufferTexture2D(t.FRAMEBUFFER,Ce,le,K,0);else if(S.depthTexture.format===Cr)Et(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ce,le,K,0,ve):t.framebufferTexture2D(t.FRAMEBUFFER,Ce,le,K,0);else throw new Error("Unknown depthTexture format")}function Le(R){const S=i.get(R),N=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",J)};Z.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=Z}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(N)for(let Z=0;Z<6;Z++)Re(S.__webglFramebuffer[Z],R,Z);else{const Z=R.texture.mipmaps;Z&&Z.length>0?Re(S.__webglFramebuffer[0],R,0):Re(S.__webglFramebuffer,R,0)}else if(N){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=t.createRenderbuffer(),Ue(S.__webglDepthbuffer[Z],R,!1);else{const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,K)}}else{const Z=R.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),Ue(S.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,K)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Pt(R,S,N){const Z=i.get(R);S!==void 0&&ce(Z.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&Le(R)}function We(R){const S=R.texture,N=i.get(R),Z=i.get(S);R.addEventListener("dispose",C);const J=R.textures,K=R.isWebGLCubeRenderTarget===!0,ve=J.length>1;if(ve||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=S.version,a.memory.textures++),K){N.__webglFramebuffer=[];for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer[le]=[];for(let Ce=0;Ce<S.mipmaps.length;Ce++)N.__webglFramebuffer[le][Ce]=t.createFramebuffer()}else N.__webglFramebuffer[le]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)N.__webglFramebuffer[le]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(ve)for(let le=0,Ce=J.length;le<Ce;le++){const be=i.get(J[le]);be.__webglTexture===void 0&&(be.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&Et(R)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let le=0;le<J.length;le++){const Ce=J[le];N.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[le]);const be=s.convert(Ce.format,Ce.colorSpace),te=s.convert(Ce.type),ae=v(Ce.internalFormat,be,te,Ce.colorSpace,R.isXRRenderTarget===!0),xe=L(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,xe,ae,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,N.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),Ue(N.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),se(t.TEXTURE_CUBE_MAP,S);for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ce=0;Ce<S.mipmaps.length;Ce++)ce(N.__webglFramebuffer[le][Ce],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ce);else ce(N.__webglFramebuffer[le],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);g(S)&&c(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ve){for(let le=0,Ce=J.length;le<Ce;le++){const be=J[le],te=i.get(be);let ae=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ae,te.__webglTexture),se(ae,be),ce(N.__webglFramebuffer,R,be,t.COLOR_ATTACHMENT0+le,ae,0),g(be)&&c(ae)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(le=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,Z.__webglTexture),se(le,S),S.mipmaps&&S.mipmaps.length>0)for(let Ce=0;Ce<S.mipmaps.length;Ce++)ce(N.__webglFramebuffer[Ce],R,S,t.COLOR_ATTACHMENT0,le,Ce);else ce(N.__webglFramebuffer,R,S,t.COLOR_ATTACHMENT0,le,0);g(S)&&c(le),n.unbindTexture()}R.depthBuffer&&Le(R)}function Qe(R){const S=R.textures;for(let N=0,Z=S.length;N<Z;N++){const J=S[N];if(g(J)){const K=h(R),ve=i.get(J).__webglTexture;n.bindTexture(K,ve),c(K),n.unbindTexture()}}}const st=[],Be=[];function vt(R){if(R.samples>0){if(Et(R)===!1){const S=R.textures,N=R.width,Z=R.height;let J=t.COLOR_BUFFER_BIT;const K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=i.get(R),le=S.length>1;if(le)for(let be=0;be<S.length;be++)n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const Ce=R.texture.mipmaps;Ce&&Ce.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let be=0;be<S.length;be++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ve.__webglColorRenderbuffer[be]);const te=i.get(S[be]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,te,0)}t.blitFramebuffer(0,0,N,Z,0,0,N,Z,J,t.NEAREST),l===!0&&(st.length=0,Be.length=0,st.push(t.COLOR_ATTACHMENT0+be),R.depthBuffer&&R.resolveDepthBuffer===!1&&(st.push(K),Be.push(K),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Be)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,st))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let be=0;be<S.length;be++){n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,ve.__webglColorRenderbuffer[be]);const te=i.get(S[be]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,te,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function L(R){return Math.min(r.maxSamples,R.samples)}function Et(R){const S=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ze(R){const S=a.render.frame;d.get(R)!==S&&(d.set(R,S),R.update())}function ot(R,S){const N=R.colorSpace,Z=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||N!==Ds&&N!==Xi&&(Xe.getTransfer(N)===et?(Z!==Hn||J!==Cn)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",N)),S}function Ee(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=F,this.resetTextureUnits=k,this.setTexture2D=H,this.setTexture2DArray=z,this.setTexture3D=O,this.setTextureCube=G,this.rebindTextures=Pt,this.setupRenderTarget=We,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Et,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function $T(t,e){function n(i,r=Xi){let s;const a=Xe.getTransfer(r);if(i===Cn)return t.UNSIGNED_BYTE;if(i===Gd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Wd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===V0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===H0)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===k0)return t.BYTE;if(i===z0)return t.SHORT;if(i===Ia)return t.UNSIGNED_SHORT;if(i===Hd)return t.INT;if(i===ai)return t.UNSIGNED_INT;if(i===ei)return t.FLOAT;if(i===Ri)return t.HALF_FLOAT;if(i===G0)return t.ALPHA;if(i===W0)return t.RGB;if(i===Hn)return t.RGBA;if(i===bi)return t.DEPTH_COMPONENT;if(i===Cr)return t.DEPTH_STENCIL;if(i===X0)return t.RED;if(i===Xd)return t.RED_INTEGER;if(i===Ls)return t.RG;if(i===jd)return t.RG_INTEGER;if(i===Yd)return t.RGBA_INTEGER;if(i===Zo||i===Qo||i===Jo||i===el)if(a===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Zo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===el)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Zo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Jo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===el)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ff||i===df||i===hf||i===pf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ff)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===df)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===mf||i===gf||i===_f||i===vf||i===xf||i===Sf||i===yf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===mf||i===gf)return a===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===_f)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===vf)return s.COMPRESSED_R11_EAC;if(i===xf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Sf)return s.COMPRESSED_RG11_EAC;if(i===yf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Mf||i===Ef||i===Tf||i===wf||i===Af||i===Cf||i===Rf||i===bf||i===Pf||i===Lf||i===Df||i===Nf||i===If||i===Uf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Mf)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ef)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tf)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wf)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Af)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Cf)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rf)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bf)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pf)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Lf)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Df)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nf)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===If)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Uf)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ff||i===Of||i===Bf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ff)return a===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Of)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===kf||i===zf||i===Vf||i===Hf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===kf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===zf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ua?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const KT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class QT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new n_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new oi({vertexShader:KT,fragmentShader:ZT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Pn(new Kl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JT extends Os{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,d=null,p=null,f=null,m=null,_=null;const M=typeof XRWebGLBinding<"u",g=new QT,c={},h=n.getContextAttributes();let v=null,y=null;const A=[],w=[],C=new Ke;let x=null;const T=new _n;T.viewport=new yt;const U=new _n;U.viewport=new yt;const b=[T,U],k=new fy;let F=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let re=A[q];return re===void 0&&(re=new Ou,A[q]=re),re.getTargetRaySpace()},this.getControllerGrip=function(q){let re=A[q];return re===void 0&&(re=new Ou,A[q]=re),re.getGripSpace()},this.getHand=function(q){let re=A[q];return re===void 0&&(re=new Ou,A[q]=re),re.getHandSpace()};function H(q){const re=w.indexOf(q.inputSource);if(re===-1)return;const ce=A[re];ce!==void 0&&(ce.update(q.inputSource,q.frame,u||a),ce.dispatchEvent({type:q.type,data:q.inputSource}))}function z(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",O);for(let q=0;q<A.length;q++){const re=w[q];re!==null&&(w[q]=null,A[q].disconnect(re))}F=null,j=null,g.reset();for(const q in c)delete c[q];e.setRenderTarget(v),m=null,f=null,p=null,r=null,y=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",z),r.addEventListener("inputsourceschange",O),h.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,Ue=null,Re=null;h.depth&&(Re=h.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ce=h.stencil?Cr:bi,Ue=h.stencil?Ua:ai);const Le={colorFormat:n.RGBA8,depthFormat:Re,scaleFactor:s};p=this.getBinding(),f=p.createProjectionLayer(Le),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new si(f.textureWidth,f.textureHeight,{format:Hn,type:Cn,depthTexture:new Oa(f.textureWidth,f.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ce={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ce),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new si(m.framebufferWidth,m.framebufferHeight,{format:Hn,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Ye.setContext(r),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function O(q){for(let re=0;re<q.removed.length;re++){const ce=q.removed[re],Ue=w.indexOf(ce);Ue>=0&&(w[Ue]=null,A[Ue].disconnect(ce))}for(let re=0;re<q.added.length;re++){const ce=q.added[re];let Ue=w.indexOf(ce);if(Ue===-1){for(let Le=0;Le<A.length;Le++)if(Le>=w.length){w.push(ce),Ue=Le;break}else if(w[Le]===null){w[Le]=ce,Ue=Le;break}if(Ue===-1)break}const Re=A[Ue];Re&&Re.connect(ce)}}const G=new V,B=new V;function Q(q,re,ce){G.setFromMatrixPosition(re.matrixWorld),B.setFromMatrixPosition(ce.matrixWorld);const Ue=G.distanceTo(B),Re=re.projectionMatrix.elements,Le=ce.projectionMatrix.elements,Pt=Re[14]/(Re[10]-1),We=Re[14]/(Re[10]+1),Qe=(Re[9]+1)/Re[5],st=(Re[9]-1)/Re[5],Be=(Re[8]-1)/Re[0],vt=(Le[8]+1)/Le[0],L=Pt*Be,Et=Pt*vt,Ze=Ue/(-Be+vt),ot=Ze*-Be;if(re.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ot),q.translateZ(Ze),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Re[10]===-1)q.projectionMatrix.copy(re.projectionMatrix),q.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Ee=Pt+Ze,R=We+Ze,S=L-ot,N=Et+(Ue-ot),Z=Qe*We/R*Ee,J=st*We/R*Ee;q.projectionMatrix.makePerspective(S,N,Z,J,Ee,R),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ie(q,re){re===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(re.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let re=q.near,ce=q.far;g.texture!==null&&(g.depthNear>0&&(re=g.depthNear),g.depthFar>0&&(ce=g.depthFar)),k.near=U.near=T.near=re,k.far=U.far=T.far=ce,(F!==k.near||j!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),F=k.near,j=k.far),k.layers.mask=q.layers.mask|6,T.layers.mask=k.layers.mask&-5,U.layers.mask=k.layers.mask&-3;const Ue=q.parent,Re=k.cameras;ie(k,Ue);for(let Le=0;Le<Re.length;Le++)ie(Re[Le],Ue);Re.length===2?Q(k,T,U):k.projectionMatrix.copy(T.projectionMatrix),se(q,k,Ue)};function se(q,re,ce){ce===null?q.matrix.copy(re.matrixWorld):(q.matrix.copy(ce.matrixWorld),q.matrix.invert(),q.matrix.multiply(re.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(re.projectionMatrix),q.projectionMatrixInverse.copy(re.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Gf*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(q){return c[q]};let Pe=null;function Ge(q,re){if(d=re.getViewerPose(u||a),_=re,d!==null){const ce=d.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let Ue=!1;ce.length!==k.cameras.length&&(k.cameras.length=0,Ue=!0);for(let We=0;We<ce.length;We++){const Qe=ce[We];let st=null;if(m!==null)st=m.getViewport(Qe);else{const vt=p.getViewSubImage(f,Qe);st=vt.viewport,We===0&&(e.setRenderTargetTextures(y,vt.colorTexture,vt.depthStencilTexture),e.setRenderTarget(y))}let Be=b[We];Be===void 0&&(Be=new _n,Be.layers.enable(We),Be.viewport=new yt,b[We]=Be),Be.matrix.fromArray(Qe.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Qe.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(st.x,st.y,st.width,st.height),We===0&&(k.matrix.copy(Be.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ue===!0&&k.cameras.push(Be)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){p=i.getBinding();const We=p.getDepthInformation(ce[0]);We&&We.isValid&&We.texture&&g.init(We,r.renderState)}if(Re&&Re.includes("camera-access")&&M){e.state.unbindTexture(),p=i.getBinding();for(let We=0;We<ce.length;We++){const Qe=ce[We].camera;if(Qe){let st=c[Qe];st||(st=new n_,c[Qe]=st);const Be=p.getCameraImage(Qe);st.sourceTexture=Be}}}}for(let ce=0;ce<A.length;ce++){const Ue=w[ce],Re=A[ce];Ue!==null&&Re!==void 0&&Re.update(Ue,re,u||a)}Pe&&Pe(q,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),_=null}const Ye=new o_;Ye.setAnimationLoop(Ge),this.setAnimationLoop=function(q){Pe=q},this.dispose=function(){}}}const _r=new Pi,ew=new Mt;function tw(t,e){function n(g,c){g.matrixAutoUpdate===!0&&g.updateMatrix(),c.value.copy(g.matrix)}function i(g,c){c.color.getRGB(g.fogColor.value,i_(t)),c.isFog?(g.fogNear.value=c.near,g.fogFar.value=c.far):c.isFogExp2&&(g.fogDensity.value=c.density)}function r(g,c,h,v,y){c.isMeshBasicMaterial?s(g,c):c.isMeshLambertMaterial?(s(g,c),c.envMap&&(g.envMapIntensity.value=c.envMapIntensity)):c.isMeshToonMaterial?(s(g,c),p(g,c)):c.isMeshPhongMaterial?(s(g,c),d(g,c),c.envMap&&(g.envMapIntensity.value=c.envMapIntensity)):c.isMeshStandardMaterial?(s(g,c),f(g,c),c.isMeshPhysicalMaterial&&m(g,c,y)):c.isMeshMatcapMaterial?(s(g,c),_(g,c)):c.isMeshDepthMaterial?s(g,c):c.isMeshDistanceMaterial?(s(g,c),M(g,c)):c.isMeshNormalMaterial?s(g,c):c.isLineBasicMaterial?(a(g,c),c.isLineDashedMaterial&&o(g,c)):c.isPointsMaterial?l(g,c,h,v):c.isSpriteMaterial?u(g,c):c.isShadowMaterial?(g.color.value.copy(c.color),g.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(g,c){g.opacity.value=c.opacity,c.color&&g.diffuse.value.copy(c.color),c.emissive&&g.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(g.map.value=c.map,n(c.map,g.mapTransform)),c.alphaMap&&(g.alphaMap.value=c.alphaMap,n(c.alphaMap,g.alphaMapTransform)),c.bumpMap&&(g.bumpMap.value=c.bumpMap,n(c.bumpMap,g.bumpMapTransform),g.bumpScale.value=c.bumpScale,c.side===cn&&(g.bumpScale.value*=-1)),c.normalMap&&(g.normalMap.value=c.normalMap,n(c.normalMap,g.normalMapTransform),g.normalScale.value.copy(c.normalScale),c.side===cn&&g.normalScale.value.negate()),c.displacementMap&&(g.displacementMap.value=c.displacementMap,n(c.displacementMap,g.displacementMapTransform),g.displacementScale.value=c.displacementScale,g.displacementBias.value=c.displacementBias),c.emissiveMap&&(g.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,g.emissiveMapTransform)),c.specularMap&&(g.specularMap.value=c.specularMap,n(c.specularMap,g.specularMapTransform)),c.alphaTest>0&&(g.alphaTest.value=c.alphaTest);const h=e.get(c),v=h.envMap,y=h.envMapRotation;v&&(g.envMap.value=v,_r.copy(y),_r.x*=-1,_r.y*=-1,_r.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),g.envMapRotation.value.setFromMatrix4(ew.makeRotationFromEuler(_r)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=c.reflectivity,g.ior.value=c.ior,g.refractionRatio.value=c.refractionRatio),c.lightMap&&(g.lightMap.value=c.lightMap,g.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,g.lightMapTransform)),c.aoMap&&(g.aoMap.value=c.aoMap,g.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,g.aoMapTransform))}function a(g,c){g.diffuse.value.copy(c.color),g.opacity.value=c.opacity,c.map&&(g.map.value=c.map,n(c.map,g.mapTransform))}function o(g,c){g.dashSize.value=c.dashSize,g.totalSize.value=c.dashSize+c.gapSize,g.scale.value=c.scale}function l(g,c,h,v){g.diffuse.value.copy(c.color),g.opacity.value=c.opacity,g.size.value=c.size*h,g.scale.value=v*.5,c.map&&(g.map.value=c.map,n(c.map,g.uvTransform)),c.alphaMap&&(g.alphaMap.value=c.alphaMap,n(c.alphaMap,g.alphaMapTransform)),c.alphaTest>0&&(g.alphaTest.value=c.alphaTest)}function u(g,c){g.diffuse.value.copy(c.color),g.opacity.value=c.opacity,g.rotation.value=c.rotation,c.map&&(g.map.value=c.map,n(c.map,g.mapTransform)),c.alphaMap&&(g.alphaMap.value=c.alphaMap,n(c.alphaMap,g.alphaMapTransform)),c.alphaTest>0&&(g.alphaTest.value=c.alphaTest)}function d(g,c){g.specular.value.copy(c.specular),g.shininess.value=Math.max(c.shininess,1e-4)}function p(g,c){c.gradientMap&&(g.gradientMap.value=c.gradientMap)}function f(g,c){g.metalness.value=c.metalness,c.metalnessMap&&(g.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,g.metalnessMapTransform)),g.roughness.value=c.roughness,c.roughnessMap&&(g.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,g.roughnessMapTransform)),c.envMap&&(g.envMapIntensity.value=c.envMapIntensity)}function m(g,c,h){g.ior.value=c.ior,c.sheen>0&&(g.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),g.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(g.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,g.sheenColorMapTransform)),c.sheenRoughnessMap&&(g.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,g.sheenRoughnessMapTransform))),c.clearcoat>0&&(g.clearcoat.value=c.clearcoat,g.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(g.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,g.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(g.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===cn&&g.clearcoatNormalScale.value.negate())),c.dispersion>0&&(g.dispersion.value=c.dispersion),c.iridescence>0&&(g.iridescence.value=c.iridescence,g.iridescenceIOR.value=c.iridescenceIOR,g.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(g.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,g.iridescenceMapTransform)),c.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),c.transmission>0&&(g.transmission.value=c.transmission,g.transmissionSamplerMap.value=h.texture,g.transmissionSamplerSize.value.set(h.width,h.height),c.transmissionMap&&(g.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,g.transmissionMapTransform)),g.thickness.value=c.thickness,c.thicknessMap&&(g.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=c.attenuationDistance,g.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(g.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(g.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=c.specularIntensity,g.specularColor.value.copy(c.specularColor),c.specularColorMap&&(g.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,g.specularColorMapTransform)),c.specularIntensityMap&&(g.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,c){c.matcap&&(g.matcap.value=c.matcap)}function M(g,c){const h=e.get(c).light;g.referencePosition.value.setFromMatrixPosition(h.matrixWorld),g.nearDistance.value=h.shadow.camera.near,g.farDistance.value=h.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function nw(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(h,v){const y=v.program;i.uniformBlockBinding(h,y)}function u(h,v){let y=r[h.id];y===void 0&&(_(h),y=d(h),r[h.id]=y,h.addEventListener("dispose",g));const A=v.program;i.updateUBOMapping(h,A);const w=e.render.frame;s[h.id]!==w&&(f(h),s[h.id]=w)}function d(h){const v=p();h.__bindingPointIndex=v;const y=t.createBuffer(),A=h.__size,w=h.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,A,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,y),y}function p(){for(let h=0;h<o;h++)if(a.indexOf(h)===-1)return a.push(h),h;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(h){const v=r[h.id],y=h.uniforms,A=h.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let w=0,C=y.length;w<C;w++){const x=Array.isArray(y[w])?y[w]:[y[w]];for(let T=0,U=x.length;T<U;T++){const b=x[T];if(m(b,w,T,A)===!0){const k=b.__offset,F=Array.isArray(b.value)?b.value:[b.value];let j=0;for(let H=0;H<F.length;H++){const z=F[H],O=M(z);typeof z=="number"||typeof z=="boolean"?(b.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,k+j,b.__data)):z.isMatrix3?(b.__data[0]=z.elements[0],b.__data[1]=z.elements[1],b.__data[2]=z.elements[2],b.__data[3]=0,b.__data[4]=z.elements[3],b.__data[5]=z.elements[4],b.__data[6]=z.elements[5],b.__data[7]=0,b.__data[8]=z.elements[6],b.__data[9]=z.elements[7],b.__data[10]=z.elements[8],b.__data[11]=0):(z.toArray(b.__data,j),j+=O.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,b.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(h,v,y,A){const w=h.value,C=v+"_"+y;if(A[C]===void 0)return typeof w=="number"||typeof w=="boolean"?A[C]=w:A[C]=w.clone(),!0;{const x=A[C];if(typeof w=="number"||typeof w=="boolean"){if(x!==w)return A[C]=w,!0}else if(x.equals(w)===!1)return x.copy(w),!0}return!1}function _(h){const v=h.uniforms;let y=0;const A=16;for(let C=0,x=v.length;C<x;C++){const T=Array.isArray(v[C])?v[C]:[v[C]];for(let U=0,b=T.length;U<b;U++){const k=T[U],F=Array.isArray(k.value)?k.value:[k.value];for(let j=0,H=F.length;j<H;j++){const z=F[j],O=M(z),G=y%A,B=G%O.boundary,Q=G+B;y+=B,Q!==0&&A-Q<O.storage&&(y+=A-Q),k.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=O.storage}}}const w=y%A;return w>0&&(y+=A-w),h.__size=y,h.__cache={},this}function M(h){const v={boundary:0,storage:0};return typeof h=="number"||typeof h=="boolean"?(v.boundary=4,v.storage=4):h.isVector2?(v.boundary=8,v.storage=8):h.isVector3||h.isColor?(v.boundary=16,v.storage=12):h.isVector4?(v.boundary=16,v.storage=16):h.isMatrix3?(v.boundary=48,v.storage=48):h.isMatrix4?(v.boundary=64,v.storage=64):h.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):De("WebGLRenderer: Unsupported uniform value type.",h),v}function g(h){const v=h.target;v.removeEventListener("dispose",g);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function c(){for(const h in r)t.deleteBuffer(r[h]);a=[],r={},s={}}return{bind:l,update:u,dispose:c}}const iw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let $n=null;function rw(){return $n===null&&($n=new QS(iw,16,16,Ls,Ri),$n.name="DFG_LUT",$n.minFilter=Yt,$n.magFilter=Yt,$n.wrapS=Si,$n.wrapT=Si,$n.generateMipmaps=!1,$n.needsUpdate=!0),$n}class h_{constructor(e={}){const{canvas:n=PS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:m=Cn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const M=m,g=new Set([Yd,jd,Xd]),c=new Set([Cn,ai,Ia,Ua,Gd,Wd]),h=new Uint32Array(4),v=new Int32Array(4);let y=null,A=null;const w=[],C=[];let x=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let U=!1;this._outputColorSpace=Tn;let b=0,k=0,F=null,j=-1,H=null;const z=new yt,O=new yt;let G=null;const B=new tt(0);let Q=0,ie=n.width,se=n.height,Pe=1,Ge=null,Ye=null;const q=new yt(0,0,ie,se),re=new yt(0,0,ie,se);let ce=!1;const Ue=new e_;let Re=!1,Le=!1;const Pt=new Mt,We=new V,Qe=new yt,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function vt(){return F===null?Pe:1}let L=i;function Et(E,I){return n.getContext(E,I)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Vd}`),n.addEventListener("webglcontextlost",Se,!1),n.addEventListener("webglcontextrestored",Ne,!1),n.addEventListener("webglcontextcreationerror",lt,!1),L===null){const I="webgl2";if(L=Et(I,E),L===null)throw Et(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw $e("WebGLRenderer: "+E.message),E}let Ze,ot,Ee,R,S,N,Z,J,K,ve,le,Ce,be,te,ae,xe,ye,pe,ke,D,ue,oe,_e;function ne(){Ze=new s1(L),Ze.init(),ue=new $T(L,Ze),ot=new ZE(L,Ze,e,ue),Ee=new YT(L,Ze),ot.reversedDepthBuffer&&f&&Ee.buffers.depth.setReversed(!0),R=new l1(L),S=new NT,N=new qT(L,Ze,Ee,S,ot,ue,R),Z=new r1(T),J=new hy(L),oe=new $E(L,J),K=new a1(L,J,R,oe),ve=new c1(L,K,J,oe,R),pe=new u1(L,ot,N),ae=new QE(S),le=new DT(T,Z,Ze,ot,oe,ae),Ce=new tw(T,S),be=new UT,te=new VT(Ze),ye=new qE(T,Z,Ee,ve,_,l),xe=new jT(T,ve,ot),_e=new nw(L,R,ot,Ee),ke=new KE(L,Ze,R),D=new o1(L,Ze,R),R.programs=le.programs,T.capabilities=ot,T.extensions=Ze,T.properties=S,T.renderLists=be,T.shadowMap=xe,T.state=Ee,T.info=R}ne(),M!==Cn&&(x=new d1(M,n.width,n.height,r,s));const $=new JT(T,L);this.xr=$,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=Ze.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ze.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Pe},this.setPixelRatio=function(E){E!==void 0&&(Pe=E,this.setSize(ie,se,!1))},this.getSize=function(E){return E.set(ie,se)},this.setSize=function(E,I,Y=!0){if($.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=E,se=I,n.width=Math.floor(E*Pe),n.height=Math.floor(I*Pe),Y===!0&&(n.style.width=E+"px",n.style.height=I+"px"),x!==null&&x.setSize(n.width,n.height),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(ie*Pe,se*Pe).floor()},this.setDrawingBufferSize=function(E,I,Y){ie=E,se=I,Pe=Y,n.width=Math.floor(E*Y),n.height=Math.floor(I*Y),this.setViewport(0,0,E,I)},this.setEffects=function(E){if(M===Cn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let I=0;I<E.length;I++)if(E[I].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(z)},this.getViewport=function(E){return E.copy(q)},this.setViewport=function(E,I,Y,X){E.isVector4?q.set(E.x,E.y,E.z,E.w):q.set(E,I,Y,X),Ee.viewport(z.copy(q).multiplyScalar(Pe).round())},this.getScissor=function(E){return E.copy(re)},this.setScissor=function(E,I,Y,X){E.isVector4?re.set(E.x,E.y,E.z,E.w):re.set(E,I,Y,X),Ee.scissor(O.copy(re).multiplyScalar(Pe).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(E){Ee.setScissorTest(ce=E)},this.setOpaqueSort=function(E){Ge=E},this.setTransparentSort=function(E){Ye=E},this.getClearColor=function(E){return E.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(E=!0,I=!0,Y=!0){let X=0;if(E){let W=!1;if(F!==null){const de=F.texture.format;W=g.has(de)}if(W){const de=F.texture.type,me=c.has(de),he=ye.getClearColor(),Me=ye.getClearAlpha(),we=he.r,Ie=he.g,ze=he.b;me?(h[0]=we,h[1]=Ie,h[2]=ze,h[3]=Me,L.clearBufferuiv(L.COLOR,0,h)):(v[0]=we,v[1]=Ie,v[2]=ze,v[3]=Me,L.clearBufferiv(L.COLOR,0,v))}else X|=L.COLOR_BUFFER_BIT}I&&(X|=L.DEPTH_BUFFER_BIT),Y&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Se,!1),n.removeEventListener("webglcontextrestored",Ne,!1),n.removeEventListener("webglcontextcreationerror",lt,!1),ye.dispose(),be.dispose(),te.dispose(),S.dispose(),Z.dispose(),ve.dispose(),oe.dispose(),_e.dispose(),le.dispose(),$.dispose(),$.removeEventListener("sessionstart",nh),$.removeEventListener("sessionend",ih),cr.stop()};function Se(E){E.preventDefault(),Ap("WebGLRenderer: Context Lost."),U=!0}function Ne(){Ap("WebGLRenderer: Context Restored."),U=!1;const E=R.autoReset,I=xe.enabled,Y=xe.autoUpdate,X=xe.needsUpdate,W=xe.type;ne(),R.autoReset=E,xe.enabled=I,xe.autoUpdate=Y,xe.needsUpdate=X,xe.type=W}function lt(E){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Je(E){const I=E.target;I.removeEventListener("dispose",Je),li(I)}function li(E){ui(E),S.remove(E)}function ui(E){const I=S.get(E).programs;I!==void 0&&(I.forEach(function(Y){le.releaseProgram(Y)}),E.isShaderMaterial&&le.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,Y,X,W,de){I===null&&(I=st);const me=W.isMesh&&W.matrixWorld.determinant()<0,he=g_(E,I,Y,X,W);Ee.setMaterial(X,me);let Me=Y.index,we=1;if(X.wireframe===!0){if(Me=K.getWireframeAttribute(Y),Me===void 0)return;we=2}const Ie=Y.drawRange,ze=Y.attributes.position;let Ae=Ie.start*we,it=(Ie.start+Ie.count)*we;de!==null&&(Ae=Math.max(Ae,de.start*we),it=Math.min(it,(de.start+de.count)*we)),Me!==null?(Ae=Math.max(Ae,0),it=Math.min(it,Me.count)):ze!=null&&(Ae=Math.max(Ae,0),it=Math.min(it,ze.count));const xt=it-Ae;if(xt<0||xt===1/0)return;oe.setup(W,X,he,Y,Me);let gt,rt=ke;if(Me!==null&&(gt=J.get(Me),rt=D,rt.setIndex(gt)),W.isMesh)X.wireframe===!0?(Ee.setLineWidth(X.wireframeLinewidth*vt()),rt.setMode(L.LINES)):rt.setMode(L.TRIANGLES);else if(W.isLine){let Vt=X.linewidth;Vt===void 0&&(Vt=1),Ee.setLineWidth(Vt*vt()),W.isLineSegments?rt.setMode(L.LINES):W.isLineLoop?rt.setMode(L.LINE_LOOP):rt.setMode(L.LINE_STRIP)}else W.isPoints?rt.setMode(L.POINTS):W.isSprite&&rt.setMode(L.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)bl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),rt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))rt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Vt=W._multiDrawStarts,Te=W._multiDrawCounts,hn=W._multiDrawCount,qe=Me?J.get(Me).bytesPerElement:1,Nn=S.get(X).currentProgram.getUniforms();for(let jn=0;jn<hn;jn++)Nn.setValue(L,"_gl_DrawID",jn),rt.render(Vt[jn]/qe,Te[jn])}else if(W.isInstancedMesh)rt.renderInstances(Ae,xt,W.count);else if(Y.isInstancedBufferGeometry){const Vt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Te=Math.min(Y.instanceCount,Vt);rt.renderInstances(Ae,xt,Te)}else rt.render(Ae,xt)};function th(E,I,Y){E.transparent===!0&&E.side===_i&&E.forceSinglePass===!1?(E.side=cn,E.needsUpdate=!0,qa(E,I,Y),E.side=sr,E.needsUpdate=!0,qa(E,I,Y),E.side=_i):qa(E,I,Y)}this.compile=function(E,I,Y=null){Y===null&&(Y=E),A=te.get(Y),A.init(I),C.push(A),Y.traverseVisible(function(W){W.isLight&&W.layers.test(I.layers)&&(A.pushLight(W),W.castShadow&&A.pushShadow(W))}),E!==Y&&E.traverseVisible(function(W){W.isLight&&W.layers.test(I.layers)&&(A.pushLight(W),W.castShadow&&A.pushShadow(W))}),A.setupLights();const X=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const de=W.material;if(de)if(Array.isArray(de))for(let me=0;me<de.length;me++){const he=de[me];th(he,Y,W),X.add(he)}else th(de,Y,W),X.add(de)}),A=C.pop(),X},this.compileAsync=function(E,I,Y=null){const X=this.compile(E,I,Y);return new Promise(W=>{function de(){if(X.forEach(function(me){S.get(me).currentProgram.isReady()&&X.delete(me)}),X.size===0){W(E);return}setTimeout(de,10)}Ze.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Jl=null;function m_(E){Jl&&Jl(E)}function nh(){cr.stop()}function ih(){cr.start()}const cr=new o_;cr.setAnimationLoop(m_),typeof self<"u"&&cr.setContext(self),this.setAnimationLoop=function(E){Jl=E,$.setAnimationLoop(E),E===null?cr.stop():cr.start()},$.addEventListener("sessionstart",nh),$.addEventListener("sessionend",ih),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;const Y=$.enabled===!0&&$.isPresenting===!0,X=x!==null&&(F===null||Y)&&x.begin(T,F);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&($.cameraAutoUpdate===!0&&$.updateCamera(I),I=$.getCamera()),E.isScene===!0&&E.onBeforeRender(T,E,I,F),A=te.get(E,C.length),A.init(I),C.push(A),Pt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ue.setFromProjectionMatrix(Pt,ti,I.reversedDepth),Le=this.localClippingEnabled,Re=ae.init(this.clippingPlanes,Le),y=be.get(E,w.length),y.init(),w.push(y),$.enabled===!0&&$.isPresenting===!0){const me=T.xr.getDepthSensingMesh();me!==null&&eu(me,I,-1/0,T.sortObjects)}eu(E,I,0,T.sortObjects),y.finish(),T.sortObjects===!0&&y.sort(Ge,Ye),Be=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Be&&ye.addToRenderList(y,E),this.info.render.frame++,Re===!0&&ae.beginShadows();const W=A.state.shadowsArray;if(xe.render(W,E,I),Re===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&x.hasRenderPass())===!1){const me=y.opaque,he=y.transmissive;if(A.setupLights(),I.isArrayCamera){const Me=I.cameras;if(he.length>0)for(let we=0,Ie=Me.length;we<Ie;we++){const ze=Me[we];sh(me,he,E,ze)}Be&&ye.render(E);for(let we=0,Ie=Me.length;we<Ie;we++){const ze=Me[we];rh(y,E,ze,ze.viewport)}}else he.length>0&&sh(me,he,E,I),Be&&ye.render(E),rh(y,E,I)}F!==null&&k===0&&(N.updateMultisampleRenderTarget(F),N.updateRenderTargetMipmap(F)),X&&x.end(T),E.isScene===!0&&E.onAfterRender(T,E,I),oe.resetDefaultState(),j=-1,H=null,C.pop(),C.length>0?(A=C[C.length-1],Re===!0&&ae.setGlobalState(T.clippingPlanes,A.state.camera)):A=null,w.pop(),w.length>0?y=w[w.length-1]:y=null};function eu(E,I,Y,X){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)A.pushLight(E),E.castShadow&&A.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ue.intersectsSprite(E)){X&&Qe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Pt);const me=ve.update(E),he=E.material;he.visible&&y.push(E,me,he,Y,Qe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ue.intersectsObject(E))){const me=ve.update(E),he=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Qe.copy(E.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Qe.copy(me.boundingSphere.center)),Qe.applyMatrix4(E.matrixWorld).applyMatrix4(Pt)),Array.isArray(he)){const Me=me.groups;for(let we=0,Ie=Me.length;we<Ie;we++){const ze=Me[we],Ae=he[ze.materialIndex];Ae&&Ae.visible&&y.push(E,me,Ae,Y,Qe.z,ze)}}else he.visible&&y.push(E,me,he,Y,Qe.z,null)}}const de=E.children;for(let me=0,he=de.length;me<he;me++)eu(de[me],I,Y,X)}function rh(E,I,Y,X){const{opaque:W,transmissive:de,transparent:me}=E;A.setupLightsView(Y),Re===!0&&ae.setGlobalState(T.clippingPlanes,Y),X&&Ee.viewport(z.copy(X)),W.length>0&&Ya(W,I,Y),de.length>0&&Ya(de,I,Y),me.length>0&&Ya(me,I,Y),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function sh(E,I,Y,X){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[X.id]===void 0){const Ae=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[X.id]=new si(1,1,{generateMipmaps:!0,type:Ae?Ri:Cn,minFilter:Ar,samples:Math.max(4,ot.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const de=A.state.transmissionRenderTarget[X.id],me=X.viewport||z;de.setSize(me.z*T.transmissionResolutionScale,me.w*T.transmissionResolutionScale);const he=T.getRenderTarget(),Me=T.getActiveCubeFace(),we=T.getActiveMipmapLevel();T.setRenderTarget(de),T.getClearColor(B),Q=T.getClearAlpha(),Q<1&&T.setClearColor(16777215,.5),T.clear(),Be&&ye.render(Y);const Ie=T.toneMapping;T.toneMapping=ri;const ze=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),A.setupLightsView(X),Re===!0&&ae.setGlobalState(T.clippingPlanes,X),Ya(E,Y,X),N.updateMultisampleRenderTarget(de),N.updateRenderTargetMipmap(de),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let it=0,xt=I.length;it<xt;it++){const gt=I[it],{object:rt,geometry:Vt,material:Te,group:hn}=gt;if(Te.side===_i&&rt.layers.test(X.layers)){const qe=Te.side;Te.side=cn,Te.needsUpdate=!0,ah(rt,Y,X,Vt,Te,hn),Te.side=qe,Te.needsUpdate=!0,Ae=!0}}Ae===!0&&(N.updateMultisampleRenderTarget(de),N.updateRenderTargetMipmap(de))}T.setRenderTarget(he,Me,we),T.setClearColor(B,Q),ze!==void 0&&(X.viewport=ze),T.toneMapping=Ie}function Ya(E,I,Y){const X=I.isScene===!0?I.overrideMaterial:null;for(let W=0,de=E.length;W<de;W++){const me=E[W],{object:he,geometry:Me,group:we}=me;let Ie=me.material;Ie.allowOverride===!0&&X!==null&&(Ie=X),he.layers.test(Y.layers)&&ah(he,I,Y,Me,Ie,we)}}function ah(E,I,Y,X,W,de){E.onBeforeRender(T,I,Y,X,W,de),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(T,I,Y,X,E,de),W.transparent===!0&&W.side===_i&&W.forceSinglePass===!1?(W.side=cn,W.needsUpdate=!0,T.renderBufferDirect(Y,I,X,W,E,de),W.side=sr,W.needsUpdate=!0,T.renderBufferDirect(Y,I,X,W,E,de),W.side=_i):T.renderBufferDirect(Y,I,X,W,E,de),E.onAfterRender(T,I,Y,X,W,de)}function qa(E,I,Y){I.isScene!==!0&&(I=st);const X=S.get(E),W=A.state.lights,de=A.state.shadowsArray,me=W.state.version,he=le.getParameters(E,W.state,de,I,Y),Me=le.getProgramCacheKey(he);let we=X.programs;X.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?I.environment:null,X.fog=I.fog;const Ie=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;X.envMap=Z.get(E.envMap||X.environment,Ie),X.envMapRotation=X.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,we===void 0&&(E.addEventListener("dispose",Je),we=new Map,X.programs=we);let ze=we.get(Me);if(ze!==void 0){if(X.currentProgram===ze&&X.lightsStateVersion===me)return lh(E,he),ze}else he.uniforms=le.getUniforms(E),E.onBeforeCompile(he,T),ze=le.acquireProgram(he,Me),we.set(Me,ze),X.uniforms=he.uniforms;const Ae=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ae.clippingPlanes=ae.uniform),lh(E,he),X.needsLights=v_(E),X.lightsStateVersion=me,X.needsLights&&(Ae.ambientLightColor.value=W.state.ambient,Ae.lightProbe.value=W.state.probe,Ae.directionalLights.value=W.state.directional,Ae.directionalLightShadows.value=W.state.directionalShadow,Ae.spotLights.value=W.state.spot,Ae.spotLightShadows.value=W.state.spotShadow,Ae.rectAreaLights.value=W.state.rectArea,Ae.ltc_1.value=W.state.rectAreaLTC1,Ae.ltc_2.value=W.state.rectAreaLTC2,Ae.pointLights.value=W.state.point,Ae.pointLightShadows.value=W.state.pointShadow,Ae.hemisphereLights.value=W.state.hemi,Ae.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ae.spotLightMatrix.value=W.state.spotLightMatrix,Ae.spotLightMap.value=W.state.spotLightMap,Ae.pointShadowMatrix.value=W.state.pointShadowMatrix),X.currentProgram=ze,X.uniformsList=null,ze}function oh(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=tl.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function lh(E,I){const Y=S.get(E);Y.outputColorSpace=I.outputColorSpace,Y.batching=I.batching,Y.batchingColor=I.batchingColor,Y.instancing=I.instancing,Y.instancingColor=I.instancingColor,Y.instancingMorph=I.instancingMorph,Y.skinning=I.skinning,Y.morphTargets=I.morphTargets,Y.morphNormals=I.morphNormals,Y.morphColors=I.morphColors,Y.morphTargetsCount=I.morphTargetsCount,Y.numClippingPlanes=I.numClippingPlanes,Y.numIntersection=I.numClipIntersection,Y.vertexAlphas=I.vertexAlphas,Y.vertexTangents=I.vertexTangents,Y.toneMapping=I.toneMapping}function g_(E,I,Y,X,W){I.isScene!==!0&&(I=st),N.resetTextureUnits();const de=I.fog,me=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?I.environment:null,he=F===null?T.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Ds,Me=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,we=Z.get(X.envMap||me,Me),Ie=X.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ze=!!Y.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ae=!!Y.morphAttributes.position,it=!!Y.morphAttributes.normal,xt=!!Y.morphAttributes.color;let gt=ri;X.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(gt=T.toneMapping);const rt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Vt=rt!==void 0?rt.length:0,Te=S.get(X),hn=A.state.lights;if(Re===!0&&(Le===!0||E!==H)){const Lt=E===H&&X.id===j;ae.setState(X,E,Lt)}let qe=!1;X.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==hn.state.version||Te.outputColorSpace!==he||W.isBatchedMesh&&Te.batching===!1||!W.isBatchedMesh&&Te.batching===!0||W.isBatchedMesh&&Te.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Te.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Te.instancing===!1||!W.isInstancedMesh&&Te.instancing===!0||W.isSkinnedMesh&&Te.skinning===!1||!W.isSkinnedMesh&&Te.skinning===!0||W.isInstancedMesh&&Te.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Te.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Te.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Te.instancingMorph===!1&&W.morphTexture!==null||Te.envMap!==we||X.fog===!0&&Te.fog!==de||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ae.numPlanes||Te.numIntersection!==ae.numIntersection)||Te.vertexAlphas!==Ie||Te.vertexTangents!==ze||Te.morphTargets!==Ae||Te.morphNormals!==it||Te.morphColors!==xt||Te.toneMapping!==gt||Te.morphTargetsCount!==Vt)&&(qe=!0):(qe=!0,Te.__version=X.version);let Nn=Te.currentProgram;qe===!0&&(Nn=qa(X,I,W));let jn=!1,fr=!1,Br=!1;const at=Nn.getUniforms(),Ft=Te.uniforms;if(Ee.useProgram(Nn.program)&&(jn=!0,fr=!0,Br=!0),X.id!==j&&(j=X.id,fr=!0),jn||H!==E){Ee.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),at.setValue(L,"projectionMatrix",E.projectionMatrix),at.setValue(L,"viewMatrix",E.matrixWorldInverse);const Ni=at.map.cameraPosition;Ni!==void 0&&Ni.setValue(L,We.setFromMatrixPosition(E.matrixWorld)),ot.logarithmicDepthBuffer&&at.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&at.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),H!==E&&(H=E,fr=!0,Br=!0)}if(Te.needsLights&&(hn.state.directionalShadowMap.length>0&&at.setValue(L,"directionalShadowMap",hn.state.directionalShadowMap,N),hn.state.spotShadowMap.length>0&&at.setValue(L,"spotShadowMap",hn.state.spotShadowMap,N),hn.state.pointShadowMap.length>0&&at.setValue(L,"pointShadowMap",hn.state.pointShadowMap,N)),W.isSkinnedMesh){at.setOptional(L,W,"bindMatrix"),at.setOptional(L,W,"bindMatrixInverse");const Lt=W.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),at.setValue(L,"boneTexture",Lt.boneTexture,N))}W.isBatchedMesh&&(at.setOptional(L,W,"batchingTexture"),at.setValue(L,"batchingTexture",W._matricesTexture,N),at.setOptional(L,W,"batchingIdTexture"),at.setValue(L,"batchingIdTexture",W._indirectTexture,N),at.setOptional(L,W,"batchingColorTexture"),W._colorsTexture!==null&&at.setValue(L,"batchingColorTexture",W._colorsTexture,N));const Di=Y.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&pe.update(W,Y,Nn),(fr||Te.receiveShadow!==W.receiveShadow)&&(Te.receiveShadow=W.receiveShadow,at.setValue(L,"receiveShadow",W.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&I.environment!==null&&(Ft.envMapIntensity.value=I.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=rw()),fr&&(at.setValue(L,"toneMappingExposure",T.toneMappingExposure),Te.needsLights&&__(Ft,Br),de&&X.fog===!0&&Ce.refreshFogUniforms(Ft,de),Ce.refreshMaterialUniforms(Ft,X,Pe,se,A.state.transmissionRenderTarget[E.id]),tl.upload(L,oh(Te),Ft,N)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(tl.upload(L,oh(Te),Ft,N),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&at.setValue(L,"center",W.center),at.setValue(L,"modelViewMatrix",W.modelViewMatrix),at.setValue(L,"normalMatrix",W.normalMatrix),at.setValue(L,"modelMatrix",W.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Lt=X.uniformsGroups;for(let Ni=0,kr=Lt.length;Ni<kr;Ni++){const uh=Lt[Ni];_e.update(uh,Nn),_e.bind(uh,Nn)}}return Nn}function __(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function v_(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(E,I,Y){const X=S.get(E);X.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),S.get(E.texture).__webglTexture=I,S.get(E.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Y,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,I){const Y=S.get(E);Y.__webglFramebuffer=I,Y.__useDefaultFramebuffer=I===void 0};const x_=L.createFramebuffer();this.setRenderTarget=function(E,I=0,Y=0){F=E,b=I,k=Y;let X=null,W=!1,de=!1;if(E){const he=S.get(E);if(he.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(L.FRAMEBUFFER,he.__webglFramebuffer),z.copy(E.viewport),O.copy(E.scissor),G=E.scissorTest,Ee.viewport(z),Ee.scissor(O),Ee.setScissorTest(G),j=-1;return}else if(he.__webglFramebuffer===void 0)N.setupRenderTarget(E);else if(he.__hasExternalTextures)N.rebindTextures(E,S.get(E.texture).__webglTexture,S.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ie=E.depthTexture;if(he.__boundDepthTexture!==Ie){if(Ie!==null&&S.has(Ie)&&(E.width!==Ie.image.width||E.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(E)}}const Me=E.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(de=!0);const we=S.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(we[I])?X=we[I][Y]:X=we[I],W=!0):E.samples>0&&N.useMultisampledRTT(E)===!1?X=S.get(E).__webglMultisampledFramebuffer:Array.isArray(we)?X=we[Y]:X=we,z.copy(E.viewport),O.copy(E.scissor),G=E.scissorTest}else z.copy(q).multiplyScalar(Pe).floor(),O.copy(re).multiplyScalar(Pe).floor(),G=ce;if(Y!==0&&(X=x_),Ee.bindFramebuffer(L.FRAMEBUFFER,X)&&Ee.drawBuffers(E,X),Ee.viewport(z),Ee.scissor(O),Ee.setScissorTest(G),W){const he=S.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,he.__webglTexture,Y)}else if(de){const he=I;for(let Me=0;Me<E.textures.length;Me++){const we=S.get(E.textures[Me]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Me,we.__webglTexture,Y,he)}}else if(E!==null&&Y!==0){const he=S.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,he.__webglTexture,Y)}j=-1},this.readRenderTargetPixels=function(E,I,Y,X,W,de,me,he=0){if(!(E&&E.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=S.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){Ee.bindFramebuffer(L.FRAMEBUFFER,Me);try{const we=E.textures[he],Ie=we.format,ze=we.type;if(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+he),!ot.textureFormatReadable(Ie)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(ze)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-X&&Y>=0&&Y<=E.height-W&&L.readPixels(I,Y,X,W,ue.convert(Ie),ue.convert(ze),de)}finally{const we=F!==null?S.get(F).__webglFramebuffer:null;Ee.bindFramebuffer(L.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(E,I,Y,X,W,de,me,he=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=S.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me)if(I>=0&&I<=E.width-X&&Y>=0&&Y<=E.height-W){Ee.bindFramebuffer(L.FRAMEBUFFER,Me);const we=E.textures[he],Ie=we.format,ze=we.type;if(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+he),!ot.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.bufferData(L.PIXEL_PACK_BUFFER,de.byteLength,L.STREAM_READ),L.readPixels(I,Y,X,W,ue.convert(Ie),ue.convert(ze),0);const it=F!==null?S.get(F).__webglFramebuffer:null;Ee.bindFramebuffer(L.FRAMEBUFFER,it);const xt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await LS(L,xt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,de),L.deleteBuffer(Ae),L.deleteSync(xt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,I=null,Y=0){const X=Math.pow(2,-Y),W=Math.floor(E.image.width*X),de=Math.floor(E.image.height*X),me=I!==null?I.x:0,he=I!==null?I.y:0;N.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,me,he,W,de),Ee.unbindTexture()};const S_=L.createFramebuffer(),y_=L.createFramebuffer();this.copyTextureToTexture=function(E,I,Y=null,X=null,W=0,de=0){let me,he,Me,we,Ie,ze,Ae,it,xt;const gt=E.isCompressedTexture?E.mipmaps[de]:E.image;if(Y!==null)me=Y.max.x-Y.min.x,he=Y.max.y-Y.min.y,Me=Y.isBox3?Y.max.z-Y.min.z:1,we=Y.min.x,Ie=Y.min.y,ze=Y.isBox3?Y.min.z:0;else{const Ft=Math.pow(2,-W);me=Math.floor(gt.width*Ft),he=Math.floor(gt.height*Ft),E.isDataArrayTexture?Me=gt.depth:E.isData3DTexture?Me=Math.floor(gt.depth*Ft):Me=1,we=0,Ie=0,ze=0}X!==null?(Ae=X.x,it=X.y,xt=X.z):(Ae=0,it=0,xt=0);const rt=ue.convert(I.format),Vt=ue.convert(I.type);let Te;I.isData3DTexture?(N.setTexture3D(I,0),Te=L.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(N.setTexture2DArray(I,0),Te=L.TEXTURE_2D_ARRAY):(N.setTexture2D(I,0),Te=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const hn=L.getParameter(L.UNPACK_ROW_LENGTH),qe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Nn=L.getParameter(L.UNPACK_SKIP_PIXELS),jn=L.getParameter(L.UNPACK_SKIP_ROWS),fr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,gt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,gt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,we),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ie),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ze);const Br=E.isDataArrayTexture||E.isData3DTexture,at=I.isDataArrayTexture||I.isData3DTexture;if(E.isDepthTexture){const Ft=S.get(E),Di=S.get(I),Lt=S.get(Ft.__renderTarget),Ni=S.get(Di.__renderTarget);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,Lt.__webglFramebuffer),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let kr=0;kr<Me;kr++)Br&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,S.get(E).__webglTexture,W,ze+kr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,S.get(I).__webglTexture,de,xt+kr)),L.blitFramebuffer(we,Ie,me,he,Ae,it,me,he,L.DEPTH_BUFFER_BIT,L.NEAREST);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||S.has(E)){const Ft=S.get(E),Di=S.get(I);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,S_),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,y_);for(let Lt=0;Lt<Me;Lt++)Br?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ft.__webglTexture,W,ze+Lt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ft.__webglTexture,W),at?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Di.__webglTexture,de,xt+Lt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Di.__webglTexture,de),W!==0?L.blitFramebuffer(we,Ie,me,he,Ae,it,me,he,L.COLOR_BUFFER_BIT,L.NEAREST):at?L.copyTexSubImage3D(Te,de,Ae,it,xt+Lt,we,Ie,me,he):L.copyTexSubImage2D(Te,de,Ae,it,we,Ie,me,he);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else at?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(Te,de,Ae,it,xt,me,he,Me,rt,Vt,gt.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(Te,de,Ae,it,xt,me,he,Me,rt,gt.data):L.texSubImage3D(Te,de,Ae,it,xt,me,he,Me,rt,Vt,gt):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,de,Ae,it,me,he,rt,Vt,gt.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,de,Ae,it,gt.width,gt.height,rt,gt.data):L.texSubImage2D(L.TEXTURE_2D,de,Ae,it,me,he,rt,Vt,gt);L.pixelStorei(L.UNPACK_ROW_LENGTH,hn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,qe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Nn),L.pixelStorei(L.UNPACK_SKIP_ROWS,jn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,fr),de===0&&I.generateMipmaps&&L.generateMipmap(Te),Ee.unbindTexture()},this.initRenderTarget=function(E){S.get(E).__webglFramebuffer===void 0&&N.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?N.setTextureCube(E,0):E.isData3DTexture?N.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?N.setTexture2DArray(E,0):N.setTexture2D(E,0),Ee.unbindTexture()},this.resetState=function(){b=0,k=0,F=null,Ee.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Xe._getUnpackColorSpace()}}const Qn=()=>window.innerWidth<768;function p_({className:t="",scrollFade:e=!0}){const n=It.useRef(null);return It.useEffect(()=>{const i=n.current;if(!i)return;let r=i.clientWidth,s=i.clientHeight;if(!r||!s)return;const a=new K0,o=new _n(60,r/s,.1,120);o.position.z=32;const l=new h_({alpha:!0,antialias:!Qn()});l.setSize(r,s),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.appendChild(l.domElement);const u=Qn()?500:1400,d=new $t,p=new Float32Array(u*3),f=new Float32Array(u*3);for(let F=0;F<u;F++){const j=F*3;p[j]=(Math.random()-.5)*80,p[j+1]=(Math.random()-.5)*80,p[j+2]=(Math.random()-.5)*50,f[j]=(Math.random()-.5)*.008,f[j+1]=(Math.random()-.5)*.008,f[j+2]=(Math.random()-.5)*.004}d.setAttribute("position",new dn(p,3));const m=new Fa({color:2278750,size:Qn()?.14:.09,transparent:!0,opacity:.45,blending:Rs,sizeAttenuation:!0,depthWrite:!1}),_=new Pl(d,m);a.add(_);const M=Qn()?12:35,g=new $t,c=new Float32Array(M*3);for(let F=0;F<M;F++)c[F*3]=(Math.random()-.5)*55,c[F*3+1]=(Math.random()-.5)*55,c[F*3+2]=(Math.random()-.5)*30;g.setAttribute("position",new dn(c,3));const h=new Fa({color:4906624,size:.22,transparent:!0,opacity:.6,blending:Rs,depthWrite:!1}),v=new Pl(g,h);a.add(v);let y=0,A=0,w=0;const C=F=>{y=(F.clientX/r-.5)*2,A=(F.clientY/s-.5)*2},x=()=>{w=window.scrollY};Qn()||window.addEventListener("mousemove",C),window.addEventListener("scroll",x,{passive:!0});const T=new a_;let U;const b=()=>{U=requestAnimationFrame(b);const F=T.getElapsedTime(),j=d.attributes.position.array;for(let H=0;H<u;H++){const z=H*3;j[z]+=f[z],j[z+1]+=f[z+1],j[z+2]+=f[z+2],j[z]>40&&(j[z]=-40),j[z]<-40&&(j[z]=40),j[z+1]>40&&(j[z+1]=-40),j[z+1]<-40&&(j[z+1]=40)}if(d.attributes.position.needsUpdate=!0,_.rotation.x=F*.012+w*12e-5,_.rotation.y=F*.018,v.rotation.x=F*.008,v.rotation.y=-F*.012,o.position.x+=(y*3-o.position.x)*.015,o.position.y+=(-A*2-o.position.y)*.015,o.lookAt(0,0,0),e){const H=Math.max(0,1-w/(s*1.2));m.opacity=.45*H,h.opacity=.6*H}l.render(a,o)};b();const k=()=>{r=i.clientWidth,s=i.clientHeight,!(!r||!s)&&(o.aspect=r/s,o.updateProjectionMatrix(),l.setSize(r,s))};return window.addEventListener("resize",k),()=>{cancelAnimationFrame(U),Qn()||window.removeEventListener("mousemove",C),window.removeEventListener("scroll",x),window.removeEventListener("resize",k),d.dispose(),m.dispose(),g.dispose(),h.dispose(),l.dispose(),i.contains(l.domElement)&&i.removeChild(l.domElement)}},[e]),P.jsx("div",{ref:n,className:`three-layer ${t}`})}function sw(){const t=It.useRef(null);return It.useEffect(()=>{const e=t.current;if(!e)return;let n=e.clientWidth,i=e.clientHeight;if(!n||!i)return;const r=new K0,s=new _n(50,n/i,.1,100);s.position.z=9;const a=new h_({alpha:!0,antialias:!0});a.setSize(n,i),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(a.domElement);const o=new Qd(2.8,1),l=new ga({color:2278750,wireframe:!0,transparent:!0,opacity:.2}),u=new Pn(o,l);r.add(u);const d=new Zd(1.6,0),p=new ga({color:1357990,wireframe:!0,transparent:!0,opacity:.12}),f=new Pn(d,p);r.add(f);const m=new Jd(.3,16,16),_=new ga({color:2278750,transparent:!0,opacity:.25}),M=new Pn(m,_);r.add(M);const g=Qn()?100:250,c=new $t,h=new Float32Array(g*3);for(let B=0;B<g;B++){const Q=B/g*Math.PI*2,ie=3.8+(Math.random()-.5)*.6;h[B*3]=Math.cos(Q)*ie,h[B*3+1]=(Math.random()-.5)*.8,h[B*3+2]=Math.sin(Q)*ie}c.setAttribute("position",new dn(h,3));const v=new Fa({color:2278750,size:.06,transparent:!0,opacity:.5,blending:Rs,depthWrite:!1}),y=new Pl(c,v);r.add(y);const A=Qn()?60:150,w=new $t,C=new Float32Array(A*3);for(let B=0;B<A;B++)C[B*3]=(Math.random()-.5)*20,C[B*3+1]=(Math.random()-.5)*12,C[B*3+2]=(Math.random()-.5)*10;w.setAttribute("position",new dn(C,3));const x=new Fa({color:2278750,size:.05,transparent:!0,opacity:.3,blending:Rs,depthWrite:!1}),T=new Pl(w,x);r.add(T);let U=0,b=0,k=0;const F=()=>{U=window.scrollY},j=B=>{b=(B.clientX/n-.5)*2,k=(B.clientY/i-.5)*2};window.addEventListener("scroll",F,{passive:!0}),Qn()||window.addEventListener("mousemove",j);const H=new a_;let z;const O=()=>{z=requestAnimationFrame(O);const B=H.getElapsedTime(),Q=U*.001;u.rotation.x=B*.08+Q*.5,u.rotation.y=B*.12+Q,f.rotation.x=-B*.1-Q*.3,f.rotation.y=-B*.08,y.rotation.y=B*.04+Q*.2,y.rotation.x=Math.sin(B*.2)*.15;const ie=e.getBoundingClientRect(),se=ie.top+ie.height/2,Pe=window.innerHeight/2,Ge=Math.abs(se-Pe)/(window.innerHeight*.7),Ye=Math.max(0,1-Ge),q=.5+Ye*.5;u.scale.setScalar(q),f.scale.setScalar(q);const re=1+Math.sin(B*2)*.15;M.scale.setScalar(re),_.opacity=.2+Math.sin(B*1.5)*.1,l.opacity=.15+Ye*.15+Math.sin(B)*.05,s.position.x+=(b*1.8-s.position.x)*.025,s.position.y+=(-k*1.2-s.position.y)*.025,s.lookAt(0,0,0),a.render(r,s)};O();const G=()=>{n=e.clientWidth,i=e.clientHeight,!(!n||!i)&&(s.aspect=n/i,s.updateProjectionMatrix(),a.setSize(n,i))};return window.addEventListener("resize",G),()=>{cancelAnimationFrame(z),window.removeEventListener("scroll",F),Qn()||window.removeEventListener("mousemove",j),window.removeEventListener("resize",G),[o,l,d,p,m,_,c,v,w,x].forEach(B=>B.dispose()),a.dispose(),e.contains(a.domElement)&&e.removeChild(a.domElement)}},[]),P.jsx("div",{ref:t,className:"three-layer three-geo-layer"})}function eh(){return P.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[P.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),P.jsx("polyline",{points:"12 5 19 12 12 19"})]})}function aw(){return P.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:P.jsx("polyline",{points:"20 6 9 17 4 12"})})}function ow(){return P.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"currentColor",children:P.jsx("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})})}function lw(){return P.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[P.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),P.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),P.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})}function uw(){return P.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[P.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),P.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}function ur(t=.12){const e=It.useRef(null),[n,i]=It.useState(!1);return It.useEffect(()=>{const r=e.current;if(!r)return;const s=new IntersectionObserver(([a])=>{a.isIntersecting&&(i(!0),s.disconnect())},{threshold:t});return s.observe(r),()=>s.disconnect()},[t]),[e,n]}const mm=[{label:"Benefits",href:"#benefits"},{label:"Gallery",href:"#gallery"},{label:"Book Trial",href:"#booking"},{label:"Reviews",href:"#reviews"}],cw=[{icon:"🏋️",title:"Personal Coaching",desc:"Every session is led by a certified trainer who designs a plan specifically for your body, goals, and fitness level."},{icon:"⚡",title:"Fast Results System",desc:"Our science-backed training methodology is engineered to deliver visible progress within your very first 30 days."},{icon:"🛡️",title:"Beginner Friendly",desc:"Zero experience needed. Our environment is welcoming and judgment-free — built for people who are just getting started."},{icon:"🔬",title:"Premium Equipment",desc:"Train on commercial-grade machines, free weights, and recovery tools found in the world's most elite facilities."},{icon:"📊",title:"Progress Tracking",desc:"We measure body composition, strength, and endurance every step of the way so you can see every gain clearly."}],fw=[{id:"1534438327276-14e5300c3a48",label:"Training Floor",wide:!0},{id:"1571019613454-1cb2f99b2d8b",label:"Personal Training",wide:!1},{id:"1526506118085-60ce8714f8c5",label:"Cardio Zone",wide:!1},{id:"1548690312-e3b507d8c110",label:"Weight Room",wide:!1},{id:"1574680096145-d05b474e2155",label:"Group Sessions",wide:!1},{id:"1583454110551-21f2fa2afe61",label:"Recovery Area",wide:!1}],dw=[{name:"Sarah M.",age:28,goal:"Weight Loss",text:"I lost 8kg in my first 2 months. The trainers here are incredible — they pushed me just the right amount and the environment felt safe and supportive from day one.",stars:5,avatar:"SM"},{name:"Daniel K.",age:34,goal:"Muscle Building",text:"I've trained at 4 different gyms. Nothing comes close to this place. The equipment is elite, the trainers are genuinely knowledgeable, and I've made more progress here in 3 months than in 2 years elsewhere.",stars:5,avatar:"DK"},{name:"Priya L.",age:24,goal:"General Fitness",text:"As someone who was completely terrified of walking into a gym for the first time — this place changed everything for me. Everyone is so welcoming and I genuinely feel like I belong here.",stars:5,avatar:"PL"},{name:"Marcus T.",age:41,goal:"Weight Loss",text:"The free trial was all it took. Within 30 minutes I knew this was where I wanted to train. Six months later, I'm down 15kg and I actually love working out now.",stars:5,avatar:"MT"}],hw=[{value:"",label:"Select your fitness goal"},{value:"weight-loss",label:"Lose Weight & Burn Fat"},{value:"muscle",label:"Build Muscle & Strength"},{value:"general",label:"General Fitness & Health"},{value:"endurance",label:"Improve Endurance & Stamina"},{value:"flexibility",label:"Flexibility & Mobility"}],gm=[{value:"",label:"Select preferred time"},{value:"6am-8am",label:"6:00 AM – 8:00 AM"},{value:"8am-10am",label:"8:00 AM – 10:00 AM"},{value:"10am-12pm",label:"10:00 AM – 12:00 PM"},{value:"12pm-2pm",label:"12:00 PM – 2:00 PM"},{value:"4pm-6pm",label:"4:00 PM – 6:00 PM"},{value:"6pm-8pm",label:"6:00 PM – 8:00 PM"}],_m={name:"",phone:"",email:"",date:"",time:"",goal:""};function pw({scrolled:t,menuOpen:e,setMenuOpen:n}){return P.jsxs("nav",{className:`nav${t?" nav--scrolled":""}`,children:[P.jsxs("div",{className:"nav__inner",children:[P.jsxs("a",{href:"#top",className:"nav__brand",onClick:()=>n(!1),children:[P.jsx("span",{className:"brand-mark",children:"Q"}),P.jsxs("span",{className:"brand-name",children:["QFit ",P.jsx("strong",{children:"Studio"})]})]}),P.jsx("ul",{className:`nav__links${e?" nav__links--open":""}`,children:mm.map(i=>P.jsx("li",{children:P.jsx("a",{href:i.href,onClick:()=>n(!1),children:i.label})},i.href))}),P.jsxs("div",{className:"nav__right",children:[P.jsx("a",{href:"#booking",className:"btn btn--accent btn--sm nav__cta",children:"Book Free Trial"}),P.jsx("button",{className:"nav__burger",onClick:()=>n(i=>!i),"aria-label":"Toggle menu",children:e?P.jsx(uw,{}):P.jsx(lw,{})})]})]}),e&&P.jsxs("div",{className:"nav__drawer",children:[mm.map(i=>P.jsx("a",{href:i.href,className:"nav__drawer-link",onClick:()=>n(!1),children:i.label},i.href)),P.jsx("a",{href:"#booking",className:"btn btn--accent btn--drawer",onClick:()=>n(!1),children:"Book Free Trial"})]})]})}function mw(){return P.jsxs("section",{className:"hero",id:"top",children:[P.jsxs("div",{className:"hero__bg",children:[P.jsx("img",{src:"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80",alt:"Premium gym training floor",className:"hero__img"}),P.jsx("div",{className:"hero__overlay"})]}),P.jsx(p_,{className:"hero__particles",scrollFade:!0}),P.jsxs("div",{className:"hero__content container",children:[P.jsx("div",{className:"hero__badge",children:"🔥 Limited free trial slots available this week"}),P.jsxs("h1",{className:"hero__headline",children:["Start Your",P.jsx("br",{}),P.jsx("span",{className:"text-accent",children:"Fitness"})," ","Transformation",P.jsx("br",{}),"Today"]}),P.jsxs("p",{className:"hero__sub",children:["Book a ",P.jsx("strong",{children:"FREE trial session"})," and experience our premium training environment — zero commitment, zero cost, zero excuses."]}),P.jsxs("div",{className:"hero__ctas",children:[P.jsxs("a",{href:"#booking",className:"btn btn--accent btn--lg",children:["Book Free Trial Now ",P.jsx(eh,{})]}),P.jsx("a",{href:"#benefits",className:"btn btn--ghost btn--lg",children:"See Why We're Different"})]}),P.jsxs("div",{className:"hero__stats",children:[P.jsxs("div",{className:"hero__stat",children:[P.jsx("strong",{children:"1,200+"}),P.jsx("span",{children:"Active Members"})]}),P.jsx("div",{className:"hero__divider"}),P.jsxs("div",{className:"hero__stat",children:[P.jsx("strong",{children:"98%"}),P.jsx("span",{children:"Satisfaction Rate"})]}),P.jsx("div",{className:"hero__divider"}),P.jsxs("div",{className:"hero__stat",children:[P.jsx("strong",{children:"8+"}),P.jsx("span",{children:"Years Running"})]})]})]}),P.jsx("a",{href:"#benefits",className:"hero__scroll","aria-label":"Scroll down",children:P.jsx("span",{className:"hero__scroll-chevron"})})]})}function gw(){const[t,e]=ur();return P.jsx("section",{className:"benefits section",id:"benefits",children:P.jsxs("div",{className:"container",children:[P.jsxs("div",{ref:t,className:`section-head reveal${e?" visible":""}`,children:[P.jsx("span",{className:"eyebrow",children:"Why QFit Studio"}),P.jsx("h2",{children:"Everything you need to transform. Nothing you don't."}),P.jsx("p",{children:"We built QFit around one belief: every person deserves a world-class training experience from day one."})]}),P.jsx("div",{className:"benefits__grid",children:cw.map((n,i)=>P.jsx(_w,{item:n,delay:i*90},n.title))})]})})}function _w({item:t,delay:e}){const[n,i]=ur();return P.jsxs("div",{ref:n,className:`benefit-card reveal${i?" visible":""}`,style:{transitionDelay:`${e}ms`},children:[P.jsx("div",{className:"benefit-card__icon",children:t.icon}),P.jsx("h3",{children:t.title}),P.jsx("p",{children:t.desc})]})}function vw(){const[t,e]=ur();return P.jsx("section",{className:"gallery section",id:"gallery",children:P.jsxs("div",{className:"container",children:[P.jsxs("div",{ref:t,className:`section-head reveal${e?" visible":""}`,children:[P.jsx("span",{className:"eyebrow",children:"The Experience"}),P.jsx("h2",{children:"A space built for serious results."}),P.jsx("p",{children:"State-of-the-art facilities designed to inspire every single session."})]}),P.jsx("div",{className:"gallery__grid",children:fw.map((n,i)=>P.jsx(xw,{item:n,index:i},n.id))})]})})}function xw({item:t,index:e}){const[n,i]=ur();return P.jsxs("div",{ref:n,className:`gallery__item reveal${i?" visible":""}${t.wide?" gallery__item--wide":""}`,style:{transitionDelay:`${e%3*100}ms`},children:[P.jsx("img",{src:`https://images.unsplash.com/photo-${t.id}?auto=format&fit=crop&w=900&q=80`,alt:t.label,loading:"lazy"}),P.jsx("div",{className:"gallery__caption",children:t.label})]})}function Sw(){var f;const[t,e]=ur(),[n,i]=It.useState(_m),[r,s]=It.useState({}),[a,o]=It.useState(null),l=m=>_=>{i(M=>({...M,[m]:_.target.value})),s(M=>{const g={...M};return delete g[m],g})},u=()=>{const m={};return n.name.trim()||(m.name="Full name is required."),n.phone.trim()||(m.phone="WhatsApp number is required."),n.date||(m.date="Please choose a preferred date."),n.time||(m.time="Please choose a preferred time."),n.goal||(m.goal="Please select your fitness goal."),m},d=m=>{m.preventDefault();const _=u();if(Object.keys(_).length){s(_);return}s({}),o("submitting"),setTimeout(()=>o("success"),1400)},p=(()=>{const m=new Date;return m.setDate(m.getDate()+1),m.toISOString().split("T")[0]})();return a==="success"?P.jsx("section",{className:"booking section",id:"booking",children:P.jsx("div",{className:"container",children:P.jsxs("div",{className:"booking__success",children:[P.jsx("div",{className:"booking__success-icon",children:"✅"}),P.jsx("h2",{children:"You're Booked In!"}),P.jsxs("p",{children:["Your free trial has been reserved for ",P.jsx("strong",{children:n.name}),". We'll reach out on"," ",P.jsx("strong",{children:n.phone})," via WhatsApp to confirm your session details."]}),P.jsxs("div",{className:"booking__success-meta",children:[P.jsxs("span",{children:["📅 ",n.date]}),P.jsxs("span",{children:["⏰ ",((f=gm.find(m=>m.value===n.time))==null?void 0:f.label)||n.time]})]}),P.jsx("button",{className:"btn btn--accent btn--lg",onClick:()=>{i(_m),o(null)},children:"Book Another Session"})]})})}):P.jsx("section",{className:"booking section",id:"booking",children:P.jsx("div",{className:"container",children:P.jsxs("div",{className:"booking__wrap",children:[P.jsxs("div",{ref:t,className:`booking__copy reveal${e?" visible":""}`,children:[P.jsx("span",{className:"eyebrow",children:"Free Trial Booking"}),P.jsx("h2",{children:"Claim your free session today."}),P.jsx("p",{children:"Experience our premium training environment with zero cost and zero obligation. Our trainers will personally walk you through the facility and design a workout just for you."}),P.jsx("ul",{className:"booking__perks",children:["60-minute fully guided session","Personalised fitness assessment","No credit card required","Cancel anytime before your session"].map(m=>P.jsxs("li",{children:[P.jsx("span",{className:"perk-icon",children:P.jsx(aw,{})}),m]},m))}),P.jsxs("div",{className:"booking__urgency",children:[P.jsx("span",{className:"urgency-dot"}),P.jsxs("span",{children:[P.jsx("strong",{children:"Only 3 slots left today"})," — slots fill fast on weekdays."]})]})]}),P.jsxs("div",{className:"booking__card",children:[P.jsxs("div",{className:"booking__card-head",children:[P.jsx("span",{className:"eyebrow",children:"Quick & Easy — 60 Seconds"}),P.jsx("h3",{children:"Reserve Your Free Trial"})]}),P.jsxs("form",{onSubmit:d,noValidate:!0,children:[P.jsxs("div",{className:"field",children:[P.jsxs("label",{htmlFor:"f-name",children:["Full Name ",P.jsx("span",{className:"req",children:"*"})]}),P.jsx("input",{id:"f-name",type:"text",placeholder:"Your full name",value:n.name,onChange:l("name"),className:r.name?"input--err":"",disabled:a==="submitting"}),r.name&&P.jsx("span",{className:"field__err",children:r.name})]}),P.jsxs("div",{className:"field",children:[P.jsxs("label",{htmlFor:"f-phone",children:["WhatsApp Number ",P.jsx("span",{className:"req",children:"*"})]}),P.jsx("input",{id:"f-phone",type:"tel",placeholder:"+60 12 345 6789",value:n.phone,onChange:l("phone"),className:r.phone?"input--err":"",disabled:a==="submitting"}),r.phone&&P.jsx("span",{className:"field__err",children:r.phone})]}),P.jsxs("div",{className:"field",children:[P.jsxs("label",{htmlFor:"f-email",children:["Email Address ",P.jsx("span",{className:"opt",children:"(optional)"})]}),P.jsx("input",{id:"f-email",type:"email",placeholder:"you@email.com",value:n.email,onChange:l("email"),disabled:a==="submitting"})]}),P.jsxs("div",{className:"field-row",children:[P.jsxs("div",{className:"field",children:[P.jsxs("label",{htmlFor:"f-date",children:["Preferred Date ",P.jsx("span",{className:"req",children:"*"})]}),P.jsx("input",{id:"f-date",type:"date",min:p,value:n.date,onChange:l("date"),className:r.date?"input--err":"",disabled:a==="submitting"}),r.date&&P.jsx("span",{className:"field__err",children:r.date})]}),P.jsxs("div",{className:"field",children:[P.jsxs("label",{htmlFor:"f-time",children:["Preferred Time ",P.jsx("span",{className:"req",children:"*"})]}),P.jsx("select",{id:"f-time",value:n.time,onChange:l("time"),className:r.time?"input--err":"",disabled:a==="submitting",children:gm.map(m=>P.jsx("option",{value:m.value,children:m.label},m.value))}),r.time&&P.jsx("span",{className:"field__err",children:r.time})]})]}),P.jsxs("div",{className:"field",children:[P.jsxs("label",{htmlFor:"f-goal",children:["Fitness Goal ",P.jsx("span",{className:"req",children:"*"})]}),P.jsx("select",{id:"f-goal",value:n.goal,onChange:l("goal"),className:r.goal?"input--err":"",disabled:a==="submitting",children:hw.map(m=>P.jsx("option",{value:m.value,children:m.label},m.value))}),r.goal&&P.jsx("span",{className:"field__err",children:r.goal})]}),P.jsx("button",{type:"submit",className:"btn btn--accent btn--lg btn--full",disabled:a==="submitting",children:a==="submitting"?P.jsx("span",{className:"btn__spinner",children:"Reserving your spot…"}):P.jsxs(P.Fragment,{children:["Claim Free Trial ",P.jsx(eh,{})]})}),P.jsx("p",{className:"form__note",children:"🔒 Limited slots available daily. We will contact you via WhatsApp to confirm your session. No payment required."})]})]})]})})})}function yw(){const[t,e]=ur();return P.jsx("section",{className:"reviews section",id:"reviews",children:P.jsxs("div",{className:"container",children:[P.jsxs("div",{ref:t,className:`section-head reveal${e?" visible":""}`,children:[P.jsx("span",{className:"eyebrow",children:"Real Results"}),P.jsx("h2",{children:"People who started exactly where you are now."}),P.jsx("p",{children:"Beginners, busy professionals, and comeback athletes — all transformed at QFit Studio."})]}),P.jsx("div",{className:"reviews__grid",children:dw.map((n,i)=>P.jsx(Mw,{item:n,delay:i*80},n.name))}),P.jsxs("div",{className:"reviews__trust",children:[P.jsx("span",{className:"trust-stars",children:"★★★★★"}),P.jsxs("span",{children:[P.jsx("strong",{children:"4.9 / 5"})," based on ",P.jsx("strong",{children:"400+ reviews"})," on Google & Facebook"]})]})]})})}function Mw({item:t,delay:e}){const[n,i]=ur();return P.jsxs("div",{ref:n,className:`review-card reveal${i?" visible":""}`,style:{transitionDelay:`${e}ms`},children:[P.jsx("div",{className:"review-card__stars",children:Array.from({length:t.stars}).map((r,s)=>P.jsx("span",{className:"star-icon",children:P.jsx(ow,{})},s))}),P.jsxs("p",{className:"review-card__text",children:['"',t.text,'"']}),P.jsxs("div",{className:"review-card__author",children:[P.jsx("div",{className:"review-card__avatar",children:t.avatar}),P.jsxs("div",{children:[P.jsx("strong",{children:t.name}),P.jsxs("span",{children:[t.goal," · Age ",t.age]})]})]})]})}function Ew(){const[t,e]=ur();return P.jsxs("section",{className:"final-cta",children:[P.jsx(p_,{className:"final-cta__particles",scrollFade:!1}),P.jsx("div",{className:"container",children:P.jsxs("div",{ref:t,className:`final-cta__inner reveal${e?" visible":""}`,children:[P.jsx("span",{className:"eyebrow",children:"Start Now — It's Free"}),P.jsx("h2",{children:"Your first step starts today."}),P.jsx("p",{children:"Every transformation starts with a single decision. Book your free trial and let our team show you exactly what's possible."}),P.jsxs("a",{href:"#booking",className:"btn btn--accent btn--xl",children:["Book Free Trial ",P.jsx(eh,{})]}),P.jsx("p",{className:"final-cta__note",children:"No credit card  ·  No commitment  ·  100% Free"})]})})]})}function Tw(){return P.jsx("footer",{className:"footer",children:P.jsxs("div",{className:"container footer__inner",children:[P.jsxs("div",{className:"nav__brand",children:[P.jsx("span",{className:"brand-mark",children:"Q"}),P.jsxs("span",{className:"brand-name",children:["QFit ",P.jsx("strong",{children:"Studio"})]})]}),P.jsxs("p",{children:["© ",new Date().getFullYear()," QFit Studio. All rights reserved."]}),P.jsx("p",{className:"footer__note",children:"Results may vary. Free trial is available for new members only."})]})})}function ww(){const[t,e]=It.useState(!1),[n,i]=It.useState(!1);return It.useEffect(()=>{const r=()=>e(window.scrollY>60);return window.addEventListener("scroll",r,{passive:!0}),()=>window.removeEventListener("scroll",r)},[]),It.useEffect(()=>{const r=()=>{window.innerWidth>768&&i(!1)};return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),It.useEffect(()=>(document.body.style.overflow=n?"hidden":"",()=>{document.body.style.overflow=""}),[n]),P.jsxs("div",{className:"site",children:[P.jsx(pw,{scrolled:t,menuOpen:n,setMenuOpen:i}),P.jsx(mw,{}),P.jsx(gw,{}),P.jsx(vw,{}),P.jsxs("section",{className:"three-divider",children:[P.jsx(sw,{}),P.jsxs("div",{className:"three-divider__text container",children:[P.jsxs("h2",{children:["Transform Your ",P.jsx("span",{className:"text-accent",children:"Limits"})]}),P.jsx("p",{children:"Where science meets dedication."})]})]}),P.jsx(Sw,{}),P.jsx(yw,{}),P.jsx(Ew,{}),P.jsx(Tw,{})]})}ac.createRoot(document.getElementById("root")).render(P.jsx(B_.StrictMode,{children:P.jsx(ww,{})}));
