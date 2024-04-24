
const burgerBtn = document.querySelector('.header__burger-btn');
const burgerMenu = document.querySelector('.burger')
const body = document.querySelector('body')

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('btn-active')
  burgerMenu.classList.toggle('burger-active')
  if (burgerMenu.classList.contains('burger-active')) {
    body.classList.add('overflow')
  } else {
    body.classList.remove('overflow')
  }
})
// navBtn.onclick = function () {
//   nav.classList.toggle('mobile-nav--open');
//   menuIcon.classList.toggle('nav-icon--active');
//   document.body.classList.toggle('no-scroll');
// };


export default burgerNav;

