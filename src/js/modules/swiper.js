const breakpoint = window.matchMedia('(min-width: 1023px)')
const mainSwiper = document.querySelector('.swiper');
let mySwiper;

if (breakpoint.matches === true) {
  enableSwiper()
  
} else if (breakpoint.matches === false ) {
  if ( mySwiper !== undefined ) {
    mySwiper.destroy( true, true )
  } 
  mainSwiper.classList.add('swiper-scroll')

}
function enableSwiper  () {
  mySwiper = new Swiper('.swiper', {
    direction: 'vertical',
    loop: true,
    parallax: true,
    speed: 700,
    effect:'fade',
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
        // enabled: true,
        // watchOverflow:false
      },
      220: {
        // effect:false,
        // enabled: false,
      },
    },
  });
}


// window.addEventListener('resize', () => {
//   const widthBody = document.body.clientWidth;
//   if (widthBody > 1023) {
//     InitSwiper();
//   }
// });
// // InitSlider();
// function InitSwiper() {
//   const swiper = new Swiper('.swiper', {
//     direction: 'vertical',
//     loop: true,
//     parallax: true,
//     speed: 700,
//     effect:'fade',
//     mousewheel: {
//       sensitivity: 1,
//     },
//     keyboard: {
//       enabled: true,
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     breakpoints: {
//       1024: {
//         // effect:'fade',
//         enabled: true,
//         // watchOverflow:false
//       },
//       220: {
//         // effect:false,
//         enabled: false,
//       },
//     },
//   });
//   // if (window.matchMedia('(max-width: 1023px)').matches) {
//   //   swiper.destroy(true, true);
//   // }
// }




// const swiper = new Swiper('.swiper', {
//   direction: 'vertical',
//   loop: true,
//   parallax: true,
//   speed: 700,
//   effect:'fade',

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
//       // allowSlidePrev: true,
//       // allowSlideNext: true,
//       // effect:'fade',
//       enabled: true,
//       // watchOverflow:false
//     },
//     320: {
//       // allowSlidePrev: false,
//       // allowSlideNext: false,
//       // effect:false,
//       enabled: false,
//     },
//   },
// });

// if (window.matchMedia('(max-width: 1023px)').matches) {
//   swiper.destroy(true, true);
// }

// const mainSwiper = document.querySelector('.swiper');
// window.addEventListener('resize', addScrollBody);
// addScrollBody();

// function addScrollBody() {
//   // const pagination = document.querySelector('.swiper-pagination');
//   const widthBody = document.body.clientWidth;
//   // console.log(widthBody)
//   if (widthBody <= 1024) {
//     mainSwiper.classList.add('swiper-scroll');
//     // location.reload()
//     // pagination.classList.add('pagination-none')
//     // console.log(mainSwiper);
//   } else {
//     mainSwiper.classList.remove('swiper-scroll');
//     // pagination.classList.remove('pagination-none')
//   }
// }

// window.addEventListener('click', (e) => {
//   console.log(e.target)
// })


export default swiper;
