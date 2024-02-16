export default castomSlider



const allSlide = document.querySelectorAll('.js-slide')
const btn = document.querySelector('.btn')

let indexSlide = 0
btn.addEventListener('click', () => {
  let index = indexSlide + 1
  if (index >= allSlide.length) {
    index = 0
  }
  showSlide(index)
})

const showSlide = (index) => {
  allSlide[indexSlide].classList.remove('active-slide')
  allSlide[index].classList.add('active-slide')
  indexSlide = index
}
showSlide(indexSlide)


