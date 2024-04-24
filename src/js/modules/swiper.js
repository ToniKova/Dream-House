const breakpoint = window.matchMedia('(min-width: 1023px)')
const mainSwiper = document.querySelector('.swiper');
const headerHeight = document.querySelector('.header')
const headerTop = document.querySelector('.header__top')
let mySwiper;
const count = document.querySelectorAll('.slide-two__count')
const speedCountDesktop = 1000
const speedMobail = 2000

if (breakpoint.matches === true) {
  enableSwiper()
  headerHeight.classList.remove('header-height')
  mySwiper.on('slideChangeTransitionStart', function () {
    if (mySwiper.realIndex  === 1) {
      counterNumber(speedCountDesktop)
    }
  });

} else if (breakpoint.matches === false ) {
  if ( mySwiper !== undefined ) {
    mySwiper.destroy( true, true )
  } 
  headerTop.classList.add('header-blure')
  headerHeight.classList.add('header-height')
  // mainSwiper.classList.add('swiper-scroll')
  // headerTop
  // mainSwiper.classList.add('swiper-destroy')
}
function enableSwiper  () {
  mySwiper = new Swiper('.swiper', {
    direction: 'vertical',
    loop: true,
    parallax: true,
    speed: 700,
    // effect:'fade',
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

function counterNumber (speed) {
  count.forEach(item => {
    let findDataCount = parseInt(item.getAttribute('data-counter'))
    let startInterval = 0
    let duration = Math.floor(speed / findDataCount)
    let interval = setInterval(() => {
      startInterval += 1
      item.textContent = startInterval
      if (startInterval === findDataCount) {
        clearInterval(interval)
      }
    },duration)
  })
}

// ====================================================================
const height = 470
let check = false
window.addEventListener('scroll', () => {
  const pixelsScrolled = window.scrollY;
  if (!check && pixelsScrolled >= height) {
    counterNumber(speedMobail)
    check = true
    console.log(pixelsScrolled)
  } 
});















// window.addEventListener('resize', () => {
//   const widthBody = document.body.clientWidth;
//   if (widthBody > 1023) {
    
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
