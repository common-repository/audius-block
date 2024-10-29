!function(t){var e={};function r(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=11)}([function(t,e){t.exports=window.wp.element},function(t,e){t.exports=window.regeneratorRuntime},function(t,e){function r(t,e,r,n,a,i,o){try{var c=t[i](o),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,a)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var o=t.apply(e,n);function c(t){r(o,a,i,c,s,"next",t)}function s(t){r(o,a,i,c,s,"throw",t)}c(void 0)}))}}},function(t,e,r){var n=r(6),a=r(7),i=r(8),o=r(10);t.exports=function(t,e){return n(t)||a(t,e)||i(t,e)||o()}},function(t,e){t.exports=window.wp.components},function(t,e){t.exports=window.wp.blocks},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,a=!1,i=void 0;try{for(var o,c=t[Symbol.iterator]();!(n=(o=c.next()).done)&&(r.push(o.value),!e||r.length!==e);n=!0);}catch(t){a=!0,i=t}finally{try{n||null==c.return||c.return()}finally{if(a)throw i}}return r}}},function(t,e,r){var n=r(9);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e,r){"use strict";r.r(e);var n=r(1),a=r.n(n),i=r(2),o=r.n(i),c=r(3),s=r.n(c),l=r(0),u=r(5),h=r(4);function f(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||d(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){if(t){if("string"==typeof t)return p(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(t,e):void 0}}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var b=function(){function t(t,e,r,n){if(void 0===t&&(t=""),void 0===e&&(e=0),void 0===r&&(r="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"),void 0===n&&(n="cfhistuCFHISTU"),this.minLength=e,"number"!=typeof e)throw new TypeError("Hashids: Provided 'minLength' has to be a number (is "+typeof e+")");if("string"!=typeof t)throw new TypeError("Hashids: Provided 'salt' has to be a string (is "+typeof t+")");if("string"!=typeof r)throw new TypeError("Hashids: Provided alphabet has to be a string (is "+typeof r+")");var a=Array.from(t),i=Array.from(r),o=Array.from(n);this.salt=a;var c=y(i);if(c.length<m)throw new Error("Hashids: alphabet must contain at least "+m+" unique characters, provided: "+c.join(""));this.alphabet=w(c,o);var s,l,u,h=x(o,c);(this.seps=S(h,a),0===this.seps.length||this.alphabet.length/this.seps.length>g)&&((s=Math.ceil(this.alphabet.length/g))>this.seps.length&&(l=s-this.seps.length,(u=this.seps).push.apply(u,f(this.alphabet.slice(0,l))),this.alphabet=this.alphabet.slice(l)));this.alphabet=S(this.alphabet,a);var d=Math.ceil(this.alphabet.length/v);this.alphabet.length<3?(this.guards=this.seps.slice(0,d),this.seps=this.seps.slice(d)):(this.guards=this.alphabet.slice(0,d),this.alphabet=this.alphabet.slice(d)),this.guardsRegExp=C(this.guards),this.sepsRegExp=C(this.seps),this.allowedCharsRegExp=N([].concat(f(this.alphabet),f(this.guards),f(this.seps)))}var e=t.prototype;return e.encode=function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];var a="";return(r=Array.isArray(t)?t:[].concat(f(null!=t?[t]:[]),f(r))).length?(r.every(j)||(r=r.map((function(t){return"bigint"==typeof t||"number"==typeof t?t:A(String(t))}))),r.every(E)?this._encode(r).join(""):a):a},e.decode=function(t){return t&&"string"==typeof t&&0!==t.length?this._decode(t):[]},e.encodeHex=function(t){switch(typeof t){case"bigint":t=t.toString(16);break;case"string":if(!/^[0-9a-fA-F]+$/.test(t))return"";break;default:throw new Error("Hashids: The provided value is neither a string, nor a BigInt (got: "+typeof t+")")}var e=T(t,12,(function(t){return parseInt("1"+t,16)}));return this.encode(e)},e.decodeHex=function(t){return this.decode(t).map((function(t){return t.toString(16).slice(1)})).join("")},e._encode=function(t){var e=this,r=this.alphabet,n=t.reduce((function(t,e,r){return t+("bigint"==typeof e?Number(e%BigInt(r+100)):e%(r+100))}),0),a=[r[n%r.length]],i=a.slice(),o=this.seps,c=this.guards;if(t.forEach((function(n,c){var s,l=i.concat(e.salt,r);r=S(r,l);var u=O(n,r);if((s=a).push.apply(s,f(u)),c+1<t.length){var h=u[0].codePointAt(0)+c,d="bigint"==typeof n?Number(n%BigInt(h)):n%h;a.push(o[d%o.length])}})),a.length<this.minLength){var s=(n+a[0].codePointAt(0))%c.length;if(a.unshift(c[s]),a.length<this.minLength){var l=(n+a[2].codePointAt(0))%c.length;a.push(c[l])}}for(var u=Math.floor(r.length/2);a.length<this.minLength;){var h,d;r=S(r,r),(h=a).unshift.apply(h,f(r.slice(u))),(d=a).push.apply(d,f(r.slice(0,u)));var p=a.length-this.minLength;if(p>0){var b=p/2;a=a.slice(b,b+this.minLength)}}return a},e.isValidId=function(t){return this.allowedCharsRegExp.test(t)},e._decode=function(t){if(!this.isValidId(t))throw new Error("The provided ID ("+t+") is invalid, as it contains characters that do not exist in the alphabet ("+this.guards.join("")+this.seps.join("")+this.alphabet.join("")+")");var e=t.split(this.guardsRegExp),r=e[3===e.length||2===e.length?1:0];if(0===r.length)return[];for(var n,a=r[Symbol.iterator]().next().value,i=r.slice(a.length).split(this.sepsRegExp),o=this.alphabet,c=[],s=function(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=d(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=t[Symbol.iterator]()).next.bind(r)}(i);!(n=s()).done;){var l=n.value,u=S(o,[a].concat(f(this.salt),f(o)).slice(0,o.length));c.push(k(Array.from(l),u)),o=u}return this._encode(c).join("")!==t?[]:c},t}(),m=16,g=3.5,v=12,y=function(t){return Array.from(new Set(t))},w=function(t,e){return t.filter((function(t){return!e.includes(t)}))},x=function(t,e){return t.filter((function(t){return e.includes(t)}))},j=function(t){return"bigint"==typeof t||!Number.isNaN(Number(t))&&Math.floor(Number(t))===t},E=function(t){return"bigint"==typeof t||t>=0&&Number.isSafeInteger(t)};function S(t,e){if(0===e.length)return t;for(var r,n=t.slice(),a=n.length-1,i=0,o=0;a>0;a--,i++){o+=r=e[i%=e.length].codePointAt(0);var c=(r+i+o)%a,s=n[a],l=n[c];n[c]=s,n[a]=l}return n}var O=function(t,e){var r=[];if("bigint"==typeof t){var n=BigInt(e.length);do{r.unshift(e[Number(t%n)]),t/=n}while(t>BigInt(0))}else do{r.unshift(e[t%e.length]),t=Math.floor(t/e.length)}while(t>0);return r},k=function(t,e){return t.reduce((function(r,n){var a=e.indexOf(n);if(-1===a)throw new Error("The provided ID ("+t.join("")+") is invalid, as it contains characters that do not exist in the alphabet ("+e.join("")+")");if("bigint"==typeof r)return r*BigInt(e.length)+BigInt(a);var i=r*e.length+a;if(Number.isSafeInteger(i))return i;if("function"==typeof BigInt)return BigInt(r)*BigInt(e.length)+BigInt(a);throw new Error("Unable to decode the provided string, due to lack of support for BigInt numbers in the current environment")}),0)},I=/^\+?[0-9]+$/,A=function(t){return I.test(t)?parseInt(t,10):NaN},T=function(t,e,r){return Array.from({length:Math.ceil(t.length/e)},(function(n,a){return r(t.slice(a*e,(a+1)*e))}))},C=function(t){return new RegExp(t.map((function(t){return B(t)})).sort((function(t,e){return e.length-t.length})).join("|"))},N=function(t){return new RegExp("^["+t.map((function(t){return B(t)})).sort((function(t,e){return e.length-t.length})).join("")+"]+$")},B=function(t){return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},M=new b("azowernasdfoia",5),U=function(t){try{var e=M.decode(t);if(!e.length)return null;var r=Number(e[0]);return isNaN(r)?null:r}catch(e){return console.error("Failed to decode ".concat(t),e),null}},P="";fetch("https://api.audius.co",{method:"GET"}).then((function(t){t.json().then((function(t){P=t.data[0]}))}));var z={backgroundColor:"#fff",color:"#858199",padding:"1.2em",borderRadius:"8px",boxShadow:"0 2px 5px -2px rgba(133,129,153,.25)"},_={width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"4px"};Object(u.registerBlockType)("audius/embed-block",{title:"Audius",icon:"format-audio",attributes:{iframeUrl:{type:"string",source:"attribute",selector:"iframe",attribute:"src"},trackEmbedStyle:{type:"string",source:"attribute",selector:"iframe",attribute:"data-style"},trackId:{type:"string",source:"attribute",selector:"iframe",attribute:"data-track"},trackOwnerId:{type:"string",source:"attribute",selector:"iframe",attribute:"data-owner"}},category:"embed",edit:function(t){var e=t.attributes,r=t.setAttributes,n=Object(l.useState)([]),i=s()(n,2),c=(i[0],i[1]),u=Object(l.useState)([]),f=s()(u,2),d=(f[0],f[1],Object(l.useState)("")),p=s()(d,2),b=p[0],m=p[1],g=Object(l.useState)("url"),v=s()(g,2),y=v[0],w=(v[1],"400");"compact"==e.trackEmbedStyle?w="120":"card"==e.trackEmbedStyle?w="400":"tiny"==e.trackEmbedStyle&&(w="20");var x=function(){return e.iframeUrl&&"string"==typeof e.iframeUrl&&e.iframeUrl.includes("https://audius.co/embed/track?")},j=function(){var t=o()(a.a.mark((function t(n){var i,o,c,s,l,u,h,f;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!((i=n.match(/\d+$/)).length>0)){t.next=17;break}return o=i[0],m(n),r({trackId:o}),c="".concat(P,"/v1/resolve?url=").concat(n,"&app_name=Wordpress"),t.next=8,fetch(c,{method:"GET"});case 8:return s=t.sent,t.next=11,s.json();case 11:l=t.sent.data,u=U(l.user.id),r({trackOwnerId:u}),h=e.trackEmbedStyle||"card",f="https://audius.co/embed/track?id=".concat(o,"&ownerId=").concat(u,"&flavor=").concat(h),r({iframeUrl:f});case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),E=function(){var t=o()(a.a.mark((function t(n){var i,o,c,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r({trackEmbedStyle:n}),i=e.trackId,o=e.trackOwnerId,b&&i&&o?(c="https://audius.co/embed/track?id=".concat(i,"&ownerId=").concat(o,"&flavor=").concat(n),r({iframeUrl:c})):x()&&(s="https://audius.co/embed/track?id=".concat(i,"&ownerId=").concat(o,"&flavor=").concat(n),r({iframeUrl:s}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),S=function(){var t=o()(a.a.mark((function t(e){var r,n,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(P,"/v1/tracks/search?query=").concat(e,"&app_name=Wordpress"),t.next=3,fetch(r,{method:"GET"});case 3:return n=t.sent,t.next=6,n.json();case 6:i=t.sent.data.slice(0,10),c([].concat(i));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(l.createElement)("div",{className:"audius-block"},Object(l.createElement)("div",{style:z},Object(l.createElement)("div",{style:_},Object(l.createElement)("svg",{width:"140",height:"52",viewBox:"0 0 93 24"},Object(l.createElement)("g",{fill:"none",fillRule:"evenodd",stroke:"none",strokeWidth:"1"},Object(l.createElement)("g",{fill:"#7e1bcc",transform:"translate(-35 -16)"},Object(l.createElement)("g",{transform:"translate(32 16)"},Object(l.createElement)("path",{d:"M88.522 14.969l1.313-1.55c.839.661 1.775 1.01 2.76 1.01.632 0 .972-.217.972-.577v-.024c0-.348-.28-.54-1.434-.805-1.812-.408-3.21-.912-3.21-2.641v-.024c0-1.561 1.252-2.69 3.295-2.69 1.447 0 2.577.385 3.501 1.117l-1.18 1.645c-.777-.54-1.628-.829-2.382-.829-.571 0-.851.24-.851.54v.025c0 .384.292.552 1.471.816 1.957.42 3.173 1.045 3.173 2.618v.024c0 1.717-1.374 2.737-3.44 2.737-1.508 0-2.942-.468-3.988-1.392zM76.879 12.53V7.812h2.395v4.671c0 1.213.62 1.79 1.568 1.79.948 0 1.568-.553 1.568-1.73v-4.73h2.395v4.658c0 2.714-1.568 3.902-3.987 3.902-2.42 0-3.94-1.212-3.94-3.842zm-6.88 3.686V7.812h2.37v8.405h-2.37zm-8.971-2.065c1.41 0 2.346-.768 2.346-2.125v-.024c0-1.345-.936-2.125-2.346-2.125h-.96v4.274h.96zm-3.319-6.34h3.283c3.039 0 4.802 1.73 4.802 4.155v.024c0 2.425-1.787 4.226-4.851 4.226h-3.234V7.812zm-12.425 4.72v-4.72h2.395v4.671c0 1.213.62 1.79 1.568 1.79.948 0 1.569-.553 1.569-1.73v-4.73h2.395v4.658c0 2.714-1.569 3.902-3.988 3.902-2.42 0-3.939-1.212-3.939-3.842zm-7.043.371l-.949-2.39-.96 2.39h1.909zm-2.067-5.15h2.273l3.623 8.464h-2.528l-.62-1.5h-3.283l-.608 1.5h-2.48l3.623-8.465zM27.66 23.01a.653.653 0 01-.573.98l-6.62-.005-6.606-.005-5.298-.003a.653.653 0 01-.572-.98l2.559-4.37a.663.663 0 01.572-.326l6.012.004a.655.655 0 00.573-.979l-.509-.873-2.756-4.721a.666.666 0 00-1.145 0l-.406.693-2.656 4.537a.663.663 0 01-.573.326l-5.11-.004a.653.653 0 01-.573-.98l2.705-4.62L13.303.378a.665.665 0 011.146 0l3.507 6.01 3.098 5.307 6.605 11.316z"}))))),x()&&Object(l.createElement)("div",{style:{display:"flex",alignItems:"center",cursor:"pointer"},onClick:function(){r({iframeUrl:null})}},Object(l.createElement)("svg",{fill:"#858199",xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18"},Object(l.createElement)("path",{d:"M9 13.5c-2.49 0-4.5-2.01-4.5-4.5S6.51 4.5 9 4.5c1.24 0 2.36.52 3.17 1.33L10 8h5V3l-1.76 1.76C12.15 3.68 10.66 3 9 3 5.69 3 3.01 5.69 3.01 9S5.69 15 9 15c2.97 0 5.43-2.16 5.9-5h-1.52c-.46 2-2.24 3.5-4.38 3.5z"})),Object(l.createElement)("p",{className:"dfont",style:{margin:"0px",marginLeft:"3px",fontSize:"14px"}},"Start Over"))),"url"==y&&!x()&&Object(l.createElement)("div",null,Object(l.createElement)(h.TextControl,{type:"text",label:"Paste A Track Url",value:b,onChange:j})),"search"==y&&!x()&&Object(l.createElement)("div",null,Object(l.createElement)(h.TextControl,{type:"text",label:"Search Audius",value:e.searchQuery,onChange:S})),Object(l.createElement)("div",null,Object(l.createElement)(h.SelectControl,{style:{display:"flex"},label:"Embed Style",value:e.trackEmbedStyle,options:[{label:"Card",value:"card"},{label:"Compact",value:"compact"},{label:"Tiny",value:"tiny"}],onChange:E}),e.iframeUrl&&Object(l.createElement)("div",null,Object(l.createElement)("iframe",{src:e.iframeUrl,height:w,width:"100%",allow:"encrypted-media"})))))},save:function(t){var e=t.attributes,r=e.iframeUrl,n=e.trackId,a=e.trackOwnerId,i="120";return"compact"==e.trackEmbedStyle?i="120":"card"==e.trackEmbedStyle?i="400":"tiny"==e.trackEmbedStyle&&(i="20"),Object(l.createElement)("div",null,Object(l.createElement)("iframe",{"data-style":e.trackEmbedStyle,"data-track":n,"data-owner":a,src:r,height:i,width:"100%",allow:"encrypted-media"}))}})}]);