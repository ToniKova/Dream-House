!function(){"use strict";const e=document.querySelector(".header__burger-btn"),t=document.querySelector(".burger"),o=document.querySelector("body");e.addEventListener("click",(()=>{e.classList.toggle("btn-active"),t.classList.toggle("burger-active"),t.classList.contains("burger-active")?o.classList.add("overflow"):o.classList.remove("overflow")}));const r=window.matchMedia("(min-width: 1023px)"),c=(document.querySelector(".swiper"),document.querySelector(".header")),s=document.querySelector(".header__top");let i;const l=document.querySelectorAll(".slide-two__count");function a(e){l.forEach((t=>{let o=parseInt(t.getAttribute("data-counter")),r=0,c=Math.floor(e/o),s=setInterval((()=>{r+=1,t.textContent=r,r===o&&clearInterval(s)}),c)}))}!0===r.matches?(i=new Swiper(".swiper",{direction:"vertical",loop:!0,parallax:!0,speed:700,keyboard:{enabled:!0},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{1024:{},220:{}}}),c.classList.remove("header-height"),i.on("slideChangeTransitionStart",(function(){1===i.realIndex&&a(1e3)}))):!1===r.matches&&(void 0!==i&&i.destroy(!0,!0),s.classList.add("header-blure"),c.classList.add("header-height"));let n=!1;window.addEventListener("scroll",(()=>{const e=window.scrollY;!n&&e>=470&&(a(2e3),n=!0,console.log(e))})),document.querySelector(".header__top"),window.addEventListener("scroll",(()=>{const e=window.scrollY;e>100&&console.log(e)}));const d=document.querySelectorAll(".slide-four__services-title-item"),u=document.querySelectorAll(".slide-four__fon-img"),m=document.querySelector(".slide-four__price"),v=document.querySelector(".slide-four__square-counter"),g=document.querySelectorAll(".slide-four__packege-info-item"),f=document.querySelector(".slide-four__progress-ring-circle");d.forEach((e=>{e.addEventListener("click",(()=>{let t=e,o=t.getAttribute("data-tab"),r=t.getAttribute("data-packege");console.log(r);let c=t.getAttribute("data-count"),s=document.querySelector(o);t.classList.contains("title-item-active")||(u.forEach((e=>{e.classList.remove("fon-img-active")})),d.forEach((e=>{e.classList.remove("title-item-active")})),g.forEach((e=>{e.classList.remove("description-active")})),s.classList.add("fon-img-active"),t.classList.add("title-item-active")),m.textContent=e.getAttribute("data-price"),function(e){const t=parseInt(e);let o=0,r=setInterval((()=>{o+=1,v.textContent=o,o===t&&clearInterval(r)}))}(c),function(e){const t=parseInt(e),o=f.r.baseVal.value,r=2*Math.PI*o,c=r-t/200*r;f.style.strokeDasharray=`${r} ${r}`,f.style.strokeDashoffset=c}(c),g.forEach((e=>{}))}))})),document.querySelector(".slide-four__services-title-item").click()}();