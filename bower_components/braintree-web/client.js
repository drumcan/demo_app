!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,(t.braintree||(t.braintree={})).client=e()}}(function(){return function e(t,n,r){function o(a,s){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(i)return i(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var f=n[a]={exports:{}};t[a][0].call(f.exports,function(e){var n=t[a][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){(function(n){"use strict";var r=e("./is-ie11");t.exports=function(e){return e=e||n.navigator.userAgent,-1!==e.indexOf("MSIE")||r(e)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./is-ie11":2}],2:[function(e,t,n){"use strict";t.exports=function(e){return e=e||navigator.userAgent,-1!==e.indexOf("Trident/7")}},{}],3:[function(e,t,n){"use strict";function r(e){return function(){var t=arguments;setTimeout(function(){e.apply(null,t)},1)}}t.exports=r},{}],4:[function(e,t,n){"use strict";function r(e){var t=!1;return function(){t||(t=!0,e.apply(null,arguments))}}t.exports=r},{}],5:[function(e,t,n){"use strict";function r(e,t){return t?void e.then(function(e){t(null,e)})["catch"](function(e){t(e)}):e}t.exports=r},{}],6:[function(e,t,n){"use strict";function r(e){return function(){var t,n=Array.prototype.slice.call(arguments),r=n[n.length-1];return"function"==typeof r&&(t=n.pop(),t=i(o(t))),a(e.apply(this,n),t)}}var o=e("./lib/deferred"),i=e("./lib/once"),a=e("./lib/promise-or-callback");r.wrapPrototype=function(e,t){var n,o,i;return t=t||{},o=t.ignoreMethods||[],i=t.transformPrivateMethods===!0,n=Object.getOwnPropertyNames(e.prototype).filter(function(t){var n,r="constructor"!==t&&"function"==typeof e.prototype[t],a=-1===o.indexOf(t);return n=i?!0:"_"!==t.charAt(0),r&&n&&a}),n.forEach(function(t){var n=e.prototype[t];e.prototype[t]=r(n)}),e},t.exports=r},{"./lib/deferred":3,"./lib/once":4,"./lib/promise-or-callback":5}],7:[function(e,t,n){!function(e){function n(){}function r(e,t){return function(){e.apply(t,arguments)}}function o(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(e,this)}function i(e,t){for(;3===e._state;)e=e._value;return 0===e._state?void e._deferreds.push(t):(e._handled=!0,void o._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null===n)return void(1===e._state?a:s)(t.promise,e._value);var r;try{r=n(e._value)}catch(o){return void s(t.promise,o)}a(t.promise,r)}))}function a(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof o)return e._state=3,e._value=t,void u(e);if("function"==typeof n)return void f(r(n,t),e)}e._state=1,e._value=t,u(e)}catch(i){s(e,i)}}function s(e,t){e._state=2,e._value=t,u(e)}function u(e){2===e._state&&0===e._deferreds.length&&o._immediateFn(function(){e._handled||o._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;n>t;t++)i(e,e._deferreds[t]);e._deferreds=null}function c(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function f(e,t){var n=!1;try{e(function(e){n||(n=!0,a(t,e))},function(e){n||(n=!0,s(t,e))})}catch(r){if(n)return;n=!0,s(t,r)}}var l=setTimeout;o.prototype["catch"]=function(e){return this.then(null,e)},o.prototype.then=function(e,t){var r=new this.constructor(n);return i(this,new c(e,t,r)),r},o.all=function(e){var t=Array.prototype.slice.call(e);return new o(function(e,n){function r(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(e){r(i,e)},n)}t[i]=a,0===--o&&e(t)}catch(u){n(u)}}if(0===t.length)return e([]);for(var o=t.length,i=0;i<t.length;i++)r(i,t[i])})},o.resolve=function(e){return e&&"object"==typeof e&&e.constructor===o?e:new o(function(t){t(e)})},o.reject=function(e){return new o(function(t,n){n(e)})},o.race=function(e){return new o(function(t,n){for(var r=0,o=e.length;o>r;r++)e[r].then(t,n)})},o._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){l(e,0)},o._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},o._setImmediateFn=function(e){o._immediateFn=e},o._setUnhandledRejectionFn=function(e){o._unhandledRejectionFn=e},"undefined"!=typeof t&&t.exports?t.exports=o:e.Promise||(e.Promise=o)}(this)},{}],8:[function(e,t,n){"use strict";var r=e("@braintree/browser-detection/is-ie");t.exports={isIe:r}},{"@braintree/browser-detection/is-ie":1}],9:[function(e,t,n){"use strict";function r(e){var t,n,r;if(e=e||{},t=JSON.stringify(e),n=e.gatewayConfiguration,!n)throw new s(E.CLIENT_MISSING_GATEWAY_CONFIGURATION);if(["assetsUrl","clientApiUrl","configUrl"].forEach(function(e){if(e in n&&!a(n[e]))throw new s({type:E.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.type,code:E.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.code,message:e+" property is on an invalid domain."})}),this.getConfiguration=function(){return JSON.parse(t)},this._request=i,this._configuration=this.getConfiguration(),this._clientApiBaseUrl=n.clientApiUrl+"/v1/",r=n.braintreeApi,r&&(this._braintreeApi={baseUrl:r.url+"/",accessToken:r.accessToken},!a(this._braintreeApi.baseUrl)))throw new s({type:E.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.type,code:E.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.code,message:"braintreeApi URL is on an invalid domain."})}function o(e,t){var n;return-1===e?n=new s(E.CLIENT_REQUEST_TIMEOUT):403===e?n=new s(E.CLIENT_AUTHORIZATION_INSUFFICIENT):429===e?n=new s(E.CLIENT_RATE_LIMITED):e>=500?n=new s(E.CLIENT_GATEWAY_NETWORK):(200>e||e>=400)&&(n=u(t,{type:E.CLIENT_REQUEST_ERROR.type,code:E.CLIENT_REQUEST_ERROR.code,message:E.CLIENT_REQUEST_ERROR.message})),n?(n.details=n.details||{},n.details.httpStatus=e,n):void 0}var i=e("./request"),a=e("../lib/is-whitelisted-domain"),s=e("../lib/braintree-error"),u=e("../lib/convert-to-braintree-error"),c=e("../lib/add-metadata"),f=e("../lib/promise"),l=e("../lib/once"),p=e("../lib/deferred"),d=e("../lib/assign").assign,I=e("./constants"),E=e("./errors"),y=e("../lib/errors"),T=e("../lib/constants").VERSION;r.prototype.request=function(e,t){var n=this,r=new f(function(t,r){var i,a,u,f;if(e.method?e.endpoint||(i="options.endpoint"):i="options.method",i)throw new s({type:E.CLIENT_OPTION_REQUIRED.type,code:E.CLIENT_OPTION_REQUIRED.code,message:i+" is required when making a request."});if(a="api"in e?e.api:"clientApi",f={method:e.method,timeout:e.timeout},"clientApi"===a)u=n._clientApiBaseUrl,f.data=c(n._configuration,e.data);else{if("braintreeApi"!==a)throw new s({type:E.CLIENT_OPTION_INVALID.type,code:E.CLIENT_OPTION_INVALID.code,message:"options.api is invalid."});if(!n._braintreeApi)throw new s(y.BRAINTREE_API_ACCESS_RESTRICTED);u=n._braintreeApi.baseUrl,f.data=e.data,f.headers={"Braintree-Version":I.BRAINTREE_API_VERSION_HEADER,Authorization:"Bearer "+n._braintreeApi.accessToken}}f.url=u+e.endpoint,n._request(f,function(e,n,i){var a,s;return(s=o(i,e))?void r(s):(a=d({_httpStatus:i},n),void t(a))})});return"function"==typeof t?(t=l(p(t)),void r.then(function(e){t(null,e,e._httpStatus)})["catch"](function(e){var n=e&&e.details&&e.details.httpStatus;t(e,null,n)})):r},r.prototype.toJSON=function(){return this.getConfiguration()},r.prototype.getVersion=function(){return T},t.exports=r},{"../lib/add-metadata":21,"../lib/assign":22,"../lib/braintree-error":23,"../lib/constants":24,"../lib/convert-to-braintree-error":25,"../lib/deferred":27,"../lib/errors":29,"../lib/is-whitelisted-domain":30,"../lib/once":32,"../lib/promise":34,"./constants":10,"./errors":11,"./request":16}],10:[function(e,t,n){"use strict";t.exports={BRAINTREE_API_VERSION_HEADER:"2017-04-03"}},{}],11:[function(e,t,n){"use strict";var r=e("../lib/braintree-error");t.exports={CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN:{type:r.types.MERCHANT,code:"CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN"},CLIENT_OPTION_REQUIRED:{type:r.types.MERCHANT,code:"CLIENT_OPTION_REQUIRED"},CLIENT_OPTION_INVALID:{type:r.types.MERCHANT,code:"CLIENT_OPTION_INVALID"},CLIENT_MISSING_GATEWAY_CONFIGURATION:{type:r.types.INTERNAL,code:"CLIENT_MISSING_GATEWAY_CONFIGURATION",message:"Missing gatewayConfiguration."},CLIENT_INVALID_AUTHORIZATION:{type:r.types.MERCHANT,code:"CLIENT_INVALID_AUTHORIZATION",message:"Authorization is invalid. Make sure your client token or tokenization key is valid."},CLIENT_GATEWAY_NETWORK:{type:r.types.NETWORK,code:"CLIENT_GATEWAY_NETWORK",message:"Cannot contact the gateway at this time."},CLIENT_REQUEST_TIMEOUT:{type:r.types.NETWORK,code:"CLIENT_REQUEST_TIMEOUT",message:"Request timed out waiting for a reply."},CLIENT_REQUEST_ERROR:{type:r.types.NETWORK,code:"CLIENT_REQUEST_ERROR",message:"There was a problem with your request."},CLIENT_RATE_LIMITED:{type:r.types.MERCHANT,code:"CLIENT_RATE_LIMITED",message:"You are being rate-limited; please try again in a few minutes."},CLIENT_AUTHORIZATION_INSUFFICIENT:{type:r.types.MERCHANT,code:"CLIENT_AUTHORIZATION_INSUFFICIENT",message:"The authorization used has insufficient privileges."}}},{"../lib/braintree-error":23}],12:[function(e,t,n){(function(n){"use strict";function r(e){return new i(function(t,r){var i,a,p,d,I=u(),E={merchantAppId:n.location.host,platform:c.PLATFORM,sdkVersion:c.VERSION,source:c.SOURCE,integration:c.INTEGRATION,integrationType:c.INTEGRATION,sessionId:I};try{a=f(e.authorization)}catch(y){return void r(new o(l.CLIENT_INVALID_AUTHORIZATION))}p=a.attrs,d=a.configUrl,p._meta=E,p.braintreeLibraryVersion=c.BRAINTREE_LIBRARY_VERSION,p.configVersion="3",s({url:d,method:"GET",data:p},function(n,a,s){var u;return n?(u=403===s?l.CLIENT_AUTHORIZATION_INSUFFICIENT:l.CLIENT_GATEWAY_NETWORK,void r(new o({type:u.type,code:u.code,message:u.message,details:{originalError:n}}))):(i={authorization:e.authorization,authorizationType:p.tokenizationKey?"TOKENIZATION_KEY":"CLIENT_TOKEN",analyticsMetadata:E,gatewayConfiguration:a},void t(i))})})}var o=e("../lib/braintree-error"),i=e("../lib/promise"),a=e("@braintree/wrap-promise"),s=e("./request"),u=e("../lib/uuid"),c=e("../lib/constants"),f=e("../lib/create-authorization-data"),l=e("./errors");t.exports={getConfiguration:a(r)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../lib/braintree-error":23,"../lib/constants":24,"../lib/create-authorization-data":26,"../lib/promise":34,"../lib/uuid":36,"./errors":11,"./request":16,"@braintree/wrap-promise":6}],13:[function(e,t,n){"use strict";function r(e){return e.authorization?p[e.authorization]?c.resolve(p[e.authorization]):s(e).then(function(t){var n;return e.debug&&(t.isDebug=!0),n=new a(t),p[e.authorization]=n,n}):c.reject(new i({type:l.INSTANTIATION_OPTION_REQUIRED.type,code:l.INSTANTIATION_OPTION_REQUIRED.code,message:"options.authorization is required when instantiating a client."}))}function o(){p={}}var i=e("../lib/braintree-error"),a=e("./client"),s=e("./get-configuration").getConfiguration,u="3.25.0",c=e("../lib/promise"),f=e("@braintree/wrap-promise"),l=e("../lib/errors"),p={};t.exports={create:f(r),VERSION:u,_clearCache:o}},{"../lib/braintree-error":23,"../lib/errors":29,"../lib/promise":34,"./client":9,"./get-configuration":12,"@braintree/wrap-promise":6}],14:[function(e,t,n){(function(n){"use strict";function r(){return p?new XMLHttpRequest:new XDomainRequest}function o(e){return(!e||e===I)&&u.isIe()}function i(e,t,n){var a,u,I=e.method,E=e.url,y=e.data,T=e.timeout,_=c({"Content-Type":"application/json"},e.headers),N=r(),h=n;"GET"===I&&(E=s.queryify(E,y),y=null),p?N.onreadystatechange=function(){if(4===N.readyState)if(a=N.status,u=l(N.responseText),a>=400||200>a){if(d>t&&o(a))return t++,void i(e,t,n);h(u||"error",null,a||500)}else h(null,u,a)}:(e.headers&&(E=s.queryify(E,_)),N.onload=function(){h(null,l(N.responseText),N.status)},N.onerror=function(){h("error",null,500)},N.onprogress=function(){},N.ontimeout=function(){h("timeout",null,-1)}),N.open(I,E,!0),N.timeout=T,p&&Object.keys(_).forEach(function(e){N.setRequestHeader(e,_[e])});try{N.send(f(I,y))}catch(A){}}function a(e,t){i(e,0,t)}var s=e("../../lib/querystring"),u=e("../browser-detection"),c=e("../../lib/assign").assign,f=e("./prep-body"),l=e("./parse-body"),p=n.XMLHttpRequest&&"withCredentials"in new n.XMLHttpRequest,d=1,I=408;t.exports={request:a}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../lib/assign":22,"../../lib/querystring":35,"../browser-detection":8,"./parse-body":19,"./prep-body":20}],15:[function(e,t,n){(function(e){"use strict";t.exports=function(){return e.navigator.userAgent}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],16:[function(e,t,n){"use strict";function r(){return null==o&&(o=!(c()&&/MSIE\s(8|9)/.test(u()))),o}var o,i=e("../../lib/once"),a=e("./jsonp-driver"),s=e("./ajax-driver"),u=e("./get-user-agent"),c=e("./is-http");t.exports=function(e,t){t=i(t||Function.prototype),e.method=(e.method||"GET").toUpperCase(),e.timeout=null==e.timeout?6e4:e.timeout,e.data=e.data||{},r()?s.request(e,t):a.request(e,t)}},{"../../lib/once":32,"./ajax-driver":14,"./get-user-agent":15,"./is-http":17,"./jsonp-driver":18}],17:[function(e,t,n){(function(e){"use strict";t.exports=function(){return"http:"===e.location.protocol}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],18:[function(e,t,n){(function(n){"use strict";function r(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function o(e,t){var r=document.createElement("script"),o=!1;return r.src=e,r.async=!0,r.onerror=function(){n[t]({message:"error",status:500})},r.onload=r.onreadystatechange=function(){o||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(o=!0,r.onload=r.onreadystatechange=null)},r}function i(e){try{delete n[e]}catch(t){n[e]=null}}function a(e,t){p[t]=setTimeout(function(){p[t]=null,n[t]({error:"timeout",status:-1}),n[t]=function(){i(t)}},e)}function s(e,t,o){n[o]=function(n){var a=n.status||500,s=null,u=null;delete n.status,a>=400||200>a?s=n:u=n,i(o),r(e),clearTimeout(p[o]),t(s,u,a)}}function u(e,t){var n,r="callback_json_"+f().replace(/-/g,""),i=e.url,u=e.data,p=e.method,d=e.timeout;i=l.queryify(i,u),i=l.queryify(i,{_method:p,callback:r}),n=o(i,r),s(n,t,r),a(d,r),c||(c=document.getElementsByTagName("head")[0]),c.appendChild(n)}var c,f=e("../../lib/uuid"),l=e("../../lib/querystring"),p={};t.exports={request:u}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../lib/querystring":35,"../../lib/uuid":36}],19:[function(e,t,n){"use strict";t.exports=function(e){try{e=JSON.parse(e)}catch(t){}return e}},{}],20:[function(e,t,n){"use strict";t.exports=function(e,t){if("string"!=typeof e)throw new Error("Method must be a string");return"get"!==e.toLowerCase()&&null!=t&&(t="string"==typeof t?t:JSON.stringify(t)),t}},{}],21:[function(e,t,n){"use strict";function r(e,t){var n,r=t?i(t):{},s=o(e.authorization).attrs,u=i(e.analyticsMetadata);r.braintreeLibraryVersion=a.BRAINTREE_LIBRARY_VERSION;for(n in r._meta)r._meta.hasOwnProperty(n)&&(u[n]=r._meta[n]);return r._meta=u,s.tokenizationKey?r.tokenizationKey=s.tokenizationKey:r.authorizationFingerprint=s.authorizationFingerprint,r}var o=e("./create-authorization-data"),i=e("./json-clone"),a=e("./constants");t.exports=r},{"./constants":24,"./create-authorization-data":26,"./json-clone":31}],22:[function(e,t,n){"use strict";function r(e){var t,n,r;for(t=1;t<arguments.length;t++){n=arguments[t];for(r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}return e}var o="function"==typeof Object.assign?Object.assign:r;t.exports={assign:o,_assign:r}},{}],23:[function(e,t,n){"use strict";function r(e){if(!r.types.hasOwnProperty(e.type))throw new Error(e.type+" is not a valid type.");if(!e.code)throw new Error("Error code required.");if(!e.message)throw new Error("Error message required.");this.name="BraintreeError",this.code=e.code,this.message=e.message,this.type=e.type,this.details=e.details}var o=e("./enumerate");r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r.types=o(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),r.findRootError=function(e){return e instanceof r&&e.details&&e.details.originalError?r.findRootError(e.details.originalError):e},t.exports=r},{"./enumerate":28}],24:[function(e,t,n){"use strict";var r="3.25.0",o="web";t.exports={ANALYTICS_PREFIX:"web.",ANALYTICS_REQUEST_TIMEOUT_MS:2e3,INTEGRATION_TIMEOUT_MS:6e4,VERSION:r,INTEGRATION:"custom",SOURCE:"client",PLATFORM:o,BRAINTREE_LIBRARY_VERSION:"braintree/"+o+"/"+r}},{}],25:[function(e,t,n){"use strict";function r(e,t){return e instanceof o?e:new o({type:t.type,code:t.code,message:t.message,details:{originalError:e}})}var o=e("./braintree-error");t.exports=r},{"./braintree-error":23}],26:[function(e,t,n){"use strict";function r(e){return/^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e)}function o(e){var t=e.split("_"),n=t[0],r=t.slice(2).join("_");return{merchantId:r,environment:n}}function i(e){var t,n,i={attrs:{},configUrl:""};return r(e)?(n=o(e),i.attrs.tokenizationKey=e,i.configUrl=s[n.environment]+"/merchants/"+n.merchantId+"/client_api/v1/configuration"):(t=JSON.parse(a(e)),i.attrs.authorizationFingerprint=t.authorizationFingerprint,i.configUrl=t.configUrl),i}var a=e("../lib/polyfill").atob,s={production:"https://api.braintreegateway.com:443",sandbox:"https://api.sandbox.braintreegateway.com:443"};t.exports=i},{"../lib/polyfill":33}],27:[function(e,t,n){"use strict";t.exports=function(e){return function(){var t=arguments;setTimeout(function(){e.apply(null,t)},1)}}},{}],28:[function(e,t,n){"use strict";function r(e,t){return t=null==t?"":t,e.reduce(function(e,n){return e[n]=t+n,e},{})}t.exports=r},{}],29:[function(e,t,n){"use strict";var r=e("./braintree-error");t.exports={INVALID_USE_OF_INTERNAL_FUNCTION:{type:r.types.INTERNAL,code:"INVALID_USE_OF_INTERNAL_FUNCTION"},CALLBACK_REQUIRED:{type:r.types.MERCHANT,code:"CALLBACK_REQUIRED"},INSTANTIATION_OPTION_REQUIRED:{type:r.types.MERCHANT,code:"INSTANTIATION_OPTION_REQUIRED"},INVALID_OPTION:{type:r.types.MERCHANT,code:"INVALID_OPTION"},INCOMPATIBLE_VERSIONS:{type:r.types.MERCHANT,code:"INCOMPATIBLE_VERSIONS"},METHOD_CALLED_AFTER_TEARDOWN:{type:r.types.MERCHANT,code:"METHOD_CALLED_AFTER_TEARDOWN"},BRAINTREE_API_ACCESS_RESTRICTED:{type:r.types.MERCHANT,code:"BRAINTREE_API_ACCESS_RESTRICTED",message:"Your access is restricted and cannot use this part of the Braintree API."}}},{"./braintree-error":23}],30:[function(e,t,n){"use strict";function r(e){return e.split(".").slice(-2).join(".")}function o(e){var t;return e=e.toLowerCase(),/^https:/.test(e)?(i=i||document.createElement("a"),i.href=e,t=r(i.hostname),a.hasOwnProperty(t)):!1}var i,a={"paypal.com":1,"braintreepayments.com":1,"braintreegateway.com":1,"braintree-api.com":1};t.exports=o},{}],31:[function(e,t,n){"use strict";t.exports=function(e){return JSON.parse(JSON.stringify(e))}},{}],32:[function(e,t,n){arguments[4][4][0].apply(n,arguments)},{dup:4}],33:[function(e,t,n){(function(e){"use strict";function n(e){var t,n,r,o,i,a,s,u,c=new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$"),f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",l="";if(!c.test(e))throw new Error("Non base64 encoded input passed to window.atob polyfill");u=0;do o=f.indexOf(e.charAt(u++)),i=f.indexOf(e.charAt(u++)),a=f.indexOf(e.charAt(u++)),s=f.indexOf(e.charAt(u++)),t=(63&o)<<2|i>>4&3,n=(15&i)<<4|a>>2&15,r=(3&a)<<6|63&s,l+=String.fromCharCode(t)+(n?String.fromCharCode(n):"")+(r?String.fromCharCode(r):"");while(u<e.length);return l}var r="function"==typeof e.atob?e.atob:n;t.exports={atob:function(t){return r.call(e,t)},_atob:n}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],34:[function(e,t,n){(function(n){"use strict";var r=n.Promise||e("promise-polyfill");t.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"promise-polyfill":7}],35:[function(e,t,n){(function(e){"use strict";function n(e){var t;for(t in e)if(e.hasOwnProperty(t))return!0;return!1}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&"[object Array]"===Object.prototype.toString.call(e)||!1}function o(t){var n,r;return t=t||e.location.href,/\?/.test(t)?(n=t.replace(/#.*$/,"").replace(/^.*\?/,"").split("&"),r=n.reduce(function(e,t){var n=t.split("="),r=decodeURIComponent(n[0]),o=decodeURIComponent(n[1]);return e[r]=o,e},{})):{}}function i(e,t){var n,o,a,s=[];for(a in e)e.hasOwnProperty(a)&&(o=e[a],n=t?r(e)?t+"[]":t+"["+a+"]":a,"object"==typeof o?s.push(i(o,n)):s.push(encodeURIComponent(n)+"="+encodeURIComponent(o)));return s.join("&")}function a(e,t){return e=e||"",null!=t&&"object"==typeof t&&n(t)&&(e+=-1===e.indexOf("?")?"?":"",e+=-1!==e.indexOf("=")?"&":"",e+=i(t)),e}t.exports={parse:o,stringify:i,queryify:a}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],36:[function(e,t,n){"use strict";function r(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,n="x"===e?t:3&t|8;return n.toString(16)})}t.exports=r},{}]},{},[13])(13)});