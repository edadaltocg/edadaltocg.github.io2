import{_ as i}from"./preload-helper-aa6bc0ce.js";const a=(o,e)=>{const t=o[e];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((n,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+e)))})};async function s({params:o}){const e=await a(Object.assign({"../1.md":()=>i(()=>import("./1-a94dd121.js"),["1-a94dd121.js","index-0d214d02.js"],import.meta.url)}),`../${o.slug}.md`),{title:t,date:n}=e.metadata;return{content:e.default,title:t,date:n}}const c=Object.freeze(Object.defineProperty({__proto__:null,load:s},Symbol.toStringTag,{value:"Module"}));export{c as _,s as l};