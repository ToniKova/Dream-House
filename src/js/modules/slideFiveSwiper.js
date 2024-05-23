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
    simulateTouch: false,
    // nested: true,
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
   
  })
}
// ========================================================
// Настройка SVG круга для анимации
const ringCircleActive = document.querySelector('.slide-five__progress-ring-circle')
const pathLength = ringCircleActive.getTotalLength();
let stepCounter = 1
let stepCountertwo = 0


ringCircleActive.style.strokeDasharray = pathLength;
ringCircleActive.style.strokeDashoffset = pathLength;

// функция для установки прогресса
function setProgress (percent) {
  const offset = pathLength - (percent / 100) * pathLength;
  ringCircleActive.style.strokeDashoffset = offset;
}
function updateProgressBar () {
  const progressPercentage = (stepCountertwo / 6 ) * 100;
  setProgress(progressPercentage)

}

// ==============================================================
// Активация первой активной точки
function activeFirstDot () {
  firstDot.classList.add('active-circle-bg')
  firstDot.classList.add('active-circle-dot')
}
activeFirstDot ()

// Индикатор шагов 
// let stepCounter = 1 
circleCounter.textContent = stepCounter
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('next')) {
    nextActiveDot()
    updateProgressBar()
  } else if (e.target.classList.contains('prev')) {
    prevActiveDots()
    updateProgressBar()

  }
})

function nextActiveDot () {
  firstDot.classList.remove('active-circle-dot')
  stepCounter ++
  stepCountertwo ++
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
  stepCountertwo --
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

