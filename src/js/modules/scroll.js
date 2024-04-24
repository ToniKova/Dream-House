const headerTop = document.querySelector('.header__top');
window.addEventListener('scroll', () => {
  const pixelsScrolled = window.scrollY;
  if (pixelsScrolled > 100) {
    console.log(pixelsScrolled)
    // headerTop.classList.add('header-blure')
  } else {
    // headerTop.classList.remove('header-blure')
  }
});

export default scroll