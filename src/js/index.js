
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  // loop: true,
  parallax: true,
  speed: 700,
  // mousewheel: {
  //   sensitivity: 1,
  // },

  keyboard: {
    enabled: true
  },


  // If we need pagination
  pagination: {
    el: '.header__pagination',
    clickable: true, 
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});





 // import swiper from "./modules/swiper";
// swiper()

// import mobileNav from './modules/mobile-nav.js';
// mobileNav();
// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'