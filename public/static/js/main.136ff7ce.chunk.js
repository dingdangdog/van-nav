(this.webpackJsonptool=this.webpackJsonptool||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(17),r=c.n(s),i=(c(27),c(28),c(6)),l=c(4),o=c(5),d=c.n(o),u=(c(30),c(31),c(0)),j=function(e){var t=e.title,c=e.url,n=e.des,a=e.logo,s=e.catelog;return Object(u.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",className:"card-box",children:Object(u.jsxs)("div",{className:"card-content",children:[Object(u.jsx)("div",{className:"card-left",children:Object(u.jsx)("img",{src:a,alt:t})}),Object(u.jsxs)("div",{className:"card-right",children:[Object(u.jsxs)("div",{className:"card-right-top",children:[Object(u.jsx)("span",{className:"card-right-title",children:t}),Object(u.jsx)("span",{className:"card-tag",children:s})]}),Object(u.jsx)("div",{className:"card-right-bottom",children:n})]})]})})},b=(c(33),function(e){return Object(u.jsx)("div",{className:"search span-3",children:Object(u.jsx)("div",{className:"search-wraper",children:Object(u.jsx)("input",{type:"search",placeholder:"Let's go.",onChange:function(t){var c=t.target.value.trim();e.setSearchText(c)}})})})}),h=(c(34),function(e){return Object(u.jsx)("div",{className:"loading span-3",children:Object(u.jsxs)("div",{className:"lds-ring",children:[Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{})]})})}),g=c(18),v=c(22),m=c.n(v),O=function(){var e=Object(i.a)(d.a.mark((function e(){var t,c,n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/api/");case 2:return t=e.sent,c=t.data,n=c.data,(a=[]).push("\u5168\u90e8\u5de5\u5177"),n.tools.forEach((function(e){a.includes(e.catelog)||a.push(e.catelog)})),n.catelogs=a,e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=O,x=(c(57),function(e){var t=e.tags,c=void 0===t?["all"]:t,a=e.onTagChange,s=e.currTag,r=Object(n.useCallback)((function(){return c.map((function(e){return Object(u.jsx)("span",{className:"select-tag ".concat(s===e?"select-tag-active":""),onClick:function(){a(e)},children:e},"".concat(e,"-select-tag"))}))}),[c,a,s]);return Object(u.jsx)("div",{className:"tag-selector span-3",children:Object(u.jsx)("div",{className:"tag-selector-wrapper",children:r()})})}),p=void 0,w=function(e){var t,c,a,s,r,o=Object(n.useState)({}),v=Object(l.a)(o,2),m=v[0],O=v[1],w=Object(n.useState)(!0),N=Object(l.a)(w,2),k=N[0],S=N[1],y=Object(n.useState)("\u5168\u90e8\u5de5\u5177"),C=Object(l.a)(y,2),T=C[0],L=C[1],I=Object(n.useState)(""),F=Object(l.a)(I,2),M=F[0],B=F[1],E=Object(n.useCallback)(Object(i.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,S(!0),e.next=4,f();case 4:t=e.sent,O(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,S(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])}))),[O,S]);Object(n.useEffect)((function(){E()}),[E]);var q=function(e,t){var c=Object(n.useRef)({time:null}).current;return Object(n.useCallback)((function(){for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];c.time&&(clearTimeout(c.time),c.time=null),c.time=setTimeout((function(){e.apply(p,a),clearTimeout(c.time),c.time=null}),t)}),[c,t])}((function(e){if(""!==e&&e)L("\u5168\u90e8\u5de5\u5177");else{var t=window.localStorage.getItem("tag");t&&""!==t&&L(t)}B(e)}),500),z=Object(n.useCallback)((function(){return m.tools?m.tools.filter((function(e){return"\u5168\u90e8\u5de5\u5177"===T||e.catelog===T})).filter((function(e){return""===M||e.name.toLowerCase().includes(M.toLowerCase())})).map((function(e){return Object(u.jsx)(j,{title:e.name,url:e.url,des:e.desc,logo:e.logo,catelog:e.catelog},e.id)})):null}),[m,T,M]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(g.a,{children:[Object(u.jsx)("meta",{charSet:"utf-8"}),Object(u.jsx)("link",{rel:"icon",href:null!==(t=null===m||void 0===m||null===(c=m.setting)||void 0===c?void 0:c.favicon)&&void 0!==t?t:"https://pic.mereith.com/img/male.svg"}),Object(u.jsx)("title",{children:null!==(a=null===m||void 0===m||null===(s=m.setting)||void 0===s?void 0:s.title)&&void 0!==a?a:"Mereith's Nav Site"})]}),Object(u.jsx)("div",{className:"topbar",children:Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)(b,{setSearchText:q}),Object(u.jsx)(x,{tags:null!==(r=null===m||void 0===m?void 0:m.catelogs)&&void 0!==r?r:["\u5168\u90e8\u5de5\u5177"],currTag:T,onTagChange:function(e){L(e),window.localStorage.setItem("tag",e)}})]})}),Object(u.jsx)("div",{className:"content-wraper",children:Object(u.jsx)("div",{className:"content cards",children:k?Object(u.jsx)(h,{}):z()})})]})},N=(c(58),function(){var e=Object(n.useState)(window.localStorage.getItem("theme")||"day"),t=Object(l.a)(e,2),c=t[0],a=t[1];Object(n.useEffect)((function(){if("day"!==c){var e=document.querySelector("body");e&&e.classList.toggle("dark-mode",!0),window.localStorage.setItem("theme","dark")}}));var s=Object(u.jsxs)("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"14883",width:"200",height:"200",children:[Object(u.jsx)("path",{d:"M107 512c0.2 82 25.2 164.9 73.1 231.8 12.5 17.5 26 34.4 41 49.9 15.2 15.7 31.8 29.6 49.1 42.8 32.1 24.5 68 43 105.8 56.9 78.2 28.7 167.1 31 247.1 8.1 76.9-22 148.2-67.5 199-129.4 13.7-16.7 26.6-34.1 37.7-52.6 11.2-18.7 20.3-38.4 28.6-58.6 15.9-38.5 24.4-79.6 27.5-121 6.3-82.1-14.4-166.9-57.1-237.3-41.3-68-103.3-125-176-157.8-20.2-9.1-40.9-17.3-62.2-23.2-21.9-6.1-44.2-9.7-66.7-12.3-41.7-4.8-84.2-2-125.3 6.3-78.7 15.9-152.9 57.6-208.3 115.5-55.7 58.1-94.9 133.6-107.3 213.4-3.6 22.4-6 44.8-6 67.5 0 11.5 5 23.7 13.2 31.9 7.8 7.8 20.6 13.7 31.9 13.2 24.4-1.1 45-19.8 45.1-45.1 0-16.3 1.1-32.5 3.3-48.6-0.5 4-1.1 8-1.6 12 4.3-31.2 12.6-61.8 24.8-90.9l-4.5 10.8c12.2-28.8 28-55.9 47.1-80.6-2.3 3-4.7 6.1-7 9.1 18.8-24.2 40.5-45.9 64.7-64.7-3 2.3-6.1 4.7-9.1 7 24.8-19.1 51.8-34.9 80.6-47.1l-10.8 4.5c29.1-12.2 59.6-20.5 90.9-24.8-4 0.5-8 1.1-12 1.6 32.3-4.3 65-4.3 97.2 0-4-0.5-8-1.1-12-1.6 31.2 4.3 61.8 12.6 90.9 24.8l-10.8-4.5c28.8 12.2 55.9 28 80.6 47.1-3-2.3-6.1-4.7-9.1-7 24.2 18.8 45.9 40.5 64.7 64.7-2.3-3-4.7-6.1-7-9.1 19.1 24.8 34.9 51.8 47.1 80.6l-4.5-10.8c12.2 29.1 20.5 59.6 24.8 90.9-0.5-4-1.1-8-1.6-12 4.3 32.3 4.3 65 0 97.2 0.5-4 1.1-8 1.6-12-4.3 31.2-12.6 61.8-24.8 90.9l4.5-10.8c-12.2 28.8-28 55.9-47.1 80.6 2.3-3 4.7-6.1 7-9.1-18.8 24.2-40.5 45.9-64.7 64.7 3-2.3 6.1-4.7 9.1-7-24.8 19.1-51.8 34.9-80.6 47.1l10.8-4.5c-29.1 12.2-59.6 20.5-90.9 24.8 4-0.5 8-1.1 12-1.6-32.3 4.3-65 4.3-97.2 0 4 0.5 8 1.1 12 1.6-31.2-4.3-61.8-12.6-90.9-24.8l10.8 4.5c-28.8-12.2-55.9-28-80.6-47.1 3 2.3 6.1 4.7 9.1 7-24.2-18.8-45.9-40.5-64.7-64.7 2.3 3 4.7 6.1 7 9.1-19.1-24.8-34.9-51.8-47.1-80.6l4.5 10.8c-12.2-29.1-20.5-59.6-24.8-90.9 0.5 4 1.1 8 1.6 12-2.1-16.1-3.2-32.3-3.3-48.6 0-11.6-5-23.7-13.2-31.9-7.8-7.8-20.6-13.7-31.9-13.2-11.7 0.5-23.7 4.3-31.9 13.2-8.1 8.8-13.2 19.7-13.2 31.9z","p-id":"14884"}),Object(u.jsx)("path",{d:"M512 512m-69.9 0a69.9 69.9 0 1 0 139.8 0 69.9 69.9 0 1 0-139.8 0Z","p-id":"14885"})]}),r=Object(u.jsx)("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"15995",width:"200",height:"200",children:Object(u.jsx)("path",{d:"M505.4 878.6c-196.7 0-358-150.9-374.9-343.1 1-18.6 16.1-33.4 34.9-33.4 10.8 0 20.5 4.8 26.9 12.4 0.2 0.3 0.5 0.1 0.5-0.7 41.6 44.2 100.5 71.9 166.1 71.9 127.1 0 230.1-103 230.1-230.1 0-66.1-28-125.1-72.6-166.8 0.1-0.1 0.5-0.1 0.3-0.3-7-6.5-11.4-15.7-11.4-26.1 0-19 14.9-34.1 33.7-35.3 192.1 17.1 342.9 178.3 342.9 375 0 208-168.5 376.5-376.5 376.5z","p-id":"15996"})});return Object(u.jsx)("div",{className:"theme-switch-box",onClick:function(){var e="day"===c?"dark":"day";window.localStorage.setItem("theme",e);var t=document.querySelector("body");t&&("day"===e?t.classList.toggle("dark-mode",!1):t.classList.toggle("dark-mode",!0)),a(e)},children:"day"===c?r:s})});var k=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(N,{}),Object(u.jsx)("div",{className:"main",children:Object(u.jsx)(w,{})})]})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,60)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root")),S()}},[[59,1,2]]]);
//# sourceMappingURL=main.136ff7ce.chunk.js.map