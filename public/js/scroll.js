const navScrolling = document.querySelector('nav');
const body = document.body;

// Script to detect scrolling on the website and converting it to percentage
window.addEventListener('scroll', () => {
  let totalScrollHeight = body.scrollHeight - window.innerHeight;
  const scrollToPercent = totalScrollHeight / 100;

  const yOfScroll = (yScroll) => {
    return yScroll / scrollToPercent;
  };
  let scrolling = Math.floor(window.scrollY);
  let scroll = yOfScroll(scrolling);

  // Script to make the navigation bar disappear and reappear when scrolling up and down
  if (scroll > 0.5) {
    navScrolling.classList.remove('opacity');
    if (this.oldScroll > this.scrollY) {
      navScrolling.classList.add('showNav');
      navScrolling.classList.remove('hideNav');
    } else {
      navScrolling.classList.add('hideNav');
      navScrolling.classList.remove('showNav');
    }
    this.oldScroll = this.scrollY;
  } else {
    navScrolling.classList.add('opacity');
    navScrolling.classList.remove('showNav');
  }
});
