(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))h(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&h(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function h(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();let a;async function _(){const t=await(await fetch("./outf.wasm")).arrayBuffer();a=(await WebAssembly.instantiate(t)).instance}_();const c=document.getElementById("mycanvas"),b=document.getElementById("mysvg"),o=c.getContext("2d"),T=document.getElementById("refreshcanvas"),x=document.getElementById("refreshsvg");o.fillStyle="#55555520";o.fillRect(0,0,c.width,c.height);o.fillStyle="black";var l=!1,d=[],f=[];T.addEventListener("mousedown",function(e){o.fillStyle="#55555520",o.clearRect(0,0,o.canvas.width,o.canvas.height),o.fillRect(0,0,c.width,c.height),o.fillStyle="black",o.beginPath()});x.addEventListener("mousedown",function(e){b.innerHTML=""});c.addEventListener("mousedown",function(e){l=!0,o.moveTo(e.x,e.y)});c.addEventListener("touchstart",function(e){e.preventDefault(),l=!0,o.moveTo(e.touches[0].clientX,e.touches[0].clientY)});c.addEventListener("mousemove",function(e){e.preventDefault(),l&&(o.lineTo(e.x,e.y),d.push(e.x),f.push(e.y),o.stroke())});c.addEventListener("touchmove",function(e){e.preventDefault(),l&&(o.lineTo(e.changedTouches[0].clientX,e.changedTouches[0].clientY),d.push(e.changedTouches[0].clientX),f.push(e.changedTouches[0].clientY),o.stroke())});c.addEventListener("mouseup",function(e){l=!1,o.stroke(),o.moveTo(e.x,e.y);let[t,n]=w(d,f);E(t,n),a.exports.freeall(),d=[],f=[]});c.addEventListener("touchend",function(e){e.preventDefault(),l=!1,o.stroke(),o.moveTo(e.changedTouches[0].clientX,e.changedTouches[0].clientY);let[t,n]=w(d,f);E(t,n),a.exports.freeall(),d=[],f=[]});c.addEventListener("mouseleave",function(e){l=!1});c.addEventListener("touchcancel",function(e){e.preventDefault(),l=!1});function p(e){const t=a.exports.malloc(e*8),n=new Float64Array(a.exports.memory.buffer,t,e);return[t,n]}function w(e,t){let n=e.slice(1,e.length-1);const[h,r]=p(n.length);r.set(n);let s=t.slice(1,t.length-1);const[u,L]=p(s.length);L.set(s);const[v,m]=p(8);m.set([e[0],t[0],e[e.length-1],t[t.length-1]]);const[g,y]=p(8);let i=m;return y.set([i[0]*(1/3)+i[2]*(2/3),i[1]*(1/3)+i[3]*(2/3),i[0]*(2/3)+i[2]*(1/3),i[1]*(2/3)+i[3]*(1/3)]),a.exports.learn(.1,1e3,n.length,h,u,v,g),a.exports.learn(.01,1e3,n.length,h,u,v,g),[y,m]}function E(e,t){let n=document.createElementNS("http://www.w3.org/2000/svg","path");n.setAttribute("d",`M ${t[0]} ${t[1]} C ${e[0]} ${e[1]}, ${e[2]} ${e[3]} , ${t[2]} ${t[3]}`),n.setAttribute("stroke","red"),n.setAttribute("stroke-width",10),n.setAttribute("opacity",1),n.setAttribute("fill","none"),b.appendChild(n)}