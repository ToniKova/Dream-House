// const count = document.querySelectorAll('.slide-two__count')
// const speed = 5000
// const slide = document.querySelectorAll('.swiper-slide')
// let indexSlide;
// slide.forEach(item => {
//   if (parseInt(item.getAttribute('data-swiper-slide-index')) === 1 ) {
//     indexSlide = item
//   }
// })
// console.log(indexSlide)
// if (indexSlide.classList.contains('swiper-slide-active')) {
//   console.log(1)
// }



// count.forEach(item => {
//   let findDataCount = parseInt(item.getAttribute('data-counter'))
//   let startInterval = 0
//   let duration = Math.floor(speed / findDataCount)
//   let interval = setInterval(() => {
//     startInterval += 1
//     item.textContent = startInterval
//     if (startInterval === findDataCount) {
//       clearInterval(interval)
//     }
//   },duration)
// })


export default slideTwoCounter

