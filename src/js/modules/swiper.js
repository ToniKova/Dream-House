export default swiper


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  parallax: true,
  speed: 700,
  // effect: 'fade',
    mousewheel: {
    sensitivity: 1,
  },
    keyboard: {
    enabled: true
  },




  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true, 
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});