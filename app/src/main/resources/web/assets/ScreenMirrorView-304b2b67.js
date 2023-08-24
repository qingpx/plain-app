import{_ as E}from"./Breadcrumb-731a6814.js";import{o as r,c as n,b as s,d as H,u as A,r as d,K as B,L as N,Y as b,bj as Q,i as x,t as m,bk as G,bl as T,e as M,g as i,f as v,k as c,j,a9 as F,aa as K,_ as U}from"./index-66bea2e9.js";const W="/assets/screen-mirror-permission-e9e07af8.png",Y={xmlns:"http://www.w3.org/2000/svg",viewBox:"176.31 -11.19 346.88 581.88"},J=s("path",{d:"M470.49 0H229.51a41.901 41.901 0 0 0-29.547 12.277 41.898 41.898 0 0 0-12.277 29.547v476.35a41.901 41.901 0 0 0 12.277 29.547 41.898 41.898 0 0 0 29.547 12.277h240.98a41.901 41.901 0 0 0 29.547-12.277 41.898 41.898 0 0 0 12.277-29.547V41.824a41.901 41.901 0 0 0-12.277-29.547A41.898 41.898 0 0 0 470.49 0zm33.25 518.18a33.334 33.334 0 0 1-9.766 23.484 33.335 33.335 0 0 1-23.484 9.766H229.51a33.334 33.334 0 0 1-23.484-9.766 33.335 33.335 0 0 1-9.765-23.484V41.83a33.333 33.333 0 0 1 9.828-23.371 33.32 33.32 0 0 1 23.422-9.703h240.98a33.334 33.334 0 0 1 23.484 9.765 33.335 33.335 0 0 1 9.765 23.484z"},null,-1),O=s("path",{d:"M317.62 46.812h64.75c2.418 0 4.375-1.957 4.375-4.375s-1.957-4.375-4.375-4.375h-64.75c-2.418 0-4.375 1.957-4.375 4.375s1.957 4.375 4.375 4.375zM364.7 192.5a16.8 16.8 0 0 0-14.7-8.75 16.8 16.8 0 0 0-14.698 8.75l-91 157.5a16.453 16.453 0 0 0 0 16.977 16.584 16.584 0 0 0 6.101 6.386 16.653 16.653 0 0 0 8.512 2.364h182.09a16.626 16.626 0 0 0 14.7-8.75 16.803 16.803 0 0 0 0-16.977zm83.562 170.36a8.224 8.224 0 0 1-7.262 4.2H258.91a8.229 8.229 0 0 1-7.176-4.2 8.753 8.753 0 0 1 0-8.75l91-157.5a8.748 8.748 0 0 1 7.262-4.113 8.757 8.757 0 0 1 7.262 4.199l91 157.5a8.75 8.75 0 0 1 0 8.84z"},null,-1),P=s("path",{d:"M350 221.55a4.288 4.288 0 0 0-4.29 4.285v66.238a4.375 4.375 0 0 0 8.75 0v-66.238a4.286 4.286 0 0 0-4.46-4.285zm0 91.26a4.289 4.289 0 0 0-4.29 4.29v17.061a4.375 4.375 0 0 0 8.75 0V317.1a4.286 4.286 0 0 0-4.46-4.29z"},null,-1),R=[J,O,P];function X(l,_){return r(),n("svg",Y,R)}const Z={render:X},S=l=>(F("data-v-794889f2"),l=l(),K(),l),ee={class:"page-container container"},se={class:"main"},te={class:"v-toolbar"},re={class:"right-actions"},ne=["disabled"],oe={key:0,class:"loading"},ae=S(()=>s("div",{class:"loader"},null,-1)),ie=[ae],ce={key:1,class:"request-permission"},le=S(()=>s("img",{src:W},null,-1)),ue=["innerHTML"],_e={key:2,class:"request-permission-failed"},de=["src"],ve=H({__name:"ScreenMirrorView",setup(l){let _;const{t:p}=A(),t=d(""),o=d(0),a=d(!1),h=d();B(()=>{N.on("screen_mirrorring",async e=>{t.value=e,a.value=!1,o.value=0,clearInterval(_)})});const{mutate:y,loading:I,onDone:k,onError:$}=b({document:Q,appApi:!0}),{loading:w,refetch:pe}=x({handle:(e,u)=>{u?m(p(u),"error"):e.screenMirrorImage?t.value=e.screenMirrorImage:g()},document:G,appApi:!0}),V=()=>{var e;(e=h.value)==null||e.requestFullscreen({navigationUI:"show"})},g=()=>{a.value=!1,y()};$(e=>{m(p(e.message)),a.value=!0}),k(()=>{o.value=30,_=setInterval(()=>{o.value--,o.value<=0&&(a.value=!0,clearInterval(_))},1e3)});const{mutate:f,loading:L,onDone:z,onError:q}=b({document:T,appApi:!0});return q(e=>{m(p(e.message))}),z(()=>{a.value=!0,t.value=""}),(e,u)=>{const C=E;return r(),n("div",ee,[s("div",se,[s("div",te,[M(C,{current:()=>e.$t("screen_mirror")},null,8,["current"]),s("div",re,[t.value?(r(),n("button",{key:0,type:"button",class:"btn btn-action",disabled:i(L),onClick:u[0]||(u[0]=(...D)=>i(f)&&i(f)(...D))},v(e.$t("stop_mirror")),9,ne)):c("",!0),t.value?(r(),n("button",{key:1,type:"button",class:"btn btn-action",onClick:V},v(e.$t("fullscreen")),1)):c("",!0)])]),s("div",{ref_key:"container",ref:h,class:"panel-container"},[i(w)||i(I)?(r(),n("div",oe,ie)):c("",!0),o.value>0?(r(),n("div",ce,[le,s("div",{class:"text",innerHTML:e.$t("screen_mirror_request_permission",{seconds:o.value})},null,8,ue)])):c("",!0),a.value&&!t.value?(r(),n("div",_e,[M(i(Z)),j(" "+v(e.$t("screen_mirror_request_permission_failed"))+" ",1),s("button",{class:"btn",onClick:g},v(e.$t("try_again")),1)])):c("",!0),t.value?(r(),n("img",{key:3,src:t.value},null,8,de)):c("",!0)],512)])])}}});const ge=U(ve,[["__scopeId","data-v-794889f2"]]);export{ge as default};