!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,(t.braintree||(t.braintree={})).hostedFields=e()}}(function(){var e;return function t(e,n,r){function i(s,a){if(!n[s]){if(!e[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(o)return o(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[s]={exports:{}};e[s][0].call(l.exports,function(t){var n=e[s][1][t];return i(n?n:t)},l,l.exports,t,e,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(e,t,n){(function(e){"use strict";t.exports=function(t){return t=t||e.navigator.userAgent,/Android/.test(t)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,t,n){"use strict";var r=e("./is-edge"),i=e("./is-samsung");t.exports=function(e){return e=e||navigator.userAgent,!(-1===e.indexOf("Chrome")&&-1===e.indexOf("CriOS")||r(e)||i(e))}},{"./is-edge":3,"./is-samsung":6}],3:[function(e,t,n){"use strict";t.exports=function(e){return e=e||navigator.userAgent,-1!==e.indexOf("Edge/")}},{}],4:[function(e,t,n){"use strict";t.exports=function(e){return e=e||navigator.userAgent,-1!==e.indexOf("MSIE 9")}},{}],5:[function(e,t,n){(function(e){"use strict";t.exports=function(t){return t=t||e.navigator.userAgent,/iPhone|iPod|iPad/i.test(t)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],6:[function(e,t,n){(function(e){"use strict";t.exports=function(t){return t=t||e.navigator.userAgent,/SamsungBrowser/i.test(t)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],7:[function(e,t,n){"use strict";var r=e("./lib/set-attributes"),i=e("./lib/default-attributes"),o=e("./lib/assign");t.exports=function(e){var t=document.createElement("iframe"),n=o({},i,e);return n.style&&"string"!=typeof n.style&&(o(t.style,n.style),delete n.style),r(t,n),t.getAttribute("id")||(t.id=t.name),t}},{"./lib/assign":8,"./lib/default-attributes":9,"./lib/set-attributes":10}],8:[function(e,t,n){"use strict";t.exports=function(e){var t=Array.prototype.slice.call(arguments,1);return t.forEach(function(t){"object"==typeof t&&Object.keys(t).forEach(function(n){e[n]=t[n]})}),e}},{}],9:[function(e,t,n){"use strict";t.exports={src:"about:blank",frameBorder:0,allowtransparency:!0,scrolling:"no"}},{}],10:[function(e,t,n){"use strict";t.exports=function(e,t){var n;for(var r in t)t.hasOwnProperty(r)&&(n=t[r],null==n?e.removeAttribute(r):e.setAttribute(r,n))}},{}],11:[function(e,t,n){"use strict";function r(e){return function(){var t=arguments;setTimeout(function(){e.apply(null,t)},1)}}t.exports=r},{}],12:[function(e,t,n){"use strict";function r(e){var t=!1;return function(){t||(t=!0,e.apply(null,arguments))}}t.exports=r},{}],13:[function(e,t,n){"use strict";function r(e,t){return t?void e.then(function(e){t(null,e)})["catch"](function(e){t(e)}):e}t.exports=r},{}],14:[function(e,t,n){"use strict";function r(e){return function(){var t,n=Array.prototype.slice.call(arguments),r=n[n.length-1];return"function"==typeof r&&(t=n.pop(),t=o(i(t))),s(e.apply(this,n),t)}}var i=e("./lib/deferred"),o=e("./lib/once"),s=e("./lib/promise-or-callback");r.wrapPrototype=function(e,t){var n,i,o;return t=t||{},i=t.ignoreMethods||[],o=t.transformPrivateMethods===!0,n=Object.getOwnPropertyNames(e.prototype).filter(function(t){var n,r="constructor"!==t&&"function"==typeof e.prototype[t],s=-1===i.indexOf(t);return n=o?!0:"_"!==t.charAt(0),r&&n&&s}),n.forEach(function(t){var n=e.prototype[t];e.prototype[t]=r(n)}),e},t.exports=r},{"./lib/deferred":11,"./lib/once":12,"./lib/promise-or-callback":13}],15:[function(e,t,n){"use strict";function r(e){var t,n,r;return e?(t=e.prefixPattern.source,n=e.exactPattern.source,r=JSON.parse(JSON.stringify(e)),r.prefixPattern=t,r.exactPattern=n,r):null}function i(e){var t,n,i,s=[],a=[];if(!("string"==typeof e||e instanceof String))return[];for(i=0;i<y.length;i++)t=y[i],n=o[t],0!==e.length?n.exactPattern.test(e)?a.push(r(n)):n.prefixPattern.test(e)&&s.push(r(n)):s.push(r(n));return a.length?a:s}var o={},s="visa",a="master-card",c="american-express",u="diners-club",l="discover",f="jcb",d="unionpay",p="maestro",E="CVV",_="CID",h="CVC",I="CVN",y=[s,a,c,u,l,f,d,p];o[s]={niceType:"Visa",type:s,prefixPattern:/^4$/,exactPattern:/^4\d*$/,gaps:[4,8,12],lengths:[16,18,19],code:{name:E,size:3}},o[a]={niceType:"MasterCard",type:a,prefixPattern:/^(5|5[1-5]|2|22|222|222[1-9]|2[3-6]|27|27[0-2]|2720)$/,exactPattern:/^(5[1-5]|222[1-9]|2[3-6]|27[0-1]|2720)\d*$/,gaps:[4,8,12],lengths:[16],code:{name:h,size:3}},o[c]={niceType:"American Express",type:c,prefixPattern:/^(3|34|37)$/,exactPattern:/^3[47]\d*$/,isAmex:!0,gaps:[4,10],lengths:[15],code:{name:_,size:4}},o[u]={niceType:"Diners Club",type:u,prefixPattern:/^(3|3[0689]|30[0-5])$/,exactPattern:/^3(0[0-5]|[689])\d*$/,gaps:[4,10],lengths:[14],code:{name:E,size:3}},o[l]={niceType:"Discover",type:l,prefixPattern:/^(6|60|601|6011|65|64|64[4-9])$/,exactPattern:/^(6011|65|64[4-9])\d*$/,gaps:[4,8,12],lengths:[16,19],code:{name:_,size:3}},o[f]={niceType:"JCB",type:f,prefixPattern:/^(2|21|213|2131|1|18|180|1800|3|35)$/,exactPattern:/^(2131|1800|35)\d*$/,gaps:[4,8,12],lengths:[16],code:{name:E,size:3}},o[d]={niceType:"UnionPay",type:d,prefixPattern:/^((6|62|62\d|(621(?!83|88|98|99))|622(?!06)|627[02,06,07]|628(?!0|1)|629[1,2])|622018)$/,exactPattern:/^(((620|(621(?!83|88|98|99))|622(?!06|018)|62[3-6]|627[02,06,07]|628(?!0|1)|629[1,2]))\d*|622018\d{12})$/,gaps:[4,8,12],lengths:[16,17,18,19],code:{name:I,size:3}},o[p]={niceType:"Maestro",type:p,prefixPattern:/^(5|5[06-9]|6\d*)$/,exactPattern:/^5[06-9]\d*$/,gaps:[4,8,12],lengths:[12,13,14,15,16,17,18,19],code:{name:h,size:3}},i.getTypeInfo=function(e){return r(o[e])},i.types={VISA:s,MASTERCARD:a,AMERICAN_EXPRESS:c,DINERS_CLUB:u,DISCOVER:l,JCB:f,UNIONPAY:d,MAESTRO:p},t.exports=i},{}],16:[function(t,n,r){(function(t){"use strict";!function(i,o){"object"==typeof r&&"undefined"!=typeof n?n.exports=o("undefined"==typeof t?i:t):"function"==typeof e&&e.amd?e([],function(){return o(i)}):i.framebus=o(i)}(this,function(e){function t(e){return null==e?!1:null==e.Window?!1:e.constructor!==e.Window?!1:(D.push(e),!0)}function n(e){var t,n={};for(t in m)m.hasOwnProperty(t)&&(n[t]=m[t]);return n._origin=e||"*",n}function r(e){var t,n,r=s(this);return a(e)?!1:a(r)?!1:(n=Array.prototype.slice.call(arguments,1),t=c(e,n,r),t===!1?!1:(_(T.top||T.self,t,r),!0))}function i(e,t){var n=s(this);return y(e,t,n)?!1:(g[n]=g[n]||{},g[n][e]=g[n][e]||[],g[n][e].push(t),!0)}function o(e,t){var n,r,i=s(this);if(y(e,t,i))return!1;if(r=g[i]&&g[i][e],!r)return!1;for(n=0;n<r.length;n++)if(r[n]===t)return r.splice(n,1),!0;return!1}function s(e){return e&&e._origin||"*"}function a(e){return"string"!=typeof e}function c(e,t,n){var r=!1,i={event:e,origin:n},o=t[t.length-1];"function"==typeof o&&(i.reply=I(o,n),t=t.slice(0,-1)),i.args=t;try{r=O+JSON.stringify(i)}catch(s){throw new Error("Could not stringify event: "+s.message)}return r}function u(e){var t,n,r,i;if(e.data.slice(0,O.length)!==O)return!1;try{t=JSON.parse(e.data.slice(O.length))}catch(o){return!1}return null!=t.reply&&(n=e.origin,r=e.source,i=t.reply,t.reply=function(e){var t=c(i,[e],n);return t===!1?!1:void r.postMessage(t,n)},t.args.push(t.reply)),t}function l(t){T||(T=t||e,T.addEventListener?T.addEventListener("message",d,!1):T.attachEvent?T.attachEvent("onmessage",d):null===T.onmessage?T.onmessage=d:T=null)}function f(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,n="x"===e?t:3&t|8;return n.toString(16)})}function d(e){var t;a(e.data)||(t=u(e),t&&(p("*",t.event,t.args,e),p(e.origin,t.event,t.args,e),h(e.data,t.origin,e.source)))}function p(e,t,n,r){var i;if(g[e]&&g[e][t])for(i=0;i<g[e][t].length;i++)g[e][t][i].apply(r,n)}function E(e){return e.top!==e?!1:null==e.opener?!1:e.opener===e?!1:e.opener.closed===!0?!1:!0}function _(e,t,n){var r;try{for(e.postMessage(t,n),E(e)&&_(e.opener.top,t,n),r=0;r<e.frames.length;r++)_(e.frames[r],t,n)}catch(i){}}function h(e,t,n){var r,i;for(r=D.length-1;r>=0;r--)i=D[r],i.closed===!0?D=D.slice(r,1):n!==i&&_(i.top,e,t)}function I(e,t){function n(i,o){e(i,o),m.target(t).unsubscribe(r,n)}var r=f();return m.target(t).subscribe(r,n),r}function y(e,t,n){return a(e)?!0:"function"!=typeof t?!0:a(n)?!0:!1}var T,m,D=[],g={},O="/*framebus*/";return l(),m={target:n,include:t,publish:r,pub:r,trigger:r,emit:r,subscribe:i,sub:i,on:i,unsubscribe:o,unsub:o,off:o}})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],17:[function(e,t,n){!function(e){function n(){}function r(e,t){return function(){e.apply(t,arguments)}}function i(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(e,this)}function o(e,t){for(;3===e._state;)e=e._value;return 0===e._state?void e._deferreds.push(t):(e._handled=!0,void i._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null===n)return void(1===e._state?s:a)(t.promise,e._value);var r;try{r=n(e._value)}catch(i){return void a(t.promise,i)}s(t.promise,r)}))}function s(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof i)return e._state=3,e._value=t,void c(e);if("function"==typeof n)return void l(r(n,t),e)}e._state=1,e._value=t,c(e)}catch(o){a(e,o)}}function a(e,t){e._state=2,e._value=t,c(e)}function c(e){2===e._state&&0===e._deferreds.length&&i._immediateFn(function(){e._handled||i._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;n>t;t++)o(e,e._deferreds[t]);e._deferreds=null}function u(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function l(e,t){var n=!1;try{e(function(e){n||(n=!0,s(t,e))},function(e){n||(n=!0,a(t,e))})}catch(r){if(n)return;n=!0,a(t,r)}}var f=setTimeout;i.prototype["catch"]=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var r=new this.constructor(n);return o(this,new u(e,t,r)),r},i.all=function(e){var t=Array.prototype.slice.call(e);return new i(function(e,n){function r(o,s){try{if(s&&("object"==typeof s||"function"==typeof s)){var a=s.then;if("function"==typeof a)return void a.call(s,function(e){r(o,e)},n)}t[o]=s,0===--i&&e(t)}catch(c){n(c)}}if(0===t.length)return e([]);for(var i=t.length,o=0;o<t.length;o++)r(o,t[o])})},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i(function(t){t(e)})},i.reject=function(e){return new i(function(t,n){n(e)})},i.race=function(e){return new i(function(t,n){for(var r=0,i=e.length;i>r;r++)e[r].then(t,n)})},i._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){f(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},i._setImmediateFn=function(e){i._immediateFn=e},i._setUnhandledRejectionFn=function(e){i._unhandledRejectionFn=e},"undefined"!=typeof t&&t.exports?t.exports=i:e.Promise||(e.Promise=i)}(this)},{}],18:[function(e,t,n){(function(n){"use strict";function r(e){return!u(e)&&e.indexOf("Samsung")>-1}function i(e){var t=e||a;return c(t)&&d.test(t)}function o(e){var t=e||a;return c(t)&&u(t)}function s(e){return e=e||a,/SamsungBrowser/.test(e)||r(e)}var a=n.navigator&&n.navigator.userAgent,c=e("@braintree/browser-detection/is-android"),u=e("@braintree/browser-detection/is-chrome"),l=e("@braintree/browser-detection/is-ios"),f=e("@braintree/browser-detection/is-ie9"),d=/Version\/\d\.\d* Chrome\/\d*\.0\.0\.0/;t.exports={isIE9:f,isAndroidChrome:o,isIos:l,isKitKatWebview:i,isSamsungBrowser:s}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"@braintree/browser-detection/is-android":1,"@braintree/browser-detection/is-chrome":2,"@braintree/browser-detection/is-ie9":4,"@braintree/browser-detection/is-ios":5}],19:[function(e,t,n){"use strict";var r=e("./lib/device");t.exports=function(){return!r.isSamsungBrowser()}},{"./lib/device":18}],20:[function(e,t,n){"use strict";function r(e,t){var n;return a.hasOwnProperty(e)?null==t||i(e,t)||(n=new o({type:s.HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED.type,code:s.HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED.code,message:'Value "'+t+'" is not allowed for "'+e+'" attribute.'})):n=new o({type:s.HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED.type,code:s.HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED.code,message:'The "'+e+'" attribute is not supported in Hosted Fields.'}),n}function i(e,t){return"string"===a[e]?"string"==typeof t||"number"==typeof t:"boolean"===a[e]?"true"===String(t)||"false"===String(t):!1}var o=e("../../lib/braintree-error"),s=e("../shared/errors"),a=e("../shared/constants").whitelistedAttributes;t.exports=r},{"../../lib/braintree-error":31,"../shared/constants":25,"../shared/errors":26}],21:[function(e,t,n){"use strict";var r=e("../shared/constants"),i=e("../../lib/use-min");t.exports=function(e,t,n){return e+"/web/"+r.VERSION+"/html/hosted-fields-frame"+i(n)+".html#"+t}},{"../../lib/use-min":49,"../shared/constants":25}],22:[function(e,t,n){"use strict";function r(e){return function(t){var n,r=t.merchantPayload,o=r.emittedBy,s=e[o].containerElement;Object.keys(r.fields).forEach(function(t){r.fields[t].container=e[t].containerElement}),n=r.fields[o],"blur"===t.type&&i(s),a.toggle(s,d.externalClasses.FOCUSED,n.isFocused),a.toggle(s,d.externalClasses.VALID,n.isValid),a.toggle(s,d.externalClasses.INVALID,!n.isPotentiallyValid),this._state={cards:r.cards,fields:r.fields},this._emit(t.type,r)}}function i(e){var t;I()&&document.activeElement===document.body&&(t=e.querySelector("input"),t||(t=document.createElement("input"),t.type="button",t.style.height="0px",t.style.width="0px",t.style.opacity="0",t.style.padding="0",t.style.position="absolute",t.style.left="-200%",t.style.top="0px",e.insertBefore(t,e.firstChild)),t.focus(),t.blur())}function o(e){var t,n,i,h=this,I={},g=0,L=_();if(!e.client)throw new l({type:v.INSTANTIATION_OPTION_REQUIRED.type,code:v.INSTANTIATION_OPTION_REQUIRED.code,message:"options.client is required when instantiating Hosted Fields."});if(i=e.client.getConfiguration(),n=e.client.getVersion(),n!==O)throw new l({type:v.INCOMPATIBLE_VERSIONS.type,code:v.INCOMPATIBLE_VERSIONS.code,message:"Client (version "+n+") and Hosted Fields (version "+O+") components must be from the same SDK version."});if(!e.fields)throw new l({type:v.INSTANTIATION_OPTION_REQUIRED.type,code:v.INSTANTIATION_OPTION_REQUIRED.code,message:"options.fields is required when instantiating Hosted Fields."});T.call(this),this._injectedNodes=[],this._destructor=new s,this._fields=I,this._state={fields:{},cards:A("")},this._bus=new u({channel:L,merchantUrl:location.href}),this._destructor.registerFunctionForTeardown(function(){h._bus.teardown()}),this._client=e.client,D.sendEvent(this._client,"custom.hosted-fields.initialized"),Object.keys(e.fields).forEach(function(t){var n,r,o;if(!d.whitelistedFields.hasOwnProperty(t))throw new l({type:p.HOSTED_FIELDS_INVALID_FIELD_KEY.type,code:p.HOSTED_FIELDS_INVALID_FIELD_KEY.code,message:'"'+t+'" is not a valid field.'});if(n=e.fields[t],r=document.querySelector(n.selector),!r)throw new l({type:p.HOSTED_FIELDS_INVALID_FIELD_SELECTOR.type,code:p.HOSTED_FIELDS_INVALID_FIELD_SELECTOR.code,message:p.HOSTED_FIELDS_INVALID_FIELD_SELECTOR.message,details:{fieldSelector:n.selector,fieldKey:t}});if(r.querySelector('iframe[name^="braintree-"]'))throw new l({type:p.HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME.type,code:p.HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME.code,message:p.HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME.message,details:{fieldSelector:n.selector,fieldKey:t}});if(n.maxlength&&"number"!=typeof n.maxlength)throw new l({type:p.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.type,code:p.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.code,message:"The value for maxlength must be a number.",details:{fieldKey:t}});if(n.minlength&&"number"!=typeof n.minlength)throw new l({type:p.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.type,code:p.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.code,message:"The value for minlength must be a number.",details:{fieldKey:t}});o=c({type:t,name:"braintree-hosted-field-"+t,style:d.defaultIFrameStyle}),this._injectedNodes=this._injectedNodes.concat(m(o,r)),this._setupLabelFocus(t,r),I[t]={frameElement:o,containerElement:r},g++,this._state.fields[t]={isEmpty:!0,isValid:!1,isPotentiallyValid:!0,isFocused:!1,container:r},setTimeout(function(){o.src="about:blank",setTimeout(function(){o.src=f(i.gatewayConfiguration.assetsUrl,L,i.isDebug)},0)},0)}.bind(this)),t=setTimeout(function(){D.sendEvent(h._client,"custom.hosted-fields.load.timed-out")},E),this._bus.on(y.FRAME_READY,function(n){g--,0===g&&(clearTimeout(t),n(e),h._emit("ready"))}),this._bus.on(y.INPUT_EVENT,r(I).bind(this)),this._destructor.registerFunctionForTeardown(function(){var e,t,n;for(e=0;e<h._injectedNodes.length;e++)t=h._injectedNodes[e],n=t.parentNode,n.removeChild(t),a.remove(n,d.externalClasses.FOCUSED,d.externalClasses.INVALID,d.externalClasses.VALID)}),this._destructor.registerFunctionForTeardown(function(){var e=S(o.prototype).concat(S(T.prototype));b(h,e)})}var s=e("../../lib/destructor"),a=e("../../lib/classlist"),c=e("@braintree/iframer"),u=e("../../lib/bus"),l=e("../../lib/braintree-error"),f=e("./compose-url"),d=e("../shared/constants"),p=e("../shared/errors"),E=e("../../lib/constants").INTEGRATION_TIMEOUT_MS,_=e("../../lib/uuid"),h=e("../shared/find-parent-tags"),I=e("@braintree/browser-detection/is-ios"),y=d.events,T=e("../../lib/event-emitter"),m=e("./inject-frame"),D=e("../../lib/analytics"),g=d.whitelistedFields,O="3.20.1",S=e("../../lib/methods"),b=e("../../lib/convert-methods-to-error"),v=e("../../lib/errors"),A=e("credit-card-type"),L=e("./attribute-validation-error"),N=e("../../lib/promise"),w=e("@braintree/wrap-promise");o.prototype=Object.create(T.prototype,{constructor:o}),o.prototype._setupLabelFocus=function(e,t){function n(){s.emit(y.TRIGGER_INPUT_FOCUS,e)}var r,i,o=I(),s=this._bus;if(!o&&null!=t.id){for(r=Array.prototype.slice.call(document.querySelectorAll('label[for="'+t.id+'"]')),r=r.concat(h(t,"label")),i=0;i<r.length;i++)r[i].addEventListener("click",n,!1);this._destructor.registerFunctionForTeardown(function(){for(i=0;i<r.length;i++)r[i].removeEventListener("click",n,!1)})}},o.prototype.teardown=function(){var e=this;return new N(function(t,n){e._destructor.teardown(function(r){D.sendEvent(e._client,"custom.hosted-fields.teardown-completed"),r?n(r):t()})})},o.prototype.tokenize=function(e){var t=this;return e||(e={}),new N(function(n,r){t._bus.emit(y.TOKENIZATION_REQUEST,e,function(e){var t=e[0],i=e[1];t?r(t):n(i)})})},o.prototype.addClass=function(e,t){var n;return g.hasOwnProperty(e)?this._fields.hasOwnProperty(e)?this._bus.emit(y.ADD_CLASS,e,t):n=new l({type:p.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,code:p.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,message:'Cannot add class to "'+e+'" field because it is not part of the current Hosted Fields options.'}):n=new l({type:p.HOSTED_FIELDS_FIELD_INVALID.type,code:p.HOSTED_FIELDS_FIELD_INVALID.code,message:'"'+e+'" is not a valid field. You must use a valid field option when adding a class.'}),n?N.reject(n):N.resolve()},o.prototype.removeClass=function(e,t){var n;return g.hasOwnProperty(e)?this._fields.hasOwnProperty(e)?this._bus.emit(y.REMOVE_CLASS,e,t):n=new l({type:p.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,code:p.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,message:'Cannot remove class from "'+e+'" field because it is not part of the current Hosted Fields options.'}):n=new l({type:p.HOSTED_FIELDS_FIELD_INVALID.type,code:p.HOSTED_FIELDS_FIELD_INVALID.code,message:'"'+e+'" is not a valid field. You must use a valid field option when removing a class.'}),n?N.reject(n):N.resolve()},o.prototype.setAttribute=function(e){var t,n;return g.hasOwnProperty(e.field)?this._fields.hasOwnProperty(e.field)?(t=L(e.attribute,e.value),t?n=t:this._bus.emit(y.SET_ATTRIBUTE,e.field,e.attribute,e.value)):n=new l({type:p.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,code:p.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,message:'Cannot set attribute for "'+e.field+'" field because it is not part of the current Hosted Fields options.'}):n=new l({type:p.HOSTED_FIELDS_FIELD_INVALID.type,code:p.HOSTED_FIELDS_FIELD_INVALID.code,message:'"'+e.field+'" is not a valid field. You must use a valid field option when setting an attribute.'}),n?N.reject(n):N.resolve()},o.prototype.removeAttribute=function(e){var t,n;return g.hasOwnProperty(e.field)?this._fields.hasOwnProperty(e.field)?(t=L(e.attribute),t?n=t:this._bus.emit(y.REMOVE_ATTRIBUTE,e.field,e.attribute)):n=new l({type:p.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,code:p.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,message:'Cannot remove attribute for "'+e.field+'" field because it is not part of the current Hosted Fields options.'}):n=new l({type:p.HOSTED_FIELDS_FIELD_INVALID.type,code:p.HOSTED_FIELDS_FIELD_INVALID.code,message:'"'+e.field+'" is not a valid field. You must use a valid field option when removing an attribute.'}),n?N.reject(n):N.resolve()},o.prototype.setPlaceholder=function(e,t){return this.setAttribute({field:e,attribute:"placeholder",value:t})},o.prototype.clear=function(e){var t;return g.hasOwnProperty(e)?this._fields.hasOwnProperty(e)?this._bus.emit(y.CLEAR_FIELD,e):t=new l({type:p.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,code:p.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,message:'Cannot clear "'+e+'" field because it is not part of the current Hosted Fields options.'}):t=new l({type:p.HOSTED_FIELDS_FIELD_INVALID.type,code:p.HOSTED_FIELDS_FIELD_INVALID.code,message:'"'+e+'" is not a valid field. You must use a valid field option when clearing a field.'}),t?N.reject(t):N.resolve()},o.prototype.focus=function(e){var t;return g.hasOwnProperty(e)?this._fields.hasOwnProperty(e)?this._bus.emit(y.TRIGGER_INPUT_FOCUS,e):t=new l({type:p.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,code:p.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,message:'Cannot focus "'+e+'" field because it is not part of the current Hosted Fields options.'}):t=new l({type:p.HOSTED_FIELDS_FIELD_INVALID.type,code:p.HOSTED_FIELDS_FIELD_INVALID.code,message:'"'+e+'" is not a valid field. You must use a valid field option when focusing a field.'}),t?N.reject(t):N.resolve()},o.prototype.getState=function(){return this._state},t.exports=w.wrapPrototype(o)},{"../../lib/analytics":29,"../../lib/braintree-error":31,"../../lib/bus":34,"../../lib/classlist":35,"../../lib/constants":36,"../../lib/convert-methods-to-error":37,"../../lib/destructor":39,"../../lib/errors":41,"../../lib/event-emitter":42,"../../lib/methods":45,"../../lib/promise":48,"../../lib/uuid":50,"../shared/constants":25,"../shared/errors":26,"../shared/find-parent-tags":27,"./attribute-validation-error":20,"./compose-url":21,"./inject-frame":23,"@braintree/browser-detection/is-ios":5,"@braintree/iframer":7,"@braintree/wrap-promise":14,"credit-card-type":15}],23:[function(e,t,n){"use strict";t.exports=function(e,t){var n=document.createElement("div"),r=document.createDocumentFragment();return n.style.clear="both",r.appendChild(e),r.appendChild(n),t.appendChild(r),[e,n]}},{}],24:[function(e,t,n){"use strict";function r(e){var t;return new a(function(n){t=new i(e),t.on("ready",function(){n(t)})})}var i=e("./external/hosted-fields"),o=e("restricted-input/supports-input-formatting"),s=e("@braintree/wrap-promise"),a=e("../lib/promise"),c="3.20.1";t.exports={supportsInputFormatting:o,create:s(r),VERSION:c}},{"../lib/promise":48,"./external/hosted-fields":22,"@braintree/wrap-promise":14,"restricted-input/supports-input-formatting":19}],25:[function(e,t,n){"use strict";var r=e("../../lib/enumerate"),i=e("./errors"),o="3.20.1",s={VERSION:o,maxExpirationYearAge:19,externalEvents:{FOCUS:"focus",BLUR:"blur",EMPTY:"empty",NOT_EMPTY:"notEmpty",VALIDITY_CHANGE:"validityChange",CARD_TYPE_CHANGE:"cardTypeChange"},defaultMaxLengths:{number:19,postalCode:8,expirationDate:7,expirationMonth:2,expirationYear:4,cvv:3},externalClasses:{FOCUSED:"braintree-hosted-fields-focused",INVALID:"braintree-hosted-fields-invalid",VALID:"braintree-hosted-fields-valid"},defaultIFrameStyle:{border:"none",width:"100%",height:"100%","float":"left"},tokenizationErrorCodes:{81724:i.HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE,81736:i.HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED},whitelistedStyles:["-moz-appearance","-moz-osx-font-smoothing","-moz-tap-highlight-color","-moz-transition","-webkit-appearance","-webkit-font-smoothing","-webkit-tap-highlight-color","-webkit-transition","appearance","color","direction","font","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-weight","letter-spacing","line-height","opacity","outline","text-shadow","transition"],whitelistedFields:{number:{name:"credit-card-number",label:"Credit Card Number"},cvv:{name:"cvv",label:"CVV"},expirationDate:{name:"expiration",label:"Expiration Date"},expirationMonth:{name:"expiration-month",label:"Expiration Month"},expirationYear:{name:"expiration-year",label:"Expiration Year"},postalCode:{name:"postal-code",label:"Postal Code"}},whitelistedAttributes:{"aria-invalid":"boolean","aria-required":"boolean",disabled:"boolean",placeholder:"string"}};s.events=r(["FRAME_READY","VALIDATE_STRICT","CONFIGURATION","TOKENIZATION_REQUEST","INPUT_EVENT","TRIGGER_INPUT_FOCUS","ADD_CLASS","REMOVE_CLASS","SET_ATTRIBUTE","REMOVE_ATTRIBUTE","CLEAR_FIELD","AUTOFILL_EXPIRATION_DATE"],"hosted-fields:"),t.exports=s},{"../../lib/enumerate":40,"./errors":26}],26:[function(e,t,n){"use strict";var r=e("../../lib/braintree-error");t.exports={HOSTED_FIELDS_INVALID_FIELD_KEY:{type:r.types.MERCHANT,code:"HOSTED_FIELDS_INVALID_FIELD_KEY"},HOSTED_FIELDS_INVALID_FIELD_SELECTOR:{type:r.types.MERCHANT,code:"HOSTED_FIELDS_INVALID_FIELD_SELECTOR",message:"Selector does not reference a valid DOM node."},HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME:{type:r.types.MERCHANT,code:"HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME",message:"Element already contains a Braintree iframe."},HOSTED_FIELDS_FIELD_INVALID:{type:r.types.MERCHANT,code:"HOSTED_FIELDS_FIELD_INVALID"},HOSTED_FIELDS_FIELD_NOT_PRESENT:{type:r.types.MERCHANT,code:"HOSTED_FIELDS_FIELD_NOT_PRESENT"},HOSTED_FIELDS_TOKENIZATION_NETWORK_ERROR:{type:r.types.NETWORK,code:"HOSTED_FIELDS_TOKENIZATION_NETWORK_ERROR",message:"A tokenization network error occurred."},HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE:{type:r.types.CUSTOMER,code:"HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE",message:"This credit card already exists in the merchant's vault."},HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED:{type:r.types.CUSTOMER,code:"HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED",message:"CVV verification failed during tokenization."},HOSTED_FIELDS_FAILED_TOKENIZATION:{type:r.types.CUSTOMER,code:"HOSTED_FIELDS_FAILED_TOKENIZATION",message:"The supplied card data failed tokenization."},HOSTED_FIELDS_FIELDS_EMPTY:{type:r.types.CUSTOMER,code:"HOSTED_FIELDS_FIELDS_EMPTY",message:"All fields are empty. Cannot tokenize empty card fields."},HOSTED_FIELDS_FIELDS_INVALID:{type:r.types.CUSTOMER,code:"HOSTED_FIELDS_FIELDS_INVALID",message:"Some payment input fields are invalid. Cannot tokenize invalid card fields."},HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED:{type:r.types.MERCHANT,code:"HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED"},HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED:{type:r.types.MERCHANT,code:"HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED"},HOSTED_FIELDS_FIELD_PROPERTY_INVALID:{type:r.types.MERCHANT,code:"HOSTED_FIELDS_FIELD_PROPERTY_INVALID"}}},{"../../lib/braintree-error":31}],27:[function(e,t,n){"use strict";function r(e,t){for(var n=e.parentNode,r=[];null!=n;)null!=n.tagName&&n.tagName.toLowerCase()===t&&r.push(n),n=n.parentNode;return r}t.exports=r},{}],28:[function(e,t,n){"use strict";function r(e,t){var n,r=t?o(t):{},a=i(e.authorization).attrs,c=o(e.analyticsMetadata);r.braintreeLibraryVersion=s.BRAINTREE_LIBRARY_VERSION;for(n in r._meta)r._meta.hasOwnProperty(n)&&(c[n]=r._meta[n]);return r._meta=c,a.tokenizationKey?r.tokenizationKey=a.tokenizationKey:r.authorizationFingerprint=a.authorizationFingerprint,r}var i=e("./create-authorization-data"),o=e("./json-clone"),s=e("./constants");t.exports=r},{"./constants":36,"./create-authorization-data":38,"./json-clone":44}],29:[function(e,t,n){"use strict";function r(e){return Math.floor(e/1e3)}function i(e,t,n){var i=e.getConfiguration(),a=e._request,c=r(Date.now()),u=i.gatewayConfiguration.analytics.url,l={analytics:[{kind:o.ANALYTICS_PREFIX+t,timestamp:c}]};a({url:u,method:"post",data:s(i,l),timeout:o.ANALYTICS_REQUEST_TIMEOUT_MS},n)}var o=e("./constants"),s=e("./add-metadata");t.exports={sendEvent:i}},{"./add-metadata":28,"./constants":36}],30:[function(e,t,n){"use strict";function r(e,t){var n=0===e.length;n?(e(),t(null)):e(t)}var i=e("./once");t.exports=function(e,t){function n(e){return e?void c(e):(a-=1,void(0===a&&c(null)))}var o,s=e.length,a=s,c=i(t);if(0===s)return void c(null);for(o=0;s>o;o++)r(e[o],n)}},{"./once":46}],31:[function(e,t,n){"use strict";function r(e){if(!r.types.hasOwnProperty(e.type))throw new Error(e.type+" is not a valid type.");if(!e.code)throw new Error("Error code required.");if(!e.message)throw new Error("Error message required.");this.name="BraintreeError",this.code=e.code,this.message=e.message,this.type=e.type,this.details=e.details}var i=e("./enumerate");r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r.types=i(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),r.findRootError=function(e){return e instanceof r&&e.details&&e.details.originalError?r.findRootError(e.details.originalError):e},t.exports=r},{"./enumerate":40}],32:[function(e,t,n){"use strict";function r(e,t){var n,r,o=document.createElement("a");return o.href=t,r="https:"===o.protocol?o.host.replace(/:443$/,""):"http:"===o.protocol?o.host.replace(/:80$/,""):o.host,n=o.protocol+"//"+r,n===e?!0:(o.href=e,i(e))}var i=e("../is-whitelisted-domain");t.exports={checkOrigin:r}},{"../is-whitelisted-domain":43}],33:[function(e,t,n){"use strict";var r=e("../enumerate");t.exports=r(["CONFIGURATION_REQUEST"],"bus:")},{"../enumerate":40}],34:[function(e,t,n){"use strict";function r(e){if(e=e||{},this.channel=e.channel,!this.channel)throw new a({type:a.types.INTERNAL,code:"MISSING_CHANNEL_ID",message:"Channel ID must be specified."});this.merchantUrl=e.merchantUrl,this._isDestroyed=!1,this._isVerbose=!1,this._listeners=[],this._log("new bus on channel "+this.channel,[location.href])}var i=e("framebus"),o=e("./events"),s=e("./check-origin").checkOrigin,a=e("../braintree-error");r.prototype.on=function(e,t){var n,r,o=t,a=this;this._isDestroyed||(this.merchantUrl&&(o=function(){s(this.origin,a.merchantUrl)&&t.apply(this,arguments)}),n=this._namespaceEvent(e),r=Array.prototype.slice.call(arguments),r[0]=n,r[1]=o,this._log("on",r),i.on.apply(i,r),this._listeners.push({eventName:e,handler:o,originalHandler:t}))},r.prototype.emit=function(e){var t;this._isDestroyed||(t=Array.prototype.slice.call(arguments),t[0]=this._namespaceEvent(e),this._log("emit",t),i.emit.apply(i,t))},r.prototype._offDirect=function(e){var t=Array.prototype.slice.call(arguments);this._isDestroyed||(t[0]=this._namespaceEvent(e),this._log("off",t),i.off.apply(i,t))},r.prototype.off=function(e,t){var n,r,i=t;if(!this._isDestroyed){
if(this.merchantUrl)for(n=0;n<this._listeners.length;n++)r=this._listeners[n],r.originalHandler===t&&(i=r.handler);this._offDirect(e,i)}},r.prototype._namespaceEvent=function(e){return["braintree",this.channel,e].join(":")},r.prototype.teardown=function(){var e,t;for(t=0;t<this._listeners.length;t++)e=this._listeners[t],this._offDirect(e.eventName,e.handler);this._listeners.length=0,this._isDestroyed=!0},r.prototype._log=function(e,t){this._isVerbose&&console.log(e,t)},r.events=o,t.exports=r},{"../braintree-error":31,"./check-origin":32,"./events":33,framebus:16}],35:[function(e,t,n){"use strict";function r(e){return e.className.trim().split(/\s+/)}function i(e){var t=Array.prototype.slice.call(arguments,1),n=r(e).filter(function(e){return-1===t.indexOf(e)}).concat(t).join(" ");e.className=n}function o(e){var t=Array.prototype.slice.call(arguments,1),n=r(e).filter(function(e){return-1===t.indexOf(e)}).join(" ");e.className=n}function s(e,t,n){n?i(e,t):o(e,t)}t.exports={add:i,remove:o,toggle:s}},{}],36:[function(e,t,n){"use strict";var r="3.20.1",i="web";t.exports={ANALYTICS_PREFIX:"web.",ANALYTICS_REQUEST_TIMEOUT_MS:2e3,INTEGRATION_TIMEOUT_MS:6e4,VERSION:r,INTEGRATION:"custom",SOURCE:"client",PLATFORM:i,BRAINTREE_LIBRARY_VERSION:"braintree/"+i+"/"+r}},{}],37:[function(e,t,n){"use strict";var r=e("./braintree-error"),i=e("./errors");t.exports=function(e,t){t.forEach(function(t){e[t]=function(){throw new r({type:i.METHOD_CALLED_AFTER_TEARDOWN.type,code:i.METHOD_CALLED_AFTER_TEARDOWN.code,message:t+" cannot be called after teardown."})}})}},{"./braintree-error":31,"./errors":41}],38:[function(e,t,n){"use strict";function r(e){return/^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e)}function i(e){var t=e.split("_"),n=t[0],r=t.slice(2).join("_");return{merchantId:r,environment:n}}function o(e){var t,n,o={attrs:{},configUrl:""};return r(e)?(n=i(e),o.attrs.tokenizationKey=e,o.configUrl=a[n.environment]+"/merchants/"+n.merchantId+"/client_api/v1/configuration"):(t=JSON.parse(s(e)),o.attrs.authorizationFingerprint=t.authorizationFingerprint,o.configUrl=t.configUrl),o}var s=e("../lib/polyfill").atob,a={production:"https://api.braintreegateway.com:443",sandbox:"https://api.sandbox.braintreegateway.com:443"};t.exports=o},{"../lib/polyfill":47}],39:[function(e,t,n){"use strict";function r(){this._teardownRegistry=[],this._isTearingDown=!1}var i=e("./batch-execute-functions");r.prototype.registerFunctionForTeardown=function(e){"function"==typeof e&&this._teardownRegistry.push(e)},r.prototype.teardown=function(e){return this._isTearingDown?void e(new Error("Destructor is already tearing down")):(this._isTearingDown=!0,void i(this._teardownRegistry,function(t){this._teardownRegistry=[],this._isTearingDown=!1,"function"==typeof e&&e(t)}.bind(this)))},t.exports=r},{"./batch-execute-functions":30}],40:[function(e,t,n){"use strict";function r(e,t){return t=null==t?"":t,e.reduce(function(e,n){return e[n]=t+n,e},{})}t.exports=r},{}],41:[function(e,t,n){"use strict";var r=e("./braintree-error");t.exports={CALLBACK_REQUIRED:{type:r.types.MERCHANT,code:"CALLBACK_REQUIRED"},INSTANTIATION_OPTION_REQUIRED:{type:r.types.MERCHANT,code:"INSTANTIATION_OPTION_REQUIRED"},INVALID_OPTION:{type:r.types.MERCHANT,code:"INVALID_OPTION"},INCOMPATIBLE_VERSIONS:{type:r.types.MERCHANT,code:"INCOMPATIBLE_VERSIONS"},METHOD_CALLED_AFTER_TEARDOWN:{type:r.types.MERCHANT,code:"METHOD_CALLED_AFTER_TEARDOWN"},BRAINTREE_API_ACCESS_RESTRICTED:{type:r.types.MERCHANT,code:"BRAINTREE_API_ACCESS_RESTRICTED",message:"Your access is restricted and cannot use this part of the Braintree API."}}},{"./braintree-error":31}],42:[function(e,t,n){"use strict";function r(){this._events={}}r.prototype.on=function(e,t){this._events[e]?this._events[e].push(t):this._events[e]=[t]},r.prototype._emit=function(e){var t,n,r=this._events[e];if(r)for(n=Array.prototype.slice.call(arguments,1),t=0;t<r.length;t++)r[t].apply(null,n)},t.exports=r},{}],43:[function(e,t,n){"use strict";function r(e){return e.split(".").slice(-2).join(".")}function i(e){var t;return e=e.toLowerCase(),/^https:/.test(e)?(o=o||document.createElement("a"),o.href=e,t=r(o.hostname),s.hasOwnProperty(t)):!1}var o,s={"paypal.com":1,"braintreepayments.com":1,"braintreegateway.com":1,"braintree-api.com":1};t.exports=i},{}],44:[function(e,t,n){"use strict";t.exports=function(e){return JSON.parse(JSON.stringify(e))}},{}],45:[function(e,t,n){"use strict";t.exports=function(e){return Object.keys(e).filter(function(t){return"function"==typeof e[t]})}},{}],46:[function(e,t,n){arguments[4][12][0].apply(n,arguments)},{dup:12}],47:[function(e,t,n){(function(e){"use strict";function n(e){var t,n,r,i,o,s,a,c,u=new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$"),l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",f="";if(!u.test(e))throw new Error("Non base64 encoded input passed to window.atob polyfill");c=0;do i=l.indexOf(e.charAt(c++)),o=l.indexOf(e.charAt(c++)),s=l.indexOf(e.charAt(c++)),a=l.indexOf(e.charAt(c++)),t=(63&i)<<2|o>>4&3,n=(15&o)<<4|s>>2&15,r=(3&s)<<6|63&a,f+=String.fromCharCode(t)+(n?String.fromCharCode(n):"")+(r?String.fromCharCode(r):"");while(c<e.length);return f}var r="function"==typeof e.atob?e.atob:n;t.exports={atob:function(t){return r.call(e,t)},_atob:n}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],48:[function(e,t,n){(function(n){"use strict";var r=n.Promise||e("promise-polyfill");t.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"promise-polyfill":17}],49:[function(e,t,n){"use strict";function r(e){return e?"":".min"}t.exports=r},{}],50:[function(e,t,n){"use strict";function r(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,n="x"===e?t:3&t|8;return n.toString(16)})}t.exports=r},{}]},{},[24])(24)});