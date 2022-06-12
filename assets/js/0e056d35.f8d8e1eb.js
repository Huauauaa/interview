"use strict";(self.webpackChunkinterview=self.webpackChunkinterview||[]).push([[7245],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(k,l(l({ref:e},c),{},{components:n})):r.createElement(k,l({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8288:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={},p="options",u={unversionedId:"question/http/options",id:"question/http/options",title:"options",description:"MDN: HTTP \u7684 OPTIONS \u65b9\u6cd5 \u7528\u4e8e\u83b7\u53d6\u76ee\u7684\u8d44\u6e90\u6240\u652f\u6301\u7684\u901a\u4fe1\u9009\u9879\u3002\u5ba2\u6237\u7aef\u53ef\u4ee5\u5bf9\u7279\u5b9a\u7684 URL \u4f7f\u7528 OPTIONS \u65b9\u6cd5\uff0c\u4e5f\u53ef\u4ee5\u5bf9\u6574\u7ad9\uff08\u901a\u8fc7\u5c06 URL \u8bbe\u7f6e\u4e3a\u201c\\*\u201d\uff09\u4f7f\u7528\u8be5\u65b9\u6cd5\u3002",source:"@site/docs/question/http/options.md",sourceDirName:"question/http",slug:"/question/http/options",permalink:"/interview/docs/question/http/options",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/question/http/options.md",tags:[],version:"current",frontMatter:{},sidebar:"questionSidebar",previous:{title:"HTTP \u548c HTTPS \u7684\u533a\u522b",permalink:"/interview/docs/question/http/http-https"},next:{title:"\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u7aef\u957f\u8fde\u63a5\u7684\u65b9\u5f0f",permalink:"/interview/docs/question/long-connect"}},c={},s=[{value:"\u7b80\u5355\u8bf7\u6c42\u4e0e\u590d\u6742\u8bf7\u6c42",id:"\u7b80\u5355\u8bf7\u6c42\u4e0e\u590d\u6742\u8bf7\u6c42",level:2},{value:"\u7b80\u5355\u8bf7\u6c42",id:"\u7b80\u5355\u8bf7\u6c42",level:3},{value:"\u590d\u6742\u8bf7\u6c42",id:"\u590d\u6742\u8bf7\u6c42",level:3},{value:"options \u5173\u952e\u7684\u8bf7\u6c42\u5934\u5b57\u6bb5",id:"options-\u5173\u952e\u7684\u8bf7\u6c42\u5934\u5b57\u6bb5",level:2},{value:"request header \u7684\u5173\u952e\u5b57\u6bb5",id:"request-header-\u7684\u5173\u952e\u5b57\u6bb5",level:3},{value:"response header \u7684\u5173\u952e\u5b57\u6bb5",id:"response-header-\u7684\u5173\u952e\u5b57\u6bb5",level:3},{value:"Options \u8bf7\u6c42\u4f18\u5316",id:"options-\u8bf7\u6c42\u4f18\u5316",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],d={toc:s};function m(t){var e=t.components,n=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"options"},"options"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"MDN: HTTP \u7684 OPTIONS \u65b9\u6cd5 \u7528\u4e8e\u83b7\u53d6\u76ee\u7684\u8d44\u6e90\u6240\u652f\u6301\u7684\u901a\u4fe1\u9009\u9879\u3002\u5ba2\u6237\u7aef\u53ef\u4ee5\u5bf9\u7279\u5b9a\u7684 URL \u4f7f\u7528 OPTIONS \u65b9\u6cd5\uff0c\u4e5f\u53ef\u4ee5\u5bf9\u6574\u7ad9\uff08\u901a\u8fc7\u5c06 URL \u8bbe\u7f6e\u4e3a\u201c","*","\u201d\uff09\u4f7f\u7528\u8be5\u65b9\u6cd5\u3002")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u7b80\u5355\u6765\u8bf4\uff0c\u5c31\u662f\u53ef\u4ee5\u7528 options \u8bf7\u6c42\u53bb\u55c5\u63a2\u67d0\u4e2a\u8bf7\u6c42\u5728\u5bf9\u5e94\u7684\u670d\u52a1\u5668\u4e2d\u90fd\u652f\u6301\u54ea\u79cd\u8bf7\u6c42\u65b9\u6cd5\u3002")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'\u5728\u524d\u7aef\u4e2d\u6211\u4eec\u4e00\u822c\u4e0d\u4f1a\u4e3b\u52a8\u53d1\u8d77\u8fd9\u4e2a\u8bf7\u6c42\uff0c\u4f46\u662f\u5f80\u5f80\u4f60\u53ef\u4ee5\u770b\u5230\u6d4f\u89c8\u5668\u4e2d\u76f8\u540c\u7684\u8bf7\u6c42\u53d1\u8d77\u4e86\u4e24\u6b21\uff0c\u8fd9\u662f\u56e0\u4e3a\u5728\u8de8\u57df\u7684\u60c5\u51b5\u4e0b\uff0c\u5728\u6d4f\u89c8\u5668\u53d1\u8d77"\u590d\u6742\u8bf7\u6c42"\u65f6\u4e3b\u52a8\u53d1\u8d77\u7684\u3002\u8de8\u57df\u5171\u4eab\u6807\u51c6\u89c4\u8303\u8981\u6c42\uff0c\u5bf9\u90a3\u4e9b\u53ef\u80fd\u5bf9\u670d\u52a1\u5668\u6570\u636e\u4ea7\u751f\u526f\u4f5c\u7528\u7684 HTTP \u8bf7\u6c42\u65b9\u6cd5\uff08\u7279\u522b\u662f GET \u4ee5\u5916\u7684 HTTP \u8bf7\u6c42\uff0c\u6216\u8005\u642d\u914d\u67d0\u4e9b MIME \u7c7b\u578b\u7684 POST \u8bf7\u6c42\uff09\uff0c\u6d4f\u89c8\u5668\u5fc5\u987b\u9996\u5148\u4f7f\u7528 OPTIONS \u65b9\u6cd5\u53d1\u8d77\u4e00\u4e2a\u9884\u68c0\u8bf7\u6c42\uff08preflight request\uff09\uff0c\u4ece\u800c\u83b7\u77e5\u670d\u52a1\u7aef\u662f\u5426\u5141\u8bb8\u8be5\u8de8\u57df\u8bf7\u6c42\u3002\u670d\u52a1\u5668\u786e\u8ba4\u5141\u8bb8\u4e4b\u540e\uff0c\u624d\u53d1\u8d77\u5b9e\u9645\u7684 HTTP \u8bf7\u6c42\u3002')),(0,o.kt)("h2",{id:"\u7b80\u5355\u8bf7\u6c42\u4e0e\u590d\u6742\u8bf7\u6c42"},"\u7b80\u5355\u8bf7\u6c42\u4e0e\u590d\u6742\u8bf7\u6c42"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'\u67d0\u4e9b\u8bf7\u6c42\u4e0d\u4f1a\u89e6\u53d1 CORS \u9884\u68c0\u8bf7\u6c42\uff0c\u8fd9\u6837\u7684\u8bf7\u6c42\u4e00\u822c\u79f0\u4e3a"\u7b80\u5355\u8bf7\u6c42",\u800c\u4f1a\u89e6\u53d1\u9884\u68c0\u7684\u8bf7\u6c42\u5219\u79f0\u4e3a"\u590d\u6742\u8bf7\u6c42"\u3002')),(0,o.kt)("h3",{id:"\u7b80\u5355\u8bf7\u6c42"},"\u7b80\u5355\u8bf7\u6c42"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u65b9\u6cd5\u4e3a GET\u3001HEAD\u3001POST \u65f6\u53d1\u7684\u8bf7\u6c42"),(0,o.kt)("li",{parentName:"ul"},"\u4eba\u4e3a\u8bbe\u7f6e\u4e86\u89c4\u8303\u96c6\u5408\u4e4b\u5185\u7684\u9996\u90e8\u5b57\u6bb5\uff0c\u5982 Accept/Accept-Language/Content-Language/Content-Type/DPR/Downlink/Save-Data/Viewport-Width/Width"),(0,o.kt)("li",{parentName:"ul"},"Content-Type \u7684\u503c\u4ec5\u9650\u4e8e\u4e0b\u5217\u4e09\u8005\u4e4b\u4e00,\u5373 application/x-www-form-urlencoded\u3001multipart/form-data\u3001text/plain"),(0,o.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u4e2d\u7684\u4efb\u610f XMLHttpRequestUpload \u5bf9\u8c61\u5747\u6ca1\u6709\u6ce8\u518c\u4efb\u4f55\u4e8b\u4ef6\u76d1\u542c\u5668\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u4e2d\u6ca1\u6709\u4f7f\u7528 ReadableStream \u5bf9\u8c61\u3002")),(0,o.kt)("h3",{id:"\u590d\u6742\u8bf7\u6c42"},"\u590d\u6742\u8bf7\u6c42"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4e86\u4e0b\u9762\u4efb\u4e00 HTTP \u65b9\u6cd5\uff0cPUT/DELETE/CONNECT/OPTIONS/TRACE/PATCH"),(0,o.kt)("li",{parentName:"ul"},"\u4eba\u4e3a\u8bbe\u7f6e\u4e86\u89c4\u8303\u96c6\u5408\u4e4b\u5916\u9996\u90e8\u5b57\u6bb5\uff0c\u5373\u7b80\u5355\u8bf7\u6c42\u5916\u7684\u5b57\u6bb5"),(0,o.kt)("li",{parentName:"ul"},"Content-Type \u7684\u503c\u4e0d\u5c5e\u4e8e\u4e0b\u5217\u4e4b\u4e00\uff0c\u5373 application/x-www-form-urlencoded\u3001multipart/form-data\u3001text/plain")),(0,o.kt)("h2",{id:"options-\u5173\u952e\u7684\u8bf7\u6c42\u5934\u5b57\u6bb5"},"options \u5173\u952e\u7684\u8bf7\u6c42\u5934\u5b57\u6bb5"),(0,o.kt)("h3",{id:"request-header-\u7684\u5173\u952e\u5b57\u6bb5"},"request header \u7684\u5173\u952e\u5b57\u6bb5"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u5173\u952e\u5b57\u6bb5"),(0,o.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Access-Control-Request-Method"),(0,o.kt)("td",{parentName:"tr",align:null},"\u544a\u77e5\u670d\u52a1\u5668\uff0c\u5b9e\u9645\u8bf7\u6c42\u5c06\u4f7f\u7528 POST \u65b9\u6cd5")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Access-Control-Request-Headers"),(0,o.kt)("td",{parentName:"tr",align:null},"\u544a\u77e5\u670d\u52a1\u5668\uff0c\u5b9e\u9645\u8bf7\u6c42\u5c06\u643a\u5e26\u7684\u81ea\u5b9a\u4e49\u8bf7\u6c42\u9996\u90e8\u5b57\u6bb5")))),(0,o.kt)("p",null,"\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Access-Control-Request-Method: POST\nAccess-Control-Request-Headers: X-PINGOTHER, Content-Type\n")),(0,o.kt)("h3",{id:"response-header-\u7684\u5173\u952e\u5b57\u6bb5"},"response header \u7684\u5173\u952e\u5b57\u6bb5"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u5173\u952e\u5b57\u6bb5"),(0,o.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Access-Control-Allow-Methods"),(0,o.kt)("td",{parentName:"tr",align:null},"\u8868\u660e\u670d\u52a1\u5668\u5141\u8bb8\u5ba2\u6237\u7aef\u4f7f\u7528\u4ec0\u4e48\u65b9\u6cd5\u53d1\u8d77\u8bf7\u6c42")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Access-Control-Allow-Origin"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u8de8\u57df\u8bf7\u6c42\u7684\u57df\u540d\uff0c\u5982\u679c\u8981\u5141\u8bb8\u6240\u6709\u57df\u540d\u5219\u8bbe\u7f6e\u4e3a ","*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Access-Control-Allow-Headers"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5c06\u5b9e\u9645\u8bf7\u6c42\u6240\u643a\u5e26\u7684\u9996\u90e8\u5b57\u6bb5\u544a\u8bc9\u670d\u52a1\u5668")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Access-Control-Max-Age"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u4e86\u9884\u68c0\u8bf7\u6c42\u7684\u7ed3\u679c\u80fd\u591f\u88ab\u7f13\u5b58\u591a\u4e45")))),(0,o.kt)("h2",{id:"options-\u8bf7\u6c42\u4f18\u5316"},"Options \u8bf7\u6c42\u4f18\u5316"),(0,o.kt)("p",null,"\u5f53\u6211\u4eec\u53d1\u8d77\u8de8\u57df\u8bf7\u6c42\u65f6\uff0c\u5982\u679c\u662f\u7b80\u5355\u8bf7\u6c42\uff0c\u90a3\u4e48\u6211\u4eec\u53ea\u4f1a\u53d1\u51fa\u4e00\u6b21\u8bf7\u6c42\uff0c\u4f46\u662f\u5982\u679c\u662f\u590d\u6742\u8bf7\u6c42,\u5219\u5148\u53d1\u51fa options \u8bf7\u6c42\uff0c\u7528\u4e8e\u786e\u8ba4\u76ee\u6807\u8d44\u6e90\u662f\u5426\u652f\u6301\u8de8\u57df\uff0c\u7136\u540e\u6d4f\u89c8\u5668\u4f1a\u6839\u636e\u670d\u52a1\u7aef\u54cd\u5e94\u7684 header \u81ea\u52a8\u5904\u7406\u5269\u4f59\u7684\u8bf7\u6c42\uff0c\u5982\u679c\u54cd\u5e94\u652f\u6301\u8de8\u57df\uff0c\u5219\u7ee7\u7eed\u53d1\u51fa\u6b63\u5e38\u8bf7\u6c42\uff0c\u5982\u679c\u4e0d\u652f\u6301\uff0c\u5219\u5728\u63a7\u5236\u53f0\u663e\u793a\u9519\u8bef\u3002"),(0,o.kt)("p",null,"\u7531\u6b64\u53ef\u89c1\uff0c\u5f53\u89e6\u53d1\u9884\u68c0\u65f6\uff0c\u8de8\u57df\u8bf7\u6c42\u4fbf\u4f1a\u53d1\u9001\u4e24\u6b21\u8bf7\u6c42\uff0c\u65e2\u589e\u52a0\u4e86\u8bf7\u6c42\u6570\uff0c\u4e5f\u5ef6\u8fdf\u4e86\u8bf7\u6c42\u771f\u6b63\u53d1\u8d77\u7684\u65f6\u95f4\uff0c\u4e25\u91cd\u5f71\u54cd\u6027\u80fd\u3002"),(0,o.kt)("p",null,"\u6240\u4ee5\uff0c\u6211\u4eec\u53ef\u4ee5\u4f18\u5316 Options \u8bf7\u6c42\uff0c\u4e3b\u8981\u6709\u4e24\u79cd\u65b9\u6cd5\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8f6c\u4e3a\u7b80\u5355\u8bf7\u6c42\uff0c\u5982\u7528 JSONP \u505a\u8de8\u57df\u8bf7\u6c42"),(0,o.kt)("li",{parentName:"ul"},"\u5bf9 options \u8bf7\u6c42\u8fdb\u884c\u7f13\u5b58\uff0c\u670d\u52a1\u5668\u7aef\u8bbe\u7f6e Access-Control-Max-Age \u5b57\u6bb5\uff0c\u90a3\u4e48\u5f53\u7b2c\u4e00\u6b21\u8bf7\u6c42\u8be5 URL \u65f6\u4f1a\u53d1\u51fa OPTIONS \u8bf7\u6c42\uff0c\u6d4f\u89c8\u5668\u4f1a\u6839\u636e\u8fd4\u56de\u7684 Access-Control-Max-Age \u5b57\u6bb5\u7f13\u5b58\u8be5\u8bf7\u6c42\u7684 OPTIONS \u9884\u68c0\u8bf7\u6c42\u7684\u54cd\u5e94\u7ed3\u679c\uff08\u5177\u4f53\u7f13\u5b58\u65f6\u95f4\u8fd8\u53d6\u51b3\u4e8e\u6d4f\u89c8\u5668\u7684\u652f\u6301\u7684\u9ed8\u8ba4\u6700\u5927\u503c\uff0c\u53d6\u4e24\u8005\u6700\u5c0f\u503c\uff0c\u4e00\u822c\u4e3a 10 \u5206\u949f\uff09\u3002\u5728\u7f13\u5b58\u6709\u6548\u671f\u5185\uff0c\u8be5\u8d44\u6e90\u7684\u8bf7\u6c42\uff08URL \u548c header \u5b57\u6bb5\u90fd\u76f8\u540c\u7684\u60c5\u51b5\u4e0b\uff09\u4e0d\u4f1a\u518d\u89e6\u53d1\u9884\u68c0\u3002\uff08chrome \u6253\u5f00\u63a7\u5236\u53f0\u53ef\u4ee5\u770b\u5230\uff0c\u5f53\u670d\u52a1\u5668\u54cd\u5e94 Access-Control-Max-Age \u65f6\u53ea\u6709\u7b2c\u4e00\u6b21\u8bf7\u6c42\u4f1a\u6709\u9884\u68c0\uff0c\u540e\u9762\u4e0d\u4f1a\u4e86\u3002\u6ce8\u610f\u8981\u5f00\u542f\u7f13\u5b58\uff0c\u53bb\u6389 disable cache \u52fe\u9009\u3002\uff09")),(0,o.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,o.kt)("p",null,"options \u8bf7\u6c42\u5c31\u662f\u9884\u68c0\u8bf7\u6c42\uff0c\u53ef\u7528\u4e8e\u68c0\u6d4b\u670d\u52a1\u5668\u5141\u8bb8\u7684 http \u65b9\u6cd5\u3002\u5f53\u53d1\u8d77\u8de8\u57df\u8bf7\u6c42\u65f6\uff0c\u7531\u4e8e\u5b89\u5168\u539f\u56e0\uff0c\u89e6\u53d1\u4e00\u5b9a\u6761\u4ef6\u65f6\u6d4f\u89c8\u5668\u4f1a\u5728\u6b63\u5f0f\u8bf7\u6c42\u4e4b\u524d\u81ea\u52a8\u5148\u53d1\u8d77 OPTIONS \u8bf7\u6c42\uff0c\u5373 CORS \u9884\u68c0\u8bf7\u6c42\uff0c\u670d\u52a1\u5668\u82e5\u63a5\u53d7\u8be5\u8de8\u57df\u8bf7\u6c42\uff0c\u6d4f\u89c8\u5668\u624d\u7ee7\u7eed\u53d1\u8d77\u6b63\u5f0f\u8bf7\u6c42\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.51cto.com/article/618792.html"},"\u6765\u6e90")))}m.isMDXComponent=!0}}]);