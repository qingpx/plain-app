import{d as g,n as w,p as y,s as B,a as S,q as V,o as u,c as f,e as o,v as r,g as e,b as t,f as n,w as l,x as c,k as z,z as _}from"./index-b61558b0.js";import{g as m,M}from"./splitpanes.es-52b41a88.js";const N={class:"page-container container-fluid"},R={class:"sidebar"},T={class:"nav-title"},b={class:"nav"},P=["onClick"],q={class:"main"},j=g({__name:"FilesRootView",setup(D){const i=w(),d=y(),{app:v}=B(S()),h=i.params.type;function p(s){_(d,`/files/${s}`)}function C(){_(d,"/files")}return(s,a)=>{const k=V("router-view");return u(),f("div",N,[o(e(M),null,{default:r(()=>[o(e(m),{size:"20"},{default:r(()=>[t("div",R,[t("h2",T,n(s.$t("page_title.files")),1),t("ul",b,[t("li",{onClick:a[0]||(a[0]=l($=>p("recent"),["prevent"])),class:c({active:e(i).path==="/files/recent"})},n(s.$t("recents")),3),t("li",{onClick:l(C,["prevent"]),class:c({active:e(i).path==="/files"})},n(s.$t("internal_storage")),11,P),e(v).sdcardPath?(u(),f("li",{key:0,onClick:a[1]||(a[1]=l($=>p("sdcard"),["prevent"])),class:c({active:e(h)==="sdcard"})},n(s.$t("sdcard")),3)):z("",!0)])])]),_:1}),o(e(m),null,{default:r(()=>[t("div",q,[o(k)])]),_:1})]),_:1})])}}});export{j as default};