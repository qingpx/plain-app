import{h as y,aF as k,g as K,C,Z as N,c3 as S}from"./index-B-S542RM.js";const D=c=>{const v=y(!1),n=y(!1),f=y(0),e=y([]),t=y(null),a=y([]),l=y(!1),r=s=>{s?v.value=c.value.every(u=>e.value.includes(u.id)):(v.value=!1,n.value=!1)},i=s=>{const u=Math.min(t.value,s),o=Math.max(t.value,s),g=c.value[t.value].id;return c.value.slice(u,o+1).map(m=>m.id).filter(m=>m!==g)},h=(s,u)=>{if(t.value!==null&&t.value!==u&&a.value.length>0){if(l.value)for(const o of a.value)e.value.includes(o)||e.value.push(o);else e.value=e.value.filter(o=>!a.value.includes(o));a.value=[],t.value=u,l.value=e.value.includes(s.id),r(l)}else d(!e.value.includes(s.id),s,u)},d=(s,u,o)=>{s?e.value.push(u.id):e.value=e.value.filter(g=>g!==u.id),t.value=o,l.value=s,r(s)},p=()=>{v.value=!0,e.value=c.value.map(s=>s.id)};return{realAllChecked:n,allChecked:v,toggleAllChecked:s=>{s.target.checked?p():(v.value=!1,n.value=!1,e.value=[])},selectAll:p,allCheckedAlertVisible:k(()=>v.value&&!n.value&&e.value.length<f.value),selectRealAll:()=>{n.value=!0},clearSelection:()=>{v.value=!1,n.value=!1,e.value=[],t.value=null,l.value=!1,a.value=[]},selectedIds:e,total:f,checked:k(()=>e.value.length>0),shouldSelect:l,shiftEffectingIds:a,toggleSelect:(s,u,o)=>{s.shiftKey?h(u,o):d(!e.value.includes(u.id),u,o)},handleItemClick(s,u,o,g=()=>{}){if(s.target.nodeName==="MD-CHECKBOX")return;const m=window.getSelection();if(!(m&&m.toString())){if(e.value.length===0){g(o);return}s.shiftKey?h(u,o):d(!e.value.includes(u.id),u,o)}},handleMouseOver(s,u){s.shiftKey?t.value!==null&&t.value!==u&&(a.value=i(u)):a.value=[]}}},P=(c,v)=>{const{t:n}=K();return{deleteItems:(f,e,t,a)=>{let l=a;if(!e){if(f.length===0){C(n("select_first"),"error");return}l=`ids:${f.join(",")}`}N(S,{gql:c,count:e?t:f.length,variables:()=>({query:l}),done:v})}}};function E(){const c=document.activeElement;return c&&(c.tagName==="INPUT"||c.tagName==="TEXTAREA"||c.tagName==="SELECT"||c.tagName==="MD-OUTLINED-TEXT-FIELD")}const A=(c,v,n,f,e,t,a)=>({keyDown:l=>{var h,d;if(document.querySelector("md-dialog[open]"))return;const r=(h=document.getElementsByClassName("scroll-content"))==null?void 0:h[0];l.shiftKey?r==null||r.style.setProperty("user-select","none"):r==null||r.style.removeProperty("user-select");const i=(d=document.getElementsByClassName("scroller"))==null?void 0:d[0];if(l.shiftKey?i==null||i.style.setProperty("user-select","none"):i==null||i.style.removeProperty("user-select"),(l.ctrlKey||l.metaKey)&&l.key==="a"&&!E()){l.preventDefault(),f();return}if(l.key==="Escape")e();else if(l.key==="ArrowLeft")n.value>1&&t(n.value-1);else if(l.key==="ArrowRight"){const p=Math.ceil(c.value/v);n.value<p&&t(n.value+1)}else(l.key==="Delete"||(l.ctrlKey||l.metaKey)&&l.key==="Backspace")&&a()},keyUp:l=>{var i;const r=(i=document.getElementsByClassName("scroll-content"))==null?void 0:i[0];r==null||r.style.removeProperty("user-select")}}),B=(c,v,n,f)=>({keyDown:e=>{var l,r;if(document.querySelector("md-dialog[open]"))return;const t=(l=document.getElementsByClassName("scroll-content"))==null?void 0:l[0];e.shiftKey?t==null||t.style.setProperty("user-select","none"):t==null||t.style.removeProperty("user-select");const a=(r=document.getElementsByClassName("scroller"))==null?void 0:r[0];if(e.shiftKey?a==null||a.style.setProperty("user-select","none"):a==null||a.style.removeProperty("user-select"),(e.ctrlKey||e.metaKey)&&e.key==="a"&&!E()){e.preventDefault(),v();return}e.key==="Escape"?n():(e.key==="Delete"||(e.ctrlKey||e.metaKey)&&e.key==="Backspace")&&f()},keyUp:e=>{var a;const t=(a=document.getElementsByClassName("scroll-content"))==null?void 0:a[0];t==null||t.style.removeProperty("user-select")}});export{A as a,P as b,B as c,D as u};