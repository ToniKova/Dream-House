function f1 () {
  if (window.innerWidth <= 1150) {
    if (swiper) {
      swiper.destroy()
    }
  } else {
    if (!swiper) {
      swiper = new Swiper('.swiper', {

      })
    }
  }
}



const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  // loop: true,
  parallax: true,
  speed: 700,
  effect: 'fade',
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
});

f1 ()
window.addEventListener('resize',f1 ())



