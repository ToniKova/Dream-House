const swipperSlideFive = document.querySelector('.slide-five__swiper')
const btnPrev = document.querySelector('.prev')
const btnNext = document.querySelector('.next')
const stepDots = document.querySelectorAll('.slide-five__circle-dot') 
const firstDot = document.querySelector('.slide-five__circle-dot')
const circleCounter = document.querySelector('.slide-five__circle-counter')

// Слайдер
if (swipperSlideFive) {
  let swiper = new Swiper(swipperSlideFive, {
    slideClass: 'slide-five__swiper-slide',
    wrapperClass: 'slide-five__swiper-wrapper',

    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
   
  })
}

// Активация первого активной точки
function activeFirstDot () {
  firstDot.classList.add('active-circle-bg')
  firstDot.classList.add('active-circle-dot')
}
activeFirstDot ()


function nextActiveDot () {
  firstDot.classList.remove('active-circle-dot')
  stepCounter ++
  circleCounter.textContent = stepCounter 
  stepDots.forEach((item, index) => {
    // const currentAttribute = item.getAttribute('data-step')
    if (index + 1 === stepCounter) {
      item.classList.add('active-circle-bg')
      item.classList.add('active-circle-dot')
    } else {
      item.classList.remove('active-circle-dot')
    }
  })
}

function prevActiveDots () {
  stepCounter --
  circleCounter.textContent = stepCounter 
  stepDots.forEach((item, index) => {
    // const currentAttribute = item.getAttribute('data-step')
    // const del = parseInt(currentAttribute - 1)
    if (stepCounter === index) {
      item.classList.remove('active-circle-bg')
      item.classList.remove('active-circle-dot')
      if (index < 2) {
        firstDot.classList.add('active-circle-dot')
      }
    } else if (index + 1 === stepCounter) {
      item.classList.add('active-circle-dot')
    } 

  })
}

// Индикатор шагов 
let stepCounter = 1 
circleCounter.textContent = stepCounter
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('next')) {
    nextActiveDot()
  } else if (e.target.classList.contains('prev')) {
    prevActiveDots()
  }
})


// btnNext.addEventListener('click', activeStepsDot)
// function activeStepsDot () {
//   stepCounter ++
 
//   stepDots.forEach(item => {
//     const dataStep = parseInt(item.getAttribute('data-step')) 
//     // console.log(dataStep)
//     if (dataStep === stepCounter) {
//       item.classList.add('active-circle-dot')
//       item.classList.add('active-circle-bg')
//     }
//   })
 
 
// }
// activeStepsDot()
