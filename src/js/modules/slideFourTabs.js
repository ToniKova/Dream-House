const tabTitle = document.querySelectorAll('.slide-four__services-title-item')
const tabImg = document.querySelectorAll('.slide-four__fon-img')
const price = document.querySelector('.slide-four__price')
const counter = document.querySelector('.slide-four__square-counter')
const tabDescription = document.querySelectorAll('.slide-four__packege-info-item')
const buttonInfo = document.querySelectorAll('.slide-four__packege-info-item-button')
const mobailPopUp = document.querySelector('.slide-four__package-info-wrapper')
const buttonClosePopUp = document.querySelector('.slide-four__package-button-close')
const circle = document.querySelector('.slide-four__progress-ring-circle')
// ================================================
function setProgress (dataCount) {
  const parsDataCount = parseInt(dataCount)
  const radius = circle.r.baseVal.value
  const circumference = 2 * Math.PI * radius
  // const offset =  parsDataCount / 200 * circumference
  const offset =  circumference - parsDataCount / 200 * circumference

  circle.style.strokeDasharray = `${circumference} ${circumference}`
  circle.style.strokeDashoffset = offset
}


// const circle = document.querySelector('slide-four__progress-ring-circle')
// const radius = circle.r.baseVal.value
// const circumference = 2 * Math.PI * radius
// console.log(radius)

// circle.style.strokeDasharray = `${circumference} ${circumference}`
// circle.style.strokeDashoffset = circumference

// function setProgress(percent) {
//   const offset = circumference - percent / 100 * circumference
//   circle.style.strokeDashoffset = offset
// }
// setProgress(50)


// ============================================================

// precent / 100 - circumference

// const circle = document.querySelector('.slide-four__progress-ring-circle')
// const radius = circle.r.baseVal.value
// const circumference = 2 * Math.PI * radius
// circle.style.strokeDasharray = ` ${circumference} ${circumference}`
// circle.style.strokeDashoffset = circumference

// function setProgress (present) {
//   const offset = circumference - present / 100 * circumference
//   circle.style.strokeDashoffset = offset
// }
// setProgress(80)



// =============================================
tabTitle.forEach(item => {
  item.addEventListener('click', () => {
    // Табы для картиок при нажатии на заголовки
    let currentTitle = item
    let currentDataTitle = currentTitle.getAttribute('data-tab')
    let currentPackegeData = currentTitle.getAttribute('data-packege')
    let currentCounter = currentTitle.getAttribute('data-count')
    let currentTabDescription = document.querySelector(currentPackegeData)
    let currentIdImg = document.querySelector(currentDataTitle)

    if (!currentTitle.classList.contains('title-item-active')) {
      tabImg.forEach(item => {
        item.classList.remove('fon-img-active')
      })
      tabTitle.forEach(item => {
        item.classList.remove('title-item-active')
      })
      tabDescription.forEach(item => {
        item.classList.remove('description-active')
      })

      currentIdImg.classList.add('fon-img-active')
      currentTitle.classList.add('title-item-active')
      currentTabDescription.classList.add('description-active')

    }

    price.textContent = item.getAttribute('data-price')
    startCounter(currentCounter)
    // ====================================================
    // Смена прогрессбара по нажатию на заголовки
    setProgress(currentCounter)

  })
}) 

function tabsInfoPackage () {
  
}


// Счетчик внутри прогрес бара
function startCounter (currentCounter) {
  const parsCounter = parseInt(currentCounter)
  let startCounter = 0
  // let duretion = Math.floor(parsCounter / spedCounter)
  let interval = setInterval(() => {
    startCounter += 1
    counter.textContent = startCounter
    if (startCounter === parsCounter) {
      clearInterval(interval)
    }
  })
}
//Кнопка закрытия поп-ап
buttonClosePopUp.addEventListener('click', () => {
  mobailPopUp.classList.remove('pop-up-active')
})


// поп-ап информации про пакет услуг ELIT/VIP/EXTRA
function showPopUp () {
  buttonInfo.forEach(item => {
    item.addEventListener('click', () => {
      let dataPackegaInfo = item.getAttribute('data-package-info')
      let currentTabDescription = document.querySelector(dataPackegaInfo)

      tabDescription.forEach(item => {
        item.classList.remove('description-active')
      })

      currentTabDescription.classList.add('description-active')
      mobailPopUp.classList.add('pop-up-active')
    })
  })
}
showPopUp()



const breakpoint = window.matchMedia('(min-width: 1023px)')
if (breakpoint.matches === false) {
  const oneItem = document.querySelector('.slide-four__services-title-item').click()
} else {
  const oneItem = document.querySelector('.slide-four__services-title-item').click()
}
// document.addEventListener('click', (e) => {
//   console.log(e.target)
// })
export default slidefourTabs 
