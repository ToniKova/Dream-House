!function(){"use strict";const e=window.matchMedia("(min-width: 1023px)"),i=document.querySelector(".swiper");let t;!0===e.matches?t=new Swiper(".swiper",{direction:"vertical",loop:!0,parallax:!0,speed:700,effect:"fade",mousewheel:{sensitivity:1},keyboard:{enabled:!0},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{1024:{},220:{}}}):!1===e.matches&&(void 0!==t&&t.destroy(!0,!0),i.classList.add("swiper-scroll"))}();