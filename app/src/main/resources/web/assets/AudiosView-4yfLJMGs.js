import{_ as bt}from"./VPagination.vuevuetypescriptsetuptruelang-DUdPyPtr.js";import{o as a,c,a as n,j as Ve,aT as wt,g as Ue,a1 as F,C as ze,h as U,aU as It,d as At,u as Et,s as qe,I as Dt,i as St,ag as Fe,aD as qt,J as Ft,aE as Lt,aF as Mt,aG as Bt,aI as Pt,ah as Rt,K as Vt,L as Ut,M as zt,m as e,t as g,O as q,x as r,v as p,q as d,w as l,e as z,p as i,aH as Nt,N as Le,P as ee,Q as Ht,f as Qt,aV as Gt,am as Kt,S as Ot,aL as Me,aR as jt,aA as xt,E as Wt,ab as Xt,aM as Be,U as Jt,V as Yt,W as Zt,X as eo,Y as to,ap as oo,ao as so,Z as ao,$ as no,a0 as lo,ae as io,aq as co,a2 as ro,a3 as uo,a4 as po,F as _o,G as mo,aO as vo,H as fo}from"./index-B-S542RM.js";import{_ as go,a as ko,b as ho}from"./SearchInput-D0d2xIiv.js";import{_ as yo}from"./sort-rounded-BVzv_GA2.js";import{_ as $o}from"./upload-rounded-_5wwNL4r.js";import{_ as Co}from"./restore-from-trash-outline-rounded-Ck6P-VkW.js";import{_ as To}from"./IconButton.vuevuetypescriptsetuptruelang-CxW8gnDA.js";import{u as bo}from"./search-k8SzNgo1.js";import{u as wo,a as Io}from"./key-events-D1Kh05Em.js";import{a as Ao}from"./tags-x91i2rzh.js";import{u as Eo,a as Do}from"./media-trash-C0Lwc6-9.js";import{h as Pe}from"./feature-Cs4tKJbl.js";import"./search-rounded-TCa6qTC1.js";import"./rss-feed-rounded-DzJ3TVan.js";import"./vee-validate.esm-D5u4WlYW.js";const So={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},qo=n("path",{fill:"currentColor",d:"M10 16q.425 0 .713-.288T11 15V9q0-.425-.288-.712T10 8t-.712.288T9 9v6q0 .425.288.713T10 16m4 0q.425 0 .713-.288T15 15V9q0-.425-.288-.712T14 8t-.712.288T13 9v6q0 .425.288.713T14 16m-2 6q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"},null,-1),Fo=[qo];function Lo(k,b){return a(),c("svg",So,[...Fo])}const Mo={name:"material-symbols-pause-circle-outline-rounded",render:Lo},Bo={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Po=n("path",{fill:"currentColor",d:"M3 16v-2h7v2zm0-4v-2h11v2zm0-4V6h11v2zm13 12v-4h-4v-2h4v-4h2v4h4v2h-4v4z"},null,-1),Ro=[Po];function Vo(k,b){return a(),c("svg",Bo,[...Ro])}const Uo={name:"material-symbols-playlist-add",render:Vo};function Re(k,b,I=500){const _=k.cloneNode(!0),h=k.getBoundingClientRect(),P=b.getBoundingClientRect();_.style.position="absolute",_.style.top=h.top+"px",_.style.left=h.left+"px",_.style.opacity=1,document.body.appendChild(_);let y=0;function $(S){y||(y=S);const B=S-y,A=Math.min(B/I,1);_.style.top=h.top+(P.top-h.top)*A+"px",_.style.left=h.left+(P.left-h.left)*A+"px",A<1?requestAnimationFrame($):document.body.removeChild(_)}requestAnimationFrame($)}const zo=(k,b)=>{const{mutate:I,loading:_,onDone:h}=Ve({document:wt,appApi:!0}),{t:P}=Ue();return h(()=>{F.emit("refetch_app"),b()}),{loading:_,addItemsToPlaylist:(y,$,S,B)=>{let A=B;if(!S){if($.length===0){ze(P("select_first"),"error");return}A=`ids:${$.join(",")}`}const G=y.target,K=document.getElementById("quick-audio");Re(G,K),I({query:A})},addToPlaylist:(y,$)=>{const S=y.target,B=document.getElementById("quick-audio");Re(S,B),I({query:`ids:${$.id}`})}}},No=()=>{const k=U(""),{mutate:b,loading:I,onDone:_}=Ve({document:It,appApi:!0});return _(()=>{F.emit("play_audio")}),{loading:I,playPath:k,play:h=>{k.value=h.path,b({path:h.path})},pause:()=>{F.emit("pause_audio")}}},Ho=k=>(_o("data-v-8acfaff4"),k=k(),mo(),k),Qo={class:"top-app-bar"},Go=["checked","indeterminate"],Ko={class:"title"},Oo={key:0},jo={key:1},xo={class:"actions"},Wo=["onClick"],Xo={slot:"headline"},Jo=["onClick"],Yo={slot:"headline"},Zo={class:"menu-items"},es=["onClick","selected"],ts={slot:"headline"},os=["onClick","onMouseover"],ss={class:"start"},as=["onClick","checked"],ns=["onClick","checked"],ls={class:"number"},is={class:"image"},ds=["src"],cs=["src","onError"],rs={class:"title"},us={class:"subtitle"},ps={class:"duration"},_s=["onClick"],ms={class:"actions"},vs={key:2,indeterminate:"",class:"spinner-sm"},fs={class:"artist"},gs={class:"time"},ks={class:"start"},hs=Ho(()=>n("div",{class:"checkbox"},[n("div",{class:"skeleton-checkbox"})],-1)),ys={class:"number"},$s=to('<div class="image" data-v-8acfaff4><div class="skeleton-image" data-v-8acfaff4></div></div><div class="title" data-v-8acfaff4><div class="skeleton-text skeleton-title" data-v-8acfaff4></div></div><div class="subtitle" data-v-8acfaff4><div class="skeleton-text skeleton-subtitle" data-v-8acfaff4></div></div><div class="actions" data-v-8acfaff4><div class="skeleton-text skeleton-actions" data-v-8acfaff4></div></div><div class="artist" data-v-8acfaff4><div class="skeleton-text skeleton-artist" data-v-8acfaff4></div></div><div class="time" data-v-8acfaff4><div class="skeleton-text skeleton-time" data-v-8acfaff4></div></div>',6),Cs={key:0,class:"no-data-placeholder"},V=50,Ts=At({__name:"AudiosView",setup(k){var we;const b=Et(),{audioSortBy:I}=qe(b),_=U([]),{t:h}=Ue(),{parseQ:P}=bo(),y=Dt({tagIds:[]}),{app:$,urlTokenKey:S,audioPlaying:B,uploads:A}=qe(St()),G=t=>{var s;return B.value&&((s=$.value)==null?void 0:s.audioCurrent)===t.path},{input:K,upload:Ne,uploadChanged:te}=Fe(A),{input:He,upload:Qe,uploadChanged:oe}=Fe(A),{dropping:Ge,fileDragEnter:se,fileDragLeave:ae,dropFiles:Ke}=qt(A),O=U(!1),f=Ft.AUDIO,ne=Ht(),le=ne.query,j=U(parseInt(((we=le.page)==null?void 0:we.toString())??"1")),{tags:N,buckets:x,fetch:Oe}=Lt(f),je=Mt(()=>{const t={};return x.value.forEach(s=>{t[s.id]=s}),t}),w=U(""),{addToTags:xe}=Ao(f,N),{deleteItems:W,deleteItem:ie}=Bt(),{view:We}=Pt(f),{selectedIds:C,allChecked:de,realAllChecked:E,selectRealAll:Xe,allCheckedAlertVisible:Je,clearSelection:L,toggleAllChecked:ce,toggleSelect:re,total:D,checked:X,shiftEffectingIds:ue,handleItemClick:Ye,handleMouseOver:Ze,selectAll:et,shouldSelect:tt}=wo(_),{downloadItems:pe}=Rt(S,f,L,"audios.zip"),{downloadFile:_e}=oo(S),me=t=>{const s=ne.query.q;Qt(b,s?`/audios?page=${t}&q=${s}`:`/audios?page=${t}`)},{keyDown:ve,keyUp:fe}=Io(D,V,j,et,L,me,()=>{W(f,C.value,E.value,D.value,w.value)}),{addItemsToPlaylist:ot,addToPlaylist:st}=zo(_,L),at=so(),ge=U([]),{play:nt,playPath:lt,loading:it,pause:dt}=No(),ct=t=>{ge.value.push(t)},{loading:J,fetch:R}=Vt({handle:(t,s)=>{O.value=!1,s?ze(h(s),"error"):t&&(_.value=t.items,D.value=t.total)},document:Gt,variables:()=>({offset:(j.value-1)*V,limit:V,query:w.value,sortBy:I.value}),appApi:!0}),{trashLoading:ke,trash:he}=Eo(f,L,R),{restoreLoading:ye,restore:$e}=Do(f,L,R);function rt(t){return t?`/audios?q=${t}`:"/audios"}function ut(t,s){O.value=!0,I.value=s,t.close()}function Y(){const t=x.value.find(s=>s.id===y.bucketId);return t?vo(t.topItems[0]):`${$.value.internalStoragePath}/Music`}function pt(t){Ne(Y()),t.close()}function _t(t){Qe(Y()),t.close()}function mt(t){Ke(t,Y(),"audio")}const H=()=>{let t=w.value;return E.value||(t=`ids:${C.value.join(",")}`),t},Ce=t=>{t.type===f&&(L(),R())},Te=t=>{t.type===f&&R()},be=t=>{t.type===f&&(L(),R())};function vt(t){const s=t.tags.map(M=>M.id);ao(no,{type:f,tags:N.value,item:{key:t.id,title:t.title,size:t.size},selected:N.value.filter(M=>s.includes(M.id))})}return Ut(()=>{var t;w.value=lo(((t=le.q)==null?void 0:t.toString())??""),P(y,w.value),Oe(),R(),F.on("item_tags_updated",Te),F.on("items_tags_updated",Ce),F.on("media_items_actioned",be),window.addEventListener("keydown",ve),window.addEventListener("keyup",fe)}),zt(()=>{F.off("item_tags_updated",Te),F.off("items_tags_updated",Ce),F.off("media_items_actioned",be),window.removeEventListener("keydown",ve),window.removeEventListener("keyup",fe)}),(t,s)=>{const M=io,m=To,Ie=Co,Q=co,Ae=ho,Ee=Uo,De=ro,ft=go,gt=$o,Se=Kt,kt=yo,ht=ko,yt=uo,$t=po,Ct=Mo,Tt=bt,u=Ot("tooltip");return a(),c(q,null,[n("div",Qo,[n("md-checkbox",{"touch-target":"wrapper",onChange:s[0]||(s[0]=(...o)=>e(ce)&&e(ce)(...o)),checked:e(de),indeterminate:!e(de)&&e(X)},null,40,Go),n("div",Ko,[e(C).length?(a(),c("span",Oo,g(t.$t("x_selected",{count:e(E)?e(D).toLocaleString():e(C).length.toLocaleString()})),1)):(a(),c("span",jo,g(t.$t("page_title.audios"))+" ("+g(e(D).toLocaleString())+")",1)),e(X)?(a(),c(q,{key:2},[y.trash?(a(),c(q,{key:0},[r((a(),p(m,{onClick:s[1]||(s[1]=l(o=>e(W)(e(f),e(C),e(E),e(D),w.value),["stop"]))},{icon:d(()=>[i(M)]),_:1})),[[u,t.$t("delete")]]),r((a(),p(m,{onClick:s[2]||(s[2]=l(o=>e($e)(H()),["stop"])),loading:e(ye)(H())},{icon:d(()=>[i(Ie)]),_:1},8,["loading"])),[[u,t.$t("restore")]]),r((a(),p(m,{onClick:s[3]||(s[3]=l(o=>e(pe)(e(E),e(C),w.value),["stop"]))},{icon:d(()=>[i(Q)]),_:1})),[[u,t.$t("download")]])],64)):(a(),c(q,{key:1},[e(Pe)(e(Me).MEDIA_TRASH,e($).osVersion)?r((a(),p(m,{key:0,onClick:s[4]||(s[4]=l(o=>e(he)(H()),["stop"])),loading:e(ke)(H())},{icon:d(()=>[i(Ae)]),_:1},8,["loading"])),[[u,t.$t("move_to_trash")]]):r((a(),p(m,{key:1,onClick:s[5]||(s[5]=l(o=>e(W)(e(f),e(C),e(E),e(D),w.value),["stop"]))},{icon:d(()=>[i(M)]),_:1})),[[u,t.$t("delete")]]),r((a(),p(m,{onClick:s[6]||(s[6]=l(o=>e(pe)(e(E),e(C),w.value),["stop"]))},{icon:d(()=>[i(Q)]),_:1})),[[u,t.$t("download")]]),r((a(),p(m,{onClick:s[7]||(s[7]=l(o=>e(ot)(o,e(C),e(E),w.value),["stop"]))},{icon:d(()=>[i(Ee)]),_:1})),[[u,t.$t("add_to_playlist")]]),r((a(),p(m,{onClick:s[8]||(s[8]=l(o=>e(xe)(e(C),e(E),w.value),["stop"]))},{icon:d(()=>[i(De)]),_:1})),[[u,t.$t("add_to_tags")]])],64))],64)):z("",!0)]),n("div",xo,[i(ft,{filter:y,tags:e(N),buckets:e(x),"get-url":rt},null,8,["filter","tags","buckets"]),i(Se,null,{content:d(o=>[n("md-menu-item",{onClick:l(T=>pt(o),["stop"])},[n("div",Xo,g(t.$t("upload_files")),1)],8,Wo),n("md-menu-item",{onClick:l(T=>_t(o),["stop"])},[n("div",Yo,g(t.$t("upload_folder")),1)],8,Jo)]),default:d(()=>[r((a(),p(m,null,{icon:d(()=>[i(gt)]),_:1})),[[u,t.$t("upload")]])]),_:1}),i(Se,null,{content:d(o=>[n("div",Zo,[(a(!0),c(q,null,ee(e(at),T=>(a(),c("md-menu-item",{key:T.value,onClick:Z=>ut(o,T.value),selected:T.value===e(I)},[n("div",ts,g(t.$t(T.label)),1)],8,es))),128))])]),default:d(()=>[r((a(),p(m,{loading:O.value},{icon:d(()=>[i(kt)]),_:1},8,["loading"])),[[u,t.$t("sort")]])]),_:1})])]),i(ht,{limit:V,total:e(D),"all-checked-alert-visible":e(Je),"real-all-checked":e(E),"select-real-all":e(Xe),"clear-selection":e(L)},null,8,["total","all-checked-alert-visible","real-all-checked","select-real-all","clear-selection"]),n("div",{class:"scroll-content",onDragover:s[13]||(s[13]=l((...o)=>e(se)&&e(se)(...o),["stop","prevent"]))},[r(n("div",{class:"drag-mask",onDrop:l(mt,["stop","prevent"]),onDragleave:s[9]||(s[9]=l((...o)=>e(ae)&&e(ae)(...o),["stop","prevent"]))},g(t.$t("release_to_send_files")),545),[[Nt,e(Ge)]]),n("div",{class:Le(["audio-list",{"select-mode":e(X)}])},[(a(!0),c(q,null,ee(_.value,(o,T)=>{var Z;return a(),c("section",{class:Le(["media-item selectable-card",{selected:e(C).includes(o.id),selecting:e(ue).includes(o.id)}]),key:o.id,onClick:l(v=>e(Ye)(v,o,T,()=>{e(nt)(o)}),["stop"]),onMouseover:v=>e(Ze)(v,T)},[n("div",ss,[e(ue).includes(o.id)?(a(),c("md-checkbox",{key:0,class:"checkbox","touch-target":"wrapper",onClick:l(v=>e(re)(v,o,T),["stop"]),checked:e(tt)},null,8,as)):(a(),c("md-checkbox",{key:1,class:"checkbox","touch-target":"wrapper",onClick:l(v=>e(re)(v,o,T),["stop"]),checked:e(C).includes(o.id)},null,8,ns)),n("span",ls,[i(yt,{id:T+1,raw:o},null,8,["id","raw"])])]),n("div",is,[ge.value.includes(o.id)?(a(),c("img",{key:0,src:`/ficons/${e(jt)(o.path)}.svg`,class:"svg"},null,8,ds)):(a(),c("img",{key:1,class:"image-thumb",src:e(xt)(o.albumFileId,"&w=200&h=200"),onError:v=>ct(o.id)},null,40,cs))]),n("div",rs,g(o.title),1),n("div",us,[n("span",null,g(e(Wt)(o.size)),1),n("span",ps,g(e(Xt)(o.duration)),1),n("a",{onClick:l(v=>e(We)(e(b),o.bucketId),["stop","prevent"])},g((Z=je.value[o.bucketId])==null?void 0:Z.name),9,_s),i($t,{tags:o.tags,type:e(f),"only-links":!0},null,8,["tags","type"])]),n("div",ms,[y.trash?(a(),c(q,{key:0},[r((a(),p(m,{class:"sm",onClick:l(v=>e(ie)(e(f),o),["stop"])},{icon:d(()=>[i(M)]),_:2},1032,["onClick"])),[[u,t.$t("delete")]]),r((a(),p(m,{class:"sm",onClick:l(v=>e($e)(`ids:${o.id}`),["stop"]),loading:e(ye)(`ids:${o.id}`)},{icon:d(()=>[i(Ie)]),_:2},1032,["onClick","loading"])),[[u,t.$t("restore")]]),r((a(),p(m,{class:"sm",onClick:l(v=>e(_e)(o.path,e(Be)(o.path).replace(" ","-")),["stop"])},{icon:d(()=>[i(Q)]),_:2},1032,["onClick"])),[[u,t.$t("download")]])],64)):(a(),c(q,{key:1},[e(Pe)(e(Me).MEDIA_TRASH,e($).osVersion)?r((a(),p(m,{key:0,class:"sm",onClick:l(v=>e(he)(`ids:${o.id}`),["stop"]),loading:e(ke)(`ids:${o.id}`)},{icon:d(()=>[i(Ae)]),_:2},1032,["onClick","loading"])),[[u,t.$t("move_to_trash")]]):r((a(),p(m,{key:1,class:"sm",onClick:l(v=>e(ie)(e(f),o),["stop"])},{icon:d(()=>[i(M)]),_:2},1032,["onClick"])),[[u,t.$t("delete")]]),r((a(),p(m,{class:"sm",onClick:l(v=>e(_e)(o.path,e(Be)(o.path).replace(" ","-")),["stop"])},{icon:d(()=>[i(Q)]),_:2},1032,["onClick"])),[[u,t.$t("download")]]),r((a(),p(m,{class:"sm",onClick:l(v=>e(st)(v,o),["stop","prevent"])},{icon:d(()=>[i(Ee)]),_:2},1032,["onClick"])),[[u,t.$t("add_to_playlist")]]),r((a(),p(m,{class:"sm",onClick:l(v=>vt(o),["stop"])},{icon:d(()=>[i(De)]),_:2},1032,["onClick"])),[[u,t.$t("add_to_tags")]])],64)),e(it)&&o.path===e(lt)?(a(),c("md-circular-progress",vs)):G(o)?r((a(),p(m,{key:3,class:"sm",onClick:s[10]||(s[10]=l(v=>e(dt)(),["stop"]))},{icon:d(()=>[i(Ct)]),_:1})),[[u,t.$t("pause")]]):z("",!0)]),n("div",fs,g(o.artist),1),n("div",gs,[r((a(),c("span",null,[Yt(g(e(Zt)(o.createdAt)),1)])),[[u,e(Jt)(o.createdAt)]])])],42,os)}),128)),e(J)&&_.value.length===0?(a(),c(q,{key:0},ee(20,o=>n("section",{class:"media-item selectable-card-skeleton",key:o},[n("div",ks,[hs,n("span",ys,g(o),1)]),$s])),64)):z("",!0)],2),!e(J)&&_.value.length===0?(a(),c("div",Cs,g(t.$t(e(eo)(e(J),e($).permissions,"WRITE_EXTERNAL_STORAGE"))),1)):z("",!0),e(D)>V?(a(),p(Tt,{key:1,page:j.value,go:me,total:e(D),limit:V},null,8,["page","total"])):z("",!0),n("input",{ref_key:"fileInput",ref:K,style:{display:"none"},type:"file",accept:"audio/*",multiple:"",onChange:s[11]||(s[11]=(...o)=>e(te)&&e(te)(...o))},null,544),n("input",{ref_key:"dirFileInput",ref:He,style:{display:"none"},type:"file",accept:"audio/*",multiple:"",webkitdirectory:"",mozdirectory:"",directory:"",onChange:s[12]||(s[12]=(...o)=>e(oe)&&e(oe)(...o))},null,544)],32)],64)}}}),Us=fo(Ts,[["__scopeId","data-v-8acfaff4"]]);export{Us as default};