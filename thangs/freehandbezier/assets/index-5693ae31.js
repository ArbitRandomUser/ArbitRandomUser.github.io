(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();let a;async function A(){const e=await(await fetch("./outf.wasm")).arrayBuffer();a=(await WebAssembly.instantiate(e)).instance}A();const d=document.getElementById("mycanvas"),E=document.getElementById("mysvg"),u=d.getContext("2d");u.fillStyle="black";var f=!1,v=[],_=[];d.addEventListener("mousedown",function(t){f=!0,u.moveTo(t.x,t.y)});d.addEventListener("mousemove",function(t){f&&(u.lineTo(t.x,t.y),v.push(t.x),_.push(t.y),u.stroke())});d.addEventListener("mouseup",function(t){f=!1,u.stroke(),u.moveTo(t.x,t.y);let[e,r]=$(v,_);O(e,r),v=[],_=[]});d.addEventListener("mouseleave",function(t){f=!1});function l(t){const e=a.exports.malloc(t*8),r=new Float64Array(a.exports.memory.buffer,e,t);return[e,r]}function $(t,e){let r=t.slice(1,t.length-1);const[c,n]=l(r.length);n.set(r);let s=e.slice(1,e.length-1);const[i,b]=l(s.length);b.set(s);const[p,m]=l(4);m.set([t[0],e[0],t[t.length-1],e[e.length-1]]);const[g,h]=l(4);let o=m;h.set([o[0]*(1/3)+o[2]*(2/3),o[1]*(1/3)+o[3]*(2/3),o[1]*(1/3)+o[3]*(2/3),o[1]*(1/3)+o[3]*(2/3)]);const[N,w]=l(h.length);w.fill(0);const[y,x]=l(r.length);x.fill(0);const[P,L]=l(r.length);return L.fill(0),a.exports.learn(.1,2e3,r.length,c,i,p,g,y),a.exports.learn(.01,1e3,r.length,c,i,p,g,y),a.exports.learn(.001,1e3,r.length,c,i,p,g,y),[h,m]}function O(t,e){let r=document.createElementNS("http://www.w3.org/2000/svg","path");r.setAttribute("d",`M ${e[0]} ${e[1]} C ${t[0]} ${t[1]}, ${t[2]} ${t[3]} , ${e[2]} ${e[3]}`),r.setAttribute("stroke","red"),r.setAttribute("stroke-width",10),r.setAttribute("opacity",1),r.setAttribute("fill","none"),E.appendChild(r)}
