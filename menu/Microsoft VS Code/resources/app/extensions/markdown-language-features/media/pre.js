!function(e){var t={};function n(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(o,s,function(t){return e[t]}.bind(null,s));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getSettings=t.getData=void 0;let o=void 0;function s(e){const t=document.getElementById("vscode-markdown-preview-data");if(t){const n=t.getAttribute(e);if(n)return JSON.parse(n)}throw new Error("Could not load data for "+e)}t.getData=s,t.getSettings=function(){if(o)return o;if(o=s("data-settings"),o)return o;throw new Error("Could not load settings")}},,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(12),s=n(14);window.cspAlerter=new o.CspAlerter,window.styleLoadingMonitor=new s.StyleLoadingMonitor},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CspAlerter=void 0;const o=n(0),s=n(13);t.CspAlerter=class{constructor(){this.didShow=!1,this.didHaveCspWarning=!1,document.addEventListener("securitypolicyviolation",()=>{this.onCspWarning()}),window.addEventListener("message",e=>{e&&e.data&&"vscode-did-block-svg"===e.data.name&&this.onCspWarning()})}setPoster(e){this.messaging=e,this.didHaveCspWarning&&this.showCspWarning()}onCspWarning(){this.didHaveCspWarning=!0,this.showCspWarning()}showCspWarning(){const e=(0,s.getStrings)(),t=(0,o.getSettings)();if(this.didShow||t.disableSecurityWarnings||!this.messaging)return;this.didShow=!0;const n=document.createElement("a");n.innerText=e.cspAlertMessageText,n.setAttribute("id","code-csp-warning"),n.setAttribute("title",e.cspAlertMessageTitle),n.setAttribute("role","button"),n.setAttribute("aria-label",e.cspAlertMessageLabel),n.onclick=()=>{this.messaging.postMessage("showPreviewSecuritySelector",{source:t.source})},document.body.appendChild(n)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getStrings=void 0,t.getStrings=function(){const e=document.getElementById("vscode-markdown-preview-data");if(e){const t=e.getAttribute("data-strings");if(t)return JSON.parse(t)}throw new Error("Could not load strings")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StyleLoadingMonitor=void 0;t.StyleLoadingMonitor=class{constructor(){this.unloadedStyles=[],this.finishedLoading=!1;const e=e=>{const t=e.target.dataset.source;this.unloadedStyles.push(t)};window.addEventListener("DOMContentLoaded",()=>{for(const t of document.getElementsByClassName("code-user-style"))t.dataset.source&&(t.onerror=e)}),window.addEventListener("load",()=>{this.unloadedStyles.length&&(this.finishedLoading=!0,this.poster&&this.poster.postMessage("previewStyleLoadError",{unloadedStyles:this.unloadedStyles}))})}setPoster(e){this.poster=e,this.finishedLoading&&e.postMessage("previewStyleLoadError",{unloadedStyles:this.unloadedStyles})}}}]);