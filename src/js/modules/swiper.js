export default swiper;


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  parallax: true,
  speed: 700,
  // effect: "fade",
  mousewheel: {
    sensitivity: 1,
  },
  keyboard: {
    enabled: true,
  },

  breakpoints: {
    1024: {
      // effect:'fade',
      enabled: true,
    },
    320: {
      // effect:false,
      enabled: false,
    },
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
const mainSwiper = document.querySelector('.swiper');
window.addEventListener('resize', addScrollBody);
addScrollBody()

function addScrollBody () {
  const widthBody = document.body.clientWidth;
  if (widthBody <= 1024) {
    mainSwiper.classList.add('swiper-scroll');
    console.log(mainSwiper);
  } else {
    mainSwiper.classList.remove('swiper-scroll');
  }
}

