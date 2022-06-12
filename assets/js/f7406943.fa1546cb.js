"use strict";(self.webpackChunkinterview=self.webpackChunkinterview||[]).push([[5283],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=o(n),d=a,y=f["".concat(s,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(y,c(c({ref:t},l),{},{components:n})):r.createElement(y,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var o=2;o<i;o++)c[o]=n[o];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9686:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),c=["components"],p={},s="interface \u548c type",o={unversionedId:"question/typescript/type-interface",id:"question/typescript/type-interface",title:"interface \u548c type",description:"\u76f8\u540c\u70b9",source:"@site/docs/question/typescript/type-interface.md",sourceDirName:"question/typescript",slug:"/question/typescript/type-interface",permalink:"/interview/docs/question/typescript/type-interface",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/question/typescript/type-interface.md",tags:[],version:"current",frontMatter:{},sidebar:"questionSidebar",previous:{title:"\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u7aef\u957f\u8fde\u63a5\u7684\u65b9\u5f0f",permalink:"/interview/docs/question/long-connect"},next:{title:"\u539f\u751f JS \u5b9e\u73b0 Ajax \u8bf7\u6c42",permalink:"/interview/docs/question/\u624b\u5199/ajax"}},l={},u=[{value:"\u76f8\u540c\u70b9",id:"\u76f8\u540c\u70b9",level:2},{value:"\u90fd\u53ef\u4ee5\u63cf\u8ff0\u4e00\u4e2a\u5bf9\u8c61\u6216\u8005\u51fd\u6570",id:"\u90fd\u53ef\u4ee5\u63cf\u8ff0\u4e00\u4e2a\u5bf9\u8c61\u6216\u8005\u51fd\u6570",level:3},{value:"\u90fd\u5141\u8bb8\u62d3\u5c55\uff08extends\uff09",id:"\u90fd\u5141\u8bb8\u62d3\u5c55extends",level:3},{value:"interface extends interface",id:"interface-extends-interface",level:4},{value:"type extends type",id:"type-extends-type",level:4},{value:"interface extends type",id:"interface-extends-type",level:4},{value:"type extends interface",id:"type-extends-interface",level:4},{value:"\u4e0d\u540c\u70b9",id:"\u4e0d\u540c\u70b9",level:2},{value:"type \u53ef\u4ee5\u58f0\u660e\u57fa\u672c\u7c7b\u578b\u522b\u540d\uff0c\u8054\u5408\u7c7b\u578b\uff0c\u5143\u7ec4\u7b49\u7c7b\u578b",id:"type-\u53ef\u4ee5\u58f0\u660e\u57fa\u672c\u7c7b\u578b\u522b\u540d\u8054\u5408\u7c7b\u578b\u5143\u7ec4\u7b49\u7c7b\u578b",level:3},{value:"interface \u80fd\u591f\u58f0\u660e\u5408\u5e76",id:"interface-\u80fd\u591f\u58f0\u660e\u5408\u5e76",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],f={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interface-\u548c-type"},"interface \u548c type"),(0,i.kt)("h2",{id:"\u76f8\u540c\u70b9"},"\u76f8\u540c\u70b9"),(0,i.kt)("h3",{id:"\u90fd\u53ef\u4ee5\u63cf\u8ff0\u4e00\u4e2a\u5bf9\u8c61\u6216\u8005\u51fd\u6570"},"\u90fd\u53ef\u4ee5\u63cf\u8ff0\u4e00\u4e2a\u5bf9\u8c61\u6216\u8005\u51fd\u6570"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface User {\n  name: string;\n  age: number;\n}\n\ninterface SetUser {\n  (name: string, age: number): void;\n}\n\ntype User = {\n  name: string;\n  age: number;\n};\n\ntype SetUser = (name: string, age: number) => void;\n")),(0,i.kt)("h3",{id:"\u90fd\u5141\u8bb8\u62d3\u5c55extends"},"\u90fd\u5141\u8bb8\u62d3\u5c55\uff08extends\uff09"),(0,i.kt)("p",null,"interface \u548c type \u90fd\u53ef\u4ee5\u62d3\u5c55\uff0c\u5e76\u4e14\u4e24\u8005\u5e76\u4e0d\u662f\u76f8\u4e92\u72ec\u7acb\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4 interface \u53ef\u4ee5 extends type, type \u4e5f\u53ef\u4ee5 extends interface \u3002 \u867d\u7136\u6548\u679c\u5dee\u4e0d\u591a\uff0c\u4f46\u662f\u4e24\u8005\u8bed\u6cd5\u4e0d\u540c\u3002"),(0,i.kt)("h4",{id:"interface-extends-interface"},"interface extends interface"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface Name {\n  name: string;\n}\ninterface User extends Name {\n  age: number;\n}\n")),(0,i.kt)("h4",{id:"type-extends-type"},"type extends type"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type Name = {\n  name: string;\n};\ntype User = Name & { age: number };\n")),(0,i.kt)("h4",{id:"interface-extends-type"},"interface extends type"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type Name = {\n  name: string;\n};\ninterface User extends Name {\n  age: number;\n}\n")),(0,i.kt)("h4",{id:"type-extends-interface"},"type extends interface"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface Name {\n  name: string;\n}\ntype User = Name & {\n  age: number;\n};\n")),(0,i.kt)("h2",{id:"\u4e0d\u540c\u70b9"},"\u4e0d\u540c\u70b9"),(0,i.kt)("h3",{id:"type-\u53ef\u4ee5\u58f0\u660e\u57fa\u672c\u7c7b\u578b\u522b\u540d\u8054\u5408\u7c7b\u578b\u5143\u7ec4\u7b49\u7c7b\u578b"},"type \u53ef\u4ee5\u58f0\u660e\u57fa\u672c\u7c7b\u578b\u522b\u540d\uff0c\u8054\u5408\u7c7b\u578b\uff0c\u5143\u7ec4\u7b49\u7c7b\u578b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// \u57fa\u672c\u7c7b\u578b\u522b\u540d\ntype Name = string;\n\n// \u8054\u5408\u7c7b\u578b\ninterface Dog {\n  wong();\n}\ninterface Cat {\n  miao();\n}\n\ntype Pet = Dog | Cat;\n\n// \u5177\u4f53\u5b9a\u4e49\u6570\u7ec4\u6bcf\u4e2a\u4f4d\u7f6e\u7684\u7c7b\u578b\ntype PetList = [Dog, Pet];\n")),(0,i.kt)("p",null,"type \u8bed\u53e5\u4e2d\u8fd8\u53ef\u4ee5\u4f7f\u7528 typeof \u83b7\u53d6\u5b9e\u4f8b\u7684 \u7c7b\u578b\u8fdb\u884c\u8d4b\u503c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// \u5f53\u4f60\u60f3\u83b7\u53d6\u4e00\u4e2a\u53d8\u91cf\u7684\u7c7b\u578b\u65f6\uff0c\u4f7f\u7528 typeof\nlet div = document.createElement('div');\ntype B = typeof div;\n")),(0,i.kt)("p",null,"\u5176\u4ed6\u9a9a\u64cd\u4f5c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type StringOrNumber = string | number;\ntype Text = string | { text: string };\ntype NameLookup = Dictionary<string, Person>;\ntype Callback<T> = (data: T) => void;\ntype Pair<T> = [T, T];\ntype Coordinates = Pair<number>;\ntype Tree<T> = T | { left: Tree<T>; right: Tree<T> };\n")),(0,i.kt)("h3",{id:"interface-\u80fd\u591f\u58f0\u660e\u5408\u5e76"},"interface \u80fd\u591f\u58f0\u660e\u5408\u5e76"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface User {\n  name: string;\n  age: number;\n}\n\ninterface User {\n  sex: string;\n}\n\n/*\nUser \u63a5\u53e3\u4e3a {\nname: string\nage: number\nsex: string\n}\n*/\n")),(0,i.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,i.kt)("p",null,"\u4e00\u822c\u6765\u8bf4\uff0c\u5982\u679c\u4e0d\u6e05\u695a\u4ec0\u4e48\u65f6\u5019\u7528 interface/type\uff0c\u80fd\u7528 interface \u5b9e\u73b0\uff0c\u5c31\u7528 interface , \u5982\u679c\u4e0d\u80fd\u5c31\u7528 type \u3002"))}d.isMDXComponent=!0}}]);