import{_ as D}from"./Breadcrumb-754c867d.js";import{o as r,c as o,b as s,d as E,u as q,r as v,H as x,I as A,U as f,b8 as B,i as C,t as p,b9 as N,ba as Q,e as M,g as i,f as m,k as _,j as G,ak as T,al as j,_ as U}from"./index-79f9263f.js";const W="/assets/screen-mirror-permission-e9e07af8.png",F={xmlns:"http://www.w3.org/2000/svg",viewBox:"176.31 -11.19 346.88 581.88"},J=s("path",{d:"M470.49 0H229.51a41.901 41.901 0 0 0-29.547 12.277 41.898 41.898 0 0 0-12.277 29.547v476.35a41.901 41.901 0 0 0 12.277 29.547 41.898 41.898 0 0 0 29.547 12.277h240.98a41.901 41.901 0 0 0 29.547-12.277 41.898 41.898 0 0 0 12.277-29.547V41.824a41.901 41.901 0 0 0-12.277-29.547A41.898 41.898 0 0 0 470.49 0zm33.25 518.18a33.334 33.334 0 0 1-9.766 23.484 33.335 33.335 0 0 1-23.484 9.766H229.51a33.334 33.334 0 0 1-23.484-9.766 33.335 33.335 0 0 1-9.765-23.484V41.83a33.333 33.333 0 0 1 9.828-23.371 33.32 33.32 0 0 1 23.422-9.703h240.98a33.334 33.334 0 0 1 23.484 9.765 33.335 33.335 0 0 1 9.765 23.484z"},null,-1),K=s("path",{d:"M317.62 46.812h64.75c2.418 0 4.375-1.957 4.375-4.375s-1.957-4.375-4.375-4.375h-64.75c-2.418 0-4.375 1.957-4.375 4.375s1.957 4.375 4.375 4.375zM364.7 192.5a16.8 16.8 0 0 0-14.7-8.75 16.8 16.8 0 0 0-14.698 8.75l-91 157.5a16.453 16.453 0 0 0 0 16.977 16.584 16.584 0 0 0 6.101 6.386 16.653 16.653 0 0 0 8.512 2.364h182.09a16.626 16.626 0 0 0 14.7-8.75 16.803 16.803 0 0 0 0-16.977zm83.562 170.36a8.224 8.224 0 0 1-7.262 4.2H258.91a8.229 8.229 0 0 1-7.176-4.2 8.753 8.753 0 0 1 0-8.75l91-157.5a8.748 8.748 0 0 1 7.262-4.113 8.757 8.757 0 0 1 7.262 4.199l91 157.5a8.75 8.75 0 0 1 0 8.84z"},null,-1),O=s("path",{d:"M350 221.55a4.288 4.288 0 0 0-4.29 4.285v66.238a4.375 4.375 0 0 0 8.75 0v-66.238a4.286 4.286 0 0 0-4.46-4.285zm0 91.26a4.289 4.289 0 0 0-4.29 4.29v17.061a4.375 4.375 0 0 0 8.75 0V317.1a4.286 4.286 0 0 0-4.46-4.29z"},null,-1),P=[J,K,O];function R(c,d){return r(),o("svg",F,P)}const X={render:R},S=c=>(T("data-v-f475705c"),c=c(),j(),c),Y={class:"page-container container"},Z={class:"main"},ee={class:"v-toolbar"},se={class:"right-actions"},te=["disabled"],re={class:"panel-container"},oe={key:0,class:"loading"},ae=S(()=>s("div",{class:"loader"},null,-1)),ne=[ae],ie={key:1,class:"request-permission"},ce=S(()=>s("img",{src:W},null,-1)),le=["innerHTML"],_e={key:2,class:"request-permission-failed"},de=["src"],ue=E({__name:"ScreenMirrorView",setup(c){let d;const{t:u}=q(),t=v(""),a=v(0),n=v(!1);x(()=>{A.on("screen_mirrorring",async e=>{t.value=e,n.value=!1,a.value=0,clearInterval(d)})});const{mutate:b,loading:I,onDone:y,onError:k}=f({document:B,appApi:!0}),{loading:V,refetch:ve}=C({handle:(e,l)=>{l?p(u(l),"error"):e.screenMirrorImage?t.value=e.screenMirrorImage:h()},document:N,appApi:!0}),h=()=>{n.value=!1,b()};k(e=>{p(u(e.message)),n.value=!0}),y(()=>{a.value=30,d=setInterval(()=>{a.value--,a.value<=0&&(n.value=!0,clearInterval(d))},1e3)});const{mutate:g,loading:$,onDone:w,onError:L}=f({document:Q,appApi:!0});return L(e=>{p(u(e.message))}),w(()=>{n.value=!0,t.value=""}),(e,l)=>{const z=D;return r(),o("div",Y,[s("div",Z,[s("div",ee,[M(z,{current:()=>e.$t("screen_mirror")},null,8,["current"]),s("div",se,[t.value?(r(),o("button",{key:0,type:"button",class:"btn btn-action",disabled:i($),onClick:l[0]||(l[0]=(...H)=>i(g)&&i(g)(...H))},m(e.$t("stop_mirror")),9,te)):_("",!0)])]),s("div",re,[i(V)||i(I)?(r(),o("div",oe,ne)):_("",!0),a.value>0?(r(),o("div",ie,[ce,s("div",{class:"text",innerHTML:e.$t("screen_mirror_request_permission",{seconds:a.value})},null,8,le)])):_("",!0),n.value&&!t.value?(r(),o("div",_e,[M(i(X)),G(" "+m(e.$t("screen_mirror_request_permission_failed"))+" ",1),s("button",{class:"btn",onClick:h},m(e.$t("try_again")),1)])):_("",!0),t.value?(r(),o("img",{key:3,src:t.value},null,8,de)):_("",!0)])])])}}});const he=U(ue,[["__scopeId","data-v-f475705c"]]);export{he as default};