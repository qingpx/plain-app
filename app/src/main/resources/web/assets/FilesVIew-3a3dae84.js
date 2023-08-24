import{d as be,Y as ke,a1 as Ze,ac as et,o as r,T as M,x as B,b as l,g as s,f as p,u as tt,r as D,n as st,C as at,a4 as ot,p as nt,s as ce,a as lt,aW as it,ap as ct,aX as rt,aY as ut,aZ as dt,a_ as pt,a$ as mt,a2 as re,b0 as _t,G as ht,J as ft,K as vt,L as bt,c as u,e as w,F as k,w as ue,k as _,M as N,P as W,Q as kt,z as de,y as yt,b1 as pe,b2 as me,am as gt,j as S,S as Ct,l as V,a8 as Dt,b3 as wt,a0 as T,b4 as Vt,at as $t,b5 as xt,b6 as Ft,b7 as It,_ as St}from"./index-66bea2e9.js";import{_ as Tt}from"./download-rounded-19708eb3.js";import{_ as Mt}from"./delete-outline-rounded-182ee2de.js";import{_ as Bt}from"./Breadcrumb-731a6814.js";import{c as _e}from"./index-64929f64.js";import{g as he,M as Pt}from"./splitpanes.es-57df8e4f.js";import{n as Ut}from"./list-6498ebd9.js";import{_ as qt}from"./VModal.vuevuetypescriptsetuptruelang-091ab08d.js";import{t as At}from"./truncate-2f04ae7b.js";import{_ as fe}from"./EditValueModal.vuevuetypescriptsetuptruelang-8fdf5735.js";import"./stringToArray-243d75d5.js";import"./vee-validate.esm-18b68f3d.js";const Et=["disabled"],ve=be({__name:"DeleteFileConfirm",props:{onDone:{type:Function,required:!0},files:{type:Array,required:!0}},setup(P){const o=P,{mutate:$,loading:x,onDone:U}=ke({document:Ze`
    mutation DeleteFiles($paths: [String!]!) {
      deleteFiles(paths: $paths)
    }
  `,appApi:!0});function h(){$({paths:o.files.map(f=>f.path)})}return U(()=>{o.onDone(o.files),et()}),(f,F)=>{const m=qt;return r(),M(m,{class:"delete-modal",title:f.$t("confirm_to_delete_name",{name:s(At)(P.files.map(b=>b.name).join(", "),{length:200})})},{action:B(()=>[l("button",{type:"button",disabled:s(x),class:"btn",onClick:h},p(f.$t("delete")),9,Et)]),_:1},8,["title"])}}}),Rt={class:"v-toolbar"},zt={class:"right-actions"},Nt=["onClick","title"],Wt=["onClick","title"],Ht={class:"form-check mt-2 me-3 ms-3"},Lt={class:"form-check-label",for:"select-mode"},Gt={class:"form-check mt-2"},Ot={class:"form-check-label",for:"show-hidden"},Qt={class:"file-items"},jt=["onClick","onDblclick","onContextmenu"],Jt=["onUpdate:modelValue"],Kt=["src"],Xt={class:"title"},Yt={style:{"font-size":"0.75rem"}},Zt=["onContextmenu"],es={key:0,class:"no-files"},ts={key:0,class:"file-item-info"},ss=be({__name:"FilesVIew",setup(P){var ae,oe,ne,le;const{t:o}=tt(),$=D([]),x=st(),U=x.query,h=x.params.type,f=D(at(((ae=U.q)==null?void 0:ae.toString())??"")),F=ot(f.value),m=D(((oe=F.find(e=>e.name==="path"))==null?void 0:oe.value)??"");let b=((ne=F.find(e=>e.name==="dir"))==null?void 0:ne.value)??"";b||(((le=F.find(t=>t.name==="isDir"))==null?void 0:le.value)==="1"?b=m.value:b=m.value.substring(0,m.value.lastIndexOf("/")));const ye=D(b),y=D(!1),H=nt(),{app:v}=ce(lt());let q=v.value.internalStoragePath;h==="sdcard"?q=v.value.sdcardPath:h==="app"&&(q=v.value.externalFilesDir);const{loading:ge,panels:d,currentDir:A,refetch:L}=it(v,q,ye.value),{visible:Ce,index:De,view:we,hide:Ve}=ct(),{createPath:$e,createVariables:xe,createMutation:Fe}=rt(v,d),{renameValue:Ie,renamePath:Se,renameDone:Te,renameMutation:Me,renameVariables:Be}=ut(d),{internal:G,sdcard:O,refetch:E}=dt(),{onDeleted:Q}=xt(d,A,E),{downloadFile:j,downloadDir:Pe,downloadFiles:Ue}=Dt(v),{view:J}=Ft($,we),{selectedItem:I,select:qe}=pt(A,h,f,H),{canPaste:K,copy:X,cut:Ae,paste:R}=mt(L,E),{input:Ee,upload:Y,uploadChanged:Z}=re(),{input:Re,upload:ee,uploadChanged:te}=re(),{mutate:ze,onDone:Ne}=ke({document:_t,appApi:!0});Ne(e=>{Ue(e.data.setTempValue.key)});const z=()=>{const e=[];return d.value.forEach(t=>{t.items.forEach(a=>{a.checked&&e.push(a)})}),e},We=()=>{ze({key:wt(),value:JSON.stringify(z().map(e=>({path:e.path})))})},He=ht(()=>z().length>0),Le=()=>{T(ve,{files:z(),onDone:Q})},{fileShowHidden:g}=ce(H);m.value&&ft(()=>d.value.length,()=>{if(d.value.length>0&&m.value){const t=d.value[d.value.length-1].items.find(a=>a.path===m.value);t&&(I.value=t,m.value="")}});function Ge(){var e,t,a,i;return h==="sdcard"?`${o("sdcard")} (${o("storage_free_total",{free:V((e=O.value)==null?void 0:e.freeBytes),total:V((t=O.value)==null?void 0:t.totalBytes)})})`:h==="app"?o("app_name"):`${o("page_title.files")} (${o("storage_free_total",{free:V((a=G.value)==null?void 0:a.freeBytes),total:V((i=G.value)==null?void 0:i.totalBytes)})})`}function Oe(e,t){if(y.value){t.checked=!t.checked;return}qe(e,t)}function se(e){return pe(e.name)||me(e.name)||It(e.name)}function Qe(e,t){t.isDir||(se(t)?J(e.items,t):j(t.path))}function je(e,t){e.preventDefault();const a=[{label:o("create_folder"),onClick:()=>{$e.value=t,T(fe,{title:o("name"),placeholder:o("name"),mutation:Fe,getVariables:xe})}},{label:o("upload_files"),onClick:()=>{Y(t)}},{label:o("upload_folder"),onClick:()=>{ee(t)}}];K()&&a.push({label:o("paste"),onClick:()=>{R(t)}}),_e({x:e.x,y:e.y,items:a})}function Je(e,t,a){e.preventDefault();let i;a.isDir?i=[{label:o("upload_files"),onClick:()=>{Y(a.path)}},{label:o("upload_folder"),onClick:()=>{ee(a.path)}},{label:o("download"),onClick:()=>{Pe(a.path)}}]:(i=[],se(a)&&i.push({label:o("open"),onClick:()=>{J(t.items,a)}}),i.push({label:o("download"),onClick:()=>{j(a.path)}})),i.push({label:o("duplicate"),onClick:()=>{X(a),R(t.dir)}}),i.push({label:o("cut"),onClick:()=>{Ae(t,a)}}),i.push({label:o("copy"),onClick:()=>{X(a)}}),a.isDir&&K()&&i.push({label:o("paste"),onClick:()=>{R(a.path)}}),i=[...i,{label:o("rename"),onClick:()=>{Ie.value=a.name,Se.value=a.path,T(fe,{title:o("rename"),placeholder:o("name"),value:a.name,mutation:Me,getVariables:Be,done:Te})}},{label:o("delete"),onClick:()=>{T(ve,{files:[a],onDone:Q})}}],_e({x:e.x,y:e.y,items:i})}return vt(()=>{bt.on("upload_task_done",e=>{e.status==="done"&&setTimeout(()=>{L(e.dir),E()},1e3)})}),(e,t)=>{const a=Bt,i=Mt,Ke=Tt,Xe=Vt,Ye=$t;return r(),u(k,null,[l("div",Rt,[w(a,{current:Ge}),l("div",zt,[y.value&&s(He)?(r(),u(k,{key:0},[l("button",{type:"button",class:"btn btn-action",onClick:ue(Le,["stop"]),title:e.$t("delete")},[w(i,{class:"bi"})],8,Nt),l("button",{type:"button",class:"btn btn-action",onClick:ue(We,["stop"]),title:e.$t("download")},[w(Ke,{class:"bi"})],8,Wt)],64)):_("",!0),l("div",Ht,[N(l("input",{class:"form-check-input","onUpdate:modelValue":t[0]||(t[0]=c=>y.value=c),id:"select-mode",type:"checkbox"},null,512),[[W,y.value]]),l("label",Lt,p(e.$t("select_mode")),1)]),l("div",Gt,[N(l("input",{class:"form-check-input","onUpdate:modelValue":t[1]||(t[1]=c=>kt(g)?g.value=c:null),id:"show-hidden",type:"checkbox"},null,512),[[W,s(g)]]),l("label",Ot,p(e.$t("show_hidden")),1)])])]),w(s(Pt),{class:"panel-container"},{default:B(()=>[(r(!0),u(k,null,de(s(d),c=>(r(),M(s(he),{key:c.dir},{default:B(()=>[l("div",Qt,[(r(!0),u(k,null,de(c.items,n=>{var ie;return r(),u(k,{key:n.path},[!n.name.startsWith(".")||s(g)?(r(),u("div",{key:0,class:yt(["file-item",{active:(s(A)+"/").startsWith(n.path+"/")||((ie=s(I))==null?void 0:ie.path)===n.path}]),onClick:C=>Oe(c,n),onDblclick:C=>Qe(c,n),onContextmenu:C=>Je(C,c,n)},[y.value?N((r(),u("input",{key:0,class:"form-check-input","onUpdate:modelValue":C=>n.checked=C,type:"checkbox"},null,8,Jt)),[[W,n.checked]]):_("",!0),n.isDir?(r(),M(Xe,{key:1,class:"bi"})):_("",!0),s(pe)(n.name)||s(me)(n.name)?(r(),u("img",{key:2,src:s(gt)(n.fileId)+"&w=50&h=50",width:"50",height:"50"},null,8,Kt)):_("",!0),l("div",Xt,[S(p(n.name)+" ",1),l("div",Yt,[S(p(s(Ct)(n.updatedAt)),1),n.isDir?_("",!0):(r(),u(k,{key:0},[S(", "+p(s(V)(n.size)),1)],64))])])],42,jt)):_("",!0)],64)}),128)),l("div",{class:"empty",onContextmenu:n=>je(n,c.dir)},[c.items.filter(n=>!n.name.startsWith(".")||s(g)).length===0?(r(),u("div",es,p(e.$t("no_files")),1)):_("",!0)],40,Zt)])]),_:2},1024))),128)),s(d).length===0?(r(),M(s(he),{key:0,class:"no-data-placeholder"},{default:B(()=>[S(p(e.$t(s(Ut)(s(ge),s(v).permissions,"WRITE_EXTERNAL_STORAGE"))),1)]),_:1})):_("",!0)]),_:1}),s(I)?(r(),u("div",ts,p(e.$t("path"))+": "+p(s(I).path),1)):_("",!0),w(Ye,{visible:s(Ce),index:s(De),sources:$.value,onHide:s(Ve)},null,8,["visible","index","sources","onHide"]),l("input",{ref_key:"fileInput",ref:Ee,style:{display:"none"},type:"file",multiple:"",onChange:t[2]||(t[2]=(...c)=>s(Z)&&s(Z)(...c))},null,544),l("input",{ref_key:"dirFileInput",ref:Re,style:{display:"none"},type:"file",multiple:"",webkitdirectory:"",mozdirectory:"",directory:"",onChange:t[3]||(t[3]=(...c)=>s(te)&&s(te)(...c))},null,544)],64)}}});const hs=St(ss,[["__scopeId","data-v-3136639c"]]);export{hs as default};