import{_ as g}from"./TagFilter.vuevuetypescriptsetuptruelang-9b4a0b6e.js";import{_ as k}from"./BucketFilter.vuevuetypescriptsetuptruelang-9dafd033.js";import{d as C,D as V,e as w,az as y,G as z,c as B,p as s,H as a,j as e,o as D,a as o,t as d,l as I,I as $,C as b}from"./index-f62f2ff2.js";import{g as m,M as E}from"./splitpanes.es-2b477659.js";import"./EditValueModal-d57e85f6.js";import"./vee-validate.esm-65abdaa1.js";const M={class:"page-container"},N={class:"sidebar"},S={class:"nav-title"},O={class:"nav"},R=["onClick"],j={class:"main"},A=C({__name:"VideosRootView",setup(q){var r,_;const n=V(),u=w(),i=y(n.query),c=((r=i.find(t=>t.name==="tag"))==null?void 0:r.value)??"",l=((_=i.find(t=>t.name==="bucket_id"))==null?void 0:_.value)??"";function p(){b(u,"/videos")}return(t,x)=>{const f=k,v=g,h=z("router-view");return D(),B("div",M,[s(e(E),null,{default:a(()=>[s(e(m),{size:"20","min-size":"10"},{default:a(()=>[o("div",N,[o("h2",S,d(t.$t("page_title.videos")),1),o("ul",O,[o("li",{onClick:I(p,["prevent"]),class:$({active:e(n).path==="/videos"&&!e(c)&&!e(l)})},d(t.$t("all")),11,R),s(f,{type:"VIDEO",selected:e(l)},null,8,["selected"])]),s(v,{type:"VIDEO",selected:e(c)},null,8,["selected"])])]),_:1}),s(e(m),null,{default:a(()=>[o("div",j,[s(h)])]),_:1})]),_:1})])}}});export{A as default};