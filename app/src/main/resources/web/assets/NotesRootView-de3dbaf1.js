import{_ as v}from"./TagFilter.vuevuetypescriptsetuptruelang-c1b0a74f.js";import{d as g,p as C,q as k,v as w,x as N,o as y,c as B,f as s,y as n,j as e,e as t,g as i,w as l,z as _,B as p}from"./index-5f5c60b6.js";import{g as d,M as $}from"./splitpanes.es-5e471b0b.js";import"./index-23cdd2f2.js";import"./EditValueModal.vuevuetypescriptsetuptruelang-27a0512e.js";import"./VModal.vuevuetypescriptsetuptruelang-61cd4dae.js";import"./vee-validate.esm-e0a551fe.js";import"./DeleteConfirm.vuevuetypescriptsetuptruelang-42857978.js";const z={class:"page-container container-fluid"},M={class:"sidebar"},S={class:"nav-title"},T={class:"nav"},V=["onClick"],q=["onClick"],E={class:"main"},H=g({__name:"NotesRootView",setup(R){const o=C(),r=k(),c=w(o.query);function m(){p(r,"/notes/trash")}function u(){p(r,"/notes")}return(a,b)=>{const h=v,f=N("router-view");return y(),B("div",z,[s(e($),null,{default:n(()=>[s(e(d),{size:"20"},{default:n(()=>[t("div",M,[t("h2",S,i(a.$t("page_title.notes")),1),t("ul",T,[t("li",{onClick:l(u,["prevent"]),class:_({active:e(o).path==="/notes"&&!e(c)})},i(a.$t("all")),11,V),t("li",{onClick:l(m,["prevent"]),class:_({active:e(o).path==="/notes/trash"})},i(a.$t("trash")),11,q)]),s(h,{"tag-type":"NOTE",selected:e(c)},null,8,["selected"])])]),_:1}),s(e(d),null,{default:n(()=>[t("div",E,[s(f)])]),_:1})]),_:1})])}}});export{H as default};