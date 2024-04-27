const tabTitle = document.querySelectorAll('.slide-four__services-title-item')
const tabImg = document.querySelectorAll('.slide-four__fon-img')
const price = document.querySelector('.slide-four__price')
const counter = document.querySelector('.slide-four__square-counter')
const tabDescription = document.querySelectorAll('.slide-four__packege-info-item')
const spedCounter = 500
// ================================================
const circle = document.querySelector('.slide-four__progress-ring-circle')
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
    console.log(currentPackegeData)


    let currentCounter = currentTitle.getAttribute('data-count')
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
      
      // currentTabDescription.classList.add('description-active')
      currentIdImg.classList.add('fon-img-active')
      currentTitle.classList.add('title-item-active')
    }

    price.textContent = item.getAttribute('data-price')
    startCounter(currentCounter)
    // ====================================================
    // Смена прогрессбара по нажатию на заголовки
    setProgress(currentCounter)
    // setProgress(currentCounter)
    tab(currentDataTitle)
    // currentDataTitle

  })
}) 

function tab (attr) {
  tabDescription.forEach(item => {
    // let currentTabDescription = item.getAttribute(attr)
  })

  // console.log(`${attr} function`)
}


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

document.querySelector('.slide-four__services-title-item').click()

export default slidefourTabs 