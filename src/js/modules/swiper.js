// import { render } from 'sass';

export default swiper;

// const windowWidth = window.innerWidth
// if (windowWidth > 1023) {
// }
// window.addEventListener('resize', () => {
//   const widthBody = document.body.clientWidth;
//   if (widthBody > 1023) {
//     funk();
//   }
// });
funk();
function funk() {
  // const swiper = new Swiper('.swiper', {
  //   direction: 'vertical',
  //   loop: true,
  //   parallax: true,
  //   speed: 700,
  //   mousewheel: {
  //     sensitivity: 1,
  //   },
  //   keyboard: {
  //     enabled: true,
  //   },
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //   },
  //   breakpoints: {
  //     1024: {
  //       // effect:'fade',
  //       enabled: true,
  //       // watchOverflow:false
  //     },
  //     220: {
  //       // effect:false,
  //       enabled: false,
  //     },
  //   },
  // });
}
const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  loop: true,
  parallax: true,
  speed: 700,

  mousewheel: {
    sensitivity: 1,
  },
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    1024: {
      // effect:'fade',
      enabled: true,
      // watchOverflow:false
    },
    320: {
      // effect:false,
      enabled: false,
    },
  },
});

// if (window.matchMedia('(max-width: 1023px)').matches) {
//   swiper.destroy(true, true);
// }

const mainSwiper = document.querySelector('.swiper');
window.addEventListener('resize', addScrollBody);
addScrollBody();

function addScrollBody() {
  // const pagination = document.querySelector('.swiper-pagination');
  const widthBody = document.body.clientWidth;
  // console.log(widthBody)
  if (widthBody <= 1024) {
    mainSwiper.classList.add('swiper-scroll');
    // location.reload()
    // pagination.classList.add('pagination-none')
    // console.log(mainSwiper);
  } else {
    mainSwiper.classList.remove('swiper-scroll');
    // pagination.classList.remove('pagination-none')
  }
}

// window.addEventListener('click', (e) => {
//   console.log(e.target)
// })
