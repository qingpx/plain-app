import{_ as d}from"./VModal.vuevuetypescriptsetuptruelang-091ab08d.js";import{d as r,Y as l,ac as c,o as m,T as u,x as _,b as f,g as y,f as b}from"./index-66bea2e9.js";const g=["disabled"],B=r({__name:"DeleteConfirm",props:{id:{type:String,default:"",required:!0},name:{type:String},gql:{type:Object,required:!0},typeName:{type:String,required:!0},appApi:{type:Boolean,default:!1},done:{type:Function},variables:{type:Function}},setup(a){const e=a,{mutate:n,loading:i,onDone:o}=l({document:e.gql,options:{update:t=>{e.typeName!=="Application"&&t.evict({id:t.identify({__typename:e.typeName,id:e.id})})}},appApi:e.appApi});function p(){n(e.variables?e.variables():{id:e.id})}return o(()=>{e.done&&e.done(),c()}),(t,q)=>{const s=d;return m(),u(s,{class:"delete-modal",size:"sm",title:t.$t("confirm_to_delete_name",{name:a.name})},{action:_(()=>[f("button",{type:"button",disabled:y(i),class:"btn",onClick:p},b(t.$t("delete")),9,g)]),_:1},8,["title"])}}});export{B as _};