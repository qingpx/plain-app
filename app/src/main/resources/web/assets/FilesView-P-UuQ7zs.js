import{_ as no}from"./more-vert-XZtlvs7x.js";import{o as n,c as l,a as t,d as Pe,u as Ge,I as We,h as T,S as je,e as V,p,x as h,w as _,y as so,A as ao,t as r,O as $,f as Je,F as Xe,G as Ye,bu as Ze,H as et,bv as lo,g as io,s as de,i as co,aD as ro,aF as He,bw as uo,bx as _o,by as po,K as ho,bz as mo,ag as Ae,j as vo,L as fo,M as ko,m as s,P as ue,v as k,q as u,aH as go,Q as yo,ap as $o,C as bo,bA as wo,bB as Co,bC as To,Z as Q,am as qo,V as _e,N as Io,aA as Do,E as F,U as So,W as Vo,bf as Fo,X as Eo,Y as Lo,ao as Bo,bD as No,aM as Mo,bE as zo,bF as Ue,bG as Ke,ai as Re,bH as xe,a0 as Ho,a1 as P,ae as Ao,aq as Uo,a3 as Ko,bI as Ro,bJ as xo,bK as Oo}from"./index-B-S542RM.js";import{_ as Qo}from"./sort-rounded-BVzv_GA2.js";import{_ as Po}from"./refresh-rounded-B2-aEsw4.js";import{_ as Go}from"./content-paste-rounded-CbiavvwV.js";import{_ as Wo}from"./upload-rounded-_5wwNL4r.js";import{_ as jo}from"./search-rounded-TCa6qTC1.js";import{_ as Jo}from"./IconButton.vuevuetypescriptsetuptruelang-CxW8gnDA.js";import{_ as tt}from"./default-BQXvEOng.js";import{E as Oe}from"./EditValueModal-u3M261_O.js";import{u as Xo,c as Yo}from"./key-events-D1Kh05Em.js";import"./vee-validate.esm-D5u4WlYW.js";const Zo={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},en=t("path",{fill:"currentColor",d:"M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20zm0-2h16V8h-8.825l-2-2H4zm0 0V6zm10-4v1q0 .425.288.713T15 16t.713-.288T16 15v-1h1q.425 0 .713-.288T18 13t-.288-.712T17 12h-1v-1q0-.425-.288-.712T15 10t-.712.288T14 11v1h-1q-.425 0-.712.288T12 13t.288.713T13 14z"},null,-1),tn=[en];function on(y,v){return n(),l("svg",Zo,[...tn])}const nn={name:"material-symbols-create-new-folder-outline-rounded",render:on},sn={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},an=t("path",{fill:"currentColor",d:"M19.075 21.9L17.5 20.35q-1.225.8-2.613 1.225T12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12q0-1.5.425-2.887T3.65 6.5L2.075 4.925q-.3-.3-.3-.712t.3-.713t.713-.3t.712.3l17 17q.3.3.3.7t-.3.7t-.712.3t-.713-.3M12 20q1.075 0 2.088-.275t1.962-.825L5.1 7.95q-.55.95-.825 1.962T4 12q0 3.325 2.338 5.663T12 20m0-16q-.825 0-1.612.163T8.85 4.65q-.4.175-.8.05t-.6-.475t-.088-.75t.488-.575q.975-.45 2.012-.675T12 2q2.075 0 3.9.788t3.175 2.137T21.213 8.1T22 12q0 1.1-.225 2.138T21.1 16.15q-.175.375-.575.488t-.75-.088t-.475-.6t.05-.8q.325-.75.488-1.537T20 12q0-3.325-2.337-5.663T12 4m-1.425 9.425"},null,-1),ln=[an];function cn(y,v){return n(),l("svg",sn,[...ln])}const rn={name:"material-symbols-hide-source-outline-rounded",render:cn},dn=y=>(Xe("data-v-51d6a30b"),y=y(),Ye(),y),un={key:"filter-text"},_n=["label"],pn={key:"filter-show-hidden"},hn=["label"],mn=dn(()=>t("md-ripple",null,null,-1)),vn=["open"],fn={class:"filters"},kn={class:"form-row"},gn=["label"],yn=["label","selected"],$n={class:"buttons"},bn=Pe({__name:"FileSearchInput",props:{parent:{type:String,required:!0},filter:{type:Object,required:!0},getUrl:{type:Function,required:!0}},setup(y,{expose:v}){const{copyFilter:A,buildQ:G}=Ze(),W=Ge(),c=We({showHidden:!1,linkName:"",text:"",parent:""}),b=y,E=T(!1);function L(){A(c,b.filter),g(),N()}function g(){Je(W,b.getUrl(G(b.filter)))}function w(){b.filter.text="",g()}function U(){E.value=!0,A(b.filter,c)}function N(){E.value=!1}function I(){b.filter.showHidden=!1,g()}function K(){c.showHidden=!c.showHidden}return v({dismiss:N}),(D,S)=>{const R=rn,x=jo,j=je("tooltip");return n(),l($,null,[t("md-chip-set",null,[b.filter.text?(n(),l("div",un,[t("md-input-chip",{label:b.filter.text,"remove-only":"",onRemove:w},null,40,_n)])):V("",!0),b.filter.showHidden?(n(),l("div",pn,[t("md-input-chip",{label:D.$t("show_hidden"),"remove-only":"",onRemove:I},[p(R,{slot:"icon"})],40,hn)])):V("",!0)]),h((n(),l("button",{id:"btn-search",class:"btn-icon",onClick:_(U,["prevent"])},[mn,p(x)])),[[j,D.$t("search")]]),t("md-menu",{positioning:"popover",anchor:"btn-search","menu-corner":"start-end","anchor-corner":"end-end","stay-open-on-focusout":"",quick:"",open:E.value,onClosed:N},[t("div",fn,[t("div",kn,[h(t("md-outlined-text-field",{label:D.$t("keywords"),"onUpdate:modelValue":S[0]||(S[0]=J=>c.text=J),onKeyup:ao(L,["enter"])},null,40,gn),[[so,c.text]])]),t("md-chip-set",null,[t("md-filter-chip",{key:"chip-show-hidden",label:D.$t("show_hidden"),selected:c.showHidden,onClick:K},null,8,yn)]),t("div",$n,[t("md-filled-button",{onClick:_(L,["stop"])},r(D.$t("search")),1)])])],40,vn)],64)}}}),wn=et(bn,[["__scopeId","data-v-51d6a30b"]]),Cn={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Tn=t("path",{fill:"currentColor",d:"m12 14l-2.35 2.35q.2.375.275.8T10 18q0 1.65-1.175 2.825T6 22t-2.825-1.175T2 18t1.175-2.825T6 14q.425 0 .85.075t.8.275L10 12L7.65 9.65q-.375.2-.8.275T6 10q-1.65 0-2.825-1.175T2 6t1.175-2.825T6 2t2.825 1.175T10 6q0 .425-.075.85t-.275.8L20.6 18.6q.675.675.3 1.538T19.575 21q-.275 0-.537-.112t-.463-.313zm3-3l-2-2l5.575-5.575q.2-.2.463-.312T19.574 3q.95 0 1.313.875t-.313 1.55zM6 8q.825 0 1.413-.587T8 6t-.587-1.412T6 4t-1.412.588T4 6t.588 1.413T6 8m6 4.5q.2 0 .35-.15t.15-.35t-.15-.35t-.35-.15t-.35.15t-.15.35t.15.35t.35.15M6 20q.825 0 1.413-.587T8 18t-.587-1.412T6 16t-1.412.588T4 18t.588 1.413T6 20"},null,-1),qn=[Tn];function In(y,v){return n(),l("svg",Cn,[...qn])}const Dn={name:"material-symbols-content-cut-rounded",render:In},Sn={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Vn=t("path",{fill:"currentColor",d:"M9 18q-.825 0-1.412-.587T7 16V4q0-.825.588-1.412T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.587 1.413T18 18zm0-2h9V4H9zm-4 6q-.825 0-1.412-.587T3 20V7q0-.425.288-.712T4 6t.713.288T5 7v13h10q.425 0 .713.288T16 21t-.288.713T15 22zm4-6V4z"},null,-1),Fn=[Vn];function En(y,v){return n(),l("svg",Sn,[...Fn])}const Ln={name:"material-symbols-content-copy-outline-rounded",render:En},Bn=lo({id:"files",state:()=>({selectedFiles:[],isCut:!1})}),Nn=y=>(Xe("data-v-ecafc752"),y=y(),Ye(),y),Mn={class:"top-app-bar"},zn=["checked","indeterminate"],Hn={key:0},An={key:1,class:"breadcrumb"},Un={key:0},Kn=["onClick"],Rn={key:0},xn=["onClick"],On={class:"actions"},Qn=["onClick"],Pn={slot:"headline"},Gn=["onClick"],Wn={slot:"headline"},jn={class:"menu-items"},Jn=["onClick","selected"],Xn={slot:"headline"},Yn={key:0,class:"scroller"},Zn={class:"start"},es=Nn(()=>t("div",{class:"checkbox"},[t("div",{class:"skeleton-checkbox"})],-1)),ts={class:"number"},os=Lo('<div class="image" data-v-ecafc752><div class="skeleton-image" data-v-ecafc752></div></div><div class="title" data-v-ecafc752><div class="skeleton-text skeleton-title" data-v-ecafc752></div></div><div class="subtitle" data-v-ecafc752><div class="skeleton-text skeleton-subtitle" data-v-ecafc752></div></div><div class="actions" data-v-ecafc752><div class="skeleton-text skeleton-actions" data-v-ecafc752></div></div>',4),ns=["onClick","onMouseover"],ss={class:"start"},as=["onClick","checked"],ls=["onClick","checked"],is={class:"number"},cs=["onClick"],rs={key:0,src:"/ficons/folder.svg",class:"svg"},ds={key:0,class:"svg",src:tt},us=["src","onError"],_s=["src","onError"],ps={key:3,class:"svg",src:tt},hs={class:"title"},ms={class:"subtitle"},vs={key:0},fs={key:1},ks={class:"actions"},gs=["onClick"],ys={slot:"headline"},$s=["onClick"],bs={slot:"headline"},ws={class:"card card-info"},Cs={class:"key-value vertical"},Ts={class:"key"},qs={class:"value"},Is=["onClick"],Ds={slot:"headline"},Ss=["onClick"],Vs={slot:"headline"},Fs=["onClick"],Es={slot:"headline"},Ls=["onClick"],Bs={slot:"headline"},Ns=["onClick"],Ms={slot:"headline"},zs={key:1,class:"no-data-placeholder"},Qe=1e4,Hs=Pe({__name:"FilesView",setup(y){var Me;const{t:v}=io(),A=T([]),{parseQ:G,buildQ:W}=Ze(),c=We({linkName:"",showHidden:!1,text:"",parent:""}),E=yo().query,L=T(""),g=T([]),{selectedIds:w,allChecked:U,realAllChecked:N,clearSelection:I,toggleAllChecked:K,toggleSelect:D,total:S,checked:R,shiftEffectingIds:x,handleItemClick:j,handleMouseOver:J,selectAll:ot,shouldSelect:nt}=Xo(g),{keyDown:pe,keyUp:he}=Yo(S,ot,I,()=>{}),X=T(!1),Y=T(!1),me=T([]),ve=T([]),st=e=>{me.value.push(e)},at=e=>{ve.value.push(e)},lt=Bo(),fe=Ge(),{fileSortBy:Z}=de(fe),ke=co(),{app:ge,urlTokenKey:M,uploads:ee}=de(ke),{selectedFiles:it,isCut:ct}=de(Bn()),{dropping:rt,fileDragEnter:ye,fileDragLeave:$e,dropFiles:dt}=ro(ee),O=He(()=>No(c.linkName,ge.value)),{createPath:ut,createVariables:_t,createMutation:pt}=uo(M,g),{renameItem:ht,renameDone:mt,renameMutation:vt,renameVariables:ft}=_o(()=>{z()}),{internal:be,sdcard:we,usb:kt,refetch:te}=po(),{downloadFile:oe,downloadDir:gt,downloadFiles:yt}=$o(M),{view:Ce}=xo(A,(e,o)=>{ke.lightbox={sources:e,index:o,visible:!0}}),$t=T(parseInt(((Me=E.page)==null?void 0:Me.toString())??"1")),bt=He(()=>{const e=[];let o=c.parent;for(;o&&o!==O.value;)e.unshift({path:o,name:Mo(o)}),o=o.substring(0,o.lastIndexOf("/"));return e.unshift({path:O.value,name:Lt()}),e}),Te=T(!0),{loading:ne,fetch:z}=ho({handle:async(e,o)=>{if(Te.value=!1,X.value=!1,Y.value=!1,o)bo(v(o),"error");else{const C=[];for(const m of e.files)C.push(wo(m,M.value));g.value=C,S.value=C.length}},document:Co,variables:()=>({root:O.value,offset:($t.value-1)*Qe,limit:Qe,query:L.value,sortBy:Z.value}),options:{fetchPolicy:"cache-and-network"},appApi:!0}),{loading:wt,canPaste:qe,copy:se,cut:Ie,paste:ae}=mo(g,ct,it,z,te),{input:Ct,upload:Tt,uploadChanged:De}=Ae(ee),{input:qt,upload:It,uploadChanged:Se}=Ae(ee),{loading:Dt,mutate:St,onDone:Vt}=vo({document:To,appApi:!0});Vt(e=>{yt(e.data.setTempValue.key),I()});const Ft=()=>{St({key:zo(),value:JSON.stringify(w.value.map(e=>({path:e})))})},le=e=>{e.forEach(o=>{Oo(g.value,C=>C.id===o.id)}),I(),te()},Et=()=>{Q(Ue,{files:g.value.filter(e=>w.value.includes(e.id)),onDone:e=>{le(e)}})};function Lt(){if(c.linkName==="sdcard")return v("sdcard");if(c.linkName==="app")return v("app_name");if(c.linkName.startsWith("usb")){const e=parseInt(c.linkName.substring(3));return`${v("usb_storage")} ${e}`}return v("internal_storage")}function Ve(){var e,o,C,m;if(c.linkName==="sdcard")return`${v("storage_free_total",{free:F(((e=we.value)==null?void 0:e.freeBytes)??0),total:F(((o=we.value)==null?void 0:o.totalBytes)??0)})}`;if(c.linkName==="app")return v("app_name");if(c.linkName.startsWith("usb")){const ce=parseInt(c.linkName.substring(3)),q=kt.value[ce-1];return`${v("storage_free_total",{free:F((q==null?void 0:q.freeBytes)??0),total:F((q==null?void 0:q.totalBytes)??0)})}`}return`${F(((C=be.value)==null?void 0:C.freeBytes)??0)} / ${F(((m=be.value)==null?void 0:m.totalBytes)??0,!0,0)}`}function ie(e){I(),c.parent=e;const o=W(c);Je(fe,Fe(o))}function Fe(e){return`/files?q=${e}`}function Bt(e){if(e.isDir){ie(e.path);return}Ke(e.name)?window.open(Re(M.value,e.path),"_blank"):xe(e.name)?Ce(g.value,e):oe(e.path)}function Nt(e,o){o.isDir||(e.stopPropagation(),Ke(o.name)?window.open(Re(M.value,o.path),"_blank"):xe(o.name)?Ce(g.value,o):oe(o.path))}function Mt(e,o){Y.value=!0,Z.value=o,e.close()}function zt(){X.value=!0,z()}const Ht=()=>{ut.value=c.parent,Q(Oe,{title:v("name"),placeholder:v("name"),mutation:pt,getVariables:_t})};function Ee(e,o){Tt(o),e.close()}function Le(e,o){It(o),e.close()}function At(){se(w.value),I()}function Ut(){Ie(w.value),I()}function Kt(){ae(c.parent)}function Rt(e,o){se([o.id]),ae(c.parent),e.close()}function xt(e,o){Ie([o.id]),e.close()}function Ot(e,o){se([o.id]),e.close()}function Qt(e,o){ae(o.path),e.close()}function Pt(e,o){ht.value=o,Q(Oe,{title:v("rename"),placeholder:v("name"),value:o.name,mutation:vt,getVariables:ft,done:mt}),e.close()}function Gt(e){Q(Ue,{files:[e],onDone:le})}const Be=e=>{e.status==="done"&&setTimeout(()=>{z(),te()},1e3)},Ne=e=>{le([e.item])};function Wt(e){dt(e,c.parent)}return fo(()=>{var e;L.value=Ho(((e=E.q)==null?void 0:e.toString())??""),G(c,L.value),z(),P.on("upload_task_done",Be),P.on("file_deleted",Ne),window.addEventListener("keydown",pe),window.addEventListener("keyup",he)}),ko(()=>{P.off("upload_task_done",Be),P.off("file_deleted",Ne),window.removeEventListener("keydown",pe),window.removeEventListener("keyup",he)}),(e,o)=>{const C=Ln,m=Jo,ce=Dn,q=Ao,re=Uo,jt=wn,Jt=nn,ze=Wo,H=qo,Xt=Go,Yt=Po,Zt=Qo,eo=Ko,to=Ro,oo=no,f=je("tooltip");return n(),l($,null,[t("div",Mn,[t("md-checkbox",{"touch-target":"wrapper",onChange:o[0]||(o[0]=(...i)=>s(K)&&s(K)(...i)),checked:s(U),indeterminate:!s(U)&&s(R)},null,40,zn),s(w).length?(n(),l("span",Hn,r(e.$t("x_selected",{count:s(N)?s(S).toLocaleString():s(w).length.toLocaleString()})),1)):(n(),l("div",An,[(n(!0),l($,null,ue(bt.value,(i,a)=>(n(),l($,{key:i.path},[a===0?(n(),l($,{key:0},[i.path===c.parent?h((n(),l("span",Un,[_e(r(i.name)+" ("+r(s(S))+")",1)])),[[f,Ve()]]):h((n(),l("a",{key:1,href:"#",onClick:_(d=>ie(i.path),["stop","prevent"])},[_e(r(i.name),1)],8,Kn)),[[f,Ve()]])],64)):(n(),l($,{key:1},[i.path===c.parent?(n(),l("span",Rn,r(i.name)+" ("+r(s(S))+")",1)):(n(),l("a",{key:1,href:"#",onClick:_(d=>ie(i.path),["stop","prevent"])},r(i.name),9,xn))],64))],64))),128))])),s(R)?(n(),l($,{key:2},[h((n(),k(m,{onClick:_(At,["stop"])},{icon:u(()=>[p(C)]),_:1})),[[f,e.$t("copy")]]),h((n(),k(m,{onClick:_(Ut,["stop"])},{icon:u(()=>[p(ce)]),_:1})),[[f,e.$t("cut")]]),h((n(),k(m,{onClick:_(Et,["stop"])},{icon:u(()=>[p(q)]),_:1})),[[f,e.$t("delete")]]),h((n(),k(m,{loading:s(Dt),onClick:_(Ft,["stop"])},{icon:u(()=>[p(re)]),_:1},8,["loading"])),[[f,e.$t("download")]])],64)):V("",!0),t("div",On,[p(jt,{filter:c,parent:O.value,"get-url":Fe},null,8,["filter","parent"]),h((n(),k(m,{onClick:Ht},{icon:u(()=>[p(Jt)]),_:1})),[[f,e.$t("create_folder")]]),p(H,null,{content:u(i=>[t("md-menu-item",{onClick:_(a=>Ee(i,c.parent),["stop"])},[t("div",Pn,r(e.$t("upload_files")),1)],8,Qn),t("md-menu-item",{onClick:_(a=>Le(i,c.parent),["stop"])},[t("div",Wn,r(e.$t("upload_folder")),1)],8,Gn)]),default:u(()=>[h((n(),k(m,null,{icon:u(()=>[p(ze)]),_:1})),[[f,e.$t("upload")]])]),_:1}),s(qe)()?h((n(),k(m,{key:0,loading:s(wt),onClick:Kt},{icon:u(()=>[p(Xt)]),_:1},8,["loading"])),[[f,e.$t("paste")]]):V("",!0),h((n(),k(m,{loading:X.value,onClick:zt},{icon:u(()=>[p(Yt)]),_:1},8,["loading"])),[[f,e.$t("refresh")]]),p(H,null,{content:u(i=>[t("div",jn,[(n(!0),l($,null,ue(s(lt),a=>(n(),l("md-menu-item",{onClick:d=>Mt(i,a.value),key:a.value,selected:a.value===s(Z)},[t("div",Xn,r(e.$t(a.label)),1)],8,Jn))),128))])]),default:u(()=>[h((n(),k(m,{loading:Y.value},{icon:u(()=>[p(Zt)]),_:1},8,["loading"])),[[f,e.$t("sort")]])]),_:1})])]),s(ne)&&Te.value?(n(),l("div",Yn,[(n(),l($,null,ue(20,i=>t("section",{class:"file-item selectable-card-skeleton",key:i},[t("div",Zn,[es,t("span",ts,r(i),1)]),os])),64))])):V("",!0),t("div",{class:"scroller-wrapper",onDragover:o[4]||(o[4]=_((...i)=>s(ye)&&s(ye)(...i),["stop","prevent"]))},[h(t("div",{class:"drag-mask",onDrop:_(Wt,["stop","prevent"]),onDragleave:o[1]||(o[1]=_((...i)=>s($e)&&s($e)(...i),["stop","prevent"]))},r(e.$t("release_to_send_files")),545),[[go,s(rt)]]),g.value.length>0?(n(),k(s(Fo),{key:0,class:"scroller","data-key":"id","data-sources":g.value,"estimate-size":80},{item:u(({index:i,item:a})=>[t("section",{class:Io(["file-item selectable-card",{selected:s(w).includes(a.id),selecting:s(x).includes(a.id)}]),onClick:_(d=>s(j)(d,a,i,()=>{Bt(a)}),["stop"]),onMouseover:d=>s(J)(d,i)},[t("div",ss,[s(x).includes(a.id)?(n(),l("md-checkbox",{key:0,class:"checkbox","touch-target":"wrapper",onClick:_(d=>s(D)(d,a,i),["stop"]),checked:s(nt)},null,8,as)):(n(),l("md-checkbox",{key:1,class:"checkbox","touch-target":"wrapper",onClick:_(d=>s(D)(d,a,i),["stop"]),checked:s(w).includes(a.id)},null,8,ls)),t("span",is,[p(eo,{id:i+1,raw:a},null,8,["id","raw"])])]),t("div",{class:"image",onClick:d=>Nt(d,a)},[a.isDir?(n(),l("img",rs)):(n(),l($,{key:1},[ve.value.includes(a.id)?(n(),l("img",ds)):!me.value.includes(a.id)&&a.fileId?(n(),l("img",{key:1,class:"image-thumb",src:s(Do)(a.fileId,"&w=50&h=50"),onError:d=>st(a.id)},null,40,us)):a.extension?(n(),l("img",{key:2,src:`/ficons/${a.extension}.svg`,class:"svg",onError:d=>at(a.id)},null,40,_s)):(n(),l("img",ps))],64))],8,cs),t("div",hs,r(a.name),1),t("div",ms,[a.isDir?(n(),l("span",vs,r(e.$t("x_items",a.children)),1)):(n(),l("span",fs,r(s(F)(a.size)),1)),h((n(),l("span",null,[_e(r(s(Vo)(a.updatedAt)),1)])),[[f,s(So)(a.updatedAt)]])]),t("div",ks,[a.isDir?(n(),l($,{key:0},[h((n(),k(m,{class:"sm",onClick:_(d=>s(gt)(a.path),["stop"])},{icon:u(()=>[p(re)]),_:2},1032,["onClick"])),[[f,e.$t("download")]]),p(H,null,{content:u(d=>[t("md-menu-item",{onClick:_(B=>Ee(d,a.path),["stop"])},[t("div",ys,r(e.$t("upload_files")),1)],8,gs),t("md-menu-item",{onClick:_(B=>Le(d,a.path),["stop"])},[t("div",bs,r(e.$t("upload_folder")),1)],8,$s)]),default:u(()=>[h((n(),k(m,{class:"sm"},{icon:u(()=>[p(ze)]),_:1})),[[f,e.$t("upload")]])]),_:2},1024)],64)):h((n(),k(m,{key:1,class:"sm",onClick:_(d=>s(oe)(a.path),["stop"])},{icon:u(()=>[p(re)]),_:2},1032,["onClick"])),[[f,e.$t("download")]]),h((n(),k(m,{class:"sm",onClick:_(d=>Gt(a),["stop"])},{icon:u(()=>[p(q)]),_:2},1032,["onClick"])),[[f,e.$t("delete")]]),p(H,null,{content:u(()=>[t("section",ws,[t("div",Cs,[t("div",Ts,r(e.$t("path")),1),t("div",qs,r(a.path),1)])])]),default:u(()=>[h((n(),k(m,{class:"sm"},{icon:u(()=>[p(to)]),_:1})),[[f,e.$t("info")]])]),_:2},1024),p(H,null,{content:u(d=>[t("md-menu-item",{onClick:_(B=>Rt(d,a),["stop"])},[t("div",Ds,r(e.$t("duplicate")),1)],8,Is),t("md-menu-item",{onClick:_(B=>xt(d,a),["stop"])},[t("div",Vs,r(e.$t("cut")),1)],8,Ss),t("md-menu-item",{onClick:_(B=>Ot(d,a),["stop"])},[t("div",Es,r(e.$t("copy")),1)],8,Fs),a.isDir&&s(qe)()?(n(),l("md-menu-item",{key:0,onClick:_(B=>Qt(d,a),["stop"])},[t("div",Bs,r(e.$t("paste")),1)],8,Ls)):V("",!0),t("md-menu-item",{onClick:_(B=>Pt(d,a),["stop"])},[t("div",Ms,r(e.$t("rename")),1)],8,Ns)]),default:u(()=>[h((n(),k(m,{class:"sm"},{icon:u(()=>[p(oo)]),_:1})),[[f,e.$t("actions")]])]),_:2},1024)])],42,ns)]),_:1},8,["data-sources"])):V("",!0),!s(ne)&&g.value.length===0?(n(),l("div",zs,r(e.$t(s(Eo)(s(ne),s(ge).permissions,"WRITE_EXTERNAL_STORAGE"))),1)):V("",!0),t("input",{ref_key:"fileInput",ref:Ct,style:{display:"none"},type:"file",multiple:"",onChange:o[2]||(o[2]=(...i)=>s(De)&&s(De)(...i))},null,544),t("input",{ref_key:"dirFileInput",ref:qt,style:{display:"none"},type:"file",multiple:"",webkitdirectory:"",mozdirectory:"",directory:"",onChange:o[3]||(o[3]=(...i)=>s(Se)&&s(Se)(...i))},null,544)],32)],64)}}}),Xs=et(Hs,[["__scopeId","data-v-ecafc752"]]);export{Xs as default};