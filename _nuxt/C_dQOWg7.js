import{_ as j}from"./B3DRBV8T.js";import{_ as d}from"./DX7mc89L.js";import{f as p,o,c as i,a as n,F as f,r as h,b as a,w as k,t as l,d as y,_ as g,g as b,h as m,u}from"./C2pJ9zHW.js";import{u as _,q as x}from"./CYeGC1p9.js";import"./DVrLKYZf.js";const C={class:"text-slate-100 text-sm"},B={class:"list-disc list-inside pt-2 space-y-1"},D={class:"text-slate-500"},L=p({__name:"HomeBlog",props:{posts:{}},setup(r){return(s,t)=>{const c=d;return o(),i("div",C,[t[1]||(t[1]=n("h2",null," blog ",-1)),n("ol",B,[(o(!0),i(f,null,h(s.posts,e=>(o(),i("li",{key:e._id,class:"text-xs"},[a(c,{to:e._path,class:"hover:underline"},{default:k(()=>[n("span",D,l(e.dateCreated),1),t[0]||(t[0]=y()),n("span",null,l(e.title),1)]),_:2},1032,["to"])]))),128))])])}}}),V={class:"text-slate-100 text-sm"},S={class:"list-disc list-inside pt-2 space-y-1"},q={class:"text-slate-500"},A=p({__name:"HomeProjects",props:{posts:{}},setup(r){return(s,t)=>{const c=d;return o(),i("div",V,[t[1]||(t[1]=n("h2",null," projects ",-1)),n("ol",S,[(o(!0),i(f,null,h(s.posts,e=>(o(),i("li",{key:e._id,class:"text-xs"},[a(c,{to:e._path,class:"hover:underline"},{default:k(()=>[n("span",q,l(e.dateCreated),1),t[0]||(t[0]=y()),n("span",null,l(e.title),1)]),_:2},1032,["to"])]))),128))])])}}}),F={},P={class:"text-slate-100 text-sm"};function T(r,s){return o(),i("div",P,s[0]||(s[0]=[b('<h2> links </h2><ol class="list-disc list-inside pt-2 space-y-1"><li class="text-xs"><a href="https://discord.gg/TGSwDNVhsQ">discord</a></li><li class="text-xs"><a href="https://x.com/prefixsum">x.com/prefixsum</a></li><li class="text-xs"><a href="https://twitch.tv/prefixsum">twitch.tv/prefixsum</a></li><li class="text-xs"><a href="https://github.com/prefixsum">github.com/prefixsum</a></li><li class="text-xs"><a href="https://substack.com/@prefixsum">substack.com/@prefixsum</a></li></ol>',2)]))}const E=g(F,[["render",T]]),G={},M={class:"text-slate-100 text-sm"};function Q(r,s){return o(),i("div",M,s[0]||(s[0]=[b('<h2> more links </h2><ol class="list-disc list-inside pt-2 space-y-1"><li class="text-xs"><a href="https://tiktok.com/@prefixsum">tiktok.com/@prefixsum</a></li><li class="text-xs"><a href="https://soundcloud.com/prefixsum">soundcloud.com/prefixsum</a></li><li class="text-xs"><a href="https://pastebin.com/u/prefixsum">pastebin.com/u/prefixsum</a></li><li class="text-xs"><a href="https://reddit.com/user/prefixsum">reddit.com/user/prefixsum</a></li><li class="text-xs"><a href="https://producthunt.com/@prefixsum">producthunt.com/@prefixsum</a></li><li class="text-xs"><a href="https://steamcommunity.com/id/prefixsum">steamcommunity.com/id/prefixsum</a></li><li class="text-xs"><a href="https://news.ycombinator.com/user?id=prefixsum">news.ycombinator.com/user?id=prefixsum</a></li></ol>',2)]))}const z=g(G,[["render",Q]]),X=p({__name:"index",async setup(r){let s,t;const{data:c}=([s,t]=m(()=>_("blog-list",()=>x("/blog").find())),s=await s,t(),s),{data:e}=([s,t]=m(()=>_("projects-list",()=>x("/projects").find())),s=await s,t(),s);return(I,J)=>{const $=j,w=L,v=A,H=E,N=z;return o(),i("div",null,[a($,{class:"pt-5"}),a(w,{class:"pt-5",posts:u(c)},null,8,["posts"]),a(v,{class:"pt-5",posts:u(e)},null,8,["posts"]),a(H,{class:"pt-5"}),a(N,{class:"pt-5"})])}}});export{X as default};
