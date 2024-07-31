"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[6300],{48904:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(85893),i=n(11151),o=n(52991);const s={title:"Maintainer Documentation"},a="Maintainer Documentation",c={id:"maintainer/index",title:"Maintainer Documentation",description:"",source:"@site/docs/maintainer/index.mdx",sourceDirName:"maintainer",slug:"/maintainer/",permalink:"/docs/maintainer/",draft:!1,unlisted:!1,editUrl:"https://github.com/afshin/conda-forge.github.io/tree/refs/heads/main/docs/maintainer/index.mdx",tags:[],version:"current",lastUpdatedAt:1722387848e3,frontMatter:{title:"Maintainer Documentation"},sidebar:"docs",previous:{title:"Talks and resources",permalink:"/docs/user/talks"},next:{title:"Infrastructure",permalink:"/docs/maintainer/infrastructure"}},l={},u=[];function d(e){const t={h1:"h1",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("a",{id:"maintainer-documentation"}),"\n",(0,r.jsx)(t.h1,{id:"maintainer-documentation",children:"Maintainer Documentation"}),"\n","\n",(0,r.jsx)(o.Z,{})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},52991:(e,t,n)=>{n.d(t,{Z:()=>j});n(67294);var r=n(90512),i=n(53438),o=n(33692),s=n(88824),a=n(13919),c=n(95999),l=n(92503);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(85893);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(o.Z,{href:t,className:(0,r.Z)("card padding--lg",u.cardContainer),children:n})}function f(e){let{href:t,icon:n,title:i,description:o}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(l.Z,{as:"h2",className:(0,r.Z)("text--truncate",u.cardTitle),title:i,children:[n," ",i]}),o&&(0,d.jsx)("p",{className:(0,r.Z)("text--truncate",u.cardDescription),title:o,children:o})]})}function h(e){let{item:t}=e;const n=(0,i.LM)(t),r=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(f,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function p(e){let{item:t}=e;const n=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return(0,d.jsx)(f,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(p,{item:t});case"category":return(0,d.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,i.jA)();return(0,d.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(g,{...e});const o=(0,i.MN)(t);return(0,d.jsx)("section",{className:(0,r.Z)("row",n),children:o.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(x,{item:e})},t)))})}},88824:(e,t,n)=>{n.d(t,{c:()=>l});var r=n(67294),i=n(52263);const o=["zero","one","two","few","many","other"];function s(e){return o.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,i.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function l(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const i=n.select(t),o=n.pluralForms.indexOf(i);return r[Math.min(o,r.length-1)]}(n,t,e)}}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var r=n(67294);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);