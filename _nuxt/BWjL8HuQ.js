const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BMkkpKwV.js","./BCVA034M.js","./Cqi1n0xY.js","./DYh_BzYG.js","./C-v3KzvZ.js"])))=>i.map(i=>d[i]);
import{h as f,u as m}from"./DYh_BzYG.js";import{q as v,w as c,e as l,s as d,j as g,a as y,u as h}from"./Cqi1n0xY.js";import{j as _,E as w,G as C,H as P,I as $,f as x,J as N,k as E,p as j,s as p}from"./BCVA034M.js";import{_ as T}from"./DmM-6Ycr.js";const S=async t=>{const{content:e}=_().public;typeof(t==null?void 0:t.params)!="function"&&(t=v(t));const n=t.params(),o=e.experimental.stripQueryParameters?c(`/navigation/${`${f(n)}.${e.integrity}`}/${l(n)}.json`):c(`/navigation/${f(n)}.${e.integrity}.json`);if(d())return(await w(()=>import("./BMkkpKwV.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(s=>s.generateNavigation))(n);const a=await $fetch(o,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:g(n),previewToken:m().getPreviewToken()}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a},b="$s";function D(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,o]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(o!==void 0&&typeof o!="function")throw new Error("[nuxt] [useState] init must be a function: "+o);const a=b+n,r=C(),s=P(r.payload.state,a);if(s.value===void 0&&o){const i=o();if($(i))return r.payload.state[a]=i,i;s.value=i}return s}const R=x({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=N(t),n=E(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!n.value&&D("dd-navigation").value){const{navigation:a}=y();return{navigation:a}}const{data:o}=await h(`content-navigation-${f(n.value)}`,()=>S(n.value));return{navigation:o}},render(t){const e=j(),{navigation:n}=t,o=s=>p(T,{to:s._path},()=>s.title),a=(s,i)=>p("ul",i?{"data-level":i}:null,s.map(u=>u.children?p("li",null,[o(u),a(u.children,i+1)]):p("li",null,o(u)))),r=s=>a(s,0);return e!=null&&e.default?e.default({navigation:n,...this.$attrs}):r(n)}}),Q=R;export{Q as default};
