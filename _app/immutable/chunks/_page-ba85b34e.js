import{_ as i}from"./preload-helper-aa6bc0ce.js";async function s({fetch:o}){const t=await i(()=>import("./publications-7958073e.js"),["publications-7958073e.js","index-0d214d02.js"],import.meta.url),e=await(await o("/api/bio")).json(),a=await(await o("/api/news")).json();return{publications:t,bio:e,news:a}}const _=Object.freeze(Object.defineProperty({__proto__:null,load:s},Symbol.toStringTag,{value:"Module"}));export{_,s as l};
